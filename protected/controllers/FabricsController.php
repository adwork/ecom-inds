<?php
class FabricsController extends Controller
{
	/**
	 * @var string the default layout for the views. Defaults to '//layouts/column2', meaning
	 * using two-column layout. See 'protected/views/layouts/column2.php'.
	 */
	public $layout='main';

	/**
	 * Lists all products.
	 */
	public function actionIndex($id = NULL)
	{
		$model = new Fabrics;
		if(!empty($id))
			$model->searchCriteria['fab_for'] = $id;
		$this->render('index',array(
			'model' => $model,
		));
	}

	public function actionView($id = NULL,$type = NULL){
		$this->layout = 'editor';
		$fabricDetail = $this->loadModel($id);
		$buttons = new Buttons;
		$model = new Fabrics;
		$model->searchCriteria['fab_for'] = $type;
		$this->render('view',array(
			'model' => $model,
			'fabricDetail' => $fabricDetail,
			'id' => $id,
			'buttons' => $buttons
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
		$model=Fabrics::model()->findByPk($id);
		if($model===null)
			throw new CHttpException(404,'The requested page does not exist.');
		return $model;
	}
}
