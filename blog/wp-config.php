<?php
/**
 * As configurações básicas do WordPress
 *
 * O script de criação wp-config.php usa esse arquivo durante a instalação.
 * Você não precisa usar o site, você pode copiar este arquivo
 * para "wp-config.php" e preencher os valores.
 *
 * Este arquivo contém as seguintes configurações:
 *
 * * Configurações do MySQL
 * * Chaves secretas
 * * Prefixo do banco de dados
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/pt-br:Editando_wp-config.php
 *
 * @package WordPress
 */

// ** Configurações do MySQL - Você pode pegar estas informações com o serviço de hospedagem ** //
/** O nome do banco de dados do WordPress */
define('DB_NAME', 'lotoesperto-wp-FteFVfDr');

/** Usuário do banco de dados MySQL */
define('DB_USER', 'UBcGDwVm0EbC');

/** Senha do banco de dados MySQL */
define('DB_PASSWORD', 'UBcGDwVm0EbC');

/** Nome do host do MySQL */
define('DB_HOST', 'localhost');

/** Charset do banco de dados a ser usado na criação das tabelas. */
define('DB_CHARSET', 'utf8mb4');

/** O tipo de Collate do banco de dados. Não altere isso se tiver dúvidas. */
define('DB_COLLATE', '');

/**#@+
 * Chaves únicas de autenticação e salts.
 *
 * Altere cada chave para um frase única!
 * Você pode gerá-las
 * usando o {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org
 * secret-key service}
 * Você pode alterá-las a qualquer momento para invalidar quaisquer
 * cookies existentes. Isto irá forçar todos os
 * usuários a fazerem login novamente.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         '3{m?-1bqLLe4@4Si7mKuh3aex,B/!gG3w`I[^7fPhq&PQb%;^*`K;#B8*c-d%ef!');
define('SECURE_AUTH_KEY',  'pU(f)XAGGiH!XK60CyuVcFkjUEmT!lhi@c|in2;2[lz{N| Ze@M.C,/HmU;!5yDt');
define('LOGGED_IN_KEY',    'W4MoH`$i|=Z!LacAuwe~kzXQE?yYw@4BHbtti18q5#wB_cp.F1U>/_^3<4#@|w[V');
define('NONCE_KEY',        'w_h]GtFDqPM/Wv@%&>$=._9yr$W;qOf;F/W-5090IuaZ]&9-eOwwn !qXWsO?2XX');
define('AUTH_SALT',        'J<y2X=!{jDg*?*Fz}$S3n/PH1Th}TrRLc(Mf)E2abwA%/yVj&4Ju=/wQqNu^(VC`');
define('SECURE_AUTH_SALT', '`oN~MJXX^8j|,N)@&y,jf3&E51^m?W&A2BR5[FHvms1yXyHTlX.5n={0Na$v^Ot;');
define('LOGGED_IN_SALT',   'm3OKysp1#cOp>J3)[4Sj`&nl`t^QZUbRC2pZN+JA1t k0sk|2,oyeS!L5[w48RmF');
define('NONCE_SALT',       'vd,]i[V,*^cO2v)oof->6j-]:9T6Wb:*3mdvGlmx/n{xK@yF(2lPu3-xDQb?J6/q');

/**#@-*/

/**
 * Prefixo da tabela do banco de dados do WordPress.
 *
 * Você pode ter várias instalações em um único banco de dados se você der
 * um prefixo único para cada um. Somente números, letras e sublinhados!
 */
$table_prefix  = 'wp_';

/**
 * Para desenvolvedores: Modo de debug do WordPress.
 *
 * Altere isto para true para ativar a exibição de avisos
 * durante o desenvolvimento. É altamente recomendável que os
 * desenvolvedores de plugins e temas usem o WP_DEBUG
 * em seus ambientes de desenvolvimento.
 *
 * Para informações sobre outras constantes que podem ser utilizadas
 * para depuração, visite o Codex.
 *
 * @link https://codex.wordpress.org/pt-br:Depura%C3%A7%C3%A3o_no_WordPress
 */
define('WP_DEBUG', false);

/* Isto é tudo, pode parar de editar! :) */

/** Caminho absoluto para o diretório WordPress. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Configura as variáveis e arquivos do WordPress. */
require_once(ABSPATH . 'wp-settings.php');
