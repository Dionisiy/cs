<?php
$query = $wp_query;

get_header();

?>
    <div class="container">
        <div class="row">
            <div class="col-md-9">
                <?php

 $args = array(
                   'post_type' => 'news',
                   'publish' => true,
                   'paged' => get_query_var('paged'),
               );
$categories = get_terms();
// var_dump($categories);
    foreach ($categories as $category) {
        // var_dump($category->term_id);
    }
         // var_dump( query_posts($args)); 
                // Start the Loop.
                    while ( $query->have_posts() ) : $query->the_post();

                        ?>
                       <div class="col-md-8 blog--content">
                            <div class="post--item">
                                <div class="post--img"> <img sr alt="" class="img-responsive center-block"> </div>
                                <div class="post--content-border">
                                    <div class="post--title">
                                        <h2><a href="<?php echo get_permalink($post->ID)?>"><?php echo get_the_title($post)?></a></h2>
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
                <?php 
              $args = array(
                    'show_all'     => false, // показаны все страницы участвующие в пагинации
                    'end_size'     => 1,     // количество страниц на концах
                    'mid_size'     => 1,     // количество страниц вокруг текущей
                    'prev_next'    => true,  // выводить ли боковые ссылки "предыдущая/следующая страница".
                    'prev_text'    => __('« Previous'),
                    'next_text'    => __('Next »'),
                    'add_args'     => false, // Массив аргументов (переменных запроса), которые нужно добавить к ссылкам.
                    'add_fragment' => '',     // Текст который добавиться ко всем ссылкам.
                    'screen_reader_text' => __( 'Posts navigation' ),
                );
                echo get_the_posts_pagination($args);
            ?>
            </div>
            <?php get_sidebar(); ?>
        </div>
    </div>
<?php
    get_footer();
?>