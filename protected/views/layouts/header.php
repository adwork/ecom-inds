<?php $this->widget('bootstrap.widgets.TbNavbar', array(    
    //'type'=>'inverse', // null or 'inverse'
    'brand'=> Yii::app()->params['title'],
    'brandUrl'=>'#',
    'collapse'=>true, // requires bootstrap-responsive.css
    'fluid'=>true,    
    'items'=>array(        
        array(
            'class'=>'bootstrap.widgets.TbMenu',
            'htmlOptions'=>array('class'=>'pull-right'),
            'items'=>array(                
                array('label'=>$this->loggedusername, 'visible'=>Yii::app()->user->checkAccess('member'), 'url'=>'#', 'items'=>array(
                    array('label'=>'Dashboard', 'url'=>array('user/dashboard')),
                    array('label'=>'Profile', 'url'=>array('user/profile')),                    
                	array('label'=>'Change Password', 'url'=>array('user/changepassword')),
                    '---',
                    array('label'=>'Logout', 'url'=>array('site/logout')),
                )),
            ),
        ),
    ),

)); ?>