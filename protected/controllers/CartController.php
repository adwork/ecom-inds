<?php
class CartController extends Controller
{
	public function actionAddtocart(){
		$model = new Cart;
		if(!empty($_POST)){
			$data = array();
			unset($_POST['YII_CSRF_TOKEN']);
			$_POST['qty'] = 1;
			$data = Yii::app()->session['cartItems'];
			if(!empty($_POST['txt_fabric']))
				$data['fabric'][$_POST['txt_fabric']] = $_POST;
			if(!empty($_POST['itemid']))
				$data['item'][$_POST['itemid']] = $_POST;
			Yii::app()->session['cartItems'] = $data;
		}
		$this->render('addtocart');
	}	

	public function actionView(){
		$this->layout = false;
		$cart_items = Yii::app()->session['cartItems'];
		$cartData = $this->processCart();
		$this->render('view',array('fabrics' => $cartData['fabrics'],'items' => $cartData['items'],'cart_items' => $cart_items));
	}

	public function actionRemoveitem(){
		$this->layout = false;
		$cart_items = Yii::app()->session['cartItems'];
		if(!empty($_POST['id']) && !empty($_POST['type'])){
			if($_POST['type']=='item'){
				unset($cart_items['item'][$_POST['id']]);
			}
			if($_POST['type']=='fabric'){
				unset($cart_items['fabric'][$_POST['id']]);
			}
		}
		Yii::app()->session['cartItems'] = $cart_items;
		echo 'succes';	
		exit;	
	}

	public function actionUpdateqty(){
		$this->layout = false;
		$cart_items = Yii::app()->session['cartItems'];
		if(!empty($_POST['id']) && !empty($_POST['qty'])){
			if($_POST['type']=='item'){
				foreach ($cart_items['item'] as $itmKey => $itemArr) {
					if($itmKey==$_POST['id']){
						$itemArr['qty'] = $_POST['qty'];
						$cart_items['item'][$itmKey] = $itemArr;
					}
				}
			}
			if($_POST['type']=='fabric'){
				foreach ($cart_items['fabric'] as $fabKey => $fabArr) {
					if($fabKey==$_POST['id']){
						$fabArr['qty'] = $_POST['qty'];
						$cart_items['fabric'][$fabKey] = $fabArr;
					}
				}	
			}
		}
		Yii::app()->session['cartItems'] = $cart_items;
		echo 'succes';	
		exit;
	}

	public function processCart(){
		$cart_items = Yii::app()->session['cartItems'];
		$fabrics = array();
		$items = array();
		if(!empty($cart_items)){
			$fabricIds = array();
			$itemIds = array();
			foreach ($cart_items as $key => $cartArr) {
				if($key == 'fabric'){
					foreach ($cartArr as $fabId => $fabArr) {
						$fabricIds[] = $fabId;
					}
				}
				if($key == 'item'){
					foreach ($cartArr as $itemId => $itemArr) {
						$itemIds[] = $itemId;
					}
				}
			}
			
			$fabCriteria = new CDbCriteria;
			$itmCriteria = new CDbCriteria;

			$fabIds = '';
			if(!empty($fabricIds)){
				$fabIds = implode(',', $fabricIds);
				$fabCriteria->condition = 'fab_id in ('.$fabIds.')';
				$fabrics = Fabrics::model()->findAll($fabCriteria);
			}

			$itmIds = '';
			if(!empty($itemIds)){
				$itmIds = implode(',', $itemIds);
				$itmCriteria->condition = 'itm_id in ('.$itmIds.')';
				$items = Items::model()->findAll($itmCriteria);
			}
		}

		$data['items'] = $items;
		$data['fabrics'] = $fabrics;

		return $data;
	}
}