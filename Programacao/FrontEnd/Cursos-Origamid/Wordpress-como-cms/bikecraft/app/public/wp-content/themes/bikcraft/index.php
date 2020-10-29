
<?php get_header(); ?>

<div style='margin-top: 50px;'>
		<?php if(have_posts()) : while(have_posts()) : the_post(); ?>

		<h1><?php the_title(); ?></h1>
		<?php the_content(); ?>

		<?php endwhile; else: ?>

		<p><?php _e('Não possui posts com estes critérios'); ?></p>

		<?php endif; ?>

		</div>

<?php get_footer(); ?>
