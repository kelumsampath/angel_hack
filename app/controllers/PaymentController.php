<?php

class PaymentController extends ControllerBase
{

    public function indexAction()
    {
        //$this->authorized();
    }

    /**
     * User Logout
     */
    public function returnAction()
    {
        if (!$this->isLoggedIn()) {
            return $this->response->redirect('');
        }
        echo "ok";
       exit();
    }

    public function cancelAction()
    {
        if (!$this->isLoggedIn()) {
            return $this->response->redirect('');
        }
       echo "cancel";
       exit();
    }

    public function notifyAction()
    {
        if (!$this->isLoggedIn()) {
            return $this->response->redirect('');
        }
        echo "notify";
       exit();
    }
}

