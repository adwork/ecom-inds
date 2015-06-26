<?php
class ProductsController extends Controller
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
		$model = new Items;
		if(!empty($id))
			$model->searchCriteria['catid'] = $id;
		$this->render('index',array(
			'model' => $model,
		));
	}

	public function actionView(){ 
		$slug = Yii::app()->request->getParam('slug');
		$criteria=new CDbCriteria;
		$criteria->condition = 'itm_slug=:itm_slug';
		$criteria->params = array(':itm_slug' => $slug);
		$model = Items::model()->find($criteria);
		$this->render('view',array('model' => $model));
	}

	public function actionCart(){
		$this->layout = false;
		$this->render('cart');
	}

	public function actionAddtocart(){
		
	}

	public function actionCheckout(){
		
	}
}
