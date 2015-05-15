<?php

/**
 * LoginForm class.
 * LoginForm is the data structure for keeping
 * user login form data. It is used by the 'login' action of 'SiteController'.
 */
class LoginForm extends CFormModel
{
	public $username;
	public $password;
	public $rememberMe;	
	public $verifyCode;
	public $reverify;	

	private $_identity;

	/**
	 * Declares the validation rules.
	 * The rules state that username and password are required,
	 * and password needs to be authenticated.
	 */
	public function rules()
	{
		return array(
			// username and password are required
			array('username, password', 'required'),
			// rememberMe needs to be a boolean
			array('rememberMe', 'boolean'),
			// password needs to be authenticated
			array('password', 'authenticate'),
			//captcha
			//array('verifyCode', 'captcha', 'allowEmpty'=>!CCaptcha::checkRequirements(),'skipOnError'=>true),
			//
			//array('verifyCode', 'checkCaptcha'),
			//safe
			array('username, password, verifyCode, reverify','safe')
		);
	}

	/**
	 * Declares attribute labels.
	 */
	public function attributeLabels()
	{
		return array(
			'username' => 'Email',
			'rememberMe'=>'Remember me next time',
			'verifyCode'=>'Verification Code',			
		);
	}

	/**
	 * Authenticates the password.
	 * This is the 'authenticate' validator as declared in rules().
	 */
	public function authenticate($attribute,$params)
	{
		$this->_identity=new UserIdentity($this->username,$this->password);
		if(!$this->_identity->authenticate()){
			if(($this->_identity->errorCode == 1) or ($this->_identity->errorCode == 2))
                    $this->addErrors(array('username'=>'','password'=>Yii::t('zii','Incorrect username or password.')));
                elseif($this->_identity->errorCode == 3)
                    $this->addErrors(array('username'=>'','password'=>Yii::t('zii','Your account is deactivated. Please contact site administrator.')));
                elseif($this->_identity->errorCode == 4)
                    $this->addErrors(array('reverify'=>$this->username,'username'=>Yii::t('zii','Your email is not verfied yet. If you did not get the verification mail then contact site administrator @ '.Yii::app()->params['adminEmail'])));
                else
                    $this->addError('username',Yii::t('zii','Invalid Exception'));
		}
	}

	/**
	 * Logs in the user using the given username and password in the model.
	 * @return boolean whether login is successful
	 */
	public function login()
	{
		if($this->_identity===null)
		{
			$this->_identity=new UserIdentity($this->username,$this->password);
			$this->_identity->authenticate();
		}
		if($this->_identity->errorCode===UserIdentity::ERROR_NONE)
		{
			$duration=$this->rememberMe ? 3600*24*30 : 0; // 30 days
			Yii::app()->user->login($this->_identity,$duration);
			return true;
		}
		else
			return false;
	}

	public function checkCaptcha($attribute,$params)
	{
		if($this->verifyCode!=Yii::app()->session['security_code'])
			$this->addErrors(array('verifyCode'=>'Incorrect verification code.'));
		else
			unset(Yii::app()->session['security_code']);
	}
}
