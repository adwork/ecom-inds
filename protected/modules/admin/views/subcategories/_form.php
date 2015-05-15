<div class="row">
    <div class="col-lg-6">
		<?php $form=$this->beginWidget('bootstrap.widgets.TbActiveForm',array(
			'id'=>'subcategories-form',
			'enableAjaxValidation'=>false,
		)); ?>
			<p class="help-block">Fields with <span class="required">*</span> are required.</p>
			<?php echo $form->errorSummary($model); ?>
			<?php
			$categoryData = Categories::model()->findAll();
			$categories = CHtml::listData($categoryData,'cat_id','cat_name');
			?>
			<?php echo $form->dropdownListRow($model,'sub_cat_id',$categories,array('class'=>'form-control')); ?>
			<?php echo $form->textFieldRow($model,'sub_cat_name',array('class'=>'form-control','maxlength'=>200)); ?>
			<?php echo $form->textAreaRow($model,'sub_cat_description',array('rows'=>6, 'cols'=>50, 'class'=>'form-control')); ?>
			<?php echo $form->textAreaRow($model,'sub_cat_title',array('rows'=>6, 'cols'=>50, 'class'=>'form-control')); ?>
			<?php echo $form->textAreaRow($model,'sub_cat_keyword',array('rows'=>6, 'cols'=>50, 'class'=>'form-control')); ?>
			<?php echo $form->textAreaRow($model,'sub_meta_description',array('rows'=>6, 'cols'=>50, 'class'=>'form-control')); ?>
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