<style type="text/css">
	.panel-body ul li{
		list-style: none;
		line-height: 30px;
	}
	.panel-body ul li span1{
		display: inline-block;
		width: 30%;
	}
	.panel-body ul li span2{
		display: inline-block;
		width: 68%;
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
	            			<span1><b>Billing / Shipping Address: </b></span1>
	            			<span2><?php echo CHtml::link('View',array('user/viewaddress','id'=>$model[0]->cartCartItem->userCart->u_id)); ?></span2>
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
				            				echo $fabrics[$fabid]->fab_name;
				            				?>
				            			</span2>
				            		</li>
				            		<li>
				            			<span1><b>Image : </b></span1>
				            			<span2><img src="<?php echo Yii::app()->baseUrl; ?>/storage/fabrics/<?php echo $fabrics[$fabid]->fab_image; ?>" width="150"></span2>
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
				            		<?php
				            		if(!empty($fabArr->cartUserMeasurement)){
				            			$sizes = array(
											1 => '37 (14.75in)',
											2 => '38 (15in)',
											3 => '39 (15.5in)',
											4 => '40 (15.75in)',
											5 => '41 (16in)',
											6 => '42 (16.5in)',
											7 => '43 (17in)',
											8 => '44 (17.25in)',
											9 => '45 (17.5in)'
										);
										$collorSizes = array(
											"14" => '14 in.',
											"14.5" => '14.5 in.',
											"15" => '15 in. (Default)',
											"15.5" => '15.5 in.',
											"16" => '16 in.',
										);
										$shirtLength = array(
											"24" => '24 in.',
											"25" => '25 in.',
											"26" => '26 in.',
											"27" => '27 in.',
											"28" => '28 in.(Default)',
											"29" => '29 in.',
											"30" => '30 in.',
											"31" => '31 in.',
											"32" => '32 in.',
										);
										$longSleeve = array(
											"22" => '22 in.',
											"22.5" => '22.5 in.',
											"23" => '23 in.',
											"23.5" => '23.5 in.',
											"24" => '24 in. (Default)',
											"24.5" => '24.5 in.',
											"25" => '25 in.',
											"25.5" => '25.5 in.',
											"26" => '26 in.',
											"26.5" => '26.5 in.',
										);
										$shortSleeve = array(
											"7.5" => '7.5 in.',
											"8" => '8 in.',
											"8.5" => '8.5 in.',
											"9" => '9 in. (Default)',
											"9.5" => '9.5 in.',
											"10" => '10 in.',
											"10.5" => '10.5 in.',
										);
										$fit = array(1 => 'Regular Fit',2 => 'Slim Fit');
					            		?>
					            		<li>
					            			<div><b>User Measurements</b></div>
					            			<div>
					            				<span><b>Name :</b> </span>
				            					<span><?php echo $fabArr->cartUserMeasurement->umr_name; ?></span>
				            				</div>				            			
					            			<?php 
					            			switch ($fabArr->cartUserMeasurement->umr_type) {
					            				case '0':
					            					?>
					            					<div>
							            				<span><b>Size :</b> </span>
						            					<span><?php echo @$sizes[$fabArr->cartUserMeasurement->umr_size]; ?></span>
						            				</div>				            			
						            				<div>
							            				<span><b>Fit :</b> </span>
						            					<span><?php echo @$fit[$fabArr->cartUserMeasurement->umr_fit]; ?></span>
						            				</div>				            			
						            				<div>
							            				<span><b>Collor :</b> </span>
						            					<span><?php echo @$collorSizes[$fabArr->cartUserMeasurement->umr_collor]; ?></span>
						            				</div>				            			
						            				<div>
							            				<span><b>Shirt Length :</b> </span>
						            					<span><?php echo @$shirtLength[$fabArr->cartUserMeasurement->umr_shirt_length]; ?></span>
						            				</div>				            			
						            				<div>
							            				<span><b>Long Sleeve Length :</b> </span>
						            					<span><?php echo @$longSleeve[$fabArr->cartUserMeasurement->umr_long_sleeve]; ?></span>
						            				</div>				            			
						            				<div>
							            				<span><b>Short Sleeve Length :</b> </span>
						            					<span><?php echo @$shortSleeve[$fabArr->cartUserMeasurement->umr_short_sleeve]; ?></span>
						            				</div>				            			
					            					<?php
					            					break;
					            				
					            				case '1':
					            					?>
					            					<?php
					            					break;

					            				case '2':
					            					?>
					            					<div>
							            				<span><b>Collor :</b> </span>
						            					<span><?php echo @$fabArr->cartUserMeasurement->umr_collor; ?>(inches)</span>
						            				</div>
						            				<div>
							            				<span><b>Shoulder :</b> </span>
						            					<span><?php echo @$fabArr->cartUserMeasurement->umr_shoulder; ?>(inches)</span>
						            				</div>
						            				<div>
							            				<span><b>Chest(half) :</b> </span>
						            					<span><?php echo @$fabArr->cartUserMeasurement->umr_chest_half; ?>(inches)</span>
						            				</div>
						            				<div>
							            				<span><b>Mid Section(half) :</b> </span>
						            					<span><?php echo @$fabArr->cartUserMeasurement->umr_mid_section_half; ?>(inches)</span>
						            				</div>
						            				<div>
							            				<span><b>Hip(half) :</b> </span>
						            					<span><?php echo @$fabArr->cartUserMeasurement->umr_hip_half; ?>(inches)</span>
						            				</div>
						            				<div>
							            				<span><b>Shirt length :</b> </span>
						            					<span><?php echo @$fabArr->cartUserMeasurement->umr_shirt_length; ?>(inches)</span>
						            				</div>
						            				<div>
							            				<span><b>Long sleeve length :</b> </span>
						            					<span><?php echo @$fabArr->cartUserMeasurement->umr_long_sleeve; ?>(inches)</span>
						            				</div>
						            				<div>
							            				<span><b>Short sleeve length :</b> </span>
						            					<span><?php echo @$fabArr->cartUserMeasurement->umr_short_sleeve; ?>(inches)</span>
						            				</div>
						            				<div>
							            				<span><b>Short sleeve opening :</b> </span>
						            					<span><?php echo @$fabArr->cartUserMeasurement->umr_short_sleeve_opening; ?>(inches)</span>
						            				</div>
						            				<div>
							            				<span><b>Arm half :</b> </span>
						            					<span><?php echo @$fabArr->cartUserMeasurement->umr_arm_half; ?>(inches)</span>
						            				</div>
						            				<div>
							            				<span><b>Cuff :</b> </span>
						            					<span><?php echo @$fabArr->cartUserMeasurement->umr_cuff; ?>(inches)</span>
						            				</div>
					            					<?php
					            					break;

					            				case '3':
					            					?>
					            					<div>
							            				<span><b>Height :</b> </span>
						            					<span><?php echo @$fabArr->cartUserMeasurement->umr_height; ?>(feet)&nbsp;<?php echo @$fabArr->cartUserMeasurement->umr_feet; ?>(inch)</span>
						            				</div>
						            				<div>
							            				<span><b>Weight :</b> </span>
						            					<span><?php echo @$fabArr->cartUserMeasurement->umr_weight; ?>(Kgs)</span>
						            				</div>
						            				<div>
							            				<span><b>What type of shirt fit do you prefer? :</b> </span>
						            					<span><?php echo @$fit[$fabArr->cartUserMeasurement->umr_fit]; ?></span>
						            				</div>
						            				<div>
							            				<span><b>How would you describe your arms? :</b> </span>
						            					<span>
						            						<?php 
						            						$arms = array(
										        				'1'=>'Not muscular',
										        				'2'=>'Slightly muscular',
										        				'3'=>'My arms are muscular'
										        			);
						            						echo @$arms[$fabArr->cartUserMeasurement->umr_describe_arms]; 
						            						?>
						            					</span>
						            				</div>
						            				<div>
							            				<span><b>How do you like to wear your shirt? :</b> </span>
						            					<span>
						            						<?php 
						            						$wearshirt = array(
										        				'1'=>'I keep my shirt tucked in at all times',
										        				'2'=>'I keep my shirt tucked out and I prefer a short length',
										        				'3'=>'I keep my shirt tucked out, but I prefer a longer length',
										        				'4'=>'I sometimes tuck in my shirt and sometimes keep it out'
										        			);
						            						echo @$wearshirt[$fabArr->cartUserMeasurement->umr_wear_shirt]; 
						            						?>
						            					</span>
						            				</div>
						            				<div>
							            				<span><b>How do you like to wear your short sleeves? :</b> </span>
						            					<span>
						            						<?php 
						            						$shortsleeves = array(
										        				'0'=>'I prefer formal short sleeves (Formal short sleeves end closer to the elbow).',
										        				'1'=>'I prefer casual short sleeves (Casual short sleeves end about mid-way between the shoulder and elbow).',
										        				'2'=>'I never wear short sleeves'				        				
										        			);
						            						echo @$shortsleeves[$fabArr->cartUserMeasurement->umr_prefer_wear]; 
						            						?>
						            					</span>
						            				</div>
						            				<div>
							            				<span><b>Stomach Measurement :</b> </span>
						            					<span><?php echo @$fabArr->cartUserMeasurement->umr_stomach; ?>(inches)</span>
						            				</div>
						            				<div>
							            				<span><b>Hip Measurement :</b> </span>
						            					<span><?php echo @$fabArr->cartUserMeasurement->umr_hip; ?>(inches)</span>
						            				</div>
						            				<div>
							            				<span><b>Chest Measurement :</b> </span>
						            					<span><?php echo @$fabArr->cartUserMeasurement->umr_chest; ?>(inches)</span>
						            				</div>
						            				<div>
							            				<span><b>Collar Measurement (Estimated size: 15 inches) :</b> </span>
						            					<span><?php echo @$fabArr->cartUserMeasurement->umr_collor_measurment; ?>(inches)</span>
						            				</div>
						            				<div>
							            				<span><b>Shoulder structure in comparison to your chest :</b> </span>
						            					<span>
						            						<?php 
						            						$shoulderstructure = array(
						            							1 => 'Noticed only in overweight men. For such men, readymade shirts droop significantly at the shoulders',
						            							2 => 'Such men have rounded or sloping shoulders and find that readymade shirts droop at their shoulders',
						            							3 => "More than 60% of men fall in this category, so don't be surprise if you do too",
						            							4 => 'Noticed in skinny men with a wide shoulder frame and in men with very muscular shoulders'
						            						);
						            						echo @$shoulderstructure[$fabArr->cartUserMeasurement->umr_shoulder_structure]; 
						            						?>
						            					</span>
						            				</div>
						            				<?php
					            					break;
					            			}
					            			?>					            			
					            		</li>
					            		<?php
				            		}
				            		?>
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
				            			<span1><b>Image : </b></span1>
				            			<span2><img src="<?php echo Yii::app()->baseUrl; ?>/storage/products/<?php echo $fabArr->cartItem->itm_photo; ?>" width="150"></span2>
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