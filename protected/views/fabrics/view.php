<style type="text/css">
  .fabrics li{
    border: 4px solid #eee;
    border-radius: 5px;
    display: inline-block;
    margin: 5px;
    padding: 5px;
    text-align: center;
    width: 22%;
  }
  .fabrics li.selected{
  	background: #CCC;
  }
  .fabricTabs{
  	width: 350px;  	
  	margin: 0px;
  }
  .fabricTabs li{
  	padding: 5px;
  	border-radius: 5px;
  	min-width: 100px;
  	text-align: center;
  	display: inline-block;
  	border: 1px solid #CCC;
  	background: #EEE;
  	cursor: pointer;
  }
  .fabricTabs li.selected{
  	background: #CCC !important;
  }
</style>
<div style="width:39%;float:left;border:1px solid #ccc;min-height:500px;border-radius:5px;margin-right:10px;padding:5px;">
	<div>&nbsp;</div>
	<div align="center">
		<ul class="fabricTabs">
			<li class="selected" rel="fabrics">FABRIC</li>
			<li rel="style">STYLE</li>
			<li rel="buttons">BUTTONS</li>
		</ul>
	</div>
	<div id="fabrics">
		<ul class="fabrics">
		  <?php      
		  $this->widget('zii.widgets.CListView', array(
		    'id'=>'fabrics-grid',
		    'dataProvider'=>$model->search(),                       
		    'template'=>'{items}{pager}',        
		    'itemView'=>'_fabrics',   
		    'viewData' => array('id' => $id),		
		    //'emptyText'=>($model->un_content=='')?'No Notes Found':'No notes found for the keyword "<b>'.$model->un_content.'</b>"',
		    'summaryText'=>'Showing {start} to {end} of {count} entries',       
		  ));        
		  ?>
		</ul>
	</div>
	<div id="style" style="display:none;">
		//Style
	</div>
	<div id="buttons" style="display:none;">
		<ul class="fabrics">
		  <?php      
		  $this->widget('zii.widgets.CListView', array(
		    'id'=>'buttons-grid',
		    'dataProvider'=>$buttons->search(),                       
		    'template'=>'{items}{pager}',        
		    'itemView'=>'_buttons',   
		    //'emptyText'=>($model->un_content=='')?'No Notes Found':'No notes found for the keyword "<b>'.$model->un_content.'</b>"',
		    'summaryText'=>'Showing {start} to {end} of {count} entries',       
		  ));        
		  ?>
		</ul>
	</div>
</div>
<div style="width:58%;float:left;border:1px solid #ccc;min-height:500px;border-radius:5px;padding:5px;">
	//editor
</div>
<script type="text/javascript">
	$(document).ready(function(){
		$('.fabricTabs li').click(function(){
			$('.fabricTabs li').attr('class','');
			$(this).addClass('selected');
			var rel = $(this).attr('rel');
			$('#fabrics').hide();
			$('#style').hide();
			$('#buttons').hide();
			$('#'+rel).show();
		});
	});
</script>