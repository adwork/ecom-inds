<li> 
	<a href="javascript:void(0);" class="buttonClick" id="<?php echo $data->but_id; ?>">
		<div>
			<img src="<?php echo Yii::app()->baseUrl; ?>/storage/buttons/<?php echo $data->but_image; ?>">
		</div>
		<div>
			<b>
			<?php
			echo $data->but_name;
			?>
			</b>
		</div>
		<div>
			<b>
			₹
			<?php
			echo $data->but_price;
			?>
			</b>
		</div>
	</a>
</li>