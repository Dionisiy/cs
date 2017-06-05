<?php
$category = get_category(get_query_var('cat'),false);
$args = array(
    'post_type' =>'reviews' ,
);
$query = new WP_Query($args);
get_header();
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
                <div>
                    <div class='subtitle'>
                        <h1 class='pix-page-title px-single-page-title'>
                            <? echo get_the_title( $post );
                             ?>
                        </h1>
                    </div>
                    <div class="blog blog_detail">
                        <article>
                            <div class="pix-content-wrap">
                                <div class="detail_text rich_editor_text">
                                    <ul class="post-options">
                                        <li class="featured">
                                            Опубликовано:                
                                        </li>
                                        <li>
                                            <time datetime="<? echo the_date() ?>"><? echo the_date() ?></time>
                                        </li>
                                        <li>
                                            <span>in</span> <a href="" rel="tag">название чемпионата</a> 
                                        </li>     
                                    </ul>
                                    <p>
                                        <? the_content( );?>
                                    </p>
                                    <blockquote>
                                        <p>
                                         Можно вставить цитату или отсылку к другой новости 
                                        </p>
                                    </blockquote>
                                </div>
                                <!-- Share Post -->
                                <div class="share-post">
                                   
                                    <ul class="social-network">
                                        <a class="addthis_button_compact btn share-now pix-bgcolr" href="#"><i class="fa fa-share-square-o"></i>Share Now</a>
                                    </ul>
                                </div>
                                <!-- Share Post Close -->
                            </div>
                        </article>
                    </div>
                    
                    <? endwhile; ?>
                </div>
     
            </div>
            <?php get_sidebar(); ?>
        </div><!-- row -->
    </div><!-- container -->

<?php
get_footer();
?>