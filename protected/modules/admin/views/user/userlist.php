<div class="row-fluid">
    <div class="block nomargin">
      <div class="navbar navbar-inner block-header">
        <div class="muted pull-left">Users (Still Under development don't check)</div>
      </div>      
      <div class="block-content collapse in">
        <div class="span12">        
          <?php $this->widget('bootstrap.widgets.TbButton', array(
              'label'=>'+ Add User',
              'type'=>'success', // null, 'primary', 'info', 'success', 'warning', 'danger' or 'inverse'
              'size'=>'normal', // null, 'large', 'small' or 'mini',
              'url'=>array('/admin/user/add')
          )); ?>          
          <?php
            $this->widget('bootstrap.widgets.TbGridView', array(
                'id'=>'maker-grid',
                'type'=>'bordered striped',
                'dataProvider' => $model->userlist(),                           
                'template'=>"{items}{summary}{pager}",
                'filter'=>$model,                
                'columns'=>array(
                  array(
                    'name'=>'u_username',
                    'type'=>'raw',
                    'value'=>'CHtml::encode($data->u_username)'
                  ),                  
                  array(
                    'name'=>'u_email',
                    'type'=>'raw',
                    'value'=>'CHtml::encode($data->u_email)'
                  ),                                                  
                  array(
                    'name'=>'u_status',
                    'type'=>'raw',
                    'value'=>'CHtml::link(($data->u_status==1)?"Activated":"Deactived",Yii::app()->createUrl("/admin/user/status", array("id"=>$data->u_id,"status"=>$data->u_status)),array("gridid"=>"maker-grid","class"=>"statusupdate","title"=>($data->u_status==1)?"Deactive User":"Activate User"))',
                    'filter'=>false,                    
                  ),
                  array(
                    'name'=>'u_created',
                    'header'=>'Sign-up Date',
                    'type'=>'raw',
                    'value'=>'CHtml::encode(date("Y-m-d",strtotime($data->u_created)))',
                    'filter'=>false,                    
                  ),
                  array(
                    'header'=>'Action',
                    'class'=>'CButtonColumn',                                   
                    'template'=>'{update}',
                    'htmlOptions'=>array('style'=>'width:70px;'),                                                            
                    'buttons'=>array(
                      'update'=>array(
                        'label'=>'Edit',                            
                        'imageUrl'=>false,
                        'url'=>'Yii::app()->createUrl("/admin/user/edit/".$data->u_id)',                                                                        
                      ),
                    )
                  )    
                ),
            ));         
          ?>
        </div>
      </div>
    </div>
</div>
<script>
  $('.statusupdate').live('click',function(e){
    var grid = $(this).attr("gridid");
    $.ajax({
      url:$(this).attr('href'),
      success:function(){
        $.fn.yiiGridView.update(grid);
      },      
    });
    return false;
  });
</script>