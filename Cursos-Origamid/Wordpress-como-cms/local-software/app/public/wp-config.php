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
define('AUTH_KEY',         'H1rKgDiGeYojjraR+N2iwW46P9V0chP2b3HFocl1p/+SDGIusHB4plNSVNVqVE2jOQHZl5i00iTDgn3r6D5jWQ==');
define('SECURE_AUTH_KEY',  'CVdY5Un2bee+nIjy5T0xCSsrmdQeYOjjKDzaEOcyinBBFCpcucjgdf7/SrYpSSDjmXQjxaui8yjt7wKxI0ByVg==');
define('LOGGED_IN_KEY',    'sVboR3ZGA9Y5Pnw5SeXnLCX1Y3e4pL58+muryzRgLKQFpdkqohVa8DelRlY432Qrh4x3jn8O3NIz/qN2I48Nuw==');
define('NONCE_KEY',        'XWocW9W8U8R7zBsD1tXFHdiP1aiSxAfZO+xuPx5LgHHyTHGe/srToQyXv/OfQu/eSokkpc30CrxrE3u9MX/MrQ==');
define('AUTH_SALT',        'CzavOlxqS5IeYxVc+n09a/NyHvQfwaCqJ1W7uYq8HiCg6wVJXS3ZT0Hv6CXURFKs0TGmebobQhHfd//DXp6vSA==');
define('SECURE_AUTH_SALT', 'CKm0QiE1VHRRzgXDFvD8E5SL26WpbKeYiHdDaX8WGh1+q2rOCxKIi/k/lLPYwnXdyI9hYIBUXUP1qwY7jZkSew==');
define('LOGGED_IN_SALT',   'yWMJEhROQf1V0ymkyXrVwKZtwV8/BR5N0Mwr+FzQr3U20M4xyyOYxZKAjX0DPHN2Rjkv+qAdDR2+YOUO1OoY+w==');
define('NONCE_SALT',       'xSVwNxnNN8m23Fg58vQd/CtJbCpA7BhCBBB9pU+LzUJdeJnrGUZwZZcLPBNw4Xr6sIxlMjE+rfkVcYGW1xx6tg==');

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
