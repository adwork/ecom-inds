<style type="text/css">
	.panel-body ul li{
		list-style: none;
		line-height: 30px;
	}
	.panel-body ul li span1{
		display: inline-block;
		width: 20%;
	}
	.panel-body ul li span2{
		display: inline-block;
		width: 75%;
	}
	.panel-body .itemHeading{
		padding:5px;
		background: #CCC;		
	}	
</style>
<div class="row">
	<div class="col-lg-12">
		<div class="panel panel-default">
			<div class="panel-heading">
                <div style="float:left;">Order Details</div>
                <div style="clear:both;"></div>
            </div>
            <div class="panel-body">
            	<div>
	            	<ul>
	            		<li>
	            			<span1><b>Order No. : </b></span1>
	            			<span2><?php echo $model[0]->cartCartItem->cart_orderno; ?></span2>
	            		</li>
	            		<li>
	            			<span1><b>Order date : </b></span1>
	            			<span2><?php echo date('d-m-Y',strtotime($model[0]->cartCartItem->cart_created)); ?></span2>
	            		</li>
	            		<li>
	            			<span1><b>Order status : </b></span1>
	            			<span2 class="orderStatus">
	            				<?php 
	            				if($model[0]->cartCartItem->cart_order_status==0)
	            					echo 'Pending'; 
	            				else if($model[0]->cartCartItem->cart_order_status==1)
	            					echo 'Under Process'; 
	            				else if($model[0]->cartCartItem->cart_order_status==2)
	            					echo 'Deliver'; 
	            				else if($model[0]->cartCartItem->cart_order_status==3)
	            					echo 'Completed'; 
	            				?>
	            			</span2>
	            		</li>
	            		<li>
	            			<span1><b>Customer name: </b></span1>
	            			<span2><?php echo ucwords($model[0]->cartCartItem->userCart->u_first_name." ".$model[0]->cartCartItem->userCart->u_last_name); ?></span2>
	            		</li>
	            		<li>
	            			<span1><b>Customer email: </b></span1>
	            			<span2><?php echo $model[0]->cartCartItem->userCart->u_email; ?></span2>
	            		</li>
	            		<li>
	            			<span1><b>Change Status: </b></span1>
	            			<span2>
	            				<select name="change_status" id="change_status" rel=<?php echo $model[0]->cartCartItem->cart_id; ?>"">
	            					<option value="">Select status</option>
	            					<option value="0">Pending</option>
	            					<option value="1">Under process</option>
	            					<option value="2">Deliver</option>
	            					<option value="3">Complete</option>
	            				</select>
	            			</span2>
	            		</li>
	            	</ul>
            	</div>
            	<?php
            	$i = 0;
            	$j = 0;
            	if(!empty($model)){
            		foreach ($model as $fabKey => $fabArr) {
            			if($fabArr->citm_item_id==0){
	            			if($i==0){
			            		?>
				            	<div class="itemHeading"><b>Fabric Details</b></div>
				            	<?php
			            	}
			            	?>
			            	<div class="itemBody">
				            	<ul>
				            		<li>
				            			<span1><b>Fabric Name : </b></span1>
				            			<span2>
				            				<?php 
				            				$type = '';
					            			$fabCustArr = array();
					            			if($customizatiosData[$fabArr->citm_id]['product']==1){ //Shirt
					            				$type = 'Shirt';
					            				$fabCustArr = $customizatiosData[$fabArr->citm_id]['shirt'];
					            				$fabid = $customizatiosData[$fabArr->citm_id]['shirt']['fabid'];
					            				unset($fabCustArr['fabid']);
					            			}else if($customizatiosData[$fabArr->citm_id]['product']==2){ //Trouser
					            				$type = 'Trouser';
					            				$fabCustArr = $customizatiosData[$fabArr->citm_id]['trouser'];
					            				$fabid = $customizatiosData[$fabArr->citm_id]['trouser']['fabid'];	
					            			}else if($customizatiosData[$fabArr->citm_id]['product']==3){ //Blazer
					            				$type = 'Blazer';
					            				$fabCustArr = $customizatiosData[$fabArr->citm_id]['blazer'];
					            				$fabid = $customizatiosData[$fabArr->citm_id]['blazer']['fabid'];
					            			}else if($customizatiosData[$fabArr->citm_id]['product']==4){ //Suit
					            				$type = 'Suit';
					            				$fabCustArr = $customizatiosData[$fabArr->citm_id]['suit'];
					            				$fabid = $customizatiosData[$fabArr->citm_id]['suit']['fabid'];	
					            			}
				            				echo $fabrics[$fabid];
				            				?>
				            			</span2>
				            		</li>
				            		<li>
				            			<span1><b>Price : </b></span1>
				            			<span2><?php echo $fabArr->citm_price; ?></span2>
				            		</li>
				            		<li>
				            			<span1><b>Discount : </b></span1>
				            			<span2><?php echo $fabArr->citm_discount; ?></span2>
				            		</li>
				            		<li>
				            			<span1><b>Quantity : </b></span1>
				            			<span2><?php echo $fabArr->citm_qty; ?></span2>
				            		</li>
				            		<li>
				            			<span1><b>Color: </b></span1>
				            			<span2><?php echo Yii::app()->params['fabColors'][$fabArr->citm_color]; ?></span2>
				            		</li>
				            		<li>
				            			<span1><b>Pattern: </b></span1>
				            			<span2><?php echo Yii::app()->params['fabPattern'][$fabArr->citm_pattern]; ?></span2>
				            		</li>
				            		<li>
				            			<span1><b>Fabric: </b></span1>
				            			<span2><?php echo Yii::app()->params['fabrics'][$fabArr->citm_fabric]; ?></span2>
				            		</li>
				            		<li>
				            			<b>Fabric Customizations : </b>
				            			<ul>
				            				<?php
				            				foreach ($fabCustArr as $cKey => $cVal) {
				            					?>
				            					<li>
				            						<span1><b><?php echo ucwords($cKey); ?>: </b></span1>
				            						<span2>
				            							<?php 
				            							if($cKey=='button')
				            								echo $buttons[$cVal]; 
				            							else
				            								echo $cVal;
				            							?>
				            						</span2>
				            					</li>
				            					<?php
				            				}
				            				?>				            				
				            			</ul>
				            		</li>
				            	</ul>
				            </div>
				            <?php
				            $i++;
			        	}
			        	if(!empty($fabArr->citm_item_id)){
	            			if($j==0){
			            		?>
				            	<div class="itemHeading"><b>Item Details</b></div>
				            	<?php
			            	}
			            	?>
			            	<div class="itemBody">
				            	<ul>
				            		<li>
				            			<span1><b>Item Name : </b></span1>
				            			<span2><?php echo $fabArr->cartItem->itm_name; ?></span2>
				            		</li>
				            		<li>
				            			<span1><b>Price : </b></span1>
				            			<span2><?php echo $fabArr->citm_price; ?></span2>
				            		</li>
				            		<li>
				            			<span1><b>Discount : </b></span1>
				            			<span2><?php echo $fabArr->citm_discount; ?></span2>
				            		</li>
				            		<li>
				            			<span1><b>Quantity : </b></span1>
				            			<span2><?php echo $fabArr->citm_qty; ?></span2>
				            		</li>
				            		
				            	</ul>
				            </div>
				            <?php
				            $j++;
			        	}
		        	}
	        	}
	            ?>	            
            </div>
        </div>
    </div>
</div>
<script type="text/javascript">
	$('#change_status').change(function(){
		var value = $(this).val();
		var id = $(this).attr('rel');
		$.ajax({
          type:'POST',
          url:'<?php echo Yii::app()->baseUrl; ?>/admin/items/updatestatus',
          data:{id:id,val:value},
          success:function(data){
          	if(data){
          		if(data=='success'){
          			var status = $('#change_status option:selected').text();
          			$('.orderStatus').html(status);
          			alert('Status updated successfully.');
          		}
          		else if(data=='error')
          			alert('Status not updated. Something went wrong.');
          	}
          },
        });
	});
</script>