<?php
$cs = Yii::app()->clientScript;		
$cs->registerCssFile(Yii::app()->request->baseUrl.'/css/upload.min.css');      
$cs->registerScriptFile(Yii::app()->request->baseUrl.'/js/upload.min.js');
?>
<div class="row">
	<div class="col-lg-12">
		<div class="panel panel-default">
			<div class="panel-heading">
                Upload Customized Images
            </div>
            <div class="panel-body">
            <div class="col-lg-6">
	            <?php $form=$this->beginWidget('bootstrap.widgets.TbActiveForm',array(
					'id'=>'fabrics-form',
					'enableAjaxValidation'=>false,		
					'htmlOptions' => array('enctype' => 'multipart/form-data'),	
				)); ?>
				<?php
				if(!empty($model->fab_for)){
					if($model->fab_for==1){
						//Shirt
						$fabImageCustOptions = array(
							1=>'Sleeve',2=>'Collar',3=>'Cuff',4=>'Placket',5=>'Pocket',6=>'Back Detail',7=>'Bottom Cut'//,8=>'Front'
						);
						?>
						<label>Customize Options</label>
						<?php echo $form->dropdownListRow($model,'fab_imagecust_option',$fabImageCustOptions,array('empty' => 'Select Option','label' => false,'class' => 'form-control')); ?>
						<div>&nbsp;</div>
						<label>Customize Sub-Options</label>
						<?php echo $form->dropdownListRow($model,'fab_imagecust_suboption',array(),array('label' => false,'class' => 'form-control')); ?>
						<div>&nbsp;</div>
						<label>Image</label>
						<?php //echo $form->fileFieldRow($model,'fab_image',array('label' => false, 'class' => 'form-control')); ?>
						<div id="fileuploader">Upload</div>
						<div>&nbsp;</div>
						<?php
					}else if($model->fab_for==2){
						//Trouser
					}else if($model->fab_for==2){
						//Blazer	
					}
					?>
					<div id="uploadedImage"></div>
					<div>&nbsp;</div>
					<div class="form-actions">
						<?php /*$this->widget('bootstrap.widgets.TbButton', array(
							'buttonType'=>'submit',
							'type'=>'primary',
							'label'=>'Upload Images',
						));*/ ?>
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
</div>
<script type="text/javascript">
	$(document).ready(function(){
		var fab_for = '<?php echo $model->fab_for; ?>';
		var fabid = '<?php echo $model->fab_id; ?>';
		$("#fileuploader").uploadFile({ //	
			url:"<?php echo Yii::app()->baseUrl; ?>/admin/fabrics/uploadimages",
			formData:{YII_CSRF_TOKEN:'<?php echo Yii::app()->request->csrfToken; ?>'},
			dynamicFormData: function(){
				var data ={ option:$('#Fabrics_fab_imagecust_option').val(),suboption:$('#Fabrics_fab_imagecust_suboption').val(),fab_for:fab_for,fabid:fabid }
				return data;
			},
			multiple:false,
			fileName:'myfile',
			//maxFileCount:1,
			allowedTypes:"png",
			returnType:"json",
			uploadErrorStr:"Please select mandotary fileds.",
			onSubmit:function(files){
				 if($('#Fabrics_fab_imagecust_option').val()==''){
				 	alert('Please select atleast any one customize option.');
				 	return false;
				 }
				 if($('#Fabrics_fab_imagecust_suboption').val()==''){
				 	alert('Please select atleast any one customize suboption.');
				 	return false;
				 }
				 if(fab_for==''){
				 	alert('Something went wrong. Please contact to web administrator.');
				 	return false;
				 }
				 if(fabid==''){
				 	alert('Something went wrong. Please contact to web administrator.');
				 	return false;
				 }
			},
			onSuccess:function(files,data,xhr){
				if(data){
					if(data.error==1)
						alert(data.msg);
					else
						$("#uploadedImage").html('<img src="<?php echo Yii::app()->baseUrl; ?>/storage/'+data.file+'" width="150">');				
				}
			},
			onError: function(files,status,errMsg){
				alert('Error in file upload.');				
			}			
		});

		$('#Fabrics_fab_imagecust_option').change(function(){
			var val = $(this).val();
			var html = '<option value="">Selete Suboptions</option>';
			switch(val){
				case '1':
					html += '<option value="1">Short</option>';
					html += '<option value="2">Long</option>';
					html += '<option value="3">Rolled Up</option>';
					break;
				case '2':
					html += '<option value="1">Bottom Down</option>';
					html += '<option value="2">Classic</option>';
					html += '<option value="3">Short Spread</option>';
					html += '<option value="4">Spread</option>';
					html += '<option value="5">Tall Spread</option>';
					html += '<option value="6">Chinese</option>';
					break;
				case '3':
					html += '<option value="1">Left Single Button</option>';
					html += '<option value="2">Right Single Button</option>';
					html += '<option value="3">Left Double Button</option>';
					html += '<option value="4">Right Double Button</option>';
					html += '<option value="5">Left French Cuff</option>';
					html += '<option value="6">Right French Cuff</option>';
					break;
				case '4':
					html += '<option value="1">American</option>';
					html += '<option value="2">French</option>';
					html += '<option value="3">Hidden</option>';
					break;
				case '5':
					html += '<option value="1">Left Round</option>';
					html += '<option value="2">Right Round</option>';
					html += '<option value="3">Left Square</option>';
					html += '<option value="4">Right Square</option>';
					html += '<option value="5">Left Angled</option>';
					html += '<option value="6">Right Angled</option>';
					html += '<option value="7">Left Vshape</option>';
					html += '<option value="8">Right Vshape</option>';
					html += '<option value="9">Left Flap</option>';
					html += '<option value="10">Right Flap</option>';
					break;
				case '6':
					html += '<option value="1">No Pleats</option>';
					html += '<option value="2">Box Pleat</option>';
					html += '<option value="3">Side Pleat</option>';
					break;
				case '7':
					html += '<option value="1">Round</option>';
					html += '<option value="2">Straight</option>';
					break;
				/*case '8':
					html += '<option value="1">Short</option>';
					html += '<option value="2">Long</option>';					
					break;*/
			}

			$('#Fabrics_fab_imagecust_suboption').html(html);
			$("#uploadedImage").html('');
		});
		
		$('#Fabrics_fab_imagecust_suboption').change(function(){
			var val = $(this).val();
			var url = '<?php echo Yii::app()->baseUrl; ?>/admin/fabrics/imageexist';
			$.ajax({
			  	method: "GET",
			  	url: url,
			  	data:{ option:$('#Fabrics_fab_imagecust_option').val(),suboption:$('#Fabrics_fab_imagecust_suboption').val(),fab_for:fab_for,fabid:fabid },
			  	dataType: "json",
			  	success:function(data){
			  		if(data.file){
			  			$("#uploadedImage").html('<img src="<?php echo Yii::app()->baseUrl; ?>/storage/'+data.file+'" width="150">');					  		
					}
			  	},			  
			});
		});
	});
</script>