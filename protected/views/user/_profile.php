<style type="text/css">
	.address .left{
		float: left;
		width: 50%;
	}
</style>
<div class="row-fluid">
	<div class="block nomargin">
	    <div class="navbar navbar-inner block-header">
	        <div class="muted pull-left">Profile</div>
	  		<div class="muted pull-right">Fields with <span class="required">*</span> are required.</div>
	    </div>
    
	    <div class="block-content collapse in" >
	        <div class="span12">
				<?php /** @var BootActiveForm $form */
				$form = $this->beginWidget('bootstrap.widgets.TbActiveForm', array(
				    'id'=>'verticalForm',
				    'type'=>'horizontal',    
				)); 
				?>
				<?php echo $form->textFieldRow($model, 'u_email', array('class'=>'span4')); ?>

				<?php echo $form->textFieldRow($model, 'u_first_name', array('class'=>'span4')); ?>
				<?php echo $form->textFieldRow($model, 'u_last_name', array('class'=>'span4')); ?>

				<?php 
					if($model->u_gender==''){
						$model->u_gender = 1;	
					} 
				?>
				<?php echo $form->radioButtonListInlineRow($model, 'u_gender', array(1 => 'Male',2 =>'Female')); ?>
				<div class="form-actions">
				    <?php $this->widget('bootstrap.widgets.TbButton', array('buttonType'=>'submit', 'type'=>'primary', 'label'=>'Update')); ?>
				    <?php $this->widget('bootstrap.widgets.TbButton', array('buttonType'=>'reset', 'label'=>'Reset')); ?>
				</div>				
				<?php $this->endWidget(); ?>
			</div>
			<div class="span12">
				<?php /** @var BootActiveForm $form */
				$form = $this->beginWidget('bootstrap.widgets.TbActiveForm', array(
				    'id'=>'verticalForm',
				    'type'=>'horizontal',    
				)); 
				?>
				<div class="address">
					<div class="left">
						<div>SHIPPING ADDRESS</div>
						<div>
							
						</div>
					</div>
					<div class="left">
						<div>BILLING ADDRESS</div>
						<div>
							
						</div>
					</div>
				</div>
				<div style="clear:both;"></div>
				<div class="form-actions">
				    <?php $this->widget('bootstrap.widgets.TbButton', array('buttonType'=>'submit', 'type'=>'primary', 'label'=>'Update')); ?>
				    <?php $this->widget('bootstrap.widgets.TbButton', array('buttonType'=>'reset', 'label'=>'Reset')); ?>
				</div>				
				<?php $this->endWidget(); ?>
			</div>
       </div>
	</div>	
</div>  
<div style="clear:both;"></div>