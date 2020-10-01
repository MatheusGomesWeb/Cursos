<footer>
  <nav class="nav-footer">
    <?php
    $arr = array(
      'menu' => 'principal',
      'container' => false
    );

    wp_nav_menu($arr);
    ?>
    <!-- <ul>
      <li class="current_page_item"><a href="/">Menu</a></li>
      <li><a href="/sobre">Sobre</a></li>
      <li><a href="/contato">Contato</a></li>
    </ul>
  </nav>-->

    <p><?php bloginfo('name'); ?> © <?php echo date('Y'); ?>. Alguns direitos reservados.</p>
</footer>

<?php wp_footer(); ?>
</body>

</html>