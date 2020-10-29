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
define('AUTH_KEY',         'FbT1NzZcQonG/obmUFDrVeN7cQnQwBUfFhmZDOTNq+0Qmuq90loDNHDqPsWcehjprWzoNK4M6Oby/0sQcqz4yg==');
define('SECURE_AUTH_KEY',  '4e7M9XMmjU1AVgn0A2mzln3/8EbuRBlo3Dy8UAN7AlQjbrs/+IMe4kEJ3YHkEMWgCw/jkjkwevb6zzwzBHFdCA==');
define('LOGGED_IN_KEY',    '759cDiRVveqfn9l201htQr2MLEMIS2ROgIU7rz3kvlShtH08wZFLVk3Lqx32y5Ap5hHYcsueBFharnNWWhLNig==');
define('NONCE_KEY',        'oRcKXdwgOHnY/HSRsZN8m3x7168QmaTyV9uNMMYzf7UMVG+B1MEBNCHs9y2ZK57QTw3WHWSS8dHHpCk2NJLZTg==');
define('AUTH_SALT',        's1IvpjJ83BXaJXotxMV24uMoJWzUmHe6FUZRWyetM9mWpg2ujNLiknx+kmzE2bPCBndfEQWdXl0+vKXdfkmwdQ==');
define('SECURE_AUTH_SALT', '5DD+VYZdguJKsUhcobWUZafBogdgeTM33pWtxnyBBpUAX0KzeeHxsjEXLLU3syRhSm4gLZzEC3j4mCDSMD2pSQ==');
define('LOGGED_IN_SALT',   'kaFAPFGoqosBAZ+yoic9Wro/tkarRrfl5ZxtF1MelEelaUjx8OUJEZF+sPcvnLefjVbBm5VSjctDy2EiRGMF/g==');
define('NONCE_SALT',       '/MzjFzlL8Tyuz0sqDGZ0izx4bBgz8TO8I1A4tFJgS+PbxCWun7jyvBhc18mVuBtEDNaZfiW8d0Y5vE2BD/QRBg==');

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
