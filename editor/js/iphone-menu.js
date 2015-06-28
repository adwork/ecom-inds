
	function setIPhoneMenu(){
		
		jQuery('.subItem').remove();
		jQuery(".iphonNav").css("display", "none");
		jQuery(".iphonNav").addClass("iphon_navigation");
				jQuery(".iphonNav").removeClass("menu");
				jQuery(".iphonNav > ul").attr("id","");
				jQuery(".menuImage").css("display","block");
				jQuery(".iphonNav ul li").each(function(){
					if(jQuery(this).children("ul").length >0)
					{
						jQuery(this).addClass("parentMenu");
						jQuery(this).prepend("<div class='subItem'></div>");
						jQuery(this).children("ul").addClass("subMenu");
					}
				});
				jQuery(".subMenu").css("display","none");
				jQuery(".menuImage img").unbind("click");
				jQuery(".menuImage img").click(function(){
					jQuery(".iphonNav").slideToggle(300, function(){
						if(!jQuery(this).is(":visible")){
							jQuery(this).find(".subMenu").each(function(){
								jQuery(this).css("display","none");
								jQuery(this).parent().removeClass("parentMenuActive");
							});
						}
					});
				});
				jQuery(".subItem").unbind("click");
				jQuery(".iphonNav ul li a").click(function(e){
				jQuery(".iphonNav").css("display","none");
				});
	}
	function setDesktopMenu(){
		jQuery(".iphonNav ul li").find(".subMenu").each(function(){
			jQuery(this).css("display","none");
			jQuery(this).parent().removeClass("parentMenuActive");
		});
		jQuery(".iphonNav").addClass("menu");
		jQuery(".iphonNav").css("display", "block");
		jQuery(".iphonNav").removeClass("iphon_navigation");
		jQuery(".iphonNav>ul").attr("id","nav");
		jQuery(".menuImage").css("display","none");
	}
	jQuery(document).ready(function(){
		if(jQuery(window).width()<1300)
		{
			setIPhoneMenu();
		}else{
			setDesktopMenu();
		}
		
	});
	jQuery(window).resize(function(){
		if(jQuery(window).width()<1300)
		{
			setIPhoneMenu();
		}else{
			setDesktopMenu();
		}
	});
	
	
	
