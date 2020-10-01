 <?php
  // Template name: Menu da semana
  ?>
 <?php get_header(); ?>
 <section class="container">
   <?php if (have_posts()) : while (have_posts()) : the_post(); ?>

   <h2 class="subtitulo"><?php the_field('titulo_principal'); ?></h2>

   <?php endwhile;
    endif; ?>

   <?php if (have_rows('produtos_menu')) : while (have_rows('produtos_menu')) : the_row(); ?>
   <div class="menu-prato grid-8">

     <h2><?php the_sub_field('categoria_produto'); ?></h2>

     <ul>
       <?php if (have_rows('produto_item')) : while (have_rows('produto_item')) : the_row(); ?>

       <li>
         <span><sup>R$</sup><?php the_sub_field('preco_produto'); ?></span>
         <div>
           <h3><?php the_sub_field('nome_produto'); ?></h3>
           <p><?php the_sub_field('descricao_produto'); ?></p>
         </div>
       </li>

       <?php endwhile;
            endif; ?>
     </ul>
   </div>
   <?php endwhile;
    endif; ?>

 </section>

 <?php get_footer(); ?>