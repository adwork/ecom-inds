-- phpMyAdmin SQL Dump
-- version 4.0.10deb1
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: May 15, 2015 at 07:17 AM
-- Server version: 5.5.41-0ubuntu0.14.04.1
-- PHP Version: 5.5.9-1ubuntu4.7

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
('member', '3', NULL, 'N;');

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
('AdminFabricsIndex', 1, NULL, NULL, NULL),
('AdminFabricsUpdate', 1, NULL, NULL, NULL),
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
('guest', 2, NULL, NULL, NULL),
('member', 2, NULL, NULL, NULL),
('RightsDefaultIndex', 1, NULL, NULL, NULL),
('SiteLogin', 1, '', '', 's:0:"";'),
('SiteLogout', 1, '', '', 's:0:"";'),
('SiteSettimezone', 1, '', '', 's:0:"";'),
('UserChangepassword', 1, '', '', 's:0:"";'),
('UserDashboard', 1, '', '', 's:0:"";'),
('UserForgotpassword', 1, '', '', 's:0:"";'),
('UserProfile', 1, '', '', 's:0:"";'),
('UserResetpassword', 1, '', '', 's:0:"";');

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
('admin', 'AdminFabricsIndex'),
('admin', 'AdminFabricsUpdate'),
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
('guest', 'RightsDefaultIndex'),
('guest', 'SiteLogin'),
('member', 'SiteLogout'),
('guest', 'SiteSettimezone'),
('member', 'UserChangepassword'),
('member', 'UserDashboard'),
('guest', 'UserForgotpassword'),
('member', 'UserProfile'),
('guest', 'UserResetpassword');

-- --------------------------------------------------------

--
-- Table structure for table `inds_buttons`
--

CREATE TABLE IF NOT EXISTS `inds_buttons` (
  `but_id` int(11) NOT NULL AUTO_INCREMENT,
  `but_name` varchar(255) NOT NULL,
  `but_image` varchar(255) NOT NULL,
  PRIMARY KEY (`but_id`)
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 AUTO_INCREMENT=9 ;

--
-- Dumping data for table `inds_buttons`
--

INSERT INTO `inds_buttons` (`but_id`, `but_name`, `but_image`) VALUES
(1, 'first', '5552bc1a4212a.png'),
(2, 'erwewerwe', '5553ee90e7cde.png'),
(3, 'werrwer', '5553ee9b31fac.png'),
(4, 'tttttt', '5553eea692c59.png'),
(5, 'bcvbcvb', '5553eeb42d062.png'),
(6, 'gggggg', '5553eec1c34fe.png'),
(7, 'dsfsdfsdf', '5553ef2f5189b.png'),
(8, 'sdfsf', '5553ef3a51944.png');

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
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 AUTO_INCREMENT=4 ;

--
-- Dumping data for table `inds_categories`
--

INSERT INTO `inds_categories` (`cat_id`, `cat_name`, `cat_description`, `cat_meta_title`, `cat_meta_keyword`, `cat_meta_description`) VALUES
(1, 'Cloths', 'Cloths', NULL, NULL, NULL),
(2, 'Shirts', 'Shirts', NULL, NULL, NULL);

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
  PRIMARY KEY (`fab_id`)
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 AUTO_INCREMENT=4 ;

--
-- Dumping data for table `inds_fabrics`
--

INSERT INTO `inds_fabrics` (`fab_id`, `fab_name`, `fab_image`) VALUES
(1, 'Cotton fff', '5552bb3349e3d.png'),
(3, 'safsdfsdfdf', '5552ba7f1a470.png');

-- --------------------------------------------------------

--
-- Table structure for table `inds_fabric_buttons`
--

CREATE TABLE IF NOT EXISTS `inds_fabric_buttons` (
  `fbt_id` int(11) NOT NULL AUTO_INCREMENT,
  `fbt_fabric_id` int(11) NOT NULL,
  `fbt_button_id` int(11) NOT NULL,
  PRIMARY KEY (`fbt_id`)
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 AUTO_INCREMENT=18 ;

--
-- Dumping data for table `inds_fabric_buttons`
--

INSERT INTO `inds_fabric_buttons` (`fbt_id`, `fbt_fabric_id`, `fbt_button_id`) VALUES
(16, 1, 7),
(15, 1, 4),
(14, 1, 3),
(13, 1, 2),
(12, 1, 1),
(17, 1, 8);

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
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 AUTO_INCREMENT=3 ;

--
-- Dumping data for table `inds_subcategories`
--

INSERT INTO `inds_subcategories` (`sub_id`, `sub_cat_id`, `sub_cat_name`, `sub_cat_description`, `sub_cat_title`, `sub_cat_keyword`, `sub_meta_description`) VALUES
(1, 1, 'eeee', 'asdasdasd', 'asdasdsad', 'asdasdas', 'sdfsdfsdfdsf'),
(2, 2, 'sdasd', 'asdasd', 'asdasdasd', 'asdasdasd', 'sdfsdfsdfsdfsdf fsdfsdfsdf');

-- --------------------------------------------------------

--
-- Table structure for table `inds_user`
--

CREATE TABLE IF NOT EXISTS `inds_user` (
  `u_id` int(11) NOT NULL AUTO_INCREMENT,
  `u_username` varchar(150) DEFAULT NULL,
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
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 AUTO_INCREMENT=4 ;

--
-- Dumping data for table `inds_user`
--

INSERT INTO `inds_user` (`u_id`, `u_username`, `u_email`, `u_password`, `u_role`, `u_gender`, `u_status`, `u_mail_verify`, `u_verkey`, `u_scrkey`, `u_last_login_date`, `u_created`, `u_modified`) VALUES
(1, 'indianstylo admin', 'admin@indianstylo.com', '$2a$13$mFlSnpEY4X7.gf3ff4UKdeeZhgIskbSYyIVPWaUn7x2icbsUs11Aa', 'admin', 1, 1, 1, NULL, '496788dbd0201735a4737f0c59d90fd6', '2015-01-29 16:36:09', '2014-12-23 02:20:00', '2015-01-29 16:36:09'),
(2, 'ecom user', 'user@ecomm.com', '$2a$13$IKC3KRpl7vrYnvE5hgNiu.RuE1DRN/CQ.JLy7Frs5CgbapZAmfjo2', 'member', 1, 1, 1, NULL, '', '2014-12-22 13:06:17', '2014-12-25 09:20:00', '2014-12-22 13:06:17'),
(3, 'durgesh', 'durgesh@gmail.com', '$2a$13$2uAwZnnNwI.o5f1KchCpEuP6XDvioKmcErKr3enHOO5A7l2JWvEIK', 'member', 1, 1, 0, NULL, NULL, '1970-01-03 01:30:00', '2014-12-24 13:42:22', '2014-12-22 12:14:44');

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
