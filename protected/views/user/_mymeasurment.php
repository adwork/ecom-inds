<style type="text/css">
	.mymeasurment .details{
		padding: 5px;
		background: #EEE;
	}
	.mymeasurment .left{
		float: left;
	}
	.mymeasurment .right{
		float: right;
	}
	.mymeasurment .sleeve_buttons{
		float:right;margin-right:5px;display: none;
	}
	.mymeasurment .details ul li{
		display: inline-block;
	}
	.mymeasurment .details ul li.srno{
		min-width: 2%;
	}
	.mymeasurment .details ul li.name{
		min-width: 78%;
	}
	.mymeasurment .details ul li.view{
		min-width: 9%;
	}
	.mymeasurment .details ul li.delete{
		min-width: 9%;
	}
</style>
<div class="mymeasurment">
	<div>
		<div class="left"><b>Standard Sizes</b></div>
		<div class="right addbuttons">
			<?php echo CHtml::link('Add','javascript:void(0);',array('class' => 'btn btn-primary','id' => 'addstandardsizes')); ?>
		</div>
		<div class="sleeve_buttons">
			<?php echo CHtml::link('Short Sleeve Profile',array('userMeasurements/create','type' => 1),array('class' => 'btn btn-primary','data-toggle' => 'modal' ,'data-target' => '#measurementModal1')); ?>
			<?php echo CHtml::link('Long Sleeve Profile',array('userMeasurements/create','type' => 2),array('class' => 'btn btn-primary','data-toggle' => 'modal' ,'data-target' => '#measurementModal2')); ?>
			<?php echo CHtml::link('X','javascript:void(0);',array('class' => 'btn btn-primary closebuttons')); ?>
		</div>
		<div style="clear:both;"></div>
	</div>
	<div class="details">
		<?php
		if(!empty($userMesurements[0])){
			foreach ($userMesurements[0] as $stKey => $stArr) {
				?>
				<div>
					<ul>
						<li class="srno"><?php echo ($stKey+1); ?>.</li>
						<li class="name"><?php echo $stArr->umr_name; ?></li>
						<li class="view">View</li>
						<li class="delete">Delete</li>
					</ul>
				</div>
				<div>&nbsp;</div>
				<?php
			}
		}else{
			?>
			<div>You have no measurement profile saved under this option.</div>
			<?php
		}
		?>		
	</div>
	<div>&nbsp;</div>
	<div>
		<div class="left"><b>Send a Shirt</b></div>
		<div class="right">
			<?php echo CHtml::link('Add',array('userMeasurements/create','type' => 3),array('class' => 'btn btn-primary','data-toggle' => 'modal' ,'data-target' => '#measurementModal3')); ?>
		</div>
		<div style="clear:both;"></div>
	</div>
	<div class="details">
		<?php
		if(!empty($userMesurements[1])){
			foreach ($userMesurements[1] as $ssKey => $ssArr) {
				?>
				<div>
					<ul>
						<li class="srno"><?php echo ($ssKey+1); ?>.</li>
						<li class="name"><?php echo $ssArr->umr_name; ?></li>
						<li class="view">View</li>
						<li class="delete">Delete</li>
					</ul>
				</div>
				<div>&nbsp;</div>
				<?php
			}
		}else{
			?>
			<div>You have no measurement profile saved under this option.</div>
			<?php
		}
		?>
	</div>
	<div>&nbsp;</div>
	<div>
		<div class="left"><b>Shirt Measurements</b></div>
		<div class="right addbuttons">
			<?php echo CHtml::link('Add','javascript:void(0);',array('class' => 'btn btn-primary','id' => 'addshirtmeasurement')); ?>
		</div>
		<div class="sleeve_buttons">
			<?php echo CHtml::link('Short Sleeve Profile',array('userMeasurements/create','type' => 4),array('class' => 'btn btn-primary','data-toggle' => 'modal' ,'data-target' => '#measurementModal4')); ?>
			<?php echo CHtml::link('Long Sleeve Profile',array('userMeasurements/create','type' => 5),array('class' => 'btn btn-primary','data-toggle' => 'modal' ,'data-target' => '#measurementModal5')); ?>
			<?php echo CHtml::link('X','javascript:void(0);',array('class' => 'btn btn-primary closebuttons')); ?>
		</div>
		<div style="clear:both;"></div>
	</div>
	<div class="details">
		<?php
		if(!empty($userMesurements[2])){
			foreach ($userMesurements[2] as $smKey => $smArr) {
				?>
				<div>
					<ul>
						<li class="srno"><?php echo ($smKey+1); ?>.</li>
						<li class="name"><?php echo $smArr->umr_name; ?></li>
						<li class="view">View</li>
						<li class="delete">Delete</li>
					</ul>
				</div>
				<div>&nbsp;</div>
				<?php
			}
		}else{
			?>
			<div>You have no measurement profile saved under this option.</div>
			<?php
		}
		?>
	</div>
	<div>&nbsp;</div>
	<div>
		<div class="left"><b>Body Measurements</b></div>
		<div class="right">
			<?php echo CHtml::link('Add',array('userMeasurements/create','type' => 6),array('class' => 'btn btn-primary','data-toggle' => 'modal' ,'data-target' => '#measurementModal6')); ?>
		</div>
		<div style="clear:both;"></div>
	</div>
	<div class="details">
		<?php
		if(!empty($userMesurements[3])){
			foreach ($userMesurements[3] as $bmKey => $bmArr) {
				?>
				<div>
					<ul>
						<li class="srno"><?php echo ($bmKey+1); ?>.</li>
						<li class="name"><?php echo $bmArr->umr_name; ?></li>
						<li class="view">View</li>
						<li class="delete">Delete</li>
					</ul>
				</div>
				<div>&nbsp;</div>
				<?php
			}
		}else{
			?>
			<div>You have no measurement profile saved under this option.</div>
			<?php
		}
		?>
	</div>
</div>
<div class="modal fade modal-lg" id="measurementModal1" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
        <h4 class="modal-title" id="myModalLabel">Standard Size</h4>
      </div>
      <div class="modal-body">
          
      </div>       
    </div>
  </div>
</div>
<div class="modal fade modal-lg" id="measurementModal2" tabindex="-1" role="dialog" aria-labelledby="myModalLabel"></div>
<div class="modal fade" id="measurementModal3" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
        <h4 class="modal-title" id="myModalLabel">Send a shirt</h4>
      </div>
      <div class="modal-body">
          
      </div>       
    </div>
  </div>
</div>
<div class="modal fade modal-lg" id="measurementModal4" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
        <h4 class="modal-title" id="myModalLabel">Shirt Measurements</h4>
      </div>
      <div class="modal-body">
          
      </div>       
    </div>
  </div>
</div>
<div class="modal fade modal-lg" id="measurementModal5" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
        <h4 class="modal-title" id="myModalLabel">Shirt Measurements</h4>
      </div>
      <div class="modal-body">
          
      </div>       
    </div>
  </div>
</div>
<div class="modal fade modal-lg" id="measurementModal6" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
        <h4 class="modal-title" id="myModalLabel">Body Measurements</h4>
      </div>
      <div class="modal-body">
          
      </div>       
    </div>
  </div>
</div>
<script type="text/javascript">
	$(document).ready(function() {
		$('.closebuttons').click(function(event) {
			$(this).parent().hide('slow');
			$(this).parent().parent().find('.addbuttons').show('slow');
		});
		$('#addstandardsizes, #addshirtmeasurement').click(function(event) {
			if($(this).parent().parent().find('.sleeve_buttons').is(':hidden')){
				$(this).parent().parent().find('.sleeve_buttons').show('slow');
				$(this).parent().hide('slow');
			}else{
				$(this).parent().parent().find('.sleeve_buttons').hide('slow');
				$(this).parent().show('slow');
			}
		});
	});
</script>