<style type="text/css">
	div.fabcolor input
	{
	    float:left;
	}
</style>
<div class="row">
    <div class="col-lg-6">
		<?php $form=$this->beginWidget('bootstrap.widgets.TbActiveForm',array(
			'id'=>'fabrics-form',
			'enableAjaxValidation'=>false,		
			'htmlOptions' => array('enctype' => 'multipart/form-data'),	
		)); ?>
			<p class="help-block">Fields with <span class="required">*</span> are required.</p>
			<?php echo $form->errorSummary($model); ?>
			<?php echo $form->textFieldRow($model,'fab_name',array('class'=>'form-control','maxlength'=>255)); ?>
			<?php
			if(!empty($model->fab_id) && !empty($model->fab_image)){
				?>
				<div>&nbsp;</div>
				<div>
					<?php
					$fabimage = Yii::getPathOfAlias('webroot').'/storage/fabrics/'.$model->fab_image;
					if(file_exists($fabimage)){
						?>
						<img src="<?php echo Yii::app()->baseUrl; ?>/storage/fabrics/<?php echo $model->fab_image; ?>" width="200">
						<?php
					}
					?>
				</div>
				<?php
			}

			if($model->isNewRecord){
				?>
				<div>&nbsp;</div>
				<div class="fabcolor">
					<label class="required" for="Fabrics_fab_color">Fabric Color <span class="required">*</span></label>
					<?php echo $form->radiobuttonList($model,'fab_color',Yii::app()->params['fabColors']); ?>
				</div>
				<div>&nbsp;</div>
				<div>
					<label class="required" for="Fabrics_fab_pattern">Fabric Pattern</label>
					<?php echo $form->radiobuttonList($model,'fab_pattern',Yii::app()->params['fabPattern']); ?>
				</div>
				<div>&nbsp;</div>
				<div>
					<label class="required" for="Fabrics_fab_for">Fabric For</label>
					<?php echo $form->radiobuttonList($model,'fab_for',Yii::app()->params['fabFor']); ?>
				</div>
				<?php
			}
			?>
			<div>&nbsp;</div>
			<?php echo $form->fileFieldRow($model,'fab_image',array('class'=>'form-control')); ?>
			<?php echo $form->textFieldRow($model,'fab_price',array('class'=>'form-control')); ?>
			<div>&nbsp;</div>
			<div class="form-actions">
				<?php $this->widget('bootstrap.widgets.TbButton', array(
					'buttonType'=>'submit',
					'type'=>'primary',
					'label'=>$model->isNewRecord ? 'Create' : 'Save',
				)); ?>
			</div>
		<?php $this->endWidget(); ?>
	</div>
</div>
