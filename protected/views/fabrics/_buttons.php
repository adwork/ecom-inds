<li> 
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
</li>