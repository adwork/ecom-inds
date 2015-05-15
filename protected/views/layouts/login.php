<!DOCTYPE html>
<html>
  <head>
    <title><?php echo CHtml::encode($this->pageTitle); ?></title>
    <?php 
  		Yii::app()->bootstrap->register();    
  		$cs = Yii::app()->clientScript;		
  		$cs->registerCssFile(Yii::app()->request->baseUrl.'/css/styles.css')
      ->registerScriptFile(Yii::app()->request->baseUrl.'/js/jGrowl/jquery.jgrowl.js')
      ->registerCssFile(Yii::app()->request->baseUrl.'/js/jGrowl/jquery.jgrowl.css')
      ->registerScriptFile(Yii::app()->request->baseUrl.'/js/scribitz.js');
  	?>
  </head>
  <body id="login">
    <?php  
        $this->beginContent('/layouts/header');
        $this->endContent();                
    ?>
    <div class="container">           
     <?php echo $content; ?>
    </div>    
  </body>
</html>
<script>
  $(document).ready(function(){
    $.scribitz.init({
      'baseUrl'   : '<?php echo Yii::app()->request->baseUrl.'/'; ?>',      
      'TimeOffSet' :'<?php echo Yii::app()->session['TimeOffSet']; ?>',
      'admin':false
    });   
    <?php if(Yii::app()->user->hasFlash('popupmsg')){?>
        $.jGrowl("<?php echo Yii::app()->user->getFlash('popupmsg'); ?>",{sticky:true,position:'top-right',closer:false});       
    <?php }?>
  });         
</script>