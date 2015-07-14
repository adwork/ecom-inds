<?php

/**
 * This is the model class for table "{{cart_items}}".
 *
 * The followings are the available columns in table '{{cart_items}}':
 * @property integer $citm_id
 * @property integer $citm_cart_id
 * @property integer $citm_item_id
 * @property double $citm_price
 * @property double $citm_discount
 * @property integer $citm_color
 * @property integer $citm_pattern
 * @property integer $citm_fabric
 * @property integer $citm_type
 * @property string $citm_customization
 * @property string $citm_measurement
 * @property integer $citm_rental
 * @property string $citm_created
 * @property string $citm_modified
 */
class CartItems extends CActiveRecord
{
	/**
	 * @return string the associated database table name
	 */
	public function tableName()
	{
		return '{{cart_items}}';
	}

	/**
	 * @return array validation rules for model attributes.
	 */
	public function rules()
	{
		// NOTE: you should only define rules for those attributes that
		// will receive user inputs.
		return array(
			array('citm_id, citm_cart_id, citm_item_id, citm_price', 'required'),
			array('citm_id, citm_cart_id, citm_item_id, citm_color, citm_pattern, citm_fabric, citm_type, citm_rental', 'numerical', 'integerOnly'=>true),
			array('citm_price, citm_discount', 'numerical'),

			array('citm_discount, citm_customization, citm_measurement, citm_rental, citm_created, citm_modified, citm_qty','safe'),

			// The following rule is used by search().
			// @todo Please remove those attributes that should not be searched.
			array('citm_id, citm_cart_id, citm_item_id, citm_price, citm_discount, citm_color, citm_pattern, citm_fabric, citm_type, citm_customization, citm_measurement, citm_rental, citm_created, citm_modified', 'safe', 'on'=>'search'),
		);
	}

	/**
	 * @return array relational rules.
	 */
	public function relations()
	{
		// NOTE: you may need to adjust the relation name and the related
		// class name for the relations automatically generated below.
		return array(
			'cartCartItem'=>array(self::BELONGS_TO, 'Cart','citm_cart_id'),
			'cartItem'=>array(self::BELONGS_TO, 'Items','citm_item_id'),
		);
	}

	/**
	 * @return array customized attribute labels (name=>label)
	 */
	public function attributeLabels()
	{
		return array(
			'citm_id' => 'Citm',
			'citm_cart_id' => 'Citm Cart',
			'citm_item_id' => 'Citm Item',
			'citm_price' => 'Citm Price',
			'citm_discount' => 'Citm Discount',
			'citm_color' => 'Citm Color',
			'citm_pattern' => 'Citm Pattern',
			'citm_fabric' => 'Citm Fabric',
			'citm_type' => '0=Normal product, 1= Rental product, 2=Customization, 3=User will send product for measurment',
			'citm_customization' => 'Citm Customization',
			'citm_measurement' => 'Citm Measurement',
			'citm_rental' => 'Citm Rental',
			'citm_created' => 'Citm Created',
			'citm_modified' => 'Citm Modified',
		);
	}

	/**
	 * Retrieves a list of models based on the current search/filter conditions.
	 *
	 * Typical usecase:
	 * - Initialize the model fields with values from filter form.
	 * - Execute this method to get CActiveDataProvider instance which will filter
	 * models according to data in model fields.
	 * - Pass data provider to CGridView, CListView or any similar widget.
	 *
	 * @return CActiveDataProvider the data provider that can return the models
	 * based on the search/filter conditions.
	 */
	public function search()
	{
		// @todo Please modify the following code to remove attributes that should not be searched.

		$criteria=new CDbCriteria;

		$criteria->compare('citm_id',$this->citm_id);
		$criteria->compare('citm_cart_id',$this->citm_cart_id);
		$criteria->compare('citm_item_id',$this->citm_item_id);
		$criteria->compare('citm_price',$this->citm_price);
		$criteria->compare('citm_discount',$this->citm_discount);
		$criteria->compare('citm_color',$this->citm_color);
		$criteria->compare('citm_pattern',$this->citm_pattern);
		$criteria->compare('citm_fabric',$this->citm_fabric);
		$criteria->compare('citm_type',$this->citm_type);
		$criteria->compare('citm_customization',$this->citm_customization,true);
		$criteria->compare('citm_measurement',$this->citm_measurement,true);
		$criteria->compare('citm_rental',$this->citm_rental);
		$criteria->compare('citm_created',$this->citm_created,true);
		$criteria->compare('citm_modified',$this->citm_modified,true);

		return new CActiveDataProvider($this, array(
			'criteria'=>$criteria,
		));
	}

	/**
	 * Returns the static model of the specified AR class.
	 * Please note that you should have this exact method in all your CActiveRecord descendants!
	 * @param string $className active record class name.
	 * @return CartItems the static model class
	 */
	public static function model($className=__CLASS__)
	{
		return parent::model($className);
	}

	public function behaviors(){
		return array(
			'CTimestampBehavior' => array(
				'class' => 'zii.behaviors.CTimestampBehavior',
				'createAttribute' => 'citm_created',
				'updateAttribute' => 'citm_modified',
				'setUpdateOnCreate'=> true
			)
		);
	}
}
