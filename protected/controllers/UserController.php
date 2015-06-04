<?php

class UserController extends Controller
{
	/**
	 * @var string the default layout for the views. Defaults to '//layouts/column2', meaning
	 * using two-column layout. See 'protected/views/layouts/column2.php'.
	 */
	public $layout='main';
	
	/**
	 * Creates a new model.
	 * If creation is successful, the browser will be redirected to the 'view' page.
	 */
	public function actionSignup()
	{
		$this->containercls = 'nobackground';
		//echo CHtml::image(Yii::app()->acaptcha->create()); 
		if(Yii::app()->user->isGuest){
			$model=new User;
			$model->scenario = 'insert';
			// Uncomment the following line if AJAX validation is needed
			// $this->performAjaxValidation($model);
	
			if(isset($_POST['User'])){
				$salt = md5(uniqid(rand(), true));
				$_POST['User']['u_verkey'] = $salt;
				$model->attributes=$_POST['User'];
				$model->u_status = 1;	
				if($model->save()){
					$username = $model->u_first_name.' '.$model->u_last_name;
					$request = 	array('{verification_link}'=>$salt,'{username}'=>$username);
					if($this->sendEmail(1,$model->u_email,$request)){
						Yii::app()->user->setFlash('success','A verification link has been sent to your registered email address, Please verify to access your '.Yii::app()->params['title'].' account.');
					}else{
						Yii::app()->user->setFlash('error','Error in sending verification mail. Please contact site administrator.');
					}
					$this->redirect(array('/'));
				}
			}
			
			$this->render('signup',array(
				'model'=>$model,				
			));
		}else{
			$this->redirect(array('/dashboard'));
		}
	}

	/**
	 * Updates a particular model.
	 * If update is successful, the browser will be redirected to the 'view' page.
	 * @param integer $id the ID of the model to be updated
	 */
	public function actionProfile()
	{
		$this->tabs = true;
		$model=$this->loadModel(Yii::app()->user->id);
		$model->scenario = 'useredit';		
		// Uncomment the following line if AJAX validation is needed
		// $this->performAjaxValidation($model);
		if(isset($_POST['User']))
		{
			$model->attributes=$_POST['User'];
			if(isset($_POST['user_image']) && !empty($_POST['user_image'])){
				$oldimage = ($model->u_image!='')?$model->u_image:NULL;
				$model->u_image = $this->UploadImage($_POST['user_image'],'user',$oldimage);					
			}
			unset($model->u_last_login_date);
			unset($model->u_created);
			if($model->save())
			{
				Yii::app()->user->setFlash('success','Profile updated successfully.');
				$this->refresh();
			}else{
				Yii::app()->user->setFlash('error','Please verify all the fields.');
				
			}
		}
		$pro_type = Yii::app()->params['pro_type'];
		$organisation_type = Yii::app()->params['organisation_type'];

		$this->render('profile',array(
			'model'=>$model,
			'pro_type'=>$pro_type,
			'organisation_type'=>$organisation_type
		));
	}

	/**
	 * Deletes a particular model.
	 * If deletion is successful, the browser will be redirected to the 'admin' page.
	 * @param integer $id the ID of the model to be deleted
	 */
	public function actionDelete($id)
	{
		$this->loadModel($id)->delete();

		// if AJAX request (triggered by deletion via admin grid view), we should not redirect the browser
		if(!isset($_GET['ajax']))
			$this->redirect(isset($_POST['returnUrl']) ? $_POST['returnUrl'] : array('admin'));
	}

	/**
	 * Lists all models.
	 */
	public function actionIndex()
	{
		$dataProvider=new CActiveDataProvider('User');
		$this->render('index',array(
			'dataProvider'=>$dataProvider,
		));
	}

	/**
	 * Manages all models.
	 */
	public function actionAdmin()
	{
		$model=new User('search');
		$model->unsetAttributes();  // clear any default values
		if(isset($_GET['User']))
			$model->attributes=$_GET['User'];

		$this->render('admin',array(
			'model'=>$model,
		));
	}

	/**
	 * Returns the data model based on the primary key given in the GET variable.
	 * If the data model is not found, an HTTP exception will be raised.
	 * @param integer $id the ID of the model to be loaded
	 * @return User the loaded model
	 * @throws CHttpException
	 */
	public function loadModel($id)
	{
		$model=User::model()->findByPk($id);
		if($model===null)
			throw new CHttpException(404,'The requested page does not exist.');
		return $model;
	}

	/**
	 * Performs the AJAX validation.
	 * @param User $model the model to be validated
	 */
	protected function performAjaxValidation($model)
	{
		if(isset($_POST['ajax']))
		{
			echo CActiveForm::validate($model);
			Yii::app()->end();
		}
	}
	
	public function actionVerify($key){    	
    	$check = User::model()->find('u_verkey = :u_verkey',array(':u_verkey'=>$key));    	
    	if($check){    		
    		if($check->updateByPk($check->u_id,array('u_mail_verify'=>'1','u_verkey'=>''))){
    			Yii::app()->user->setFlash('popupmsg','Your account has been successfully verified, Please login to access your '.Yii::app()->params['title'].' account.');
    			$this->redirect(array('/'));
    		}
    	}else{
			Yii::app()->user->setFlash('popupmsg','Invalid or expired key code.');
			$this->redirect(array('/'));
		}
    }

    public function actionCaptcha($v=0){

		Yii::app()->acaptcha->create(array(),$v);
		Yii::app()->end();    	
    }

    public function actionResetpassword($key=NULL){    	    	
    	
		$check = User::model()->find('u_scrkey = :u_scrkey',array(':u_scrkey'=>$key));    			
		$check->scenario = 'resetpass';
		if($check){			
			if(isset($_POST['User'])){	
				
				$check->attributes = $_POST['User'];				
				$check->u_scrkey = "";	
				if($check->save()){
					Yii::app()->user->setFlash('popupmsg','Your password has been successfully reset.');
					$this->redirect(array("/"));
				}
			}
		}else{
			Yii::app()->user->setFlash('popupmsg','Invalid or expired key code.');			
			$this->redirect(array("/"));			
		}		
		$check->u_password = '';
		$this->render('resetpassword',array('model'=>$check));			
    }
    
    public function actionDashboard(){

    	$this->tabs = true;
    	$model = User::model()->findByPk(Yii::app()->user->id);    	

		$params = array('user'=>$model);

    	$this->render('dashboard',$params);
    }
    
    public function actionChangepassword(){
		$model=User::model()->findByPk(Yii::app()->user->id);
		$model->scenario = 'changepassword';
		if(isset($_POST['User'])){
			$model->attributes=$_POST['User'];			
			if($model->validate() && $model->save()){				
				Yii::app()->user->setFlash('success','Password updated successfully.');
				$this->redirect(array('dashboard'));
			}else{				
				$t = $model->getErrors();
								
				if(!empty($t)){
					Yii::app()->user->setFlash('error','Please validate all the fields.');
				}
				else
					Yii::app()->user->setFlash('error','Error in save, Please try again.');
			} 
		}
		$this->render('changepassword',array('model'=>$model));
	}
    /*
     * FOR UPLOADING IMAGES
     */
    
    public function actionReverify($email=NULL){
    	if($email){
    		$user = User::model()->find('u_email = :u_email AND u_mail_verify = 0',array(':u_email'=>$email));
    		if($user){
    			$salt = $user->u_verkey;
    			$username = $user->u_first_name.' '.$user->u_last_name;
				$request = 	array('{verification_link}'=>$salt,'{username}'=>$username);
				if($this->sendEmail(1,$user->u_email,$request)){
					Yii::app()->user->setFlash('popupmsg','A verification link has been sent to your email address, Please verify to access your '.Yii::app()->params['title'].' account.');
				}	
    		}else{
    			Yii::app()->user->setFlash('popupmsg','Invalid Request.');				    			
    		}
    	}else{
			Yii::app()->user->setFlash('popupmsg','Invalid Request.');
			
    	}    	
    	$this->redirect(array("/"));
    }

    public function actionForgotpassword(){
		$this->layout = '/layouts/login';
		$model = new ForgotPassword();		
		if(isset($_POST['ForgotPassword'])){
			$model->attributes = $_POST['ForgotPassword'];
			if($model->validate()){
				$user = User::model()->find('LOWER(u_email)=:email',array(':email'=>strtolower($model->username)));		        	
	        	$salt = md5(uniqid(rand(), true));		        	
	        	$username = $user->u_username;
				$request = 	array('{reset_link}'=>$salt,'{username}'=>$username);
				if($this->sendEmail(2,$user->u_email,$request)){						
					if($user->updateByPk($user->u_id,array('u_scrkey'=>$salt))){
						Yii::app()->user->setFlash('success','A link has been sent to your email address to reset the password.');
						$this->redirect(array('site/login'));
					}else{
						Yii::app()->user->setFlash('success','Error in setting the reset key.');
					}
				}
			}
		}
		$this->render('forgotpassword',array('model'=>$model));		
	}
}
