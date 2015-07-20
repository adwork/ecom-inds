<style type="text/css">
	.filter-container input{
		width: 100%;
	}
</style>
<div class="row">
	<div class="col-lg-12">
		<div class="panel panel-default">
			<div class="panel-heading">
                <div style="float:left;">Orders</div>
                <div style="clear:both;"></div>
            </div>
            <div class="panel-body">                 
	          	<?php
	            $this->widget('bootstrap.widgets.TbGridView', array(
	                'type'=>'bordered striped',
	                'dataProvider' => $model->search(),                           
	                'template'=>"{summary}{items}{pager}",
	                'filter'=>$model,
	                'columns'=>array(
						array(
							'name'=>'cart_orderno',
							'type'=>'raw',
							'value'=>'CHtml::encode($data->cart_orderno)'
						),
						/*array(
							'name'=>'u_email',
							'type'=>'raw',
							'value'=>'CHtml::encode($data->u_email)'
						),
						array(
							'name'=>'cart_order_status',
							'type'=>'raw',
							'value'=>'CHtml::encode($data->cart_order_status)'
						),*/
						array(
							'name'=>'cart_created',
							'type'=>'raw',
							'value'=>'CHtml::encode($data->cart_created)'
						),
						array(
							'header'=>'Action',
							'class'=>'CButtonColumn',																		
							'template'=>'{view}',
							'buttons'=>array(
								'view'=>array(
									'label'=>'View',								            
									'imageUrl'=>false,
									'url'=>'Yii::app()->createUrl("/admin/items/vieworders", array("id"=>$data->cart_id))',
								)								
							)
						)
					),
	            ));         
	          	?>
        	</div>
      	</div>
    </div>
</div>
