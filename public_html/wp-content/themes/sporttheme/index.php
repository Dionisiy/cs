<?php

$variable =  $_SERVER['REQUEST_URI'];
$variable = explode("/", $variable);
if($variable[2] == 'teams'){
    $post_type = 'teams';
}elseif($variable[2] == 'news'){
    $post_type = 'news';
}elseif($variable[2] == 'reviews'){
    $post_type = 'reviews';
}elseif($variable[2] == 'live'){
    $post_type = 'translations';
}

$args = array(
    'post_type' =>$post_type ,
    // 'category_name' =>$this_cat_slug 
);
$query = new WP_Query($args);
	get_header();
?>
 <div class="container">
        <div class="row">
            <div class="col-md-9">           
            <?php
                // Start the Loop.
                while ( $query->have_posts() ) : $query->the_post();
                    $meta_values = get_post_meta( $post->ID, '', true );
                    ?>
                    <div class="col-md-8 blog--content">
                            <div class="post--item">
                                <div class="post--img"> <img sr alt="" class="img-responsive center-block"> </div>
                                <div class="post--content-border">
                                    <div class="post--title">
                                        <h2><a href="<?php echo get_permalink($post->ID)?>"><?php echo get_the_title()?></a></h2>
                                        <?php 
                                            // var_dump(wp_get_post_tags($post->ID));
                                        ?>
                                    </div>
                                    <div class="post--meta">
                                    </div>
                                    <div class="post--except">
                                        <p><?php echo the_excerpt(); ?></p>
                                    </div>
                                    <div class="post--except-footer"> 
                                        <a href="<?php echo get_permalink($post->ID)?>" class="more"><i class="fa fa-angle-double-right"></i>READ MORE</a>
                                    </div>
                                </div>
                            </div>
                            <div></div>
                        </div>
                    <?php
                endwhile;
            ?>
         </div>
            <?php get_sidebar(); ?>

        </div>
    </div>
<?php get_footer(); ?>