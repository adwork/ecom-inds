<?php
class FabricsController extends Controller
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
	public function actionCreate()
	{
		$model=new Fabrics;

		// Uncomment the following line if AJAX validation is needed
		// $this->performAjaxValidation($model);

		if(isset($_POST['Fabrics']))
		{
			$model->attributes=$_POST['Fabrics'];
			$image_name = $this->imageUpload($_FILES['Fabrics']['name']['fab_image'],$_FILES['Fabrics']['tmp_name']['fab_image'],'fabrics');
			if(!empty($image_name))
				$model->fab_image = $image_name;
			if($model->save()){
				$dir_name 			= Yii::getPathOfAlias('webroot').'/storage/fabrics/';
				$fabFolder 			= $dir_name.$model->fab_id;
				$fabFolderBack 		= $dir_name.$model->fab_id."/back";
				$fabFolderCollor 	= $dir_name.$model->fab_id."/collar";
				$fabFolderCuff 		= $dir_name.$model->fab_id."/cuff";
				$fabFolderFront 	= $dir_name.$model->fab_id."/front";
				$fabFolderPlacket 	= $dir_name.$model->fab_id."/placket";
				$fabFolderPocket 	= $dir_name.$model->fab_id."/pocket";
				$fabFolderRear 		= $dir_name.$model->fab_id."/rear";
				$fabFolderSleeve 	= $dir_name.$model->fab_id."/sleeve";
				$fabFolderYoke 		= $dir_name.$model->fab_id."/yoke";
				if(!empty($model->fab_for)){
					if($model->fab_for==1){
						mkdir($fabFolder, 0777);
						mkdir($fabFolderBack, 0777);
						mkdir($fabFolderCollor, 0777);
						mkdir($fabFolderCuff, 0777);
						mkdir($fabFolderFront, 0777);
						mkdir($fabFolderPlacket, 0777);
						mkdir($fabFolderPocket, 0777);
						mkdir($fabFolderRear, 0777);
						mkdir($fabFolderSleeve, 0777);
						mkdir($fabFolderYoke, 0777);
					}else if($model->fab_for==2){
						mkdir($fabFolderFront, 0777);
						mkdir($fabFolderRear, 0777);					
					}else if($model->fab_for==3){
						//for blazer
					}
				}
				$this->redirect(array('index'));
			}
		}

		$this->render('create',array(
			'model'=>$model,
		));
	}

	/**
	 * Updates a particular model.
	 * If update is successful, the browser will be redirected to the 'view' page.
	 * @param integer $id the ID of the model to be updated
	 */
	public function actionUpdate($id)
	{
		$model=$this->loadModel($id);

		// Uncomment the following line if AJAX validation is needed
		// $this->performAjaxValidation($model);

		if(isset($_POST['Fabrics']))
		{
			$model->attributes=$_POST['Fabrics'];
			$image_name = $this->imageUpload($_FILES['Fabrics']['name']['fab_image'],$_FILES['Fabrics']['tmp_name']['fab_image'],'fabrics');
			if(!empty($image_name))
				$model->fab_image = $image_name;
			if($model->save())
				$this->redirect(array('index'));
		}

		$this->render('update',array(
			'model'=>$model,
		));
	}

	/**
	 * Deletes a particular model.
	 * If deletion is successful, the browser will be redirected to the 'admin' page.
	 * @param integer $id the ID of the model to be deleted
	 */
	public function actionDelete($id)
	{
		if(Yii::app()->request->isPostRequest)
		{
			// we only allow deletion via POST request
			$this->loadModel($id)->delete();

			// if AJAX request (triggered by deletion via admin grid view), we should not redirect the browser
			if(!isset($_GET['ajax']))
				$this->redirect(isset($_POST['returnUrl']) ? $_POST['returnUrl'] : array('admin'));
		}
		else
			throw new CHttpException(400,'Invalid request. Please do not repeat this request again.');
	}

	/**
	 * Lists all models.
	 */
	public function actionIndex()
	{
		$model = new Fabrics;
		$this->render('index',array(
			'model'=>$model,
		));
	}

	public function actionAddbuttons($id){
		if(empty($id))
			$this->redirect(array('index'));
		$buttons = Buttons::model()->findAll();
		$model = $this->loadModel($id);

		$criteria=new CDbCriteria;	
		$criteria->condition = 'fbt_fabric_id=:fbt_fabric_id';
		$criteria->params = array(':fbt_fabric_id' => $id);

		if(!empty($_POST)){
			if(!empty($_POST['buttonids'])){
				FabricButtons::model()->deleteAll($criteria);
				foreach ($_POST['buttonids'] as $key => $buttonId) {
					$fabButtonModel = new FabricButtons;
					$fabButtonModel->fbt_fabric_id = $id;
					$fabButtonModel->fbt_button_id = $buttonId;
					$fabButtonModel->save();
				}
			}
			Yii::app()->user->setFlash('success','Assigned successfully.');	
			$this->redirect(array('addbuttons','id' => $id));
		}
		
		$fabriButtonsData = FabricButtons::model()->findAll($criteria);
		$fabriButtons = CHtml::listData($fabriButtonsData,'fbt_id','fbt_button_id');
		$this->render('addbuttons',array('buttons' => $buttons,'model' => $model,'fabriButtons' => $fabriButtons));
	}
	/**
	 * Returns the data model based on the primary key given in the GET variable.
	 * If the data model is not found, an HTTP exception will be raised.
	 * @param integer the ID of the model to be loaded
	 */
	public function loadModel($id)
	{
		$model=Fabrics::model()->findByPk($id);
		if($model===null)
			throw new CHttpException(404,'The requested page does not exist.');
		return $model;
	}

	/**
	 * Performs the AJAX validation.
	 * @param CModel the model to be validated
	 */
	protected function performAjaxValidation($model)
	{
		if(isset($_POST['ajax']) && $_POST['ajax']==='fabrics-form')
		{
			echo CActiveForm::validate($model);
			Yii::app()->end();
		}
	}

	public function actionUploadcustomizeimages($id){
		$model=$this->loadModel($id);
		if(isset($_POST['Fabrics']))
		{
			$dir_name 			= 'fabrics/';
			$fabFolderBack 		= $dir_name.$model->fab_id."/back/";
			$fabFolderCollor 	= $dir_name.$model->fab_id."/collar/";
			$fabFolderCuff 		= $dir_name.$model->fab_id."/cuff/";
			$fabFolderFront 	= $dir_name.$model->fab_id."/front/";
			$fabFolderPlacket 	= $dir_name.$model->fab_id."/placket/";
			$fabFolderPocket 	= $dir_name.$model->fab_id."/pocket/";
			$fabFolderRear 		= $dir_name.$model->fab_id."/rear/";
			$fabFolderSleeve 	= $dir_name.$model->fab_id."/sleeve/";
			$fabFolderYoke 		= $dir_name.$model->fab_id."/yoke/";
			
			if(!empty($model->fab_for)){
				if($model->fab_for==1){ //for Shirt
					if(!empty($_FILES['Fabrics']['name']['fab_image'][1]))
						$this->imageUpload($_FILES['Fabrics']['name']['fab_image'][1],$_FILES['Fabrics']['tmp_name']['fab_image'][1],$fabFolderBack);
					if(!empty($_FILES['Fabrics']['name']['fab_image'][2]))
						$this->imageUpload($_FILES['Fabrics']['name']['fab_image'][2],$_FILES['Fabrics']['tmp_name']['fab_image'][2],$fabFolderCollor);
					if(!empty($_FILES['Fabrics']['name']['fab_image'][3]))
						$this->imageUpload($_FILES['Fabrics']['name']['fab_image'][3],$_FILES['Fabrics']['tmp_name']['fab_image'][3],$fabFolderCuff);
					if(!empty($_FILES['Fabrics']['name']['fab_image'][4]))
						$this->imageUpload($_FILES['Fabrics']['name']['fab_image'][4],$_FILES['Fabrics']['tmp_name']['fab_image'][4],$fabFolderFront);
					if(!empty($_FILES['Fabrics']['name']['fab_image'][5]))
						$this->imageUpload($_FILES['Fabrics']['name']['fab_image'][5],$_FILES['Fabrics']['tmp_name']['fab_image'][5],$fabFolderPlacket);
					if(!empty($_FILES['Fabrics']['name']['fab_image'][6]))
						$this->imageUpload($_FILES['Fabrics']['name']['fab_image'][6],$_FILES['Fabrics']['tmp_name']['fab_image'][6],$fabFolderPocket);
					if(!empty($_FILES['Fabrics']['name']['fab_image'][7]))
						$this->imageUpload($_FILES['Fabrics']['name']['fab_image'][7],$_FILES['Fabrics']['tmp_name']['fab_image'][7],$fabFolderRear);
					if(!empty($_FILES['Fabrics']['name']['fab_image'][8]))
						$this->imageUpload($_FILES['Fabrics']['name']['fab_image'][8],$_FILES['Fabrics']['tmp_name']['fab_image'][8],$fabFolderSleeve);
					if(!empty($_FILES['Fabrics']['name']['fab_image'][9]))
						$this->imageUpload($_FILES['Fabrics']['name']['fab_image'][9],$_FILES['Fabrics']['tmp_name']['fab_image'][9],$fabFolderYoke);
				}else if($model->fab_for==2){ //for trouser
					if(!empty($_FILES['Fabrics']['name']['fab_image'][1]))
						$this->imageUpload($_FILES['Fabrics']['name']['fab_image'][1],$_FILES['Fabrics']['tmp_name']['fab_image'][1],$fabFolderFront);
					if(!empty($_FILES['Fabrics']['name']['fab_image'][2]))
						$this->imageUpload($_FILES['Fabrics']['name']['fab_image'][2],$_FILES['Fabrics']['tmp_name']['fab_image'][2],$fabFolderRear);
				}else if($model->fab_for==3){
					//for blazer
				}
				Yii::app()->user->setFlash('success','Images uploaded successfully.');	
			}
		}
		$this->render('uploadcustomizeimages',array('model' => $model));
	}
}
