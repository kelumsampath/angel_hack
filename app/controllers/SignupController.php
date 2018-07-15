<?php
use Phalcon\Http\Request;
use Phalcon\Mvc\Model\Query;
use Phalcon\Http\Response;

class SignupController extends ControllerBase
{
    public $users;

    public function onConstruct()
    {
        $this->view->disable();
    }

    public function initialize()
    {
    
    }

    public function indexAction()
    {
        $this->users = new Users();
        if (!$this->request->isPost()) {
            return $this->response->redirect('');
        }

        $data = $this->request->getJsonRawBody();
        $this->view->disable();
        $request = new Request();
        $d = new DateTime();
        $d->setTimezone(new DateTimeZone('Asia/Colombo'));

        // Access data
        $username = $data->username;
        $fullname = $data->fullname;
        $email = $data->email;
        $phoneno = $data->phoneno;
        $created = $d->format('Y-m-d H:i:s');
        $modified = $d->format('Y-m-d H:i:s');
        $status = 1;
        $password = $this->security->hash($data->password);

        $user = Users::findFirst([ 
            'username = :username:',
            'bind' => [
               'username' => $username,
            ]
        ]);
        
        if($user!=null){
            echo json_encode(["state" =>false, "messege" =>  'User Already Registered']);
            exit();
        }

        
        // Store and check for errors
        $success = $this->users->save(
            [
                "username" => $username,                
                "passwd" => $password,
                "fullname" => $fullname,
                "phoneno" => $phoneno,
                "email" => $email,                
                "status" => $status,
                "created" => $created,
                "modified" => $modified
            ],
            [
                "username",
                "passwd",
                "fullname",
                "phoneno",
                "email",
                "status",
                "created",
                "modified"
                
            ]
        );

        if ($success) {
            echo json_encode(["state" =>true, "msg" => 'Successfully Added!']);
            exit();
        } else {
            echo json_encode(["state" =>false, "messege" => 'Some Inputs Missing']);
        }
    }
}

