<?php

use Phalcon\Http\Request;
use Phalcon\Mvc\Model\Query;
use Phalcon\Http\Response;

class FormController extends ControllerBase
{
    public $users;
    public $borrowers;
    public $lenders;

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
        $this->borrowers = new Borrower();
        $this->lenders = new Lender();
    }

    public function indexAction()
    {
        echo "Unauthorized Access";
        exit();
    }

    public function loanregAction(){
        if (!$this->isLoggedIn()) {
            return $this->response->redirect('');
        }
        $response = new Response();

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
        
        $username = $this->session->get('AUTH_NAME');

        if (!$this->request->isPost()) {
            return $this->response->redirect('');
        }

        $data = $this->request->getJsonRawBody();

        $this->view->disable();
        $request = new Request();

        $user = Users::findFirst([ 
            'username = :username:',
            'bind' => [
               'username' => $username,
            ]
        ]);
        
        if($user==null){
            echo json_encode(["state" =>false, "messege" =>  'No user Found']);
            exit();
        }

        $id = $user->getId();

        $this->borrowers->save(
            [
                "username" => $username
            ],
            [
                "username"
                
            ]
        );

        $borrower = Borrower::findFirst([ 
            'id = :id:',
            'bind' => [
               'id' => $id,
            ]
        ]);
        // Store and check for errors
        if ($borrower!=null) {
            $borrower->setId($user->getId());
            $borrower->setPurpose($data->purpose);
            $borrower->setGender($data->gender);
            $borrower->setNic($data->nic);
            $borrower->setTpfixed($data->tpfixed);
            $borrower->setOtherincome($data->otherincome);
            $borrower->setBname($data->bname);
            $borrower->setBowner($data->bowner);
            $borrower->setRegno($data->regno);
            $borrower->setType($data->type);
            $borrower->setProfit($data->profit);
            $borrower->setBacc($data->bacc);
            $borrower->setBdetails($data->bdetails);
            $borrower->setBstart($data->bstart);
            $borrower->setRname($data->rname);
            $borrower->setRnic($data->rnic);
            $borrower->setRphone($data->rphone);
            $borrower->setRaddress($data->raddress);
            $borrower->setRincome($data->rincome);
            $borrower->setLoandur($data->loandur);
            $borrower->setLoanamount($data->loanamount);
            $borrower->save();
            
            $response->setContent(json_encode(["state" =>true, "msg" => 'Successfully Added!']));
            $response->send();
            exit();
        }
        echo json_encode(["state" =>false, "messege" => 'Failed']);
    }

    public function invregAction(){
        if (!$this->isLoggedIn()) {
            return $this->response->redirect('');
        }
        $response = new Response();

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
        
        $username = $this->session->get('AUTH_NAME');

        if (!$this->request->isPost()) {
            return $this->response->redirect('');
        }

        $data = $this->request->getJsonRawBody();

        $this->view->disable();
        $request = new Request();

        $user = Users::findFirst([ 
            'username = :username:',
            'bind' => [
               'username' => $username,
            ]
        ]);
        
        if($user==null){
            echo json_encode(["state" =>false, "messege" =>  'No user Found']);
            exit();
        }

        $id = $user->getId();
        $invamount = $data->invamount;
        $invdur = $data->invdur;
        $nic = $data->nic;
        $acc = $data->acc;
        $invmethod = $data->invmethod;

        $success = $this->lenders->save(
            [
                "username" => $username,
                "invamount" => $invamount,
                "invdur" => $invdur,
                "invmethod" => $invmethod,
                "nic" => $nic,
                "acc" => $acc
            ],
            [
                "username",
                "invamount",
                "invdur",
                "invmethod",
                "nic",
                "acc"
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

