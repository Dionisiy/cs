 <aside class="col-md-3">
    <?php
        if (is_front_page()) :
    ?>
                    <div class="widget widget_countdown match">
                        <div class="countdown-section">

                            <!-- Pix Label Strat -->
                            <div class="pix-label">
                                <span class="pix-tittle">Match Day</span>
                                <time>
                                    May 2, 2017 04:00 </time>
                            </div>
                            <!-- Pix Label Strat -->
                            <div class="text">
                                <div class="pix-sc-team">
                                    <ul>
                                        <li>
                                            <figure>
                                                <img alt="" src="" data-pagespeed-url-hash="2357817393" >
                                            </figure>
                                        </li>
                                        <li>
                                            <figure>
                                                <img alt="" src="" data-pagespeed-url-hash="2357817393" >
                                            </figure>
                                        </li>
                                    </ul>
                                    <div class="pix-sc-team-info">
                                        <p>
                                        <?php 
                                        $post = get_post(5);
                                        
                                           echo $post->post_title?><span class="time-sec">Cleator, Cumbria, UK</span>
                                        </p>
                                    </div>
                                </div>
                                <header class="pix-cont-title">
                                    <h2 class="pix-section-title">
                                    	<span>KICK-OFF: 04:00</span>
									</h2>
                                </header>
                                <div class="defaultCountdown" id="defaultCountdowny18"></div>
                               
                               
                            </div>
                        </div>
                    </div>

    <?php
        endif;
    ?>    
    <?php
    var_dump(get_the_category());
    ?>
                    <div class="widget widget_countdown match">
                        <div class="countdown-section">

                            <!-- Pix Label Strat -->
                            <div class="pix-label">
                                <span class="pix-tittle">Match Day</span>
                                <time>
                                    May 2, 2017 04:00 </time>
                            </div>
                            <!-- Pix Label Strat -->
                            <div class="text">
                                <div class="pix-sc-team">
                                    <ul>
                                        <li>
                                            <figure>
                                                <img alt="" src="" data-pagespeed-url-hash="2357817393" >
                                            </figure>
                                        </li>
                                        <li>
                                            <figure>
                                                <img alt="" src="" data-pagespeed-url-hash="2357817393" >
                                            </figure>
                                        </li>
                                    </ul>
                                    <div class="pix-sc-team-info">
                                        <p>
                                        <?php 
                                        $post = get_post(5);
                                        
                                           echo $post->post_title?><span class="time-sec">Cleator, Cumbria, UK</span>
                                        </p>
                                    </div>
                                </div>
                                <header class="pix-cont-title">
                                    <h2 class="pix-section-title">
                                        <span>KICK-OFF: 04:00</span>
                                    </h2>
                                </header>
                                <div class="defaultCountdown" id="defaultCountdowny18"></div>
                               
                               
                            </div>
                        </div>
                    </div>
                    
    <?php
    ?>          
                    <div class="widget widget-recent-blog">
                        <header class="pix-heading-title">
                            <h2 class="pix-section-title heading-color"> Топ трансляции</h2>

                            <?php
                                $args = array(
                                   'post_type' => 'translations',
                                   'term_id' => 6,
                                   
                                   'publish' => true,
                                   'posts_per_page' => 5,
                                   'orderby' => 'date',
                                   'paged' => get_query_var('paged'),
                                );
                                $news_query = new WP_Query( $args );
                                    while ( $news_query->have_posts() ) { $news_query->the_post();
                                        ?>
                                        <article>
                                            <figure>
                                                <a class='pix-colrhvr' href='#'>
                                                    <img src='' alt='' data-pagespeed-url-hash="1423033348">
                                                </a>
                                            </figure>
                                            <div class="text">
                                                <h6>
                                                    <a href="<?php echo get_permalink(); ?>" class='pix-colrhvr'><?php the_title();?>
                                                    </a>
                                                </h6>
                                                <ul class="post-options">
                                                    <!-- <li>
                                                        <p><?php// echo the_excerpt(); ?></p>

                                                    </li> -->
                                                   <!--  <li>
                                                        <time datetime="<?php // echo the_date("d.m.Y, H:i")  ?>"><?php //echo get_the_date("Y-m-d") ?></time>
                                                    </li> -->
                                                  <!--   <li class="featured">

                                                       <a href="<?php// echo get_permalink(); ?>"> Смотреть обзор</a>
                                                    </li>
                                                    -->
                                                </ul>
                                            </div>
                                        </article>

                            <?php
                                }
                            ?>
                        </header>

                    </div>
                    <div class="widget widget-recent-blog">
                        <header class="pix-heading-title">
                            <h2 class="pix-section-title heading-color">Последние обзоры</h2>

                            <?php
                                $args = array(
                                   'post_type' => 'reviews',
                                   'publish' => true,
                                   'posts_per_page' => 5,
                                   'orderby' => 'date',
                                   'paged' => get_query_var('paged'),
                                );
                                $news_query = new WP_Query( $args );
                                    while ( $news_query->have_posts() ) { $news_query->the_post();
                                        ?>
                                        <article>
                                            <figure>
                                                <a class='pix-colrhvr' href='#'>
                                                    <img src='' alt='' data-pagespeed-url-hash="1423033348">
                                                </a>
                                            </figure>
                                            <div class="text">
                                                <h6>
                                                    <a href="<?php echo get_permalink(); ?>" class='pix-colrhvr'><?php the_title();?>
                                                    </a>
                                                </h6>
                                                <ul class="post-options">
                                                    <!-- <li>
                                                        <p><?php// echo the_excerpt(); ?></p>

                                                    </li> -->
                                                   <!--  <li>
                                                        <time datetime="<?php // echo the_date("d.m.Y, H:i")  ?>"><?php //echo get_the_date("Y-m-d") ?></time>
                                                    </li> -->
                                                    <li class="featured">

                                                       <a href="<?php echo get_permalink(); ?>"> Смотреть обзор</a>
                                                    </li>
                                                   
                                                </ul>
                                            </div>
                                        </article>

                            <?php
                                }
                            ?>
                        </header>

                    </div>

                   
</aside>