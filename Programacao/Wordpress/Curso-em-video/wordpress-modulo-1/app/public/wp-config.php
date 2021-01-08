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
define('AUTH_KEY',         's77Yz/wAz+6KlgEYi5A4aMPAmD14y+4xgg6aUwLkaM2DSxah9cbXvnCqUqdWLFI24hVVNlE1sNJMIK5PoyNzwg==');
define('SECURE_AUTH_KEY',  'yYb6nTkt+etfnk4tfmHxTjp9Z/Djl2ztQgw8Z3pE+TCXgxJCUFe35VIfhoBBkS5793FXeJYz7EyXkXCmuNKD4Q==');
define('LOGGED_IN_KEY',    'jj7b05emSiQmHr6EZvx4hKycAy+uuRKO0unQ2gIeZCDkvrV25eSvCUzaSGPBWWB4+xiE/KHxpzdfg41fsZ01sA==');
define('NONCE_KEY',        '4MjiNdel7kuHrMgU7J60BAM4uEkRxgp7bLfiB8ZBPTayUhao+MgQlHAnofXmfthL6Y9bVPQZWjTY2VA4tU6mcQ==');
define('AUTH_SALT',        'fnKX4QbXpKUUlQrIegLGfz5nkwZ5PPpn3qJKglvkFS3s75odTqfrhpfXCKe+f28IqXQ38lQCNpP5X7PF3/ejWQ==');
define('SECURE_AUTH_SALT', 'y/a27HQMEpoAk8UFMGDitT14ZHHZSysLmXD5MfCjCm+NkhkmurELZQ7prZE5TTcPWLrllntDoOe6/3q/SN2Hpw==');
define('LOGGED_IN_SALT',   'yf140Z3a0vhEmHP/BGr9ZlG03Z0+/NMvzc5DybOu2atRXo6iUMyP6ukPpo7m2pWxifVPMConfASIv7K/xoSV4g==');
define('NONCE_SALT',       '7f5zPY52P1W/dknFBrsBApnyMGuSa41lqdZS/k+AuTTkyvHmWfnF2Qw3ic/mYAhNDa9rCVAq04m5pUf6sqZ1Sw==');

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
