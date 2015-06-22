<style type="text/css">
  .productdetails .image{
    float: left;
    text-align: center;
    width: 30%;
    min-height: 500px;
  }
  .productdetails .image img{
  	width: 100%;
  }
  .productdetails .details{
    float: left;
    width: 65%;
    min-height: 500px;
    margin-left: 2%;
  }
  .productdetails .details .name{
  	font-weight: bold;
  	font-size: 20px;
  	font-style: italic;
  	color: #1c2053;
  	float: left;
  	width: 50%;
  }
  .productdetails .details .price{
  	font-weight: bold;
  	font-size: 20px;
  	color: #66bac4;
  	float: left;
  	width: 50%;
  	text-align: right;
  }
  .imagezoom-view{
  	background: none !important;
  }
</style>
<?php
$cs = Yii::app()->clientScript;		
$cs->registerScriptFile(Yii::app()->request->baseUrl.'/js/imagezoom.js');
?>
<div class="productdetails">
	<div class="image thumb-image">
		<img src="<?php echo Yii::app()->baseUrl; ?>/storage/products/<?php echo $model->itm_photo; ?>" data-imagezoom="true">
	</div>
	<div class="details">
		<div>&nbsp;</div>
		<div>
			<div class="name"><?php echo $model->itm_name; ?></div>
			<div class="price">₹&nbsp;<?php echo $model->itm_price; ?></div>
		</div>
		<div>&nbsp;</div>
		<div>
			<?php echo $model->itm_details; ?>
		</div>
		<div>&nbsp;</div>
		<div>
			<input type="button" name="addtocart" value="Add to Cart" class="btn btn-primary btn-lg">
		</div>
	</div>
</div>