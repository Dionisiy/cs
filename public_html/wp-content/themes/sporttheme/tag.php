<?php
	$query = $wp_query;
	if (!empty($_SERVER['QUERY_STRING'])) {
		parse_str($_SERVER['QUERY_STRING'], $get_array);		
		
			$arr = [
				'tag' => $query->query['tag'],
				
			];
			if (isset($query->query['paged'])) {
								$arr['paged'] = $query->query['paged'];
			}
		 	$query = new WP_Query(
						$arr
				);
		}
	
	get_header(); 

?>
	<div class="main_container flex row">

			<div class="container_content flex column" role="main">
	
				<?php
					// Start the Loop.
					while ( $query->have_posts() ) : $query->the_post();
					$meta_values = get_post_meta( $post->ID, '', false );
					get_the_content( );
					?>       
			<?php 
                endwhile;
				?>
			</div>
			<?php get_sidebar(); ?>
		
	</div><!-- #primary -->
</div><!-- #main-content -->

<?php
	get_footer();
?>