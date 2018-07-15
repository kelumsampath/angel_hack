<?php

use Phalcon\Validation;
use Phalcon\Validation\Validator\Email as EmailValidator;

class Users extends \Phalcon\Mvc\Model
{

    /**
     *
     * @var integer
     */
    protected $id;

    /**
     *
     * @var string
     */
    protected $username;

    /**
     *
     * @var string
     */
    protected $passwd;

    /**
     *
     * @var string
     */
    protected $fullname;

    /**
     *
     * @var string
     */
    protected $phoneno;

    /**
     *
     * @var string
     */
    protected $email;

    /**
     *
     * @var string
     */
    protected $last_login;

    /**
     *
     * @var integer
     */
    protected $status;

    /**
     *
     * @var string
     */
    protected $created;

    /**
     *
     * @var string
     */
    protected $modified;

    /**
     *
     * @var string
     */
    protected $token;

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
     * Method to set the value of field username
     *
     * @param string $username
     * @return $this
     */
    public function setUsername($username)
    {
        $this->username = $username;

        return $this;
    }

    /**
     * Method to set the value of field passwd
     *
     * @param string $passwd
     * @return $this
     */
    public function setPasswd($passwd)
    {
        $this->passwd = $passwd;

        return $this;
    }

    /**
     * Method to set the value of field fullname
     *
     * @param string $fullname
     * @return $this
     */
    public function setFullname($fullname)
    {
        $this->fullname = $fullname;

        return $this;
    }

    /**
     * Method to set the value of field phoneno
     *
     * @param string $phoneno
     * @return $this
     */
    public function setPhoneno($phoneno)
    {
        $this->phoneno = $phoneno;

        return $this;
    }

    /**
     * Method to set the value of field email
     *
     * @param string $email
     * @return $this
     */
    public function setEmail($email)
    {
        $this->email = $email;

        return $this;
    }

    /**
     * Method to set the value of field last_login
     *
     * @param string $last_login
     * @return $this
     */
    public function setLastLogin($last_login)
    {
        $this->last_login = $last_login;

        return $this;
    }

    /**
     * Method to set the value of field status
     *
     * @param integer $status
     * @return $this
     */
    public function setStatus($status)
    {
        $this->status = $status;

        return $this;
    }

    /**
     * Method to set the value of field created
     *
     * @param string $created
     * @return $this
     */
    public function setCreated($created)
    {
        $this->created = $created;

        return $this;
    }

    /**
     * Method to set the value of field modified
     *
     * @param string $modified
     * @return $this
     */
    public function setModified($modified)
    {
        $this->modified = $modified;

        return $this;
    }

    /**
     * Method to set the value of field token
     *
     * @param string $token
     * @return $this
     */
    public function setToken($token)
    {
        $this->token = $token;

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
     * Returns the value of field username
     *
     * @return string
     */
    public function getUsername()
    {
        return $this->username;
    }

    /**
     * Returns the value of field passwd
     *
     * @return string
     */
    public function getPasswd()
    {
        return $this->passwd;
    }

    /**
     * Returns the value of field fullname
     *
     * @return string
     */
    public function getFullname()
    {
        return $this->fullname;
    }

    /**
     * Returns the value of field phoneno
     *
     * @return string
     */
    public function getPhoneno()
    {
        return $this->phoneno;
    }

    /**
     * Returns the value of field email
     *
     * @return string
     */
    public function getEmail()
    {
        return $this->email;
    }

    /**
     * Returns the value of field last_login
     *
     * @return string
     */
    public function getLastLogin()
    {
        return $this->last_login;
    }

    /**
     * Returns the value of field status
     *
     * @return integer
     */
    public function getStatus()
    {
        return $this->status;
    }

    /**
     * Returns the value of field created
     *
     * @return string
     */
    public function getCreated()
    {
        return $this->created;
    }

    /**
     * Returns the value of field modified
     *
     * @return string
     */
    public function getModified()
    {
        return $this->modified;
    }

    /**
     * Returns the value of field token
     *
     * @return string
     */
    public function getToken()
    {
        return $this->token;
    }

    /**
     * Method to set the value of field loanamount
     *
     * @param integer $loanamount
     * @return $this
     */
    public function setLoanamount($loanamount)
    {
        $this->loanamount = $loanamount;

        return $this;
    }

    /**
     * Method to set the value of field purpose
     *
     * @param string $purpose
     * @return $this
     */
    public function setPurpose($purpose)
    {
        $this->purpose = $purpose;

        return $this;
    }

    /**
     * Method to set the value of field gender
     *
     * @param string $gender
     * @return $this
     */
    public function setGender($gender)
    {
        $this->gender = $gender;

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
     * Method to set the value of field tpfixed
     *
     * @param integer $tpfixed
     * @return $this
     */
    public function setTpfixed($tpfixed)
    {
        $this->tpfixed = $tpfixed;

        return $this;
    }

    /**
     * Method to set the value of field otherincome
     *
     * @param string $otherincome
     * @return $this
     */
    public function setOtherincome($otherincome)
    {
        $this->otherincome = $otherincome;

        return $this;
    }

    /**
     * Method to set the value of field bname
     *
     * @param string $bname
     * @return $this
     */
    public function setBname($bname)
    {
        $this->bname = $bname;

        return $this;
    }

    /**
     * Method to set the value of field bowner
     *
     * @param string $bowner
     * @return $this
     */
    public function setBowner($bowner)
    {
        $this->bowner = $bowner;

        return $this;
    }

    /**
     * Method to set the value of field regno
     *
     * @param string $regno
     * @return $this
     */
    public function setRegno($regno)
    {
        $this->regno = $regno;

        return $this;
    }

    /**
     * Method to set the value of field type
     *
     * @param string $type
     * @return $this
     */
    public function setType($type)
    {
        $this->type = $type;

        return $this;
    }

    /**
     * Method to set the value of field profit
     *
     * @param integer $profit
     * @return $this
     */
    public function setProfit($profit)
    {
        $this->profit = $profit;

        return $this;
    }

    /**
     * Method to set the value of field bacc
     *
     * @param integer $bacc
     * @return $this
     */
    public function setBacc($bacc)
    {
        $this->bacc = $bacc;

        return $this;
    }

    /**
     * Method to set the value of field bdetails
     *
     * @param string $bdetails
     * @return $this
     */
    public function setBdetails($bdetails)
    {
        $this->bdetails = $bdetails;

        return $this;
    }

    /**
     * Method to set the value of field bstart
     *
     * @param string $bstart
     * @return $this
     */
    public function setBstart($bstart)
    {
        $this->bstart = $bstart;

        return $this;
    }

    /**
     * Method to set the value of field rname
     *
     * @param string $rname
     * @return $this
     */
    public function setRname($rname)
    {
        $this->rname = $rname;

        return $this;
    }

    /**
     * Method to set the value of field rnic
     *
     * @param string $rnic
     * @return $this
     */
    public function setRnic($rnic)
    {
        $this->rnic = $rnic;

        return $this;
    }

    /**
     * Method to set the value of field rphone
     *
     * @param integer $rphone
     * @return $this
     */
    public function setRphone($rphone)
    {
        $this->rphone = $rphone;

        return $this;
    }

    /**
     * Method to set the value of field raddress
     *
     * @param string $raddress
     * @return $this
     */
    public function setRaddress($raddress)
    {
        $this->raddress = $raddress;

        return $this;
    }

    /**
     * Method to set the value of field rincome
     *
     * @param integer $rincome
     * @return $this
     */
    public function setRincome($rincome)
    {
        $this->rincome = $rincome;

        return $this;
    }

    /**
     * Method to set the value of field loandur
     *
     * @param integer $loandur
     * @return $this
     */
    public function setLoandur($loandur)
    {
        $this->loandur = $loandur;

        return $this;
    }

    /**
     * Returns the value of field loanamount
     *
     * @return integer
     */
    public function getLoanamount()
    {
        return $this->loanamount;
    }

    /**
     * Returns the value of field purpose
     *
     * @return string
     */
    public function getPurpose()
    {
        return $this->purpose;
    }

    /**
     * Returns the value of field gender
     *
     * @return string
     */
    public function getGender()
    {
        return $this->gender;
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
     * Returns the value of field tpfixed
     *
     * @return integer
     */
    public function getTpfixed()
    {
        return $this->tpfixed;
    }

    /**
     * Returns the value of field otherincome
     *
     * @return string
     */
    public function getOtherincome()
    {
        return $this->otherincome;
    }

    /**
     * Returns the value of field bname
     *
     * @return string
     */
    public function getBname()
    {
        return $this->bname;
    }

    /**
     * Returns the value of field bowner
     *
     * @return string
     */
    public function getBowner()
    {
        return $this->bowner;
    }

    /**
     * Returns the value of field regno
     *
     * @return string
     */
    public function getRegno()
    {
        return $this->regno;
    }

    /**
     * Returns the value of field type
     *
     * @return string
     */
    public function getType()
    {
        return $this->type;
    }

    /**
     * Returns the value of field profit
     *
     * @return integer
     */
    public function getProfit()
    {
        return $this->profit;
    }

    /**
     * Returns the value of field bacc
     *
     * @return integer
     */
    public function getBacc()
    {
        return $this->bacc;
    }

    /**
     * Returns the value of field bdetails
     *
     * @return string
     */
    public function getBdetails()
    {
        return $this->bdetails;
    }

    /**
     * Returns the value of field bstart
     *
     * @return string
     */
    public function getBstart()
    {
        return $this->bstart;
    }

    /**
     * Returns the value of field rname
     *
     * @return string
     */
    public function getRname()
    {
        return $this->rname;
    }

    /**
     * Returns the value of field rnic
     *
     * @return string
     */
    public function getRnic()
    {
        return $this->rnic;
    }

    /**
     * Returns the value of field rphone
     *
     * @return integer
     */
    public function getRphone()
    {
        return $this->rphone;
    }

    /**
     * Returns the value of field raddress
     *
     * @return string
     */
    public function getRaddress()
    {
        return $this->raddress;
    }

    /**
     * Returns the value of field rincome
     *
     * @return integer
     */
    public function getRincome()
    {
        return $this->rincome;
    }

    /**
     * Returns the value of field loandur
     *
     * @return integer
     */
    public function getLoandur()
    {
        return $this->loandur;
    }

    /**
     * Validations and business logic
     *
     * @return boolean
     */
    public function validation()
    {
        $validator = new Validation();

        $validator->add(
            'email',
            new EmailValidator(
                [
                    'model'   => $this,
                    'message' => 'Please enter a correct email address',
                ]
            )
        );

        return $this->validate($validator);
    }

    /**
     * Initialize method for model.
     */
    public function initialize()
    {
        $this->setSchema("angelhack");
        $this->setSource("users");
    }

    /**
     * Allows to query a set of records that match the specified conditions
     *
     * @param mixed $parameters
     * @return Users[]|Users|\Phalcon\Mvc\Model\ResultSetInterface
     */
    public static function find($parameters = null)
    {
        return parent::find($parameters);
    }

    /**
     * Allows to query the first record that match the specified conditions
     *
     * @param mixed $parameters
     * @return Users|\Phalcon\Mvc\Model\ResultInterface
     */
    public static function findFirst($parameters = null)
    {
        return parent::findFirst($parameters);
    }

    /**
     * Returns table name mapped in the model.
     *
     * @return string
     */
    public function getSource()
    {
        return 'users';
    }

}
