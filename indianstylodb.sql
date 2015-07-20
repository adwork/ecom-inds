-- phpMyAdmin SQL Dump
-- version 4.0.10deb1
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Jul 20, 2015 at 08:49 AM
-- Server version: 5.5.41-0ubuntu0.14.04.1
-- PHP Version: 5.5.9-1ubuntu4.11

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `indianstylodb`
--

-- --------------------------------------------------------

--
-- Table structure for table `inds_authassignment`
--

CREATE TABLE IF NOT EXISTS `inds_authassignment` (
  `itemname` varchar(64) NOT NULL,
  `userid` varchar(64) NOT NULL,
  `bizrule` text,
  `data` text,
  PRIMARY KEY (`itemname`,`userid`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `inds_authassignment`
--

INSERT INTO `inds_authassignment` (`itemname`, `userid`, `bizrule`, `data`) VALUES
('admin', '1', NULL, NULL),
('member', '2', NULL, NULL),
('member', '3', NULL, 'N;'),
('member', '4', NULL, 'N;'),
('member', '5', NULL, 'N;');

-- --------------------------------------------------------

--
-- Table structure for table `inds_authitem`
--

CREATE TABLE IF NOT EXISTS `inds_authitem` (
  `name` varchar(64) NOT NULL,
  `type` int(11) NOT NULL COMMENT '1 for action 2 for role',
  `description` text,
  `bizrule` text,
  `data` text,
  PRIMARY KEY (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `inds_authitem`
--

INSERT INTO `inds_authitem` (`name`, `type`, `description`, `bizrule`, `data`) VALUES
('admin', 2, NULL, NULL, NULL),
('AdminButtonsCreate', 1, NULL, NULL, NULL),
('AdminButtonsDelete', 1, NULL, NULL, NULL),
('AdminButtonsIndex', 1, NULL, NULL, NULL),
('AdminButtonsUpdate', 1, NULL, NULL, NULL),
('AdminCategoriesCreate', 1, '', '', 's:0:"";'),
('AdminCategoriesDelete', 1, '', '', 's:0:"";'),
('AdminCategoriesIndex', 1, '', '', 's:0:"";'),
('AdminCategoriesUpdate', 1, '', '', 's:0:"";'),
('AdminCmspageAccessdenied', 1, '', '', 's:0:"";'),
('AdminCmspageEdit', 1, '', '', 's:0:"";'),
('AdminCmspageIndex', 1, '', '', 's:0:"";'),
('AdminEmailmanagerEdit', 1, '', '', 's:0:"";'),
('AdminEmailmanagerIndex', 1, '', '', 's:0:"";'),
('AdminFabricsAddbuttons', 1, NULL, NULL, NULL),
('AdminFabricsCreate', 1, NULL, NULL, NULL),
('AdminFabricsDelete', 1, NULL, NULL, NULL),
('AdminFabricsImageexist', 1, NULL, NULL, NULL),
('AdminFabricsIndex', 1, NULL, NULL, NULL),
('AdminFabricsUpdate', 1, NULL, NULL, NULL),
('AdminFabricsUploadcustomizeimages', 1, NULL, NULL, NULL),
('AdminFabricsUploadimages', 1, NULL, NULL, NULL),
('AdminItemsCreate', 1, NULL, NULL, NULL),
('AdminItemsDelete', 1, NULL, NULL, NULL),
('AdminItemsIndex', 1, NULL, NULL, NULL),
('AdminItemsOrders', 1, NULL, NULL, NULL),
('AdminItemsUpdate', 1, NULL, NULL, NULL),
('AdminItemsVieworders', 1, NULL, NULL, NULL),
('AdminProductsAddimages', 1, '', '', 's:0:"";'),
('AdminProductsAddsizes', 1, '', '', 's:0:"";'),
('AdminProductsCreate', 1, '', '', 's:0:"";'),
('AdminProductsDelete', 1, '', '', 's:0:"";'),
('AdminProductsIndex', 1, '', '', 's:0:"";'),
('AdminProductsUpdate', 1, '', '', 's:0:"";'),
('AdminProductsUpload', 1, '', '', 's:0:"";'),
('AdminProductsView', 1, '', '', 's:0:"";'),
('AdminSeoPagesCreate', 1, NULL, NULL, NULL),
('AdminSeoPagesDelete', 1, NULL, NULL, NULL),
('AdminSeoPagesIndex', 1, NULL, NULL, NULL),
('AdminSeoPagesUpdate', 1, NULL, NULL, NULL),
('AdminSubcategoriesCreate', 1, NULL, NULL, NULL),
('AdminSubcategoriesDelete', 1, NULL, NULL, NULL),
('AdminSubcategoriesIndex', 1, NULL, NULL, NULL),
('AdminSubcategoriesUpdate', 1, NULL, NULL, NULL),
('AdminUserAdd', 1, '', '', 's:0:"";'),
('AdminUserChangepassword', 1, '', '', 's:0:"";'),
('AdminUserEdit', 1, '', '', 's:0:"";'),
('AdminUserForgotpassword', 1, '', '', 's:0:"";'),
('AdminUserIndex', 1, '', '', 's:0:"";'),
('AdminUserLogin', 1, '', '', 's:0:"";'),
('AdminUserLogout', 1, '', '', 's:0:"";'),
('AdminUserProfile', 1, '', '', 's:0:"";'),
('AdminUserStatus', 1, '', '', 's:0:"";'),
('AdminUserUserlist', 1, '', '', 's:0:"";'),
('CartAddtocart', 1, NULL, NULL, NULL),
('CartCancel', 1, NULL, NULL, NULL),
('CartCheckout', 1, NULL, NULL, NULL),
('CartConfirm', 1, NULL, NULL, NULL),
('CartRemoveitem', 1, NULL, NULL, NULL),
('CartUpdateqty', 1, NULL, NULL, NULL),
('CartView', 1, NULL, NULL, NULL),
('FabricsIndex', 1, NULL, NULL, NULL),
('FabricsView', 1, NULL, NULL, NULL),
('guest', 2, NULL, NULL, NULL),
('member', 2, NULL, NULL, NULL),
('ProductsIndex', 1, NULL, NULL, NULL),
('ProductsView', 1, NULL, NULL, NULL),
('RightsDefaultIndex', 1, NULL, NULL, NULL),
('SiteIndex', 1, NULL, NULL, NULL),
('SiteLogin', 1, '', '', 's:0:"";'),
('SiteLogout', 1, '', '', 's:0:"";'),
('SiteSettimezone', 1, '', '', 's:0:"";'),
('UserChangepassword', 1, '', '', 's:0:"";'),
('UserDashboard', 1, '', '', 's:0:"";'),
('UserForgotpassword', 1, '', '', 's:0:"";'),
('UserProfile', 1, '', '', 's:0:"";'),
('UserResetpassword', 1, '', '', 's:0:"";'),
('UserSignup', 1, NULL, NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `inds_authitemchild`
--

CREATE TABLE IF NOT EXISTS `inds_authitemchild` (
  `parent` varchar(64) NOT NULL,
  `child` varchar(64) NOT NULL,
  PRIMARY KEY (`parent`,`child`),
  KEY `child` (`child`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `inds_authitemchild`
--

INSERT INTO `inds_authitemchild` (`parent`, `child`) VALUES
('admin', 'AdminButtonsCreate'),
('admin', 'AdminButtonsDelete'),
('admin', 'AdminButtonsIndex'),
('admin', 'AdminButtonsUpdate'),
('admin', 'AdminCategoriesCreate'),
('admin', 'AdminCategoriesDelete'),
('admin', 'AdminCategoriesIndex'),
('admin', 'AdminCategoriesUpdate'),
('guest', 'AdminCmspageAccessdenied'),
('admin', 'AdminCmspageEdit'),
('admin', 'AdminCmspageIndex'),
('admin', 'AdminEmailmanagerEdit'),
('admin', 'AdminEmailmanagerIndex'),
('admin', 'AdminFabricsAddbuttons'),
('admin', 'AdminFabricsCreate'),
('admin', 'AdminFabricsDelete'),
('admin', 'AdminFabricsImageexist'),
('admin', 'AdminFabricsIndex'),
('admin', 'AdminFabricsUpdate'),
('admin', 'AdminFabricsUploadcustomizeimages'),
('admin', 'AdminFabricsUploadimages'),
('admin', 'AdminItemsCreate'),
('admin', 'AdminItemsDelete'),
('admin', 'AdminItemsIndex'),
('admin', 'AdminItemsOrders'),
('admin', 'AdminItemsUpdate'),
('admin', 'AdminItemsVieworders'),
('admin', 'AdminProductsAddimages'),
('admin', 'AdminProductsAddsizes'),
('admin', 'AdminProductsCreate'),
('admin', 'AdminProductsDelete'),
('admin', 'AdminProductsIndex'),
('admin', 'AdminProductsUpdate'),
('admin', 'AdminProductsUpload'),
('admin', 'AdminProductsView'),
('admin', 'AdminSeoPagesCreate'),
('admin', 'AdminSeoPagesDelete'),
('admin', 'AdminSeoPagesIndex'),
('admin', 'AdminSeoPagesUpdate'),
('admin', 'AdminSubcategoriesCreate'),
('admin', 'AdminSubcategoriesDelete'),
('admin', 'AdminSubcategoriesIndex'),
('admin', 'AdminSubcategoriesUpdate'),
('admin', 'AdminUserAdd'),
('admin', 'AdminUserChangepassword'),
('admin', 'AdminUserEdit'),
('guest', 'AdminUserForgotpassword'),
('admin', 'AdminUserIndex'),
('guest', 'AdminUserLogin'),
('admin', 'AdminUserLogout'),
('admin', 'AdminUserProfile'),
('admin', 'AdminUserStatus'),
('admin', 'AdminUserUserlist'),
('guest', 'CartAddtocart'),
('member', 'CartCancel'),
('member', 'CartCheckout'),
('member', 'CartConfirm'),
('guest', 'CartRemoveitem'),
('guest', 'CartUpdateqty'),
('guest', 'CartView'),
('guest', 'FabricsIndex'),
('guest', 'FabricsView'),
('guest', 'ProductsIndex'),
('guest', 'ProductsView'),
('guest', 'RightsDefaultIndex'),
('guest', 'SiteIndex'),
('guest', 'SiteLogin'),
('member', 'SiteLogout'),
('guest', 'SiteSettimezone'),
('member', 'UserChangepassword'),
('member', 'UserDashboard'),
('guest', 'UserForgotpassword'),
('member', 'UserProfile'),
('guest', 'UserResetpassword'),
('guest', 'UserSignup');

-- --------------------------------------------------------

--
-- Table structure for table `inds_buttons`
--

CREATE TABLE IF NOT EXISTS `inds_buttons` (
  `but_id` int(11) NOT NULL AUTO_INCREMENT,
  `but_name` varchar(255) NOT NULL,
  `but_image` varchar(255) NOT NULL,
  `but_price` double NOT NULL DEFAULT '0',
  PRIMARY KEY (`but_id`)
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 AUTO_INCREMENT=3 ;

--
-- Dumping data for table `inds_buttons`
--

INSERT INTO `inds_buttons` (`but_id`, `but_name`, `but_image`, `but_price`) VALUES
(1, 'button1', '558f7345d0a40.png', 100),
(2, 'button 2', '558f735a492f2.png', 0);

-- --------------------------------------------------------

--
-- Table structure for table `inds_cart`
--

CREATE TABLE IF NOT EXISTS `inds_cart` (
  `cart_id` int(11) NOT NULL AUTO_INCREMENT,
  `cart_orderno` varchar(200) NOT NULL,
  `cart_user_id` int(11) NOT NULL,
  `cart_payment_status` tinyint(2) NOT NULL DEFAULT '0' COMMENT '0=not chekout,1=checkout,2=success,3=cancel',
  `cart_order_status` tinyint(2) NOT NULL DEFAULT '0' COMMENT '0=pending,1=under process,2=deliver,3=complete',
  `cart_paypal_result` text,
  `cart_created` datetime NOT NULL,
  `cart_modified` datetime NOT NULL,
  PRIMARY KEY (`cart_id`)
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 AUTO_INCREMENT=6 ;

--
-- Dumping data for table `inds_cart`
--

INSERT INTO `inds_cart` (`cart_id`, `cart_orderno`, `cart_user_id`, `cart_payment_status`, `cart_order_status`, `cart_paypal_result`, `cart_created`, `cart_modified`) VALUES
(2, '55ac42134c1ea', 5, 0, 0, '{"status":"not checkout yet"}', '2015-07-20 06:04:27', '2015-07-20 06:04:27'),
(3, '55ac436835842', 5, 1, 0, '{"TOKEN":"EC-68B5355957899074A","TIMESTAMP":"2015-07-20T00:40:08Z","CORRELATIONID":"442dc1fcc3929","ACK":"Success","VERSION":"3.0","BUILD":"17403434"}', '2015-07-20 06:08:43', '2015-07-20 06:10:08'),
(4, '55ac444c3e780', 5, 2, 0, '{"TOKEN":"EC-2EA908743F5101649","TIMESTAMP":"2015-07-20T00:43:56Z","CORRELATIONID":"95fae32298e38","ACK":"Success","VERSION":"3.0","BUILD":"17403434","TRANSACTIONID":"0Y7477099T293963L","TRANSACTIONTYPE":"expresscheckout","PAYMENTTYPE":"instant","ORDERTIME":"2015-07-20T00:43:55Z","AMT":"1050.00","FEEAMT":"41.25","TAXAMT":"0.00","CURRENCYCODE":"USD","PAYMENTSTATUS":"Completed","PENDINGREASON":"None","REASONCODE":"None"}', '2015-07-20 06:12:34', '2015-07-20 06:13:56'),
(5, '55ac4543991d3', 5, 3, 0, '{"status":"cancel","token":"EC-43C21967X4911952Y"}', '2015-07-20 06:17:34', '2015-07-20 06:18:03');

-- --------------------------------------------------------

--
-- Table structure for table `inds_cart_items`
--

CREATE TABLE IF NOT EXISTS `inds_cart_items` (
  `citm_id` int(11) NOT NULL AUTO_INCREMENT,
  `citm_cart_id` int(11) NOT NULL,
  `citm_item_id` int(11) DEFAULT '0',
  `citm_price` double DEFAULT '0',
  `citm_discount` double DEFAULT '0',
  `citm_qty` int(11) DEFAULT '0',
  `citm_color` int(11) DEFAULT '0',
  `citm_pattern` int(11) DEFAULT '0',
  `citm_fabric` int(11) DEFAULT '0',
  `citm_type` tinyint(2) DEFAULT '0' COMMENT '0=Normal product, 1= Rental product, 2=Customization, 3=User will send product for measurment',
  `citm_customization` text,
  `citm_measurement` text,
  `citm_rental` int(11) DEFAULT NULL,
  `citm_created` datetime NOT NULL,
  `citm_modified` datetime NOT NULL,
  PRIMARY KEY (`citm_id`)
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 AUTO_INCREMENT=7 ;

--
-- Dumping data for table `inds_cart_items`
--

INSERT INTO `inds_cart_items` (`citm_id`, `citm_cart_id`, `citm_item_id`, `citm_price`, `citm_discount`, `citm_qty`, `citm_color`, `citm_pattern`, `citm_fabric`, `citm_type`, `citm_customization`, `citm_measurement`, `citm_rental`, `citm_created`, `citm_modified`) VALUES
(1, 3, 0, 1000, 0, 1, 1, 4, 1, 2, '{"product":"1","shirt":{"sleeve":"Short","collor":"Chinese","cuff":"","placket":"Hidden","pocket":"Round","back_shirt":"Box Pleat","front_shirt":"Round","button":"2","monogram":"","fabid":3},"trouser":[],"blazer":[],"suit":[]}', NULL, NULL, '2015-07-20 06:08:43', '2015-07-20 06:08:43'),
(2, 3, 4, 750, 0, 1, 0, 0, 0, 0, NULL, NULL, NULL, '2015-07-20 06:08:43', '2015-07-20 06:08:43'),
(3, 4, 0, 300, 0, 1, 1, 2, 1, 2, '{"product":"1","shirt":{"sleeve":"Long","collor":"Classic","cuff":"Double Button","placket":"French","pocket":"Square","back_shirt":"Box Pleat","front_shirt":"Round","button":"2","monogram":"","fabid":4},"trouser":[],"blazer":[],"suit":[]}', NULL, NULL, '2015-07-20 06:12:34', '2015-07-20 06:12:34'),
(4, 4, 4, 750, 0, 1, 0, 0, 0, 0, NULL, NULL, NULL, '2015-07-20 06:12:34', '2015-07-20 06:12:34'),
(5, 5, 0, 1000, 0, 1, 1, 4, 1, 2, '{"product":"1","shirt":{"sleeve":"Short","collor":"Chinese","cuff":"","placket":"Hidden","pocket":"Square","back_shirt":"Side Pleat","front_shirt":"Round","button":"2","monogram":"","fabid":3},"trouser":[],"blazer":[],"suit":[]}', NULL, NULL, '2015-07-20 06:17:34', '2015-07-20 06:17:34'),
(6, 5, 3, 250, 0, 1, 0, 0, 0, 0, NULL, NULL, NULL, '2015-07-20 06:17:34', '2015-07-20 06:17:34');

-- --------------------------------------------------------

--
-- Table structure for table `inds_categories`
--

CREATE TABLE IF NOT EXISTS `inds_categories` (
  `cat_id` int(11) NOT NULL AUTO_INCREMENT,
  `cat_name` varchar(255) NOT NULL,
  `cat_description` text,
  `cat_meta_title` text,
  `cat_meta_keyword` text,
  `cat_meta_description` text,
  PRIMARY KEY (`cat_id`)
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 AUTO_INCREMENT=12 ;

--
-- Dumping data for table `inds_categories`
--

INSERT INTO `inds_categories` (`cat_id`, `cat_name`, `cat_description`, `cat_meta_title`, `cat_meta_keyword`, `cat_meta_description`) VALUES
(10, 'Accessories and Products', '', '', '', '');

-- --------------------------------------------------------

--
-- Table structure for table `inds_cmspage`
--

CREATE TABLE IF NOT EXISTS `inds_cmspage` (
  `c_id` int(11) NOT NULL AUTO_INCREMENT,
  `c_pagename` varchar(100) NOT NULL,
  `c_title` varchar(250) NOT NULL,
  `c_subtitle` varchar(250) NOT NULL,
  `c_content` text NOT NULL,
  `c_app_content` text NOT NULL,
  `c_meta_title` varchar(250) NOT NULL,
  `c_meta_keyword` text NOT NULL,
  `c_meta_description` text NOT NULL,
  `c_status` tinyint(3) NOT NULL DEFAULT '1' COMMENT '0=inactive, 1=active',
  `c_created` datetime NOT NULL,
  `c_modified` datetime NOT NULL,
  PRIMARY KEY (`c_id`)
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 AUTO_INCREMENT=4 ;

--
-- Dumping data for table `inds_cmspage`
--

INSERT INTO `inds_cmspage` (`c_id`, `c_pagename`, `c_title`, `c_subtitle`, `c_content`, `c_app_content`, `c_meta_title`, `c_meta_keyword`, `c_meta_description`, `c_status`, `c_created`, `c_modified`) VALUES
(1, 'About', 'About Us2 ', 'About Us', '<p><strong>About </strong></p> <p><strong>Lorem Ipsum</strong> is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry''s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the <strong>1960s</strong> with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of <em>Lorem Ipsum</em>.<strong>Lorem Ipsum</strong> is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry''s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the <strong>1960s</strong> with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of <em>Lorem Ipsum</em>.<strong>Lorem Ipsum</strong> is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry''s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the <strong>1960s</strong> with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of <em>Lorem Ipsum</em>.<strong>Lorem Ipsum</strong> is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry''s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the <strong>1960s</strong> with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of <em>Lorem Ipsum</em>.<strong>Lorem Ipsum</strong> is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry''s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the <strong>1960s</strong> with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of <em>Lorem Ipsum</em>. Ãƒâ€šÃ‚Â </p> ', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry''s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.', 'about us', 'about', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry''s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.', 1, '2014-09-26 09:41:51', '2014-12-22 12:27:18'),
(2, 'Privacy Policy', 'Privacy Policy', 'Privacy Policy', '<p>Praesent tempor fringilla purus</p> <p>Donec ut odio ultricies, consequat sem eu, commodo eros. Praesent tempor fringilla purus, vitae laoreet tellus viverra eget. Aliquam sem elit, placerat eu tortor nec, pretium fermentum sapien. Morbi lobortis aliquam nisl ac hendrerit. Vestibulum hendrerit orci et iaculis eleifend. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nam laoreet mauris a turpis varius iaculis. Praesent tincidunt, elit finibus pharetra tristique, odio arcu tristique erat, ultrices lobortis mauris sapien ac nulla.</p> <p>Morbi lobortis aliquam nisl ac hendrerit</p> <p>Donec ut odio ultricies, consequat sem eu, commodo eros. Praesent tempor fringilla purus, vitae laoreet tellus viverra eget. Aliquam sem elit, placerat eu tortor nec, pretium fermentum sapien. Morbi lobortis aliquam nisl ac hendrerit. Vestibulum hendrerit orci et iaculis eleifend. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p> ', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry''s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.', 'Privacy policy', 'Privacy policy', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry''s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.', 1, '2014-09-24 02:41:51', '2014-12-22 12:27:22'),
(3, 'Terms and Conditions', 'Terms and Conditions', 'Terms and Conditions', '<p>Praesent tempor fringilla purus</p> <p>Donec ut odio ultricies, consequat sem eu, commodo eros. Praesent tempor fringilla purus, vitae laoreet tellus viverra eget. Aliquam sem elit, placerat eu tortor nec, pretium fermentum sapien. Morbi lobortis aliquam nisl ac hendrerit. Vestibulum hendrerit orci et iaculis eleifend. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nam laoreet mauris a turpis varius iaculis. Praesent tincidunt, elit finibus pharetra tristique, odio arcu tristique erat, ultrices lobortis mauris sapien ac nulla.</p> <p>Morbi lobortis aliquam nisl ac hendrerit</p> <p>Donec ut odio ultricies, consequat sem eu, commodo eros. Praesent tempor fringilla purus, vitae laoreet tellus viverra eget. Aliquam sem elit, placerat eu tortor nec, pretium fermentum sapien. Morbi lobortis aliquam nisl ac hendrerit. Vestibulum hendrerit orci et iaculis eleifend. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p> ', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry''s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.', 'terms', 'terms', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry''s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.', 1, '2014-09-24 02:41:51', '2014-12-22 12:27:27');

-- --------------------------------------------------------

--
-- Table structure for table `inds_email_manager`
--

CREATE TABLE IF NOT EXISTS `inds_email_manager` (
  `em_id` int(11) NOT NULL AUTO_INCREMENT,
  `em_title` varchar(100) DEFAULT NULL,
  `em_email_subject` varchar(100) DEFAULT NULL,
  `em_email_template` text,
  `em_created` datetime DEFAULT NULL,
  `em_modified` datetime DEFAULT NULL,
  PRIMARY KEY (`em_id`)
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 AUTO_INCREMENT=3 ;

--
-- Dumping data for table `inds_email_manager`
--

INSERT INTO `inds_email_manager` (`em_id`, `em_title`, `em_email_subject`, `em_email_template`, `em_created`, `em_modified`) VALUES
(1, 'User Verification Mail', 'Welcome to {site_name}!', 'Hi {username}, <br /><br />Below is your verification link to verify your account.<br /><br />{verification_link}<br /><br />', '2014-09-25 16:30:00', '2014-12-22 12:26:54'),
(2, 'Forgot Password', 'Recover your password!', 'Hi {username},<br /><br />Below is the link to reset your password. <br /><br />{reset_link}<br /><br />Note : If you did not request to reset your password, then just ignore this email.<br />', '2014-09-25 16:30:00', '2014-12-22 12:27:03');

-- --------------------------------------------------------

--
-- Table structure for table `inds_fabrics`
--

CREATE TABLE IF NOT EXISTS `inds_fabrics` (
  `fab_id` int(11) NOT NULL AUTO_INCREMENT,
  `fab_name` varchar(255) NOT NULL,
  `fab_image` varchar(255) NOT NULL,
  `fab_price` double NOT NULL,
  `fab_color` tinyint(2) NOT NULL COMMENT '1=White,2=Black,3=Blue,4=Pink,5=Red,6=Yellow,7=Brown,8=Purple,9=Grey,10=Beige,11=Green,12=Orange,13=Maroon',
  `fab_pattern` tinyint(2) NOT NULL COMMENT '1=Stripes, 2=Checks, 3=Solid, 4=Prints & Others',
  `fab_fabric` int(11) NOT NULL COMMENT '1 = ''Cotton'', 2 = ''Linen'', 3 = ''Linen Cotton'', 4 = ''Egyptian_Giza_Cotton'', 5 = "2/120''s Egyptian Giza Cotton", 6 = "2/140''s Egyptian Giza Cotton"',
  `fab_for` tinyint(2) NOT NULL DEFAULT '0' COMMENT '0=None,1=Shirt,2=Trousre,3=Blazer',
  PRIMARY KEY (`fab_id`)
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 AUTO_INCREMENT=7 ;

--
-- Dumping data for table `inds_fabrics`
--

INSERT INTO `inds_fabrics` (`fab_id`, `fab_name`, `fab_image`, `fab_price`, `fab_color`, `fab_pattern`, `fab_fabric`, `fab_for`) VALUES
(1, 'Fabric for trouser', '', 600, 0, 0, 1, 0),
(3, 'Megenta Cotton', '5590a9fbf3ad3.png', 300, 1, 2, 1, 1),
(4, 'Blue Linen', '5590aa2617ce3.png', 1000, 1, 4, 1, 1),
(5, 'Latest', '5590aa5796793.png', 500, 1, 2, 1, 1),
(6, ' hhh dfdfdfdfdf jjj', '5595e00f7d62c.png', 100, 2, 2, 1, 0);

-- --------------------------------------------------------

--
-- Table structure for table `inds_fabric_buttons`
--

CREATE TABLE IF NOT EXISTS `inds_fabric_buttons` (
  `fbt_id` int(11) NOT NULL AUTO_INCREMENT,
  `fbt_fabric_id` int(11) NOT NULL,
  `fbt_button_id` int(11) NOT NULL,
  PRIMARY KEY (`fbt_id`)
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 AUTO_INCREMENT=3 ;

--
-- Dumping data for table `inds_fabric_buttons`
--

INSERT INTO `inds_fabric_buttons` (`fbt_id`, `fbt_fabric_id`, `fbt_button_id`) VALUES
(1, 1, 1),
(2, 1, 2);

-- --------------------------------------------------------

--
-- Table structure for table `inds_items`
--

CREATE TABLE IF NOT EXISTS `inds_items` (
  `itm_id` int(11) NOT NULL AUTO_INCREMENT,
  `itm_name` varchar(255) NOT NULL,
  `itm_subcategory_id` int(11) NOT NULL,
  `itm_fabric_id` int(11) DEFAULT '0',
  `itm_price` double NOT NULL,
  `itm_size` varchar(200) NOT NULL,
  `itm_qty` int(11) NOT NULL,
  `itm_photo` varchar(200) NOT NULL,
  `itm_details` text,
  `itm_meta_title` varchar(255) NOT NULL,
  `itm_meta_keyword` text NOT NULL,
  `itm_meta_description` text NOT NULL,
  `itm_slug` varchar(255) NOT NULL,
  `itm_created` datetime NOT NULL,
  `itm_modified` datetime NOT NULL,
  PRIMARY KEY (`itm_id`)
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 AUTO_INCREMENT=7 ;

--
-- Dumping data for table `inds_items`
--

INSERT INTO `inds_items` (`itm_id`, `itm_name`, `itm_subcategory_id`, `itm_fabric_id`, `itm_price`, `itm_size`, `itm_qty`, `itm_photo`, `itm_details`, `itm_meta_title`, `itm_meta_keyword`, `itm_meta_description`, `itm_slug`, `itm_created`, `itm_modified`) VALUES
(2, 'Sherwani 1', 3, NULL, 11000, 'XL', 5, '558698f50ee4e.jpg', 'This cross black print on a white base is a good choice for party wear. The black contrast on the inner collar and inner cuff add to the casual look. Wear it over a black trouser and oxford shoes for an evening party.', '', '', '', 'sherwani_1', '2015-06-20 02:11:18', '2015-06-21 10:59:01'),
(3, 'Juti 1', 4, NULL, 250, '6', 100, '55862bc4709fe.jpg', '', '', '', '', 'juti_1', '2015-06-20 02:12:23', '2015-06-21 03:13:08'),
(4, 'Safa 1', 5, NULL, 750, 's1', 100, '55862bea9190b.jpg', '', '', '', '', 'safa_1', '2015-06-20 02:13:12', '2015-06-21 03:13:46'),
(5, 'Tie', 6, NULL, 500, 'S1', 100, '55862bfe04968.jpg', '', '', '', '', 'tie', '2015-06-20 02:16:30', '2015-06-21 03:14:06'),
(6, 'Sherwani 2', 3, NULL, 2000, 'XXl', 100, '558641d6485df.JPG', '', '', '', '', 'sherwani_2', '2015-06-21 04:47:18', '2015-06-21 04:47:18');

-- --------------------------------------------------------

--
-- Table structure for table `inds_seo_pages`
--

CREATE TABLE IF NOT EXISTS `inds_seo_pages` (
  `sep_id` int(11) NOT NULL AUTO_INCREMENT,
  `sep_page_name` varchar(255) NOT NULL,
  `sep_page_title` text,
  `sep_page_keyword` text,
  `sep_page_meta_desc` text,
  PRIMARY KEY (`sep_id`)
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 AUTO_INCREMENT=2 ;

-- --------------------------------------------------------

--
-- Table structure for table `inds_site_settings`
--

CREATE TABLE IF NOT EXISTS `inds_site_settings` (
  `sst_id` int(11) NOT NULL AUTO_INCREMENT,
  `sst_name` varchar(255) NOT NULL,
  `sst_value` varchar(255) NOT NULL,
  PRIMARY KEY (`sst_id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Table structure for table `inds_subcategories`
--

CREATE TABLE IF NOT EXISTS `inds_subcategories` (
  `sub_id` int(11) NOT NULL AUTO_INCREMENT,
  `sub_cat_id` int(11) NOT NULL,
  `sub_cat_name` varchar(200) NOT NULL,
  `sub_cat_description` text,
  `sub_cat_title` text,
  `sub_cat_keyword` text,
  `sub_meta_description` text,
  PRIMARY KEY (`sub_id`)
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 AUTO_INCREMENT=7 ;

--
-- Dumping data for table `inds_subcategories`
--

INSERT INTO `inds_subcategories` (`sub_id`, `sub_cat_id`, `sub_cat_name`, `sub_cat_description`, `sub_cat_title`, `sub_cat_keyword`, `sub_meta_description`) VALUES
(3, 10, 'Serwani', '', '', '', ''),
(4, 10, 'Juti', '', '', '', ''),
(5, 10, 'Saafa', '', '', '', ''),
(6, 10, 'Assesories', '', '', '', '');

-- --------------------------------------------------------

--
-- Table structure for table `inds_user`
--

CREATE TABLE IF NOT EXISTS `inds_user` (
  `u_id` int(11) NOT NULL AUTO_INCREMENT,
  `u_first_name` varchar(200) NOT NULL,
  `u_last_name` varchar(200) NOT NULL,
  `u_email` varchar(200) DEFAULT NULL,
  `u_password` varchar(200) NOT NULL,
  `u_role` enum('admin','member') NOT NULL DEFAULT 'member',
  `u_gender` tinyint(3) DEFAULT '0' COMMENT '1=male, 2=Female',
  `u_status` tinyint(3) DEFAULT '0' COMMENT '0=inactive, 1=active, 2=deactive',
  `u_mail_verify` tinyint(3) DEFAULT '0' COMMENT '0=inactivtion, 1=activtion',
  `u_verkey` varchar(250) DEFAULT NULL COMMENT 'Account verification Key',
  `u_scrkey` varchar(250) DEFAULT NULL COMMENT 'Forgot password link ',
  `u_last_login_date` datetime DEFAULT NULL,
  `u_created` datetime NOT NULL,
  `u_modified` datetime NOT NULL,
  PRIMARY KEY (`u_id`)
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 AUTO_INCREMENT=6 ;

--
-- Dumping data for table `inds_user`
--

INSERT INTO `inds_user` (`u_id`, `u_first_name`, `u_last_name`, `u_email`, `u_password`, `u_role`, `u_gender`, `u_status`, `u_mail_verify`, `u_verkey`, `u_scrkey`, `u_last_login_date`, `u_created`, `u_modified`) VALUES
(1, 'Indian', 'Stylo', 'admin@indianstylo.com', '$2a$13$mFlSnpEY4X7.gf3ff4UKdeeZhgIskbSYyIVPWaUn7x2icbsUs11Aa', 'admin', 1, 1, 1, NULL, '496788dbd0201735a4737f0c59d90fd6', '2015-06-03 01:26:27', '2014-12-23 02:20:00', '2015-06-04 02:58:41'),
(5, 'testuser', 'One', 'testuserone@gmail.com', '$2a$13$VzURb1EeBFmX/9yd7yiGZ.iar3xBDl/a4tC8gT.QLHcceStU.PMjK', 'member', 1, 1, 1, NULL, NULL, '2015-07-20 06:12:30', '2015-06-04 02:51:57', '2015-07-20 06:12:30');

--
-- Constraints for dumped tables
--

--
-- Constraints for table `inds_authassignment`
--
ALTER TABLE `inds_authassignment`
  ADD CONSTRAINT `inds_authassignment_ibfk_1` FOREIGN KEY (`itemname`) REFERENCES `inds_authitem` (`name`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `inds_authitemchild`
--
ALTER TABLE `inds_authitemchild`
  ADD CONSTRAINT `inds_authitemchild_ibfk_1` FOREIGN KEY (`parent`) REFERENCES `inds_authitem` (`name`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `inds_authitemchild_ibfk_2` FOREIGN KEY (`child`) REFERENCES `inds_authitem` (`name`) ON DELETE CASCADE ON UPDATE CASCADE;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
