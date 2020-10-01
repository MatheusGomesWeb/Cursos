<?php
// Template name: Contato
?>
<?php get_header(); ?>

<?php if (have_posts()) : while (have_posts()) : the_post(); ?>

<section class="container contato">
  <h2 class="subtitulo"><?php the_title(); ?></h2>

  <div class="grid-16">
    <a href="<?php the_field('endereco-url'); ?>" target="_blank">
      <img src="<?php the_field('imagem-mapa'); ?>" alt="Fachada do Rest"></a>
  </div>

  <?php if (have_rows('contato-items')) : while (have_rows('contato-items')) : the_row(); ?>
  <div class="grid-1-3 contato-item">
    <h2><?php the_sub_field('contato-item-title'); ?></h2>

    <?php if (have_rows('contato-item-description')) : while (have_rows('contato-item-description')) : the_row(); ?>

    <p><?php the_sub_field('descricao_do_item'); ?></p>

    <?php endwhile;
            endif; ?>
  </div>

  <?php endwhile;
      endif; ?>
</section>

<?php endwhile;
endif; ?>

<?php get_footer(); ?>