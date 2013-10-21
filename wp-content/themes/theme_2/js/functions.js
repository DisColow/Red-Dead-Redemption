jQuery(document).ready(function(){

 /*global jQuery*/
(function(jQuery){
	'use strict';

	jQuery.fn.succinct = function(options){

		var defaults = {
				size: 240,
				omission: '...',
				ignore: true
			},
			options = jQuery.extend(defaults, options);

		return this.each(function(){

			var textDefault,
				textTruncated,
				elements = jQuery(this),
				regex    = /[!-\/:-@\[-`{-~]jQuery/;

			var truncate = function(){

				elements.each(function(){
					textDefault = jQuery(this).text();

					if (textDefault.length > options.size) {
						textTruncated = jQuery.trim(textDefault).
										substring(0, options.size).
										split(' ').
										slice(0, -1).
										join(' ');

						if (options.ignore) {
							textTruncated = textTruncated.replace( regex , '' );
						}

						jQuery(this).text(textTruncated + options.omission);
					}
				});
			};

			var init = function() {
				truncate();
			};

			init();
		});
	};
})(jQuery);

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
        
        agenceAccueil();
        
        function agenceAccueil(){
		
            jQuery(".container_articles article").first().addClass("article_phare");
            var articlePhare = jQuery(".container_articles article").first();
            jQuery(".container_articles article").eq(3).after(articlePhare);
            jQuery(".container_articles article").eq(0).addClass("article_top");
            jQuery(".container_articles article").eq(1).addClass("article_top");
            jQuery(".container_articles article").eq(2).addClass("article_top");
            jQuery(".container_articles article").eq(4).addClass("thin_article");
            jQuery(".container_articles article").eq(5).addClass("small_article_bottom");
            jQuery(".container_articles article").eq(6).addClass("big_ad_accueil");
			
            var height = jQuery(".article_phare .entry-content").innerHeight();
            var height2 = jQuery(".thin_article .entry-content").innerHeight();

            if(height2 < height){

                    height = height2;

            }

            jQuery(".article_phare .entry-content, .thin_article .entry-content").css('max-height', height).css('overflow', 'hidden');			

            var height = jQuery(".small_article_bottom .entry-content").innerHeight();
            var height2 = jQuery(".big_ad_accueil .entry-content").innerHeight();

            if(height2 < height){

                    height = height2;

            }

            jQuery(".small_article_bottom .entry-content, .big_ad_accueil .entry-content").css('height', height).css('overflow', 'hidden');

            jQuery('.small_article_bottom .entry-content p').succinct({
                    size: 450
            });
			
        }
		
        function tronqueTextAccueil(){
                jQuery("article.article_top").each(function(index, item){

                        jQuery('.entry-content p:first-child', item).succinct({
                                size: 250
                        });

                });
        }
		
        tronqueTextAccueil();

});