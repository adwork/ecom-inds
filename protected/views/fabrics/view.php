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
</style>
<div style="width:39%;float:left;border:1px solid #ccc;min-height:500px;border-radius:5px;margin-right:10px;">
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
<div style="width:59%;float:left;border:1px solid #ccc;min-height:500px;border-radius:5px;">
	//editor
</div>