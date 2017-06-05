<?php
get_header();
$args = array(
    'post_type' => 'news',
    'posts_per_page' => 3,
    'category' => 2,
);
$news_post = query_posts( $args );
$countries = get_categories();
?>
    <div class="container">
        <div class="row">
            <div class="col-md-9">

        <?php if ($countries) : ?>
            <?php foreach ($countries as $country) : ?>
                
                <a href="/country/news/<?= $country->slug ?>">
                    <div class="item">
                        <?= get_term_meta($country->cat_ID, 'cat_meta_cat_logo', true) ?>
                        <p><?= $country->name ?></p>

                    </div>
                </a>
            <?php endforeach; ?>
        <?php endif; ?>
            
            </div>
        <?php get_sidebar(); ?>

        </div>
    </div>

<?php get_footer(); ?>