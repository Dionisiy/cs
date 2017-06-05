<?php

      $arr = [
            'post_type' => ['news'],
            'term_id' =>5,
            'posts_per_page' => 5,
            
        ];
         $top_news_query = new WP_Query($arr);
         // var_dump($top_news_query);
// var_dump(get_tags( ));


    get_header();
?>

    <!-- Inner Main -->

        <?php get_sidebar('top'); ?>
        <div class="container">
            <div class="row">

                <div class="col-md-9">
                    <div class="subtitle"></div>
                    <div class="element_size_100">
                        <div class="pix-blog blog-carousel blog-vertical">
                            <!-- Blog Start -->

                            <header class="pix-heading-title">
                                <h2 class="pix-heading-color pix-section-title"> Топ новостей</h2>
                            </header>

                            <div class="cycle-slideshow" data-cycle-fx=fade data-cycle-timeout=3000 data-cycle-auto-height=container data-cycle-slides="article" data-cycle-random=false data-cycle-pager="#banner-pager1" data-cycle-pager-template="">
                            <?php 
                                 while ( $top_news_query->have_posts() ) : $top_news_query->the_post();
                            ?>  
                                <article class="124">
                                    <a href="<?php the_permalink(); ?>"><?php the_post_thumbnail();?>
                                    </a>
                                    <div class="caption">
                                        <h2><a href="<?php the_permalink(); ?>"><?php echo the_excerpt(); ?></a></h2>
                                    </div>
                                </article>
                            <?php 
                                endwhile;
                            ?>
                            </div>
                            <div class="sliderpagination">
                                <ul id="banner-pager1" class="banner-pager">
                                <?php 
                                    while ( $top_news_query->have_posts() ) : $top_news_query->the_post();
                                ?>
                                        <li>
                                            <div class="pager-desc">

                                                <span class="cs-desc"><?php the_title()?></span>
                                            </div>
                                        </li>
                                 <?php 
                                    endwhile;
                                ?>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="element_size_100">

                         <div class="pix-blog blog-home ">
                            <!-- Blog Start -->

                            
                        
                            <div class="tabs horizontal">
                                <header class="pix-heading-title">
                                    <h2 class="pix-heading-color pix-section-title">Club News</h2>
                                    
                                </header>
                                <div class="tab-content">
                                    <div id="blog-headlines2" class="blog-headlines tab-pane fade in active">
                                        <div class="pix-feature">
                                    
                                            <article class="featured-post post-122 post type-post status-publish format-standard has-post-thumbnail hentry category-boxing category-football tag-golf tag-kick tag-player tag-sports">
                                                <figure>
                                                    <a href="#"><img src="http://pixfill.com/wp-themes/kingsclub/wp-content/uploads/2014/03/x2-soccer-Post-325x244.jpg.pagespeed.ic.vKX2G5pk0c.webp" alt="" data-pagespeed-url-hash="1423033348" >
                                                    </a>
                                                    <li class="featured">

                                                        Featured
                                                    </li>
                                                    <figcaption>
                                                        <h2 class="pix-post-title"><a href="#">Moyes scouts Griezmann and Pogba after having...</a></h2>
                                                    </figcaption>
                                                </figure>
                                                <div class="text">
                                                    <ul class="post-options">
                                                        <li><a rel="tag" href="#">Football</a>
                                                        </li>
                                                        <li>
                                                            <time datetime=""><?php get_the_date() ?></time>
                                                        </li>
                                                    </ul>
                                                    <p>Kings Club Despicable briefly jeepers much roughly sped ouch in one away supportive grateful porcupine much less darn naughtily like keen python far goodness manatee convenient hey less darn thought far the as </p>
                                                    <div class="blog-bottom">
                                                        <a href="#" class="btnreadmore btn pix-bgcolrhvr">read more</a>
                                                        <span class='px-comments'><i class='comments'></i> <a href="#">1</a>                                        
                                                    </div>
                                                </div>
                                            </article>
                                   
                                        </div>
                                        <div class="blog-listing-text">

                                <?php 

                                    $args = [
                                        'post_type' => ['news'],
                                        // 'term_id' =>5,
                                        'posts_per_page' => 5,
                                        
                                    ];
                                     $news_query = new WP_Query($args);
                                     while ( $news_query->have_posts() ) : $news_query->the_post();
                                ?> 
                                        <article class="post-119 post type-post status-publish format-standard has-post-thumbnail hentry category-championship category-football tag-golf tag-player tag-sports tag-stadium">
                                            <div class="text">
                                                <h2 class="pix-post-title"><a href="<?php the_permalink(); ?>"><?php the_title()?></a></h2>
                                                <ul class="post-options">
                                                
                                                    <li>
                                                        <time datetime="07-04-14"><?php echo get_the_date() ?></time>
                                                    </li>
                                                    <!-- <li class='px-comments'>
                                                    <a href="#respond">0</a>
                                                    </li> -->                                           
                                                </ul>
                                            </div>
                                        </article>
                                <?php
                                    endwhile; 
                                ?>
                                        </div>

                                    </div>
                                    <div id="blog-recent2" class="blog-headlines tab-pane fade in "> 
                                        <div class="pix-feature">
                                           <article class="featured-post post-711 post type-post status-publish format-audio has-post-thumbnail hentry category-football category-premier-league tag-golf tag-kick tag-player tag-sports tag-stadium post_format-post-format-audio">
                                                <figure>
                                                    <a href="#"><img src="http://pixfill.com/wp-themes/kingsclub/wp-content/uploads/2014/03/x4-soccer-Post-325x244.jpg.pagespeed.ic.IMpiuNLaTw.webp" alt="" data-pagespeed-url-hash="2320252358">
                                                    </a>
                                                    <figcaption>
                                                        <h2 class="pix-post-title"><a href="#">PSG sponsorship deal fails Uefa new fp policy...</a></h2>
                                                    </figcaption>
                                                </figure>
                                                <div class="text">
                                                    <ul class="post-options">
                                                        <li><a rel="tag" href="#">Football</a>
                                                        </li>
                                                        <li>
                                                            <time datetime="07-04-14">April 7, 2014</time>
                                                        </li>
                                                    </ul>
                                                    <p>Spilled sensationally that sanctimoniously gawked dear misheard inside therefore lied and thus hello thankful wherever ducked flagrantly squinted Alas and froze besides hey arose that goodness parrot or regardi</p>
                                                    <div class="blog-bottom">
                                                        <a href="#" class="btnreadmore btn pix-bgcolrhvr"><i class="fa fa-plus"></i>READ MORE</a>
                                                        <span class='px-comments'><i class='fa fa-comments'></i> <a href="#respond">0</a>                                       
                                                    </div>
                                                </div>
                                            </article>
                                        </div>
                                        <div class="blog-listing-text">
                                            <article class="post-122 post type-post status-publish format-standard has-post-thumbnail hentry category-boxing category-football tag-golf tag-kick tag-player tag-sports">
                                                <div class="text">
                                                    <h2 class="pix-post-title"><a href="#">Moyes scouts Griezmann and Pogba after having another defeat and couple of injuries</a></h2>
                                                    <ul class="post-options">
                                                
                                                            <li><a rel="tag" href="#">Football</a></li>                                                            
                                                             <li>
                                                                <time datetime="07-04-14">April 7, 2014</time>
                                                            </li>
                                                            <li class='px-comments'><a href="#comments">1</a>                                                    </ul>
                                                </div>
                                            </article>
                                            <article class="post-119 post type-post status-publish format-standard has-post-thumbnail hentry category-championship category-football tag-golf tag-player tag-sports tag-stadium">
                                                    <div class="text">
                                                        <h2 class="pix-post-title"><a href="#">Wenger is a &#8216;magician&#8217;, says Nasri and gives credits to his former boss for his help</a></h2>
                                                        <ul class="post-options">
                                                    
                                                                <li><a rel="tag" href="#">Football</a></li>                                                            
                                                                 <li>
                                                                    <time datetime="07-04-14">April 7, 2014</time>
                                                                </li>
                                                                <li class='px-comments'><a href="#respond">0</a>                                                    </ul>
                                                    </div>
                                            </article>
                                            <article class="post-126 post type-post status-publish format-standard has-post-thumbnail hentry category-football category-premier-league tag-golf tag-player tag-sports">
                                                    <div class="text">
                                                        <h2 class="pix-post-title"><a href="#">Rodgers: Success isn&#8217;t all about trophies and admits busy transfer activities at Anfield</a></h2>
                                                        <ul class="post-options">
                                                    
                                                                <li><a rel="tag" href="#">Football</a></li>                                                            
                                                                 <li>
                                                                    <time datetime="07-04-14">April 7, 2014</time>
                                                                </li>
                                                                <li class='px-comments'><a href="#respond">0</a> 
                                                                </li>
                                                       </ul>
                                                    </div>
                                            </article>
                                            
                                        </div>                     
                                    </div>
                                    <div id="blog-popular2" class="blog-headlines tab-pane fade in ">
                                        <div class="pix-feature">
                                            <article class="featured-post post-715 post type-post status-publish format-standard has-post-thumbnail hentry category-football category-tennis tag-golf tag-kick tag-player tag-sports tag-stadium">
                                                <figure>
                                                    <a></a>
                                                    <figcaption>
                                                        
                                                        <h2 class="pix-post-title"><a href="#">Hodgson plays down Januzaj decision to pick h...</a></h2>
                                                    </figcaption>
                                                </figure>
                                                <div class="text">
                                                    <ul class="post-options">
                                                            <li><a rel="tag" href="#">Football</a></li>                                                    
                                                            <li>
                                                                <time datetime="07-01-14">January 7, 2014</time>
                                                            </li>
                                                    </ul>
                                                     <p>Kings Club Despicable briefly jeepers much roughly sped ouch in one away supportive grateful porcupine much less darn naughtily like keen python far goodness manatee convenient hey less darn thought far the as </p>                                        
                                                    <div class="blog-bottom">
                                                            <a href="#" class="btnreadmore btn pix-bgcolrhvr"><i class="fa fa-plus"></i>READ MORE</a>
                                                             <span class='px-comments'><i class='fa fa-comments'></i> <a href="#">3</a>                                     
                                                     </div>
                                                </div>
                                            </article>
                                        </div>
                                    <div class="blog-listing-text">                                                         
                                        <article class="post-124 post type-post status-publish format-standard has-post-thumbnail hentry category-championship category-football tag-cricket tag-cycle-racing tag-hockey tag-kick tag-sports">
                                            <div class="text">
                                                <h2 class="pix-post-title"><a href="#">Bendtner aims to leave mark at Arsenal before leaving the north london club</a></h2>
                                                <ul class="post-options">
                                                    
                                                    <li><a rel="tag" href="#">Football</a></li>                                                 
                                                    <li>
                                                        <time datetime="07-01-14">January 7, 2014</time>
                                                    </li>
                                                    <li class='px-comments'>
                                                        <a href="#comments">2</a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </article>
                                        <article class="post-122 post type-post status-publish format-standard has-post-thumbnail hentry category-boxing category-football tag-golf tag-kick tag-player tag-sports">
                                            <div class="text">
                                                <h2 class="pix-post-title"><a href="#">Moyes scouts Griezmann and Pogba after having another defeat and couple of injuries</a></h2>
                                                <ul class="post-options">
                                                        
                                                    <li><a rel="tag" href="#">Football</a></li>                                                 
                                                    <li>
                                                        <time datetime="07-04-14">April 7, 2014</time>
                                                    </li>
                                                    <li class='px-comments'><a href="#comments">1</a> 
                                                    </li>                                       
                                                </ul>
                                            </div>
                                        </article>
                                        <article class="post-119 post type-post status-publish format-standard has-post-thumbnail hentry category-championship category-football tag-golf tag-player tag-sports tag-stadium">
                                            <div class="text">
                                                <h2 class="pix-post-title"><a href="#">Wenger is a &#8216;magician&#8217;, says Nasri and gives credits to his former boss for his help</a></h2>
                                                <ul class="post-options">
                                                    
                                                    <li><a rel="tag" href="#">Football</a></li>                                                
                                                    <li>
                                                        <time datetime="07-04-14">April 7, 2014</time>
                                                    </li>
                                                    <li class='px-comments'><a href="#respond">0</a>
                                                    </li>                            
                                                </ul>
                                            </div>
                                        </article>
                                        <article class="post-710 post type-post status-publish format-standard has-post-thumbnail hentry category-championship category-football tag-golf tag-kick tag-player tag-sports tag-stadium">
                                            <div class="text">
                                                <h2 class="pix-post-title"><a href="#">Martinez: Everton&#8217;s form only depend on the club&#8217;s performance and liverpool factor is irrelevant</a></h2>
                                                <ul class="post-options">
                                                        
                                                        <li><a rel="tag" href="#">Football</a></li>                                                 
                                                        <li>
                                                            <time datetime="07-03-14">March 7, 2014</time>
                                                        </li>
                                                        <li class='px-comments'><a href="#respond">0</a></li>
                                                </ul>
                                            </div>
                                        </article>                      
                                    </div>                                   
                                    </div>
                                </div>
                            </div>          
                        </div> 

  
                    </div>   	
    			</div>

               <? get_sidebar( );?>


            </div> <!--  -->
                        </div>
                    </div>
                    <!-- Inner Main -->
                </div>
               
                      <?php get_footer(); ?>