<?php
/**
 * La configuration de base de votre installation WordPress.
 *
 * Ce fichier contient les réglages de configuration suivants : réglages MySQL,
 * préfixe de table, clefs secrètes, langue utilisée, et ABSPATH.
 * Vous pouvez en savoir plus à leur sujet en allant sur 
 * {@link http://codex.wordpress.org/Editing_wp-config.php Modifier
 * wp-config.php} (en anglais). C'est votre hébergeur qui doit vous donner vos
 * codes MySQL.
 *
 * Ce fichier est utilisé par le script de création de wp-config.php pendant
 * le processus d'installation. Vous n'avez pas à utiliser le site web, vous
 * pouvez simplement renommer ce fichier en "wp-config.php" et remplir les
 * valeurs.
 *
 * @package WordPress
 */

// ** Réglages MySQL - Votre hébergeur doit vous fournir ces informations. ** //
/** Nom de la base de données de WordPress. */
define('DB_NAME', 'wordpress');

/** Utilisateur de la base de données MySQL. */
define('DB_USER', 'root');

/** Mot de passe de la base de données MySQL. */
define('DB_PASSWORD', '');

/** Adresse de l'hébergement MySQL. */
define('DB_HOST', 'localhost');

/** Jeu de caractères à utiliser par la base de données lors de la création des tables. */
define('DB_CHARSET', 'utf8');

/** Type de collation de la base de données. 
  * N'y touchez que si vous savez ce que vous faites. 
  */
define('DB_COLLATE', '');

/**#@+
 * Clefs uniques d'authentification et salage.
 *
 * Remplacez les valeurs par défaut par des phrases uniques !
 * Vous pouvez générer des phrases aléatoires en utilisant 
 * {@link https://api.wordpress.org/secret-key/1.1/salt/ le service de clefs secrètes de WordPress.org}.
 * Vous pouvez modifier ces phrases à n'importe quel moment, afin d'invalider tous les cookies existants.
 * Cela forcera également tous les utilisateurs à se reconnecter.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         '`Y[G$UHh20UgeUO)62>X{o+ya-9}m_6>uHS Q_QcJ%%t.T)Dapwu[i#4|W{GJ;.*');
define('SECURE_AUTH_KEY',  'HK}RRzgr8W/>Vtr87^.#=0W+ij5OOxKbtz~nW(zd/#,-Ag4(HQo^;AASbd]?}4>X');
define('LOGGED_IN_KEY',    'Ip`uI&oR%f0h>i7 m6oq*|;QcW#]%`cFSH7C]K3nu([jJcs|_|~!u^LTwCd$3/bj');
define('NONCE_KEY',        'JUC>4xdiQ!N 9AUSSTD$*8k=pq;)9vmNy0l8H!lx(n(QS)9P$p1G~.TgvguG& j!');
define('AUTH_SALT',        '#0QR`J1`nKUNW`lwR;g{.6@uRLL^S`DqP76jJWR#pt)zD:;udH92{_W7K2*;WNP?');
define('SECURE_AUTH_SALT', '9/NB,qCXmb_WpF8X#pYj}wkw:jjr/p_3]CHcsYzXZM=vz|RJnTzx;CLVNM8k-M&-');
define('LOGGED_IN_SALT',   '.1sE~Kv[saqR!62Z3#-<?M$A!dyB=A)I$c@17~?lJGE*U-CaDC@nlc*r/B~nw61X');
define('NONCE_SALT',       'Y#Y>qg_.9)Wi~$PxL[C5?@?B&|BW,_$b/W]-M:cs9%4lq?8<D&cREZg-JKr.}Tm2');
/**#@-*/

/**
 * Préfixe de base de données pour les tables de WordPress.
 *
 * Vous pouvez installer plusieurs WordPress sur une seule base de données
 * si vous leur donnez chacune un préfixe unique. 
 * N'utilisez que des chiffres, des lettres non-accentuées, et des caractères soulignés!
 */
$table_prefix  = 'wp_';

/**
 * Langue de localisation de WordPress, par défaut en Anglais.
 *
 * Modifiez cette valeur pour localiser WordPress. Un fichier MO correspondant
 * au langage choisi doit être installé dans le dossier wp-content/languages.
 * Par exemple, pour mettre en place une traduction française, mettez le fichier
 * fr_FR.mo dans wp-content/languages, et réglez l'option ci-dessous à "fr_FR".
 */
define('WPLANG', 'fr_FR');

/** 
 * Pour les développeurs : le mode deboguage de WordPress.
 * 
 * En passant la valeur suivante à "true", vous activez l'affichage des
 * notifications d'erreurs pendant votre essais.
 * Il est fortemment recommandé que les développeurs d'extensions et
 * de thèmes se servent de WP_DEBUG dans leur environnement de 
 * développement.
 */ 
define('WP_DEBUG', false); 

/* C'est tout, ne touchez pas à ce qui suit ! Bon blogging ! */

/** Chemin absolu vers le dossier de WordPress. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Réglage des variables de WordPress et de ses fichiers inclus. */
require_once(ABSPATH . 'wp-settings.php');