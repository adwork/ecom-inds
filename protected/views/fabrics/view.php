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
		// Style
		<div id="tabs">
              <ul>
               <!--  <li><a href="#tabs-1">Fabric</a></li> -->
                <li><a href="#tabs-2">Sleeve</a></li>                
                <li><a href="#tabs-3">Collar</a></li>
                <li><a href="#tabs-4">Cuff</a></li>
                <li><a href="#tabs-5">Placket</a></li>
                <li><a href="#tabs-6">Pocket</a></li>
                <li><a href="#tabs-7">Back Detail</a></li>
                <li><a href="#tabs-8">Bottom Cut</a></li>
                <!-- <li><a href="#tabs-9">Buttons</a></li> -->
              </ul>
              <!-- <div id="tabs-1"> 
                <h3>Fabric</h3> 
                <label><input type="radio" value="1" name="fabric" onclick="updateElements(1,3);"> Fabric 1</label>
                <label><input type="radio" value="2" name="fabric" onclick="updateElements(1,1);"> Fabric 2</label>
              </div> -->

              <div id="tabs-2">
                <ul class="arrange_horizontal">
                  <li>
                    <label onclick="updateElements(2,'sleeves_short')">
                      <div><input type="radio" value="1" name="sleeve" > Short</div> 
                      <div><img src="<?php echo Yii::app()->request->baseUrl;?>/storage/s_customizations/sleeve/sleeves-half-sleeves_vector.jpg" alt=""></div>
                    </label>
                  </li>
                  <li>
                    <label onclick="updateElements(2,'sleeves_full')">
                      <div><input type="radio" value="2" name="sleeve" > Long </div>
                      <div><img src="<?php echo Yii::app()->request->baseUrl;?>/storage/s_customizations/sleeve/sleeves-full-sleeves_vector.jpg" alt=""></div>
                    </label>    
                  </li>
                  <li>
                    <label onclick="updateElements(2,'sleeves_rolled_up')">
                      <div><input type="radio" value="2" name="sleeve" > Rolled Up </div>
                      <div><img src="<?php echo Yii::app()->request->baseUrl;?>/storage/s_customizations/sleeve/sleeves-rolledup-sleeves_vector.jpg" alt=""></div>
                    </label>
                  </li>
                </ul>
              </div>

              <div id="tabs-3">  
                <ul class="arrange_horizontal">
                  <li>
                    <label onclick="updateElements(3,'collar_button_down')">
                      <div><input type="radio" value="1" name="collar" > Bottom Down</div> 
                      <div><img src="<?php echo Yii::app()->request->baseUrl;?>/storage/s_customizations/collar/collar-button-down_vector.jpg" alt=""></div>
                    </label>
                  </li>
                  <li>
                    <label onclick="updateElements(3,'collar_classic')">
                      <div><input type="radio" value="1" name="collar" > Classic</div> 
                      <div><img src="<?php echo Yii::app()->request->baseUrl;?>/storage/s_customizations/collar/collar-classic_vector.jpg" alt=""></div>
                    </label>
                  </li>
                  <li>
                    <label onclick="updateElements(3,'collar_short_spread')">
                      <div><input type="radio" value="1" name="collar" > Short Spread</div> 
                      <div><img src="<?php echo Yii::app()->request->baseUrl;?>/storage/s_customizations/collar/collar-small-spread_vector.jpg" alt=""></div>
                    </label>
                  </li>
                  <li>
                    <label onclick="updateElements(3,'collar_spread')">
                      <div><input type="radio" value="1" name="collar" > Spread</div> 
                      <div><img src="<?php echo Yii::app()->request->baseUrl;?>/storage/s_customizations/collar/collar-spread_vector.jpg" alt=""></div>
                    </label>
                  </li>
                  <li>
                    <label onclick="updateElements(3,'collar_tall_spread')">
                      <div><input type="radio" value="1" name="collar" > Tall Spread</div> 
                      <div><img src="<?php echo Yii::app()->request->baseUrl;?>/storage/s_customizations/collar/collar-tall-spread_vector.jpg" alt=""></div>
                    </label>
                  </li>
                  <li>
                    <label onclick="updateElements(3,'collar_chinese')">
                      <div><input type="radio" value="1" name="collar" > Chinese</div> 
                      <div><img src="<?php echo Yii::app()->request->baseUrl;?>/storage/s_customizations/collar/collar-chinese_vector.jpg" alt=""></div>
                    </label>
                  </li>
                </ul>
              </div>
              
              <div id="tabs-4"> 
                <ul class="arrange_horizontal">
                  <li>
                    <label onclick="updateElements(7,'single_button')">
                      <div><input type="radio" value="1" name="cuff" > Single Button</div> 
                      <div><img src="<?php echo Yii::app()->request->baseUrl;?>/storage/s_customizations/cuff/cuffs-single-button_vector.jpg" alt=""></div>
                    </label>
                  </li>
                  <li>
                    <label onclick="updateElements(7,'double_button')">
                      <div><input type="radio" value="1" name="cuff" > Double Button</div> 
                      <div><img src="<?php echo Yii::app()->request->baseUrl;?>/storage/s_customizations/cuff/cuffs-single-button_vector.jpg" alt=""></div>
                    </label>
                  </li>
                  <li>
                    <label onclick="updateElements(7,'french')">
                      <div><input type="radio" value="1" name="cuff" > French cuff</div> 
                      <div><img src="<?php echo Yii::app()->request->baseUrl;?>/storage/s_customizations/cuff/cuffs-single-button_vector.jpg" alt=""></div>
                    </label>
                  </li>
                </ul>
              </div>

              <div id="tabs-5">  
                <h3>Placket</h3> 
                <label onclick="updateElements(10,'american')"><input type="radio" value="American" name="placket"> American</label>
                <label onclick="updateElements(10,'french')"><input type="radio" value="French" name="placket"> French</label>
                <label onclick="updateElements(10,'hidden')"><input type="radio" value="Hidden" name="placket"> Hidden</label>
              </div>

              <div id="tabs-6"> 
                <ul class="arrange_horizontal">
                  <li style="width:100%;">
                    <label>
                      <select name="pocket_type" onchange="updateElements(6,this.value)"><option value="0">None</option><option value="1" selected="selected">One</option><option value="2">Two</option></select>
                    </label>
                  </li>

                  <!-- <li>
                    <label onclick="updateElements(5,'round')">
                      <div><input type="radio" value="1" name="pocket" > Round</div> 
                      <div><img src="storage/s_customizations/pocket/pocket-round-pocket_vector.jpg" alt=""></div>
                    </label>
                  </li> -->
                  <li>
                    <label onclick="updateElements(5,'round')">
                      <div><input type="radio" value="1" name="pocket" > Round</div> 
                      <div><img src="<?php echo Yii::app()->request->baseUrl;?>/storage/s_customizations/pocket/pocket-round-pocket_vector.jpg" alt=""></div>
                    </label>
                  </li>
                  <li>
                    <label onclick="updateElements(5,'square')">
                      <div><input type="radio" value="1" name="pocket" > Square</div> 
                      <div><img src="<?php echo Yii::app()->request->baseUrl;?>/storage/s_customizations/pocket/pocket-square-pocket_vector.jpg" alt=""></div>
                    </label>
                  </li>
                  <li>
                    <label onclick="updateElements(5,'angled')">
                      <div><input type="radio" value="1" name="pocket" > Angled</div> 
                      <div><img src="<?php echo Yii::app()->request->baseUrl;?>/storage/s_customizations/pocket/pocket-angled-pocket_vector.jpg" alt=""></div>
                    </label>
                  </li>
                  <li>
                    <label onclick="updateElements(5,'vshape')">
                      <div><input type="radio" value="1" name="pocket" > Vshape</div> 
                      <div><img src="<?php echo Yii::app()->request->baseUrl;?>/storage/s_customizations/pocket/pocket-vshaped-pocket_vector.jpg" alt=""></div>
                    </label>
                  </li>
                  <li>
                    <label onclick="updateElements(5,'vshape_with_flap')">
                      <div><input type="radio" value="1" name="pocket" > Flap</div> 
                      <div><img src="<?php echo Yii::app()->request->baseUrl;?>/storage/s_customizations/pocket/pocket-flap-pocket_vector.jpg" alt=""></div>
                    </label>
                  </li>
                </ul>
              </div>

              <div id="tabs-7"> 
                <h3>Back Detail</h3> 
                <li onclick="updateElements(8,'no_pleats')"><label><input type="radio" value="1" name="collar"> No Pleats</label></li>
                <li onclick="updateElements(8,'box_pleats')"><label><input type="radio" value="2" name="collar"> Box Pleat</label></li>
                <li onclick="updateElements(8,'side_pleats')"><label><input type="radio" value="2" name="collar"> Side Pleat</label></li>
              </div>

              <div id="tabs-8"> 
                <ul class="arrange_horizontal">
                  <li>
                    <label onclick="updateElements(4,'front_shirt_bottom_long')">
                      <div><input type="radio" value="1" name="front_shirt" > Round</div> 
                      <div><img src="<?php echo Yii::app()->request->baseUrl;?>/storage/s_customizations/front/bottomcut-round_vector.jpg" alt=""></div>
                    </label>
                  </li>
                  <li>
                    <label onclick="updateElements(4,'front_shirt_bottom_straight')">
                      <div><input type="radio" value="1" name="front_shirt" > Straight</div> 
                      <div><img src="<?php echo Yii::app()->request->baseUrl;?>/storage/s_customizations/front/bottomcut-straight_vector.jpg" alt=""></div>
                    </label>
                  </li>
                </ul>
              </div>

              <!-- <div id="tabs-9"> 
                <ul class="arrange_horizontal">
                  <li>
                    <label onclick="updateElements(11,1)">
                      <div><input type="radio" value="1" name="button" > White</div> 
                      <div><img src="storage/buttons/button_1.png" alt=""></div>
                    </label>
                  </li>
                  <li>
                    <label onclick="updateElements(11,2)">
                      <div><input type="radio" value="1" name="button" > Maroon</div> 
                      <div><img src="storage/buttons/button_2.png" alt=""></div>
                    </label>
                  </li>
                </ul>
              </div> -->

            </div>
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
	// editor
	<div class="main_inr_box_new">
        <div id="shirt_editor" class="editmyshirt"></div>
    </div>    
</div>
<script type="text/javascript">
	var indianStyloSEJson = {fabricId:<?php echo $id;?>,buttonId:1};

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

		indianStyloSEObj = $("#shirt_editor").indianStyloSE(indianStyloSEJson);
		$("#tabs").tabs({
                        activate: function(event,ui){ 
                        	// console.	log(ui.newTab.index()); 
                        	if(ui.newTab.index()==5){ 
                        		indianStyloSEObj.showRear(); 
                        	}else{ 
                        		indianStyloSEObj.showFront(); 
                        	} 
                       	}
                    });
	});

	function updateElements(elem,newobj){
      switch(elem){
        case 1:
          indianStyloSEObj.updateFabric(newobj);
        break;
        case 2:
          indianStyloSEObj.updateSleeves(newobj);
        break;
        case 3:
          indianStyloSEObj.updateCollar(newobj);
        break;
        case 4:
          indianStyloSEObj.updateFrontShirt(newobj);
        break;
        case 5:
          indianStyloSEObj.updatePocket(newobj);
        break;
        case 6:
          indianStyloSEObj.updatePocketVisibility(newobj);
        break;
        case 7:
          indianStyloSEObj.updateCuff(newobj);
        break;
        case 8:
          indianStyloSEObj.updateBackPleats(newobj);
        break;
        case 10:
          indianStyloSEObj.updatePlacket(newobj);
        break;
        case 11:
          indianStyloSEObj.updateButton(newobj);
        break;
      }
    }
    function refreshImages(){
    	indianStyloSEObj.refreshFabricImages();
    }
</script>