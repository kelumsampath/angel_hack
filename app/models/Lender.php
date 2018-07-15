<?php

use Phalcon\Validation;

class Lender extends \Phalcon\Mvc\Model
{

    /**
     *
     * @var integer
     */
    protected $id;

    /**
     *
     * @var integer
     */
    protected $invamount;

    /**
     *
     * @var integer
     */
    protected $invdur;

    /**
     *
     * @var string
     */
    protected $invmethod;

    /**
     *
     * @var string
     */
    protected $nic;

    /**
     *
     * @var integer
     */
    protected $acc;

    /**
     * Method to set the value of field id
     *
     * @param integer $id
     * @return $this
     */
    public function setId($id)
    {
        $this->id = $id;

        return $this;
    }

    /**
     * Method to set the value of field invamount
     *
     * @param integer $invamount
     * @return $this
     */
    public function setInvamount($invamount)
    {
        $this->invamount = $invamount;

        return $this;
    }

    /**
     * Method to set the value of field invdur
     *
     * @param integer $invdur
     * @return $this
     */
    public function setInvdur($invdur)
    {
        $this->invdur = $invdur;

        return $this;
    }

    /**
     * Method to set the value of field invmethod
     *
     * @param string $invmethod
     * @return $this
     */
    public function setInvmethod($invmethod)
    {
        $this->invmethod = $invmethod;

        return $this;
    }

    /**
     * Method to set the value of field nic
     *
     * @param string $nic
     * @return $this
     */
    public function setNic($nic)
    {
        $this->nic = $nic;

        return $this;
    }

    /**
     * Method to set the value of field acc
     *
     * @param integer $acc
     * @return $this
     */
    public function setAcc($acc)
    {
        $this->acc = $acc;

        return $this;
    }

    /**
     * Returns the value of field id
     *
     * @return integer
     */
    public function getId()
    {
        return $this->id;
    }

    /**
     * Returns the value of field invamount
     *
     * @return integer
     */
    public function getInvamount()
    {
        return $this->invamount;
    }

    /**
     * Returns the value of field invdur
     *
     * @return integer
     */
    public function getInvdur()
    {
        return $this->invdur;
    }

    /**
     * Returns the value of field invmethod
     *
     * @return string
     */
    public function getInvmethod()
    {
        return $this->invmethod;
    }

    /**
     * Returns the value of field nic
     *
     * @return string
     */
    public function getNic()
    {
        return $this->nic;
    }

    /**
     * Returns the value of field acc
     *
     * @return integer
     */
    public function getAcc()
    {
        return $this->acc;
    }

    /**
     * Initialize method for model.
     */
    public function initialize()
    {
        $this->setSchema("angelhack");
        $this->setSource("lender");
        $this->belongsTo('id', '\Users', 'id', ['alias' => 'Users']);
    }

    /**
     * Returns table name mapped in the model.
     *
     * @return string
     */
    public function getSource()
    {
        return 'lender';
    }

    /**
     * Allows to query a set of records that match the specified conditions
     *
     * @param mixed $parameters
     * @return Lender[]|Lender|\Phalcon\Mvc\Model\ResultSetInterface
     */
    public static function find($parameters = null)
    {
        return parent::find($parameters);
    }

    /**
     * Allows to query the first record that match the specified conditions
     *
     * @param mixed $parameters
     * @return Lender|\Phalcon\Mvc\Model\ResultInterface
     */
    public static function findFirst($parameters = null)
    {
        return parent::findFirst($parameters);
    }

}
