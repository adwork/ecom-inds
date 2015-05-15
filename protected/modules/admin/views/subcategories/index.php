<div class="row">
	<div class="col-lg-12">
		<div class="panel panel-default">
			<div class="panel-heading">
                <div style="float:left;">Categories</div>
                <div style="float:right">
                	<?php
                	echo CHtml::link('Add Sub Category',array('/admin/subcategories/create'),array('class' => 'btn btn-primary'));
                	?>
                </div>
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
							'name'=>'sub_cat_name',
							'type'=>'raw',
							'value'=>'CHtml::encode($data->sub_cat_name)'
						),
						array(
							'name'=>'sub_cat_name',
							'type'=>'raw',
							'value'=>'CHtml::encode($data->sub_cat_name)'
						),
						array(
							'header'=>'Action',
							'class'=>'CButtonColumn',																		
							'template'=>'{update} | {delete}',
							'buttons'=>array(
								'update'=>array(
									'label'=>'Edit',								            
									'imageUrl'=>false,
									'url'=>'Yii::app()->createUrl("/admin/subcategories/update", array("id"=>$data->sub_id))',
								),
								'delete'=>array(
									'label'=>'Delete',								            
									'imageUrl'=>false,
									'url'=>'Yii::app()->createUrl("/admin/subcategories/delete", array("id"=>$data->sub_id))',
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
