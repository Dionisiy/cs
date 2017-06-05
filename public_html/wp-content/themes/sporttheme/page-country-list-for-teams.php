<?php
get_header();
    $post_type = 'teams';

?>

    <div class="container">
        <div class="row">
            <div class="col-md-9">
                <?php
                // Start the Loop.
                while ( have_posts() ) : the_post();

                /*
                 * Include the post format-specific template for the content. If you want to
                 * use this in a child theme, then include a file called called content-___.php
                 * (where ___ is the post format) and that will be used instead.
                 */

                // Previous/next post navigation.
                // twentyfourteen_post_nav();
                    ?> 
                    <div >  
	                    <ul class="team_list">
					<?
                    	$categories = get_categories( );
                    	foreach ($categories as $category) {
                    	$flag = get_term_meta($category->cat_ID, 'cat_meta_cat_logo', true);

                    		echo "<li class='menu-item menu-item-type-post_type menu-item-object-page'> 
                    		<a href='/country/teams/$category->slug/'>$flag  <span>$category->cat_name</span> </a>
                        			</li>";
                    		}
            		?>
            		<? endwhile; ?>
	            		</ul>
	                </div>
     
            </div>
            <?php get_sidebar(); ?>
        </div><!-- row -->
    </div><!-- container -->

<?php
get_footer();
?>