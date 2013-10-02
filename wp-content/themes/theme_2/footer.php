<?php
/**
 * The template for displaying the footer.
 *
 * Contains footer content and the closing of the
 * #main and #page div elements.
 *
 * @package WordPress
 * @subpackage Twenty_Thirteen
 * @since Twenty Thirteen 1.0
 */
?>

			</div><!-- Content -->
		</div><!-- #main -->
		<footer id="colophon" class="site-footer" role="contentinfo">
			<!--<div class="big_separator">
			
			</div>-->
			<div class="content">
			<?php get_sidebar( 'main' ); ?>

			<div class="site-info">
				<?php do_action( 'twentythirteen_credits' ); ?>
			</div><!-- .site-info -->
			</div>
		</footer><!-- #colophon -->
	</div><!-- #page -->

	<div class="content">
	
		<?php wp_footer(); ?>
	
	</div>
	
</body>
</html>