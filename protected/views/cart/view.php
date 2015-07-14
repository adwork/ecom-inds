<div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
        <h4 class="modal-title" id="myModalLabel">Items in your cart</h4>
      </div>
      <div class="modal-body" id="cartBody">
      	<table width="100%">
      		<thead>
      			<tr>
      				<th align="center">Product Name</th>
      				<th align="right">Price</th>
      				<th align="right">Qty.</th>
      				<th align="center">Update Qty.</th>
      				<th align="right">Total</th>
                              <th align="center">Remove</th>
      			</tr>
      		</thead>
      		<tbody>
                        <?php
                        $gTotal = 0;
                        if((!empty($items) || !empty($fabrics)) && !empty($cart_items)){
                              foreach ($items as $key => $itemArr) {
                                    ?>
                                    <tr style="border-bottom:1px solid #CCC;margin-bottom:5px;">
                                          <td align="center">
                                                <div>
                                                      <?php echo $itemArr->itm_name; ?>
                                                </div>
                                                <div>
                                                      <img src="<?php echo Yii::app()->baseUrl; ?>/storage/products/<?php echo $itemArr->itm_photo; ?>" width="50">
                                                </div>
                                          </td>
                                          <td align="right"><?php echo $itemArr->itm_price; ?></td>
                                          <td align="right"><?php echo $cart_items['item'][$itemArr->itm_id]['qty']; ?></td>
                                          <td align="center">
                                                <input type="text" name="updateqty" class="span1 updateqty" rel="<?php echo $itemArr->itm_id; ?>" itype="item">
                                          </td>
                                          <td align="right">
                                                <?php 
                                                $itemPrice = ($itemArr->itm_price*$cart_items['item'][$itemArr->itm_id]['qty']);
                                                echo $itemPrice; 
                                                ?>
                                          </td>
                                          <td align="center">
                                                <a href="<?php echo Yii::app()->baseUrl; ?>/cart/removeitem" rel="<?php echo $itemArr->itm_id; ?>" class="removeItem" type="item">X</a>
                                          </td>
                                    </tr>
                                    <?php
                                    $gTotal += $itemPrice;
                              }
                              foreach ($fabrics as $key2 => $fabricArr) {
                                    ?>
                                    <tr style="border-bottom:1px solid #CCC;margin-bottom:5px;">
                                          <td align="center">
                                                <div>
                                                      <?php echo $fabricArr->fab_name; ?>
                                                </div>
                                                <div>
                                                      <img src="<?php echo Yii::app()->baseUrl; ?>/storage/fabrics/<?php echo $fabricArr->fab_image; ?>" width="50">
                                                </div>
                                          </td>
                                          <td align="right"><?php echo $fabricArr->fab_price; ?></td>
                                          <td align="right"><?php echo $cart_items['fabric'][$fabricArr->fab_id]['qty']; ?></td>
                                          <td align="center">
                                                <input type="text" name="updateqty" class="span1 updateqty" rel="<?php echo $fabricArr->fab_id; ?>" itype="fabric">
                                          </td>
                                          <td align="right">
                                                <?php 
                                                $fabPrice = ($fabricArr->fab_price*$cart_items['fabric'][$fabricArr->fab_id]['qty']);
                                                echo $fabPrice; 
                                                ?>
                                          </td>
                                          <td align="center">
                                                <a href="<?php echo Yii::app()->baseUrl; ?>/cart/removeitem" rel="<?php echo $fabricArr->fab_id; ?>" class="removeItem" type="fabric">X</a>
                                          </td>
                                    </tr>
                                    <?php
                                    $gTotal += $fabPrice;
                              }                              
                        }else{
                              ?>
                              <tr>
                                    <td colspan="6" style="color:red;">There are no items in your cart.</td>
                              </tr>
                              <?php
                        }
                        ?>   			
      		</tbody>
      		<tfoot>
      			<tr>
      				<td align="right" colspan="4">
      					<b>Total Amount</b>
      				</td>
      				<td align="right"><b><?php echo $gTotal; ?></b></td>
                              <td>&nbsp;</td>
      			</tr>
      		</tfoot>
      	</table>
      </div>
      <div class="modal-footer">
      	<!-- <button type="button" class="btn btn-primary">More Shopping</button> -->
      	<button type="button" class="btn btn-primary">Checkout</button>        
      </div>
    </div>
</div>
<script type="text/javascript">
  $(document).ready(function(){
      $('body').on('click','a',function(e){
          e.preventDefault();
          var con = confirm('Are you sure want to delete this record?');
          var id = $(this).attr('rel');
          var type = $(this).attr('type');
          var url = $(this).attr('href');
          if(con){
                $.ajax({
                  type:'POST',
                  url:url,
                  data:{id:id,type:type},
                  success:function(html){
                        var url = '<?php echo Yii::app()->baseUrl; ?>/cartitems';
                        $("#cartModal .modal-dialog").load(url, function() { 
                           $("#cartModal").modal("show"); 
                        });
                  },
                });
            }
      });

      $('body').on('blur','.updateqty',function(){
            var val = $(this).val();
            var id = $(this).attr('rel');
            var url = '<?php echo Yii::app()->baseUrl; ?>/cart/updateqty';
            var type = $(this).attr('itype');
            $.ajax({
                  type:'POST',
                  url:url,
                  data:{id:id,qty:val,type:type},
                  success:function(html){
                        var url = '<?php echo Yii::app()->baseUrl; ?>/cartitems';
                        $("#cartModal .modal-dialog").load(url, function() { 
                           $("#cartModal").modal("show"); 
                        });
                  },
            });
      });
  });
</script>