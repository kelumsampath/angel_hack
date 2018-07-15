<?php

use Phalcon\Http\Request;
use Phalcon\Mvc\Model\Query;
use Phalcon\Http\Response;

class LoginController extends ControllerBase
{
    public $users;

    public function onConstruct()
    {
        $this->view->disable();
    }

    public function initialize()
    {
        //if ($this->isLoggedIn()) {
          //  return $this->response->redirect('logged');
        //}
        $this->users = new Users();
    }

    public function indexAction(){
        $response = new Response();
        $random = new \Phalcon\Security\Random();

        $content_type = 'application/javascript; charset=ISO-8859-1';
        $status = 200;
        $description = 'OK';

        $status_header = 'HTTP/1.1 ' . $status . ' ' . $description;
        $response->setRawHeader($status_header);
        $response->setContentType($content_type, 'UTF-8');
        $response->setHeader('Access-Control-Allow-Origin', '*')
                ->setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE')
                ->setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Range, Content-Disposition, Content-Type, Authorization')
                ->setHeader('Access-Control-Allow-Credentials', 'true');
        $response->sendHeaders();

        if (!$this->request->isPost()) {
            return $this->response->redirect('login');
        }

        $data = $this->request->getJsonRawBody();

        $this->view->disable();
        $request = new Request();
        $d = new DateTime();
        $d->setTimezone(new DateTimeZone('Asia/Colombo'));

        // Access data
        $username = $data->username;

        $user = Users::findFirst([ 
            'username = :username:',
            'bind' => [
               'username' => $username,
            ]
        ]);
        
       // if($user!=null){
         //   echo json_encode(["state" =>false, "messege" =>  'User Already Registered']);
           // exit();
        //}

        if ($user) {
            if ($this->security->checkHash($data->password, $user->passwd))
            {   
                $d = new DateTime();
                $d->setTimezone(new DateTimeZone('Asia/Colombo'));
                $user->setLastLogin($d->format('Y-m-d H:i:s'));
                if($user->token==null){             
                    $cookietoken = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1YjMzYzY1ZWZmNzRhYzNmYThiZjI5NTEiLCJmdWxsbmFtZSI6ImtlbHVtIHNhbXBhdGgiLCJ1c2VybmFtZSI6ImtlbHVtIiwiZW1haWwiOiJra0BnbWFpbC5jb20iLCJwaG9uZW5vIjo3NzUyMjcxMTMsInBhc3N3b3JkIjoiJDJhJDEwJG1ybjIvUTBFN2dGaVZPRVdJcWhuVXVER0RUVURJaVN6WnNjRkJYRFA5WjhnWkRPLkdDalFlIiwiX192IjowLCJpYXQiOjE1MzE1ODE3NTUsImV4cCI6MTUzMTY2ODE1NX0.tYezGRb4BbpKyCPIi8Bn3z-nCdtUtKYeviHRG7GcXRo"; 
                    $user->setToken($cookietoken);
                } else {         
                    $cookietoken = $user->token;
                }
                $user->save();
                $this->session->set('AUTH_ID', $user->id);
                $this->session->set('AUTH_NAME', $user->username);
                $this->session->set('AUTH_EMAIL', $user->email);
                $this->session->set('AUTH_CREATED', $user->created);
                $this->session->set('AUTH_UPDATED', $user->modified);
                $this->session->set('IS_LOGIN', 1);
               
                $response->setContent(json_encode([
                     "state"=> true,
                    "token"=> $cookietoken,
                    "user"=> [
                        "id" =>  $user->id,
                        "fullname" =>  $user->fullname,
                        "username" =>  $user->username,
                        "email" =>  $user->email,
                        "phoneno" =>  $user->phoneno
                    ]
                ]));
                $response->send();
                exit();
                //return $this->response->redirect('dashboard');
            }
        } else {
            $this->security->hash(rand());
        }

        echo json_encode(["state" =>false, "msg" =>  'Invalid login']);
    }
}

