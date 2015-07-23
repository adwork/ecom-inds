<?php
$this->widget('zii.widgets.jui.CJuiTabs',array(
    'tabs'=>array(
        'ACCOUNT INFO'=>array(
        	'content'=>$this->renderPartial(
        		'_profile',array(
        			'model' => $model
        		),
        		true
        	),
        	'id' => 'accountInfoTab'
        ),
        'MY MEASURMENT'=>array(
        	'content'=>$this->renderPartial(
        		'_mymeasurment',array(
        			'model' => $model
        		),
        		true
        	),
        	'id' => 'myMeasurmentTab'
        ),
        'MY ORDER HISTORY'=>array(
        	'content'=>$this->renderPartial(
        		'_myorderhistory',array(
        			'orderModel' => $orderModel
        		),
        		true
        	),
        	'id' => 'myOrderHistory'
        ),
    )    
));
?>					
			