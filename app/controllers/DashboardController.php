<?php

use Phalcon\Http\Request;
use Phalcon\Mvc\Model\Query;
use Phalcon\Http\Response;

class DashboardController extends ControllerBase
{

    public function indexAction()
    {
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

        $this->view->disable();
        $this->authorized();
        $query = new Query(
            "SELECT * FROM Users WHERE Users.id=".$this->session->get('AUTH_ID'),
            $this->getDI()
        );
        
        // Execute the query returning a result if any
        $users = $query->execute();

        $data = [];

        foreach ($users as $user) {
            $data = [
                "id" => $user->id,
                "username" => $user->username, 
                "fullname" => $user->fullname,
                "phoneno" => $user->phoneno,
                "email" => $user->email,                
                "status" => $user->status,
                "created" => $user->created,
                "modified" => $user->modified,
                "last_login" => $user->last_login
            ];
        }

        $response->setContent(json_encode($data));
       $response->send();
       exit();
    }

    public function detailsAction()
    {
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

        $this->view->disable();
        $this->authorized();
        $query = new Query(
            "SELECT * FROM Lender WHERE Lender.username='".$this->session->get('AUTH_NAME')."'",
            $this->getDI()
        );
        
        // Execute the query returning a result if any
        $users = $query->execute();

        $data = [];

        foreach ($users as $user) {
            $data[] = [
                "id" => $user->id,
                "price" => $user->invamount, 
                "total" => $user->invamount + ($user->invamount*0.06*($user->invdur)/30),
                "getdate" => $user->created,
                "date" => $user->invdur." Days"
            ];
        }

        $response->setContent(json_encode($data));
       $response->send();
       exit();
    }

    public function getborowdetailsAction()
    {
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

        $this->view->disable();
        $this->authorized();
        $query = new Query(
            "SELECT * FROM Borrower WHERE Borrower.username='".$this->session->get('AUTH_NAME')."'",
            $this->getDI()
        );
        
        // Execute the query returning a result if any
        $users = $query->execute();

        $data = [];
        
        foreach ($users as $user) {
            $data[] = [
                "id" => $user->id,
                "price" => $user->loanamount, 
                "total" => $user->loanamount + ($user->loanamount*0.25*$user->loandur/30),
                "getdate" => $user->created,
                "date" => $user->loandur." Days"
            ];
        }

        $response->setContent(json_encode($data));
       $response->send();
       exit();
    }
}

