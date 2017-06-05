<?php
	get_header(); 
?>	
	<div id="blog"> 
		<div class="container">
			<div class="row">
				<div class="col-md-8 blog--content"> 
					<div class="post--item">
					<?php
							// Start the Loop.
						while ( have_posts() ) : the_post();
						?>
						<div class="post--img"> 
							<img src="<?php echo get_the_post_thumbnail_url();?>" alt="thumbnail" class="img-responsive center-block"> </div>
						<div class="post--title"> <h2><?php echo get_the_title()?></h2> </div>
						<?php
							// var_dump($post->post_content);
							the_content( );
						?>
						  <div>
	                    	<?php  		
									// If comments are open or we have at least one comment, load up the comment template.
									if ( comments_open() || get_comments_number() ) {
										comments_template();
									}
								endwhile;
							?>
	                    </div>
		    		</div>
				</div>
				<? get_sidebar(); ?>	
			</div>
		</div>
	</div>
<?php
	get_footer();
?>