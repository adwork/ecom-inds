<div class="container music_aboutcontainer">
  <div class="music_inner">
    <div class="music_signup">
    <h1>Create Account</h1>
    <p>Sed ac placerat massa. Fusce condimentum interdum leo, ut aliquam leo efficitur et. Etiam volutpat ligula risus, quis facilisis eros commodo a. Aliquam erat volutpat. Ut id tincidunt tellus. Aenean efficitur id enim ac aliquet. Aliquam dignissim libero eget arcu dapibus, nec facilisis nunc pellentesque. Morbi malesuada massa risus, a commodo odio mattis sit amet. Ut blandit vestibulum ligula vel pellentesque.</p>
    </div>
    <?php /** @var BootActiveForm $form */
    $form = $this->beginWidget('bootstrap.widgets.TbActiveForm', array(
        'id'=>'verticalForm',
        'type'=>'horizontal',
    )); ?>
    <?php		
    	$buyer = false;
    	if($model->u_role=='buyer' || $model->u_role==1){
    		$model->u_role = 1;			
    		$buyer = true;
    	} 	
        $randimagname = 'img_'.rand();
    ?> 
    <fieldset> 
        <legend></legend>
        <div class="music_control_group">
        <?php echo $form->radioButtonListInlineRow($model, 'u_role', array(1 => 'Music seeker ',2 =>'Music maker')); ?>
        </div>
	    <div class="music_control_group">
          <div class="controls">
        	<p>Sed ac placerat massa. Fusce condimentum interdum leo, ut aliquam leo efficitur et. Etiam volutpat ligula risus, quis facilisis eros commodo a. Aliquam erat volutpat. Ut id tincidunt tellus. </p>
          </div>
      	</div>
        <div class="music_signup_form">
        <?php echo $form->textFieldRow($model, 'u_first_name', array('placeholder'=>'Full Name','class'=>'span3 music_signup_textfield')); ?>
        <?php echo $form->textFieldRow($model, 'u_last_name', array('placeholder'=>'Last Name','class'=>'span3 music_signup_textfield')); ?>
        <?php echo $form->textFieldRow($model, 'u_profile_name', array('placeholder'=>'Profile Name','class'=>'span3 music_signup_textfield','hint'=>'If left blank, your name will be your Profile Name.')); ?>
        <?php echo $form->textFieldRow($model, 'u_email', array('placeholder'=>'Email Adress','class'=>'span3 music_signup_textfield')); ?>
         
        <?php 
            if($model->u_gender==''){
                $model->u_gender = 1;	
            } 
        ?>
        <?php echo $form->radioButtonListInlineRow($model, 'u_gender', array(1 => 'Male',2 =>'Female')); ?>
        <?php echo $form->passwordFieldRow($model, 'u_password', array('placeholder'=>'Password','class'=>'span3 music_signup_textfield')); ?>
        <?php echo $form->passwordFieldRow($model, 'u_repeat_password', array('placeholder'=>'Confirm Password','class'=>'span3 music_signup_textfield')); ?>
       
        <?php echo $form->dropDownListRow($model,'u_country_id',CHtml::listData(Country::model()->findAll(
            array('order' => 'c_country_name')),'c_id','c_country_name'),
            array(
                'class'=>'span3 music_signup_selectfield',
                'prompt'=>'Country',
                'ajax'=>array(
                    'type'=>'POST',
                    'url' => CController::createUrl('user/findstate'),
                    'data'=> array('country_id'=>'js:this.value'),
                    'update'=>'#User_u_state_id'))
        );?>
         <?php 
            $cid = $model->u_country_id;
            $state = array();
            if($cid)
                $state = CHtml::listData(State::model()->findAll(array('condition'=>'s_country_id = '.$cid,'order' => 's_name')),'s_id','s_name');
            
        ?>
        <?php echo $form->dropDownListRow($model,'u_state_id',$state,array('prompt'=>'State','class'=>'span3 music_signup_textfield'))?>
        <?php echo $form->textFieldRow($model,'u_city',array('placeholder'=>'City','class'=>'span3 music_signup_textfield')); ?>
         <!-- FOR BUYER-->
        <div class="seller <?php echo ($buyer)?'hide':'';?>">
            <?php echo $form->dropDownListRow($model,'u_pro',$pro_type,array('prompt'=>'None','class'=>'span3 music_signup_textfield'))?>	
            <?php //echo $form->textFieldRow($model,'u_representation',array('placeholder'=>'Representation','class'=>'span3 music_signup_textfield'))?>	
            <?php echo $form->textFieldRow($model,'u_paypal_id',array('placeholder'=>'PayPal Email','class'=>'span3 music_signup_textfield')); ?>
        </div>
    
        <!-- FOR SELLER-->
        <div class="buyer <?php echo ($buyer)?'':'hide';?>">
            <?php echo $form->dropDownListRow($model,'u_organisation_type',$organisation_type,array('prompt'=>'Organization','class'=>'span3 music_signup_textfield'))?>	
        </div>
        <?php echo $form->textAreaRow($model, 'u_about', array('placeholder'=>'About Me','class'=>'span3 music_signup_textfield music_signup_textarea')); ?>
        <div class="control-group music_signup_captcha">
            <?php echo $form->labelEx($model,'verifyCode',array('class'=>'control-label'));?>
            <div class="controls">
                <?php 
                    $imgid = 'captcha-'.rand();
                    echo CHtml::image(Yii::app()->baseUrl.'/user/captcha','',array('id'=>$imgid)); 
					echo '<br/>';
                    echo CHtml::link('Can\'t read reload?','javascript:void(0)',array('refimg'=>$imgid,'class'=>'reloadcaptcha')); 
                ?>
                <?php echo $form->textFieldRow($model,'verifyCode',array('placeholder'=>'Security Code','class'=>'span2 music_signup_security','labelOptions' => array('label' => false))); ?>	
             </div>
        </div>
        <div class="control-group">
            <div class="controls">
                <?php echo $form->checkbox($model,'terms_conditions',array('uncheckValue'=>''));?>
                <?php echo $form->labelEx($model,'terms_conditions',array('class'=>'inlinedisplay'));?>
                <span><?php echo CHtml::link('Terms and Conditions',array('/terms'));?></span>
                <div><?php echo $form->error($model,'terms_conditions');?></div>    
            </div>
        </div>
        
        <?php //echo $form->checkBoxRow($model, 'terms_conditions',array('uncheckValue'=>'','labelOptions'=>array('label'=>'I accept '))).CHtml::link('Terms and conditions',array('/terms'));?>
    
    	</div>
        
        <div class="musiccontrolphoto">
        	<?php        	
				$this->widget('ext.Jcrop.ImageJcrop', array(
						'config' => array(
								'title'=>'',
								'image'=>$this->getImage($model),//required, all field below are not required.
								'id'=>'nava-jcrop',
								//'unique'=>true,
								'buttons'=>array(
											'cancel'=>array(
											'name'=>'Cancel',
											'class'=>'button-crop btn btn-default',
											'style'=>'margin-left: 5px;',
										),	        							
										'crop'=>array(
											'name'=>'Crop',
											'class'=>'button-crop btn btn-success',
											'style'=>'margin-left: 5px;',
											
										)
								),
								'options'=>array(
									'imageWidth'=>125,
									'imageHeight'=>125,
									'resultStyle' => 'position: fixed;top: 100px;left: 38%;max-width:350px;max-height:350px;z-index: 9999;',
									'resultMaxWidth'=>350,
									'resultMinWidth'=>350,
									
								),
								'callBack'=> array(
									'success'=>"function(obj,res){jQuery('#user_image').val(res)}",
									'error'=>"function(){alert('error');}",
								)
								
						)
                    ));
                    echo CHtml::hiddenField('user_image');
                    if($model->u_image!='NULL')
                        echo $form->hiddenField($model, 'u_image');
						
                ?>
                
		</div>
        </fieldset>

	<div class="form-actions music_signup_action_">
	    <?php $this->widget('bootstrap.widgets.TbButton', array('buttonType'=>'submit', 'type'=>'primary', 'label'=>'Sign Up', 'htmlOptions'=>array('class'=>'music_login_btn'))); ?>
	    <?php //$this->widget('bootstrap.widgets.TbButton', array('buttonType'=>'reset', 'label'=>'Cancel','htmlOptions'=>array('class'=>'music_signup_cancel'))); ?>
	</div>
</div>
<?php $this->endWidget(); ?>
</div>
</div>
<script>
	$('input[name="User[u_role]"]').change(function(){
		var showClass = ($(this).val()==1)?'.buyer':'.seller';
		var hideClass = ($(this).val()==1)?'.seller':'.buyer';
		$(showClass).removeClass('hide');
		$(hideClass).addClass('hide');
	});
	
	$(document).ready(function() {
 	$("<span class='addphoto'>Add Photo</span>").insertAfter("#jcrop_image").click(function(){
		$("#jcrop_fileinput").trigger("click");
	});

});
</script>