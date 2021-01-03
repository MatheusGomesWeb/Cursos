<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'local' );

/** MySQL database username */
define( 'DB_USER', 'root' );

/** MySQL database password */
define( 'DB_PASSWORD', 'root' );

/** MySQL hostname */
define( 'DB_HOST', 'localhost' );

/** Database Charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8' );

/** The Database Collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         'Qgnt+x/eFQx2QWBfMpqib5O/TQjsY9K/CBl7IrnlwhliPTRM6WReKcpj2yUJlkS7mfm0Wtxs9/aVwZGnkVdhNg==');
define('SECURE_AUTH_KEY',  'lBCvqL1aGh5Ais7nN79UFMadtS1vU3MmG0IF/kg8fxITIaR5UBttZlk/KZre7mZaQDSWbxRCYyj9b+/YURgsrA==');
define('LOGGED_IN_KEY',    'E74SsCeL+CxVLtXNPcZpw8PfAcd62gEPo0A9bloPumZt24+AN4SYTK//Rq1ptjJxZgRrmHghlDhrNx0LV5j7kg==');
define('NONCE_KEY',        'NgO/O8zjcoYqhOUVYPU8r0GoEXfcCJQiwnRgSciDnstTK9U+QgPyx0Lslv66AXc6RK49Hp7CuLitngbyySdMNA==');
define('AUTH_SALT',        'oehR0bcqL3yFgBy9MbVUxfJfpNp5l7vhEtOYRtTPDYccoz7yg+O9MVdfZ+onCwm9DO0gQljwlbKRpYk/p9YsWw==');
define('SECURE_AUTH_SALT', 'FcQW9sDN1QHebFOF3fzZui++D0vDktthUdjoZsQ8n395P3/NUS5L+/qVUL9Y3/ZgGZ/3bXq4zZz44yNqph8Tdw==');
define('LOGGED_IN_SALT',   'GCV9ANiTRycWWk4Hf53HFt9QYD3neDe5i9WjsOB60jJSOQNA4fKsku+RUMf4CicRu+rjNJ+y0O5jrw3ZLWOTeg==');
define('NONCE_SALT',       'SkntB/j1gRDLVNAG0I/CbwvGEWpaoHAfzHnaQEytAakHC6UoPg6bCV+ljmfSLFpveVMWUh54DzxIOW3DBPXpWQ==');

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';




/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', dirname( __FILE__ ) . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
