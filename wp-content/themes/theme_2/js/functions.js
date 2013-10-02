jQuery(document).ready(function(){

	var middleX = parseInt( jQuery(".fond_header").width() / 2 );
	var middleY = parseInt( jQuery(".fond_header").height() / 2 ); 
	
	var left = parseInt( jQuery(".bonhomme_header").css('left') );
	var top = parseInt( jQuery(".bonhomme_header").css('top') );
	
	var imageLeft = parseInt( jQuery(".fond_header img").css('left') );
	var imageTop = parseInt( jQuery(".fond_header img").css('top') );
	
	setFullHeight("#container_fond_header");
	setFullHeight(".fond_header");
	resizeImagesHeader(".fond_header", ".bonhomme_header", "#container_fond_header");

		jQuery("#container_fond_header").mousemove(function(e){
	
			if(jQuery(window).width() > 1024){
				
				var x = e.pageX;
				var y = e.pageY;
				
				jQuery(".bonhomme_header").css('right', - x * 0.05);
				jQuery(".bonhomme_header").css('top', y * 0.05);
				
				jQuery(".fond_header img").css('left', - imageLeft - x * 0.01);
				jQuery(".fond_header img").css('top', imageTop - y * 0.01);
			
			}
		
		});
	
	function setHeightBackgroundCorps(item, parent){
		
		jQuery(item).css('height', jQuery(parent).height() );
		
	}
	
	function setFullHeight(item){
	
		jQuery(item).css('height', jQuery(window).height() - 40);
		
	}
	
	function resizeImagesHeader(fond, bonhomme, container){
	
		jQuery(".bonhomme_header").css('height', jQuery(container).height());
	
		// if( jQuery(window).width() > jQuery(window).height() ){
		
			// if( jQuery(window).width() <= 680 ){
			
				// jQuery(bonhomme).css('left', 'auto');
				// jQuery(bonhomme).css('width', '38%');
			
			// }else if( jQuery(window).width() <= 1024 ){
			
				// jQuery(bonhomme).css('left', 'auto');
				// jQuery(bonhomme).css('width', '50%');
				
			// }
			
		// }else{
			
			// if( jQuery(window).width() <= 1024 && jQuery(window).height() < 768 ){
			
				// jQuery(bonhomme).css('left', '0px');
				// jQuery(bonhomme).css('width', '100%');
			
			// }else{
				
				// jQuery(bonhomme).css('left', 'auto');
				// jQuery(bonhomme).css('width', 'auto');
				
				
			// }
			
		// }
		
	}
	
	var heightContent = jQuery("#main").height();
	console.log(heightContent);
	var offset = jQuery("#main").offset();
	offset = offset.top;
	
	jQuery(".entry-content img").wrap("<div class='container_image'></div>");
	jQuery(".container_image").prepend("<div class='bordure'></div>");
	jQuery(".entry-content img").each(function(index){
	
		if( jQuery(this).hasClass('alignleft') ){
			
			jQuery(this).parent().addClass("alignleft");
			
		}
	
		if( jQuery(this).hasClass('alignright') ){
			
			jQuery(this).parent().addClass("alignright");
			
		}
	
		if( jQuery(this).hasClass('aligncenter') ){
			
			jQuery(this).parent().addClass("aligncenter");
			
		}
		jQuery(this).parent().css('width', jQuery(this).width());
		jQuery(this).parent().css('height', jQuery(this).height());
	
	});
	
	jQuery(window).resize(function(){
	
		setFullHeight("#container_fond_header");
		setFullHeight(".fond_header");
		resizeImagesHeader(".fond_header", ".bonhomme_header", "#container_fond_header");
		
		jQuery(".entry-content img").each(function(index){
		
			if( jQuery(this).hasClass('alignleft') ){
				
				jQuery(this).parent().addClass("alignleft");
				
			}
		
			if( jQuery(this).hasClass('alignright') ){
				
				jQuery(this).parent().addClass("alignright");
				
			}
		
			if( jQuery(this).hasClass('aligncenter') ){
				
				jQuery(this).parent().addClass("aligncenter");
				
			}
			jQuery(this).parent().css('width', jQuery(this).width());
			jQuery(this).parent().css('height', jQuery(this).height());
		
		});

			jQuery("#container_fond_header").mousemove(function(e){
	
				if(jQuery(window).width() > 1024){
					
					var x = e.pageX;
					var y = e.pageY;
					
					jQuery(".bonhomme_header").css('right', - x * 0.05);
					jQuery(".bonhomme_header").css('top', y * 0.05);
					
					jQuery(".fond_header img").css('left', - imageLeft - x * 0.01);
					jQuery(".fond_header img").css('top', imageTop - y * 0.01);
				
				}
			
			});
	
	});
	
	jQuery(".li_lien_categories").hover(function(e){
	
		jQuery(".overlay_sous_menu").show();
		if( jQuery(window).width() <= 1024 ){
			jQuery(".nav-menu").toggle();
		}
	
	}, function(e){
	
		jQuery(".overlay_sous_menu").hide();
		if( jQuery(window).width() <= 1024 ){
			jQuery(".nav-menu").toggle();
		}
	
	});

});