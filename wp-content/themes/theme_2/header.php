<?php
/**
 * The Header for our theme.
 *
 * Displays all of the <head> section and everything up till <div id="main">
 *
 * @package WordPress
 * @subpackage Twenty_Thirteen
 * @since Twenty Thirteen 1.0
 */
?><!DOCTYPE html>
<!--[if IE 7]>
<html class="ie ie7" <?php language_attributes(); ?>>
<![endif]-->
<!--[if IE 8]>
<html class="ie ie8" <?php language_attributes(); ?>>
<![endif]-->
<!--[if !(IE 7) | !(IE 8)  ]><!-->
<html <?php language_attributes(); ?>>
<!--<![endif]-->
<head>
	<meta charset="<?php bloginfo( 'charset' ); ?>">
	<meta name="viewport" content="width=device-width">
	<title><?php wp_title( '|', true, 'right' ); ?></title>
	<link rel="profile" href="http://gmpg.org/xfn/11">
	<link rel="pingback" href="<?php bloginfo( 'pingback_url' ); ?>">
	<link href='http://fonts.googleapis.com/css?family=Petit+Formal+Script' rel='stylesheet' type='text/css'>
	<!-- font-family: 'Petit Formal Script', cursive; -->
	<!--[if lt IE 9]>
	<script src="<?php echo get_template_directory_uri(); ?>/js/html5.js"></script>
	<![endif]-->
	<?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
	<div id="page" class="hfeed site">
		<header id="masthead" class="site-header" role="banner">
			<a class="home-link" href="<?php echo esc_url( home_url( '/' ) ); ?>" title="<?php echo esc_attr( get_bloginfo( 'name', 'display' ) ); ?>" rel="home">
				<h1 class="site-title"><?php bloginfo( 'name' ); ?></h1>
				<h2 class="site-description"><?php bloginfo( 'description' ); ?></h2>
			</a>

			<div id="navbar" class="navbar">
				<nav id="site-navigation" class="navigation main-navigation" role="navigation">
					<h3 class="menu-toggle"><?php _e( 'Menu', 'twentythirteen' ); ?></h3>
					<a class="screen-reader-text skip-link" href="#content" title="<?php esc_attr_e( 'Skip to content', 'twentythirteen' ); ?>"><?php _e( 'Skip to content', 'twentythirteen' ); ?></a>
					<?php wp_nav_menu( array( 'theme_location' => 'primary', 'menu_class' => 'nav-menu' ) ); ?>
					<?php get_search_form(); ?>
				</nav><!-- #site-navigation -->
			</div><!-- #navbar -->
		</header><!-- #masthead -->
						
		<div class="overlay_sous_menu">
		
		</div>
		
		<div id="container_fond_header">
		
			<header id="container_menu_principal">
			
				<div class="content">
				
					<ul>
						<li class="li_lien_accueil"><a href="index.php" title="Accueil" class="accueil">Accueil</a></li>
						
						<li class="li_lien_categories">
					
							<a href="index.php" title="Accueil" class="categories">Catégories</a>
							
							<div class="sous_menu_categories">
							
								<?php echo get_the_category_list(); ?>
								
							</div>
					
						</li>
						
					</ul>
					
					<?php wp_nav_menu( array( 'theme_location' => 'primary', 'menu_class' => 'nav-menu' ) ); ?>
				
				</div>
			
			</header>
		
			<div class="fond_header">
			
				<img src="<?php echo get_template_directory_uri(); ?>/images_slider/fonds/4.jpg">
			
				<div class="bonhomme_header">
				
					<img src="<?php echo get_template_directory_uri(); ?>/images_slider/5.png">
				
				</div>
			
			</div>
			
			<div class="site_title">
			
				<div class="content">
				
					<h1><?php bloginfo( 'name' ); ?></h1>
				
				</div>
			
			</div>
		
		</div>

		<div id="main" class="site-main">
		
			<div class="big_separator">
			
				
			
			</div>
		
			<div id="fond_corps">
			
				<div class="couleur">
				
					
				
				</div>
				
				<div class="b_et_w">
				
					
				
				</div>
			
			</div>
		
			<div class="content container_articles_accueil container_articles">
