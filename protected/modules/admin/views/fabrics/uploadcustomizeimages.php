<div class="row">
	<div class="col-lg-12">
		<div class="panel panel-default">
			<div class="panel-heading">
                Upload Customized Images
            </div>
            <div class="panel-body">
	            <?php $form=$this->beginWidget('bootstrap.widgets.TbActiveForm',array(
					'id'=>'fabrics-form',
					'enableAjaxValidation'=>false,		
					'htmlOptions' => array('enctype' => 'multipart/form-data'),	
				)); ?>
				<?php
				if(!empty($model->fab_for)){
					if($model->fab_for==1){
						?>
						<label>Back</label>
						<?php echo $form->fileFieldRow($model,'fab_image[1]',array('label' => false)); ?>
						<div>&nbsp;</div>
						<label>Collar</label>
						<?php echo $form->fileFieldRow($model,'fab_image[2]',array('label' => false)); ?>
						<div>&nbsp;</div>
						<label>Cuff</label>
						<?php echo $form->fileFieldRow($model,'fab_image[3]',array('label' => false)); ?>
						<div>&nbsp;</div>
						<label>Front</label>
						<?php echo $form->fileFieldRow($model,'fab_image[4]',array('label' => false)); ?>
						<div>&nbsp;</div>
						<label>Placket</label>
						<?php echo $form->fileFieldRow($model,'fab_image[5]',array('label' => false)); ?>
						<div>&nbsp;</div>
						<label>Pocket</label>
						<?php echo $form->fileFieldRow($model,'fab_image[6]',array('label' => false)); ?>
						<div>&nbsp;</div>
						<label>Rear</label>
						<?php echo $form->fileFieldRow($model,'fab_image[7]',array('label' => false)); ?>
						<div>&nbsp;</div>
						<label>Sleeve</label>
						<?php echo $form->fileFieldRow($model,'fab_image[8]',array('label' => false)); ?>
						<div>&nbsp;</div>
						<label>Yoke</label>
						<?php echo $form->fileFieldRow($model,'fab_image[9]',array('label' => false)); ?>
						<?php
					}else if($model->fab_for==2){
						?>
						<label>Front</label>
						<?php echo $form->fileFieldRow($model,'fab_image[1]',array('label' => false)); ?>
						<div>&nbsp;</div>
						<label>Rear</label>
						<?php echo $form->fileFieldRow($model,'fab_image[2]',array('label' => false)); ?>
						<?php
					}
					?>
					<div>&nbsp;</div>
					<div class="form-actions">
						<?php $this->widget('bootstrap.widgets.TbButton', array(
							'buttonType'=>'submit',
							'type'=>'primary',
							'label'=>'Upload Images',
						)); ?>
					</div>
					<?php
				}else{
					?>
					This Fabric not for upload customized images.
					<?php
				}
				?>
				<?php $this->endWidget(); ?>
			</div>
		</div>
	</div>
</div>