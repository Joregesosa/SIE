-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 20-07-2024 a las 02:46:30
-- Versión del servidor: 10.4.32-MariaDB
-- Versión de PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `jcb_db`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `cache`
--

CREATE TABLE `cache` (
  `key` varchar(255) NOT NULL,
  `value` mediumtext NOT NULL,
  `expiration` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `cache_locks`
--

CREATE TABLE `cache_locks` (
  `key` varchar(255) NOT NULL,
  `owner` varchar(255) NOT NULL,
  `expiration` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `contacts`
--

CREATE TABLE `contacts` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `key` varchar(255) NOT NULL,
  `first_name` varchar(255) NOT NULL,
  `second_name` varchar(255) NOT NULL,
  `fLast_name` varchar(255) NOT NULL,
  `sLast_name` varchar(255) NOT NULL,
  `id_card` varchar(255) NOT NULL,
  `birth_date` date NOT NULL,
  `phone` varchar(255) NOT NULL,
  `phone_type_id` bigint(20) UNSIGNED NOT NULL,
  `email` varchar(255) NOT NULL,
  `last_institution` varchar(255) NOT NULL,
  `address` varchar(255) NOT NULL,
  `father_names` varchar(255) NOT NULL,
  `father_id_card` varchar(255) NOT NULL,
  `father_phone` varchar(255) NOT NULL,
  `father_phone_type_id` bigint(20) UNSIGNED NOT NULL,
  `father_occupation` varchar(255) NOT NULL,
  `mother_names` varchar(255) NOT NULL,
  `mother_id_card` varchar(255) NOT NULL,
  `mother_phone` varchar(255) NOT NULL,
  `mother_phone_type_id` bigint(20) UNSIGNED NOT NULL,
  `mother_occupation` varchar(255) NOT NULL,
  `level_id` bigint(20) UNSIGNED NOT NULL,
  `status` int(11) NOT NULL DEFAULT 1,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `education_levels`
--

CREATE TABLE `education_levels` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `description` text NOT NULL,
  `status` tinyint(1) NOT NULL DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `education_levels`
--

INSERT INTO `education_levels` (`id`, `name`, `description`, `status`) VALUES
(1, 'Primaria', 'Corresponde a la educación básica inicial que abarca los primeros años de escolarización obligatoria, generalmente desde los 6 hasta los 12 años de edad, dependiendo del sistema educativo de cada país.', 1),
(2, 'Secundaria', 'Comprende la educación intermedia y avanzada después de la educación primaria, y generalmente se divide en educación secundaria básica y educación secundaria superior o media. Suele abarcar la adolescencia, desde los 12 o 13 hasta los 17 o 18 años, dependiendo del sistema educativo.', 1),
(3, 'Técnica o Vocacional', 'Se centra en habilidades y conocimientos específicos para una profesión o campo técnico, y puede ofrecer certificaciones o diplomas en lugar de títulos universitarios.', 1),
(4, 'Superior', 'Incluye programas de educación terciaria después de la educación secundaria, como programas de grado universitario (licenciatura), posgrados (maestría) y doctorados.', 1),
(5, 'Profesional', 'Puede referirse a programas de formación adicional después de la educación superior, como programas de especialización, certificaciones profesionales o cursos de actualización y desarrollo profesional.', 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `elective_years`
--

CREATE TABLE `elective_years` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `status` tinyint(1) NOT NULL DEFAULT 1,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `elective_years`
--

INSERT INTO `elective_years` (`id`, `name`, `status`, `created_at`, `updated_at`) VALUES
(1, 'Año 2024-2025', 1, '2024-07-20 04:41:57', '2024-07-20 04:41:57');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `enrollment_payments`
--

CREATE TABLE `enrollment_payments` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `contact_id` bigint(20) UNSIGNED NOT NULL,
  `amount` decimal(8,2) NOT NULL,
  `method` int(11) NOT NULL,
  `reference` varchar(255) DEFAULT NULL,
  `date` date NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `failed_jobs`
--

CREATE TABLE `failed_jobs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `uuid` varchar(255) NOT NULL,
  `connection` text NOT NULL,
  `queue` text NOT NULL,
  `payload` longtext NOT NULL,
  `exception` longtext NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `family_structures`
--

CREATE TABLE `family_structures` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `description` text NOT NULL,
  `status` tinyint(1) NOT NULL DEFAULT 1,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `family_structures`
--

INSERT INTO `family_structures` (`id`, `name`, `description`, `status`, `created_at`, `updated_at`) VALUES
(1, 'Familia Nuclear', 'Formada por dos progenitores (padre y madre) y sus hijos biológicos. Esta es la estructura familiar más tradicional y común en muchas sociedades.', 1, NULL, NULL),
(2, 'Familia Monoparental', 'Consiste en un solo progenitor (ya sea padre o madre) que es responsable de la crianza y el cuidado de los hijos. Puede ser resultado de divorcio, viudez, o decisión de tener hijos sin pareja.', 1, NULL, NULL),
(3, 'Familia Extendida', 'Incluye no solo a los padres e hijos, sino también a otros parientes cercanos como abuelos, tíos, tías, primos, y en algunos casos, familiares más lejanos. Esta estructura puede brindar un sistema de apoyo más amplio y una red de cuidado más extensa.', 1, NULL, NULL),
(4, 'Familia Reconstruida o Reconstituida', 'Se forma cuando uno o ambos progenitores tienen hijos de relaciones anteriores y se vuelven a casar o establecen una nueva pareja. Los hijos pueden ser biológicos de uno o ambos padres o adoptados.', 1, NULL, NULL),
(5, 'Familia Homoparental', 'Compuesta por una pareja del mismo sexo y sus hijos, ya sean biológicos, adoptivos o de relaciones anteriores. Esta estructura se ha vuelto más común con el reconocimiento legal del matrimonio entre personas del mismo sexo y la adopción por parte de parejas homosexuales.', 1, NULL, NULL),
(6, 'Familia de Crianza o Adoptiva', 'Se forma cuando una persona o pareja adopta legalmente a uno o más niños, o cuando cuida temporalmente a niños que no son biológicamente suyos, pero que necesitan un hogar seguro y amoroso.', 1, NULL, NULL),
(7, 'Familia Compuesta', 'Se caracteriza por la presencia de dos o más núcleos familiares que se fusionan en una sola unidad. Esto puede ocurrir cuando dos familias se unen a través del matrimonio o la convivencia, y cada una trae consigo hijos de relaciones anteriores.', 1, NULL, NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `groups`
--

CREATE TABLE `groups` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `level_id` bigint(20) UNSIGNED NOT NULL,
  `max_students` int(11) NOT NULL,
  `teacher_id` bigint(20) UNSIGNED DEFAULT NULL,
  `status` tinyint(1) NOT NULL DEFAULT 1,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `groups`
--

INSERT INTO `groups` (`id`, `name`, `level_id`, `max_students`, `teacher_id`, `status`, `created_at`, `updated_at`) VALUES
(1, 'Grupo A', 1, 30, 3, 1, '2024-07-20 04:41:57', '2024-07-20 04:41:57'),
(2, 'Grupo A', 2, 20, 4, 1, '2024-07-20 04:41:57', '2024-07-20 04:41:57'),
(3, 'Grupo A', 3, 35, 3, 1, '2024-07-20 04:41:57', '2024-07-20 04:41:57'),
(4, 'Grupo A', 4, 15, 1, 1, '2024-07-20 04:41:57', '2024-07-20 04:41:57'),
(5, 'Grupo A', 5, 25, 3, 1, '2024-07-20 04:41:57', '2024-07-20 04:41:57'),
(6, 'Grupo A', 6, 35, 3, 1, '2024-07-20 04:41:57', '2024-07-20 04:41:57'),
(7, 'Grupo A', 7, 30, 2, 1, '2024-07-20 04:41:57', '2024-07-20 04:41:57'),
(8, 'Grupo A', 8, 15, 2, 1, '2024-07-20 04:41:57', '2024-07-20 04:41:57'),
(9, 'Grupo A', 9, 35, 3, 1, '2024-07-20 04:41:57', '2024-07-20 04:41:57'),
(10, 'Grupo A', 10, 15, 4, 1, '2024-07-20 04:41:57', '2024-07-20 04:41:57'),
(11, 'Grupo A', 11, 20, 1, 1, '2024-07-20 04:41:57', '2024-07-20 04:41:57'),
(12, 'Grupo A', 12, 15, 3, 1, '2024-07-20 04:41:57', '2024-07-20 04:41:57'),
(13, 'Grupo A', 13, 35, 4, 1, '2024-07-20 04:41:57', '2024-07-20 04:41:57');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `jobs`
--

CREATE TABLE `jobs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `queue` varchar(255) NOT NULL,
  `payload` longtext NOT NULL,
  `attempts` tinyint(3) UNSIGNED NOT NULL,
  `reserved_at` int(10) UNSIGNED DEFAULT NULL,
  `available_at` int(10) UNSIGNED NOT NULL,
  `created_at` int(10) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `job_batches`
--

CREATE TABLE `job_batches` (
  `id` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `total_jobs` int(11) NOT NULL,
  `pending_jobs` int(11) NOT NULL,
  `failed_jobs` int(11) NOT NULL,
  `failed_job_ids` longtext NOT NULL,
  `options` mediumtext DEFAULT NULL,
  `cancelled_at` int(11) DEFAULT NULL,
  `created_at` int(11) NOT NULL,
  `finished_at` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `levels`
--

CREATE TABLE `levels` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `description` varchar(255) NOT NULL,
  `price` float NOT NULL,
  `enrollment_fee` float NOT NULL,
  `duration` int(11) NOT NULL,
  `teacher_multiplied` tinyint(1) NOT NULL DEFAULT 0,
  `status` tinyint(1) NOT NULL DEFAULT 1,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `levels`
--

INSERT INTO `levels` (`id`, `name`, `description`, `price`, `enrollment_fee`, `duration`, `teacher_multiplied`, `status`, `created_at`, `updated_at`) VALUES
(1, 'Primero de EGB', ' Primer Año de Educación Básica (1° EGB)', 600, 30, 8, 0, 1, '2024-07-20 04:41:57', '2024-07-20 04:41:57'),
(2, 'Segundo de EGB', ' Segundo Año de Educación Básica (2° EGB)', 600, 50, 9, 0, 1, '2024-07-20 04:41:57', '2024-07-20 04:41:57'),
(3, 'Tercero de EGB', ' Tercer Año de Educación Básica (3° EGB)', 500, 10, 2, 0, 1, '2024-07-20 04:41:57', '2024-07-20 04:41:57'),
(4, 'Cuarto de EGB', ' Cuarto Año de Educación Básica (4° EGB)', 800, 90, 2, 0, 1, '2024-07-20 04:41:57', '2024-07-20 04:41:57'),
(5, 'Quinto de EGB', ' Quinto Año de Educación Básica (5° EGB)', 600, 60, 2, 0, 1, '2024-07-20 04:41:57', '2024-07-20 04:41:57'),
(6, 'Sexto de EGB', ' Sexto Año de Educación Básica (6° EGB)', 700, 80, 9, 0, 1, '2024-07-20 04:41:57', '2024-07-20 04:41:57'),
(7, 'Séptimo de EGB', ' Séptimo Año de Educación Básica (7° EGB)', 600, 30, 6, 0, 1, '2024-07-20 04:41:57', '2024-07-20 04:41:57'),
(8, 'Octavo de EGB', ' Octavo Año de Educación Básica (8° EGB)', 100, 60, 12, 0, 1, '2024-07-20 04:41:57', '2024-07-20 04:41:57'),
(9, 'Noveno de EGB', ' Noveno Año de Educación Básica (9° EGB)', 1000, 30, 12, 0, 1, '2024-07-20 04:41:57', '2024-07-20 04:41:57'),
(10, 'Décimo de EGB', ' Décimo Año de Educación Básica (10° EGB)', 600, 70, 7, 0, 1, '2024-07-20 04:41:57', '2024-07-20 04:41:57'),
(11, 'Primero de BGU', ' Primer Año de Bachillerato General (1° BGU)', 600, 80, 8, 0, 1, '2024-07-20 04:41:57', '2024-07-20 04:41:57'),
(12, 'Segundo de BGU', ' Segundo Año de Bachillerato General (2° BGU)', 1000, 90, 6, 0, 1, '2024-07-20 04:41:57', '2024-07-20 04:41:57'),
(13, 'Tercero de BGU', ' Tercer Año de Bachillerato General (3° BGU)', 900, 80, 5, 0, 1, '2024-07-20 04:41:57', '2024-07-20 04:41:57');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `level_subject`
--

CREATE TABLE `level_subject` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `level_id` bigint(20) UNSIGNED NOT NULL,
  `subject_id` bigint(20) UNSIGNED NOT NULL,
  `elective_year_id` bigint(20) UNSIGNED NOT NULL,
  `teacher_id` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `level_subject`
--

INSERT INTO `level_subject` (`id`, `level_id`, `subject_id`, `elective_year_id`, `teacher_id`, `created_at`, `updated_at`) VALUES
(1, 1, 4, 1, 4, NULL, NULL),
(2, 1, 5, 1, 4, NULL, NULL),
(3, 1, 6, 1, 4, NULL, NULL),
(4, 1, 11, 1, 4, NULL, NULL),
(5, 1, 12, 1, 4, NULL, NULL),
(6, 2, 1, 1, 1, NULL, NULL),
(7, 2, 5, 1, 1, NULL, NULL),
(8, 2, 6, 1, 1, NULL, NULL),
(9, 2, 9, 1, 1, NULL, NULL),
(10, 2, 10, 1, 1, NULL, NULL),
(11, 3, 1, 1, 3, NULL, NULL),
(12, 3, 5, 1, 3, NULL, NULL),
(13, 3, 6, 1, 3, NULL, NULL),
(14, 3, 9, 1, 3, NULL, NULL),
(15, 3, 11, 1, 3, NULL, NULL),
(16, 4, 1, 1, 2, NULL, NULL),
(17, 4, 2, 1, 2, NULL, NULL),
(18, 4, 7, 1, 2, NULL, NULL),
(19, 4, 11, 1, 2, NULL, NULL),
(20, 4, 12, 1, 2, NULL, NULL),
(21, 5, 5, 1, 1, NULL, NULL),
(22, 5, 6, 1, 1, NULL, NULL),
(23, 5, 8, 1, 1, NULL, NULL),
(24, 5, 9, 1, 1, NULL, NULL),
(25, 5, 11, 1, 1, NULL, NULL),
(26, 6, 2, 1, 1, NULL, NULL),
(27, 6, 5, 1, 1, NULL, NULL),
(28, 6, 6, 1, 1, NULL, NULL),
(29, 6, 7, 1, 1, NULL, NULL),
(30, 6, 8, 1, 1, NULL, NULL),
(31, 7, 2, 1, 1, NULL, NULL),
(32, 7, 3, 1, 1, NULL, NULL),
(33, 7, 6, 1, 1, NULL, NULL),
(34, 7, 8, 1, 1, NULL, NULL),
(35, 7, 10, 1, 1, NULL, NULL),
(36, 8, 5, 1, 1, NULL, NULL),
(37, 8, 7, 1, 1, NULL, NULL),
(38, 8, 8, 1, 1, NULL, NULL),
(39, 8, 9, 1, 1, NULL, NULL),
(40, 8, 10, 1, 1, NULL, NULL),
(41, 9, 2, 1, 4, NULL, NULL),
(42, 9, 5, 1, 4, NULL, NULL),
(43, 9, 6, 1, 4, NULL, NULL),
(44, 9, 8, 1, 4, NULL, NULL),
(45, 9, 9, 1, 4, NULL, NULL),
(46, 10, 1, 1, 4, NULL, NULL),
(47, 10, 2, 1, 4, NULL, NULL),
(48, 10, 4, 1, 4, NULL, NULL),
(49, 10, 5, 1, 4, NULL, NULL),
(50, 10, 10, 1, 4, NULL, NULL),
(51, 11, 4, 1, 1, NULL, NULL),
(52, 11, 6, 1, 1, NULL, NULL),
(53, 11, 9, 1, 1, NULL, NULL),
(54, 11, 11, 1, 1, NULL, NULL),
(55, 11, 12, 1, 1, NULL, NULL),
(56, 12, 2, 1, 1, NULL, NULL),
(57, 12, 6, 1, 1, NULL, NULL),
(58, 12, 10, 1, 1, NULL, NULL),
(59, 12, 11, 1, 1, NULL, NULL),
(60, 12, 12, 1, 1, NULL, NULL),
(61, 13, 5, 1, 1, NULL, NULL),
(62, 13, 6, 1, 1, NULL, NULL),
(63, 13, 8, 1, 1, NULL, NULL),
(64, 13, 9, 1, 1, NULL, NULL),
(65, 13, 12, 1, 1, NULL, NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `marital_status`
--

CREATE TABLE `marital_status` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `description` varchar(255) NOT NULL,
  `status` tinyint(1) NOT NULL DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `marital_status`
--

INSERT INTO `marital_status` (`id`, `name`, `description`, `status`) VALUES
(1, 'Soltero/a', 'Una persona que nunca ha estado casada.', 1),
(2, 'Casado/a', 'Una persona que ha contraído matrimonio legalmente.', 1),
(3, 'Separado/a', 'Una persona que está legalmente separada de su cónyuge pero aún está casada.', 1),
(4, 'Divorciado/a', 'Una persona que ha obtenido un divorcio legal, poniendo fin al matrimonio.', 1),
(5, 'Viudo/a', 'Una persona cuyo cónyuge ha fallecido y no se ha vuelto a casar.', 1),
(6, 'Conviviente', 'Una persona que convive con otra sin estar casada legalmente, en algunas jurisdicciones también se reconoce como unión de hecho o unión marital de hecho.', 1),
(7, 'Union Civil', 'Algunas jurisdicciones ofrecen un estado legal similar al matrimonio pero sin el término \"matrimonio\", que puede aplicarse a parejas del mismo sexo o parejas heterosexuales que eligen formalizar su relación sin casarse.', 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `medical_attention_types`
--

CREATE TABLE `medical_attention_types` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `status` tinyint(1) NOT NULL DEFAULT 1,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `medical_attention_types`
--

INSERT INTO `medical_attention_types` (`id`, `name`, `status`, `created_at`, `updated_at`) VALUES
(1, 'Centro de salud', 1, NULL, NULL),
(2, 'Hospital público', 1, NULL, NULL),
(3, 'Hospital privado', 1, NULL, NULL),
(4, 'Otro', 1, NULL, NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '0001_01_01_000001_create_cache_table', 1),
(2, '0001_01_01_000002_create_jobs_table', 1),
(3, '2024_04_20_043453_create_systems_table', 1),
(4, '2024_04_22_235314_create_people_table', 1),
(5, '2024_04_23_001050_create_teachers_table', 1),
(6, '2024_04_23_001531_create_levels_table', 1),
(7, '2024_04_23_002049_create_parents_table', 1),
(8, '2024_04_23_002056_create_students_table', 1),
(9, '2024_04_24_041951_create_roles_table', 1),
(10, '2024_04_24_235316_create_users_table', 1),
(11, '2024_04_24_235317_create_contacts_table', 1),
(12, '2024_06_22_160228_create_payment_histories_table', 1),
(13, '2024_06_25_021724_create_enrollment_payments_table', 1),
(14, '2024_07_16_041318_create_scores_table', 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `parents`
--

CREATE TABLE `parents` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `person_id` bigint(20) UNSIGNED NOT NULL,
  `marital_status_id` bigint(20) UNSIGNED DEFAULT NULL,
  `education_level_id` bigint(20) UNSIGNED DEFAULT NULL,
  `profession` varchar(255) NOT NULL,
  `work_place` varchar(255) NOT NULL,
  `incomes` int(11) NOT NULL DEFAULT 0,
  `email` varchar(255) NOT NULL,
  `status` tinyint(1) NOT NULL DEFAULT 1,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `parents`
--

INSERT INTO `parents` (`id`, `person_id`, `marital_status_id`, `education_level_id`, `profession`, `work_place`, `incomes`, `email`, `status`, `created_at`, `updated_at`) VALUES
(1, 6, 1, 1, 'Interior Designer', 'Lang-Reinger', 0, 'noconnell@example.org', 1, '2024-07-20 04:41:57', '2024-07-20 04:41:57'),
(2, 7, 1, 1, 'Police and Sheriffs Patrol Officer', 'Hartmann and Sons', 0, 'gregoria.schowalter@example.net', 1, '2024-07-20 04:41:57', '2024-07-20 04:41:57'),
(3, 8, 1, 1, 'Materials Engineer', 'Armstrong, Fadel and Gutkowski', 0, 'meagan.wiza@example.org', 1, '2024-07-20 04:41:57', '2024-07-20 04:41:57'),
(4, 9, 1, 1, 'Real Estate Association Manager', 'Ziemann LLC', 0, 'jaron.yost@example.org', 1, '2024-07-20 04:41:57', '2024-07-20 04:41:57');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `parent_types`
--

CREATE TABLE `parent_types` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `description` varchar(255) NOT NULL,
  `status` tinyint(1) NOT NULL DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `parent_types`
--

INSERT INTO `parent_types` (`id`, `name`, `description`, `status`) VALUES
(1, 'Padres', 'Los progenitores biológicos o adoptivos del niño, quienes tienen la responsabilidad primaria de cuidarlo, educarlo y proporcionarle apoyo emocional y material.', 1),
(2, 'Hijos', 'Los niños que forman parte de la familia, ya sean biológicos o adoptivos.', 1),
(3, 'Abuelos', 'Los padres de los padres del niño, quienes pueden tener un papel importante en la crianza y el apoyo familiar.', 1),
(4, 'Hermanos', 'Los hermanos del niño, ya sean biológicos (hermanos de sangre) o no (hermanastros, hermanastros adoptivos), que comparten al menos un padre en común.', 1),
(5, 'Tíos y tías', 'Los hermanos de los padres del niño, quienes pueden ser figuras significativas en su vida y proporcionar apoyo adicional.', 1),
(6, 'Primos', 'Los hijos de los tíos y tías del niño, que comparten al menos un abuelo en común.', 1),
(7, 'Padres adoptivos', 'Las personas que han adoptado legalmente al niño y asumen la responsabilidad de su crianza y cuidado.', 1),
(8, 'Hermanos adoptivos', 'Los niños que han sido adoptados por la misma familia y se consideran hermanos aunque no tengan parentesco biológico.', 1),
(9, 'Padres de crianza', 'Las personas que proporcionan cuidado temporal a un niño cuando no pueden vivir con sus padres biológicos por diversas razones, como problemas de salud o seguridad.', 1),
(10, 'Cuidadores', 'Personas que pueden no tener un parentesco directo pero que desempeñan un papel importante en el cuidado y la crianza del niño, como niñeras, educadores o trabajadores sociales', 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `password_reset_tokens`
--

CREATE TABLE `password_reset_tokens` (
  `email` varchar(255) NOT NULL,
  `token` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `pathological_family_histories`
--

CREATE TABLE `pathological_family_histories` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `status` tinyint(1) NOT NULL DEFAULT 1,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `pathological_family_histories`
--

INSERT INTO `pathological_family_histories` (`id`, `name`, `status`, `created_at`, `updated_at`) VALUES
(1, 'Obesidad', 1, NULL, NULL),
(2, 'Enfermedades cardiacas', 1, NULL, NULL),
(3, 'Hipertensión', 1, NULL, NULL),
(4, 'Diabetes', 1, NULL, NULL),
(5, 'Enfermedades mentales', 1, NULL, NULL),
(6, 'Ninguna', 1, NULL, NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `payment_types`
--

CREATE TABLE `payment_types` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `description` varchar(255) DEFAULT NULL,
  `status` tinyint(1) NOT NULL DEFAULT 1,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `people`
--

CREATE TABLE `people` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `first_name` varchar(255) NOT NULL,
  `second_name` varchar(255) NOT NULL,
  `fLast_name` varchar(255) NOT NULL,
  `sLast_name` varchar(255) NOT NULL,
  `birth_date` date NOT NULL,
  `birth_place` varchar(255) DEFAULT NULL,
  `id_card` varchar(255) DEFAULT NULL,
  `status` tinyint(1) NOT NULL DEFAULT 1,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `people`
--

INSERT INTO `people` (`id`, `first_name`, `second_name`, `fLast_name`, `sLast_name`, `birth_date`, `birth_place`, `id_card`, `status`, `created_at`, `updated_at`) VALUES
(1, 'Jorge', 'L', 'Sosa', 'Nunez', '1990-01-01', 'Bogotá', '123456789', 1, '2024-07-20 04:41:56', '2024-07-20 04:41:56'),
(2, 'Elwin', 'Jakob', 'Funk', 'Carroll', '2010-06-15', 'Alabama', '68308537-5', 1, '2024-07-20 04:41:56', '2024-07-20 04:41:56'),
(3, 'Beryl', 'Camila', 'Rempel', 'Kunde', '1989-06-06', 'Alabama', '690846806-5', 1, '2024-07-20 04:41:56', '2024-07-20 04:41:56'),
(4, 'Dexter', 'Finn', 'Funk', 'Dickinson', '2002-10-06', 'New York', '589881739-5', 1, '2024-07-20 04:41:56', '2024-07-20 04:41:56'),
(5, 'Tyreek', 'Aaron', 'Dicki', 'Brekke', '2001-12-29', 'Vermont', '42523838-8', 1, '2024-07-20 04:41:56', '2024-07-20 04:41:56'),
(6, 'Zachariah', 'Hoyt', 'Mitchell', 'Pollich', '2002-03-09', 'Wisconsin', '717622815-2', 1, '2024-07-20 04:41:57', '2024-07-20 04:41:57'),
(7, 'Fern', 'Francisca', 'Greenfelder', 'Runte', '2009-09-26', 'Nevada', '371630566-5', 1, '2024-07-20 04:41:57', '2024-07-20 04:41:57'),
(8, 'Rosalind', 'Zula', 'Krajcik', 'Windler', '1990-12-21', 'Connecticut', '573463739-1', 1, '2024-07-20 04:41:57', '2024-07-20 04:41:57'),
(9, 'Catherine', 'Jalyn', 'Osinski', 'D\'Amore', '1971-02-02', 'Pennsylvania', '334473159-5', 1, '2024-07-20 04:41:57', '2024-07-20 04:41:57'),
(10, 'Cleora', 'Lauryn', 'Weimann', 'Gottlieb', '1988-10-21', 'Nevada', '103729058-3', 1, '2024-07-20 04:41:57', '2024-07-20 04:41:57'),
(11, 'Sage', 'Sarina', 'Hirthe', 'Jenkins', '2006-09-26', 'Mississippi', '196708158-2', 1, '2024-07-20 04:41:57', '2024-07-20 04:41:57'),
(12, 'Gordon', 'Leanne', 'Grady', 'Barrows', '1980-06-11', 'Massachusetts', '649324231-0', 1, '2024-07-20 04:41:57', '2024-07-20 04:41:57'),
(13, 'May', 'Velma', 'Larkin', 'Okuneva', '2005-05-31', 'Maryland', '570943461-1', 1, '2024-07-20 04:41:57', '2024-07-20 04:41:57'),
(14, 'Brisa', 'Kayden', 'Kreiger', 'Sawayn', '1995-12-08', 'Arizona', '779454038-8', 1, '2024-07-20 04:41:57', '2024-07-20 04:41:57'),
(15, 'Estel', 'Minerva', 'Gorczany', 'Trantow', '2004-02-20', 'Wyoming', '483271532-8', 1, '2024-07-20 04:41:57', '2024-07-20 04:41:57'),
(16, 'Allene', 'Cornelius', 'DuBuque', 'Heidenreich', '1981-10-13', 'Iowa', '392086875-3', 1, '2024-07-20 04:41:57', '2024-07-20 04:41:57'),
(17, 'Alf', 'Janis', 'O\'Hara', 'Graham', '2024-05-02', 'Mississippi', '637510583-6', 1, '2024-07-20 04:41:57', '2024-07-20 04:41:57'),
(18, 'Pedro', 'Mallory', 'Brakus', 'Bogisich', '2008-04-08', 'Illinois', '22195174-5', 1, '2024-07-20 04:41:57', '2024-07-20 04:41:57'),
(19, 'Carolyne', 'Phyllis', 'Dicki', 'Farrell', '1985-06-28', 'Idaho', '467194623-2', 1, '2024-07-20 04:41:57', '2024-07-20 04:41:57');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `permissions`
--

CREATE TABLE `permissions` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `route` varchar(255) NOT NULL,
  `description` varchar(255) NOT NULL,
  `color` varchar(255) NOT NULL,
  `color2` varchar(255) NOT NULL,
  `status` tinyint(1) NOT NULL DEFAULT 1,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `permissions`
--

INSERT INTO `permissions` (`id`, `name`, `route`, `description`, `color`, `color2`, `status`, `created_at`, `updated_at`) VALUES
(1, 'Ver Usuarios', 'users', 'Ver listado de usuarios', 'orange-500', 'blue-500', 1, '2024-07-20 04:41:54', '2024-07-20 04:41:54'),
(2, 'Editar Perfil', 'profile.edit', 'Editar Informacion de Perfil', 'blue-500', 'orange-500', 1, '2024-07-20 04:41:54', '2024-07-20 04:41:54'),
(3, 'Actualizar Perfil', 'profile.update', 'Actualizar Informacion de Perfil', 'blue-500', 'orange-500', 1, '2024-07-20 04:41:54', '2024-07-20 04:41:54'),
(4, 'Eliminar Perfil', 'profile.destroy', 'Eliminar Informacion de Perfil', 'blue-500', 'red-500', 1, '2024-07-20 04:41:54', '2024-07-20 04:41:54'),
(5, 'Ver Permisos', 'permission', 'Ver listado de permisos', 'yellow-500', 'blue-500', 1, '2024-07-20 04:41:54', '2024-07-20 04:41:54'),
(6, 'Crear Permisos', 'permission.store', 'Crear permisos', 'yellow-500', 'green-500', 1, '2024-07-20 04:41:54', '2024-07-20 04:41:54'),
(7, 'Actualizar Permisos', 'permission.update', 'Actualizar permisos', 'yellow-500', 'orange-500', 1, '2024-07-20 04:41:54', '2024-07-20 04:41:54'),
(8, 'Eliminar Permisos', 'permission.delete', 'Eliminar permisos', 'yellow-500', 'red-500', 1, '2024-07-20 04:41:54', '2024-07-20 04:41:54'),
(9, 'Ver Roles', 'roles', 'Ver listado de roles', 'green-500', 'blue-500', 1, '2024-07-20 04:41:54', '2024-07-20 04:41:54'),
(10, 'Crear Roles', 'role.store', 'Crear roles', 'green-500', 'green-500', 1, '2024-07-20 04:41:54', '2024-07-20 04:41:54'),
(11, 'Actualizar Roles', 'role.update', 'Actualizar roles', 'green-500', 'orange-500', 1, '2024-07-20 04:41:54', '2024-07-20 04:41:54'),
(12, 'Eliminar Roles', 'role.delete', 'Eliminar roles', 'green-500', 'red-500', 1, '2024-07-20 04:41:54', '2024-07-20 04:41:54'),
(13, 'Ver Contactos', 'contact', 'Ver solicitudes de contacto', 'red-500', 'blue-500', 1, '2024-07-20 04:41:54', '2024-07-20 04:41:54'),
(14, 'Crear Contacto', 'contact.store', 'Crear solicitudes de contacto', 'red-500', 'green-500', 1, '2024-07-20 04:41:54', '2024-07-20 04:41:54'),
(15, 'Ver Contacto', 'contact.show', 'Ver solicitudes de contacto', 'red-500', 'blue-500', 1, '2024-07-20 04:41:54', '2024-07-20 04:41:54'),
(16, 'Actualizar Contacto', 'contact.update', 'Actualizar solicitudes de contacto', 'red-500', 'orange-500', 1, '2024-07-20 04:41:54', '2024-07-20 04:41:54'),
(17, 'Eliminar Contacto', 'contact.delete', 'Eliminar solicitudes de contacto', 'red-500', 'red-500', 1, '2024-07-20 04:41:54', '2024-07-20 04:41:54'),
(18, 'Ver Grupos', 'groups', 'Ver listado de grupos', 'purple-500', 'blue-500', 1, '2024-07-20 04:41:54', '2024-07-20 04:41:54'),
(19, 'Crear Grupos', 'groups.store', 'Crear grupos', 'purple-500', 'green-500', 1, '2024-07-20 04:41:54', '2024-07-20 04:41:54'),
(20, 'Actualizar Grupos', 'groups.update', 'Actualizar grupos', 'purple-500', 'orange-500', 1, '2024-07-20 04:41:54', '2024-07-20 04:41:54'),
(21, 'Eliminar Grupos', 'groups.delete', 'Eliminar grupos', 'purple-500', 'red-500', 1, '2024-07-20 04:41:54', '2024-07-20 04:41:54'),
(22, 'Ver Niveles', 'levels', 'Ver listado de niveles', 'indigo-500', 'blue-500', 1, '2024-07-20 04:41:54', '2024-07-20 04:41:54'),
(23, 'Crear Niveles', 'levels.store', 'Crear niveles', 'indigo-500', 'green-500', 1, '2024-07-20 04:41:54', '2024-07-20 04:41:54'),
(24, 'Actualizar Niveles', 'levels.update', 'Actualizar niveles', 'indigo-500', 'orange-500', 1, '2024-07-20 04:41:54', '2024-07-20 04:41:54'),
(25, 'Eliminar Niveles', 'levels.delete', 'Eliminar niveles', 'indigo-500', 'red-500', 1, '2024-07-20 04:41:54', '2024-07-20 04:41:54'),
(26, 'Ver Solicitudes de Inscripción', 'enrollmentRequest', 'Ver solicitudes de Inscripción', 'pink-500', 'blue-500', 1, '2024-07-20 04:41:54', '2024-07-20 04:41:54'),
(27, 'Crear Solicitudes de Inscripción', 'enrollmentRequest.store', 'Crear solicitudes de Inscripción', 'pink-500', 'green-500', 1, '2024-07-20 04:41:54', '2024-07-20 04:41:54'),
(28, 'Actualizar Solicitudes de Inscripción', 'enrollmentRequest.update', 'Actualizar solicitudes de Inscripción', 'pink-500', 'orange-500', 1, '2024-07-20 04:41:54', '2024-07-20 04:41:54'),
(29, 'Eliminar Solicitudes de Inscripción', 'enrollmentRequest.delete', 'Eliminar solicitudes de Inscripción', 'pink-500', 'red-500', 1, '2024-07-20 04:41:54', '2024-07-20 04:41:54'),
(30, 'Ver Solicitudes de Contacto', 'contactsRequest', 'Ver solicitudes de contacto', 'teal-500', 'blue-500', 1, '2024-07-20 04:41:54', '2024-07-20 04:41:54'),
(31, 'Crear Solicitudes de Contacto', 'contactsRequest.store', 'Crear solicitudes de contacto', 'teal-500', 'green-500', 1, '2024-07-20 04:41:54', '2024-07-20 04:41:54'),
(32, 'Actualizar Solicitudes de Contacto', 'contactsRequest.update', 'Actualizar solicitudes de contacto', 'teal-500', 'orange-500', 1, '2024-07-20 04:41:54', '2024-07-20 04:41:54'),
(33, 'Eliminar Solicitudes de Contacto', 'contactsRequest.delete', 'Eliminar solicitudes de contacto', 'teal-500', 'red-500', 1, '2024-07-20 04:41:54', '2024-07-20 04:41:54'),
(34, 'Ver Cursos', 'courses', 'Ver listado de cursos', 'cyan-500', 'blue-500', 1, '2024-07-20 04:41:54', '2024-07-20 04:41:54'),
(35, 'Crear Cursos', 'courses.store', 'Crear cursos', 'cyan-500', 'green-500', 1, '2024-07-20 04:41:54', '2024-07-20 04:41:54'),
(36, 'Actualizar Cursos', 'courses.update', 'Actualizar cursos', 'cyan-500', 'orange-500', 1, '2024-07-20 04:41:54', '2024-07-20 04:41:54'),
(37, 'Eliminar Cursos', 'courses.delete', 'Eliminar cursos', 'cyan-500', 'red-500', 1, '2024-07-20 04:41:54', '2024-07-20 04:41:54');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `permission_role`
--

CREATE TABLE `permission_role` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `role_id` bigint(20) UNSIGNED NOT NULL,
  `permission_id` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `permission_role`
--

INSERT INTO `permission_role` (`id`, `role_id`, `permission_id`, `created_at`, `updated_at`) VALUES
(1, 1, 1, NULL, NULL),
(2, 1, 2, NULL, NULL),
(3, 1, 3, NULL, NULL),
(4, 1, 4, NULL, NULL),
(5, 1, 5, NULL, NULL),
(6, 1, 6, NULL, NULL),
(7, 1, 7, NULL, NULL),
(8, 1, 8, NULL, NULL),
(9, 1, 9, NULL, NULL),
(10, 1, 10, NULL, NULL),
(11, 1, 11, NULL, NULL),
(12, 1, 12, NULL, NULL),
(13, 1, 13, NULL, NULL),
(14, 1, 14, NULL, NULL),
(15, 1, 15, NULL, NULL),
(16, 1, 16, NULL, NULL),
(17, 1, 17, NULL, NULL),
(18, 1, 18, NULL, NULL),
(19, 1, 19, NULL, NULL),
(20, 1, 20, NULL, NULL),
(21, 1, 21, NULL, NULL),
(22, 1, 22, NULL, NULL),
(23, 1, 23, NULL, NULL),
(24, 1, 24, NULL, NULL),
(25, 1, 25, NULL, NULL),
(26, 1, 26, NULL, NULL),
(27, 1, 27, NULL, NULL),
(28, 1, 28, NULL, NULL),
(29, 1, 29, NULL, NULL),
(30, 1, 30, NULL, NULL),
(31, 1, 31, NULL, NULL),
(32, 1, 32, NULL, NULL),
(33, 1, 33, NULL, NULL),
(34, 1, 34, NULL, NULL),
(35, 1, 35, NULL, NULL),
(36, 1, 36, NULL, NULL),
(37, 1, 37, NULL, NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `phones`
--

CREATE TABLE `phones` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `person_id` bigint(20) UNSIGNED NOT NULL,
  `phone` varchar(255) NOT NULL,
  `phone_type_id` bigint(20) UNSIGNED NOT NULL DEFAULT 1,
  `status` tinyint(1) NOT NULL DEFAULT 1,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `phones`
--

INSERT INTO `phones` (`id`, `person_id`, `phone`, `phone_type_id`, `status`, `created_at`, `updated_at`) VALUES
(1, 1, '(672) 269-2720', 4, 1, '2024-07-20 04:41:56', '2024-07-20 04:41:56'),
(2, 2, '(377) 218-8195', 1, 1, '2024-07-20 04:41:56', '2024-07-20 04:41:56'),
(3, 3, '(628) 525-3504', 1, 1, '2024-07-20 04:41:56', '2024-07-20 04:41:56'),
(4, 4, '(874) 097-2273', 3, 1, '2024-07-20 04:41:56', '2024-07-20 04:41:56'),
(5, 5, '(363) 185-1166', 4, 1, '2024-07-20 04:41:56', '2024-07-20 04:41:56'),
(6, 6, '(846) 463-7272', 3, 1, '2024-07-20 04:41:57', '2024-07-20 04:41:57'),
(7, 7, '(715) 263-9996', 1, 1, '2024-07-20 04:41:57', '2024-07-20 04:41:57'),
(8, 8, '(014) 729-8811', 2, 1, '2024-07-20 04:41:57', '2024-07-20 04:41:57'),
(9, 9, '(477) 452-9460', 1, 1, '2024-07-20 04:41:57', '2024-07-20 04:41:57'),
(10, 10, '(820) 113-1713', 2, 1, '2024-07-20 04:41:57', '2024-07-20 04:41:57'),
(11, 11, '(848) 620-5831', 4, 1, '2024-07-20 04:41:57', '2024-07-20 04:41:57'),
(12, 12, '(392) 631-3046', 2, 1, '2024-07-20 04:41:57', '2024-07-20 04:41:57'),
(13, 13, '(057) 779-7510', 1, 1, '2024-07-20 04:41:57', '2024-07-20 04:41:57'),
(14, 14, '(864) 322-4415', 2, 1, '2024-07-20 04:41:57', '2024-07-20 04:41:57'),
(15, 15, '(944) 279-8001', 2, 1, '2024-07-20 04:41:57', '2024-07-20 04:41:57'),
(16, 16, '(730) 565-1165', 2, 1, '2024-07-20 04:41:57', '2024-07-20 04:41:57'),
(17, 17, '(994) 580-0585', 1, 1, '2024-07-20 04:41:57', '2024-07-20 04:41:57'),
(18, 18, '(503) 135-7933', 1, 1, '2024-07-20 04:41:57', '2024-07-20 04:41:57'),
(19, 19, '(564) 916-1005', 1, 1, '2024-07-20 04:41:57', '2024-07-20 04:41:57');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `phone_types`
--

CREATE TABLE `phone_types` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `status` tinyint(1) NOT NULL DEFAULT 1,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `phone_types`
--

INSERT INTO `phone_types` (`id`, `name`, `status`, `created_at`, `updated_at`) VALUES
(1, 'Celular', 1, NULL, NULL),
(2, 'Casa', 1, NULL, NULL),
(3, 'Trabajo', 1, NULL, NULL),
(4, 'Otro', 1, NULL, NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `pregnancy_types`
--

CREATE TABLE `pregnancy_types` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `status` tinyint(1) NOT NULL DEFAULT 1,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `pregnancy_types`
--

INSERT INTO `pregnancy_types` (`id`, `name`, `status`, `created_at`, `updated_at`) VALUES
(1, 'Al termino', 1, NULL, NULL),
(2, 'Prematuro', 1, NULL, NULL),
(3, 'Cesárea', 1, NULL, NULL),
(4, 'Parto normal', 1, NULL, NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `roles`
--

CREATE TABLE `roles` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `role` varchar(255) NOT NULL,
  `status` tinyint(1) NOT NULL DEFAULT 1,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `roles`
--

INSERT INTO `roles` (`id`, `role`, `status`, `created_at`, `updated_at`) VALUES
(1, 'admin', 1, '2024-07-20 04:41:54', '2024-07-20 04:41:54'),
(2, 'instructor', 1, '2024-07-20 04:41:54', '2024-07-20 04:41:54'),
(3, 'student', 1, '2024-07-20 04:41:54', '2024-07-20 04:41:54');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `scores`
--

CREATE TABLE `scores` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `student_id` bigint(20) UNSIGNED NOT NULL,
  `subject_id` bigint(20) UNSIGNED NOT NULL,
  `level_id` bigint(20) UNSIGNED NOT NULL,
  `elective_year_id` bigint(20) UNSIGNED NOT NULL,
  `score` varchar(255) NOT NULL,
  `comment` varchar(255) DEFAULT NULL,
  `status` tinyint(1) NOT NULL DEFAULT 1,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `scores`
--

INSERT INTO `scores` (`id`, `student_id`, `subject_id`, `level_id`, `elective_year_id`, `score`, `comment`, `status`, `created_at`, `updated_at`) VALUES
(1, 1, 11, 1, 1, '57', 'Quia aperiam optio occaecati voluptas ullam.', 1, '2024-07-20 04:41:58', '2024-07-20 04:41:58'),
(2, 1, 12, 1, 1, '58', 'Possimus nisi ut fugit et dolores sint.', 1, '2024-07-20 04:41:58', '2024-07-20 04:41:58'),
(3, 2, 5, 1, 1, '89', 'Id dolore voluptas sed iusto.', 1, '2024-07-20 04:41:58', '2024-07-20 04:41:58'),
(4, 2, 6, 1, 1, '79', 'Dolore sunt magni libero placeat sit cumque quod.', 1, '2024-07-20 04:41:58', '2024-07-20 04:41:58'),
(5, 2, 11, 1, 1, '80', 'Adipisci libero sint autem sequi.', 1, '2024-07-20 04:41:58', '2024-07-20 04:41:58'),
(6, 3, 4, 1, 1, '51', 'Vitae rerum et nostrum consequatur.', 1, '2024-07-20 04:41:58', '2024-07-20 04:41:58'),
(7, 3, 5, 1, 1, '93', 'Iure natus voluptatem occaecati qui inventore.', 1, '2024-07-20 04:41:58', '2024-07-20 04:41:58'),
(8, 3, 6, 1, 1, '69', 'Dolor voluptatem fugiat ducimus sunt.', 1, '2024-07-20 04:41:58', '2024-07-20 04:41:58'),
(9, 3, 11, 1, 1, '79', 'Voluptates corporis fuga ad quidem nemo quia consequuntur.', 1, '2024-07-20 04:41:58', '2024-07-20 04:41:58'),
(10, 3, 12, 1, 1, '68', 'Vel cupiditate maiores vero magni tempore ex.', 1, '2024-07-20 04:41:58', '2024-07-20 04:41:58'),
(11, 4, 5, 1, 1, '58', 'In qui ea blanditiis ratione iste.', 1, '2024-07-20 04:41:59', '2024-07-20 04:41:59'),
(12, 4, 6, 1, 1, '88', 'Dignissimos aut maiores porro tempora.', 1, '2024-07-20 04:41:59', '2024-07-20 04:41:59'),
(13, 5, 4, 1, 1, '85', 'Dolores quisquam et amet nihil.', 1, '2024-07-20 04:41:59', '2024-07-20 04:41:59'),
(14, 5, 5, 1, 1, '93', 'In et et molestias quos.', 1, '2024-07-20 04:41:59', '2024-07-20 04:41:59'),
(15, 5, 6, 1, 1, '64', 'Tempora reprehenderit illo inventore accusamus minima doloremque rerum et.', 1, '2024-07-20 04:41:59', '2024-07-20 04:41:59'),
(16, 5, 11, 1, 1, '55', 'Aspernatur odio eveniet rerum ducimus.', 1, '2024-07-20 04:41:59', '2024-07-20 04:41:59'),
(17, 5, 12, 1, 1, '83', 'Aut voluptatem ut dolore et voluptatem tempora perspiciatis.', 1, '2024-07-20 04:41:59', '2024-07-20 04:41:59'),
(18, 6, 4, 1, 1, '78', 'Officia dolores perferendis quia magni.', 1, '2024-07-20 04:41:59', '2024-07-20 04:41:59'),
(19, 6, 5, 1, 1, '93', 'Ipsam rem dolorem optio saepe nobis ut optio culpa.', 1, '2024-07-20 04:41:59', '2024-07-20 04:41:59'),
(20, 6, 6, 1, 1, '78', 'Accusamus quia dignissimos qui libero porro sunt blanditiis.', 1, '2024-07-20 04:41:59', '2024-07-20 04:41:59'),
(21, 6, 11, 1, 1, '63', 'Labore voluptas corporis vero.', 1, '2024-07-20 04:41:59', '2024-07-20 04:41:59'),
(22, 6, 12, 1, 1, '61', 'Atque ad adipisci et.', 1, '2024-07-20 04:41:59', '2024-07-20 04:41:59'),
(23, 7, 5, 1, 1, '78', 'In vitae omnis doloremque repudiandae nostrum.', 1, '2024-07-20 04:41:59', '2024-07-20 04:41:59'),
(24, 7, 6, 1, 1, '80', 'Est recusandae deserunt itaque laboriosam est.', 1, '2024-07-20 04:41:59', '2024-07-20 04:41:59'),
(25, 7, 11, 1, 1, '82', 'Ipsa est tenetur porro aut a assumenda minus.', 1, '2024-07-20 04:41:59', '2024-07-20 04:41:59'),
(26, 8, 4, 1, 1, '53', 'Quos nihil et facilis quasi.', 1, '2024-07-20 04:42:00', '2024-07-20 04:42:00'),
(27, 8, 6, 1, 1, '65', 'Sit qui dicta et qui quis officia placeat eum.', 1, '2024-07-20 04:42:00', '2024-07-20 04:42:00'),
(28, 8, 11, 1, 1, '80', 'Illum aliquid maiores tempore magni aut ipsa eaque.', 1, '2024-07-20 04:42:00', '2024-07-20 04:42:00'),
(29, 9, 4, 1, 1, '91', 'Est velit aliquam necessitatibus ratione qui odit sequi quam.', 1, '2024-07-20 04:42:00', '2024-07-20 04:42:00'),
(30, 10, 11, 1, 1, '68', 'Qui aut voluptatum a sint et odit.', 1, '2024-07-20 04:42:00', '2024-07-20 04:42:00'),
(31, 10, 12, 1, 1, '54', 'Ullam expedita rerum accusamus expedita possimus omnis impedit pariatur.', 1, '2024-07-20 04:42:00', '2024-07-20 04:42:00');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `score_qualifiers`
--

CREATE TABLE `score_qualifiers` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `min` double NOT NULL,
  `max` double NOT NULL,
  `qualifier` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `score_qualifiers`
--

INSERT INTO `score_qualifiers` (`id`, `min`, `max`, `qualifier`, `created_at`, `updated_at`) VALUES
(1, 0, 64, 'F', NULL, NULL),
(2, 65, 66, 'D', NULL, NULL),
(3, 67, 69, 'D+', NULL, NULL),
(4, 70, 72, 'C-', NULL, NULL),
(5, 73, 76, 'C', NULL, NULL),
(6, 77, 79, 'C+', NULL, NULL),
(7, 80, 82, 'B-', NULL, NULL),
(8, 83, 86, 'B', NULL, NULL),
(9, 87, 89, 'B+', NULL, NULL),
(10, 90, 92, 'A-', NULL, NULL),
(11, 93, 99, 'A', NULL, NULL),
(12, 100, 100, 'A+', NULL, NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `sessions`
--

CREATE TABLE `sessions` (
  `id` varchar(255) NOT NULL,
  `user_id` bigint(20) UNSIGNED DEFAULT NULL,
  `ip_address` varchar(45) DEFAULT NULL,
  `user_agent` text DEFAULT NULL,
  `payload` longtext NOT NULL,
  `last_activity` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `sessions`
--

INSERT INTO `sessions` (`id`, `user_id`, `ip_address`, `user_agent`, `payload`, `last_activity`) VALUES
('bYxH3hdXNJTpGUtgwP8mM9zE8XEIakG1MTzQE8xS', 1, '127.0.0.1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36', 'YTo1OntzOjY6Il90b2tlbiI7czo0MDoiTmhTYmVoeWtwOWwwS2pZQ2ZiMXMzU1d4NG5wNlY2cTJhb0JieDlqbyI7czozOiJ1cmwiO2E6MDp7fXM6OToiX3ByZXZpb3VzIjthOjE6e3M6MzoidXJsIjtzOjI3OiJodHRwOi8vMTI3LjAuMC4xOjgwMDAvbG9naW4iO31zOjY6Il9mbGFzaCI7YToyOntzOjM6Im9sZCI7YTowOnt9czozOiJuZXciO2E6MDp7fX1zOjUwOiJsb2dpbl93ZWJfNTliYTM2YWRkYzJiMmY5NDAxNTgwZjAxNGM3ZjU4ZWE0ZTMwOTg5ZCI7aToxO30=', 1721436283);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `students`
--

CREATE TABLE `students` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `person_id` bigint(20) UNSIGNED NOT NULL,
  `matricula` varchar(255) NOT NULL,
  `status_id` bigint(20) UNSIGNED NOT NULL DEFAULT 1,
  `level_id` bigint(20) UNSIGNED NOT NULL,
  `group_id` bigint(20) UNSIGNED DEFAULT NULL,
  `address_street` varchar(255) NOT NULL,
  `sector` varchar(255) NOT NULL,
  `siblings` varchar(255) DEFAULT NULL,
  `father_id` bigint(20) UNSIGNED DEFAULT NULL,
  `mother_id` bigint(20) UNSIGNED DEFAULT NULL,
  `tutor_id` bigint(20) UNSIGNED DEFAULT NULL,
  `family_composition` varchar(255) DEFAULT NULL,
  `birth_order` int(11) DEFAULT 1,
  `family_structure_id` bigint(20) UNSIGNED DEFAULT NULL,
  `disability_description` varchar(255) DEFAULT NULL,
  `other_incomes` int(11) DEFAULT 0,
  `expenditure` int(11) DEFAULT 0,
  `type_house_id` bigint(20) UNSIGNED DEFAULT NULL,
  `living_description` varchar(255) DEFAULT NULL,
  `entry_date` date DEFAULT NULL,
  `previous_institution` varchar(255) DEFAULT NULL,
  `repeated_years` varchar(255) DEFAULT NULL,
  `preferred_subjects` varchar(255) DEFAULT NULL,
  `difficult_subjects` varchar(255) DEFAULT NULL,
  `dignities` varchar(255) DEFAULT NULL,
  `achievements` varchar(255) DEFAULT NULL,
  `extracurriculars` varchar(255) DEFAULT NULL,
  `student_disability` tinyint(1) NOT NULL DEFAULT 0,
  `student_disability_details` varchar(255) DEFAULT NULL,
  `medical_condition` tinyint(1) NOT NULL DEFAULT 0,
  `medical_condition_details` varchar(255) DEFAULT NULL,
  `allergies` tinyint(1) NOT NULL DEFAULT 0,
  `allergies_details` varchar(255) DEFAULT NULL,
  `medications` varchar(255) DEFAULT NULL,
  `medical_attention_type_id` bigint(20) UNSIGNED DEFAULT NULL,
  `medical_attention_details` varchar(255) DEFAULT NULL,
  `medical_attention_doctor` varchar(255) DEFAULT NULL,
  `pregnancy_mother_age` int(11) NOT NULL DEFAULT 0,
  `pregnancy_accidents` varchar(255) DEFAULT NULL,
  `pregnancy_medications` varchar(255) DEFAULT NULL,
  `pregnancy_type_id` bigint(20) UNSIGNED DEFAULT NULL,
  `pregnancy_difficulties` varchar(255) DEFAULT NULL,
  `birth_weight` varchar(255) DEFAULT NULL,
  `birth_height` varchar(255) DEFAULT NULL,
  `walking_age` varchar(255) DEFAULT NULL,
  `talking_age` varchar(255) DEFAULT NULL,
  `breastfeeding_period` varchar(255) DEFAULT NULL,
  `bottle_age` varchar(255) DEFAULT NULL,
  `toilet_age` varchar(255) DEFAULT NULL,
  `observations` varchar(255) DEFAULT NULL,
  `family_medical_history` varchar(255) DEFAULT NULL,
  `father_relationship` varchar(255) DEFAULT NULL,
  `mother_relationship` varchar(255) DEFAULT NULL,
  `siblings_relationship` varchar(255) DEFAULT NULL,
  `others_relationship` varchar(255) DEFAULT NULL,
  `habits_and_activities` varchar(255) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `students`
--

INSERT INTO `students` (`id`, `person_id`, `matricula`, `status_id`, `level_id`, `group_id`, `address_street`, `sector`, `siblings`, `father_id`, `mother_id`, `tutor_id`, `family_composition`, `birth_order`, `family_structure_id`, `disability_description`, `other_incomes`, `expenditure`, `type_house_id`, `living_description`, `entry_date`, `previous_institution`, `repeated_years`, `preferred_subjects`, `difficult_subjects`, `dignities`, `achievements`, `extracurriculars`, `student_disability`, `student_disability_details`, `medical_condition`, `medical_condition_details`, `allergies`, `allergies_details`, `medications`, `medical_attention_type_id`, `medical_attention_details`, `medical_attention_doctor`, `pregnancy_mother_age`, `pregnancy_accidents`, `pregnancy_medications`, `pregnancy_type_id`, `pregnancy_difficulties`, `birth_weight`, `birth_height`, `walking_age`, `talking_age`, `breastfeeding_period`, `bottle_age`, `toilet_age`, `observations`, `family_medical_history`, `father_relationship`, `mother_relationship`, `siblings_relationship`, `others_relationship`, `habits_and_activities`, `created_at`, `updated_at`) VALUES
(1, 10, '24-0001', 2, 1, 1, '635 Retta Meadows', 'North Lucyshire', 'Hertha Goyette', 1, 2, 3, 'Annabel Lynch', 1, 1, 'Illum voluptates ut vel temporibus saepe. Et animi consectetur suscipit voluptatem fugit aperiam consectetur. Quo dolorem rerum tempore corporis qui accusamus.', 0, 0, 1, 'Distinctio et eos sapiente sed veritatis consequatur repudiandae. Similique eius placeat corporis perspiciatis in. Enim id ab labore.', '1987-02-27', 'Durgan, Lebsack and Schimmel', '8', 'Quis et nobis qui qui fugit veniam ab quibusdam. Dolor repudiandae possimus placeat in. Praesentium eos omnis nostrum dignissimos aut est. Tenetur temporibus nostrum nobis pariatur velit.', 'Fugiat enim sint dolore maiores mollitia eos. Non velit ut similique porro. Et id odio repellendus dignissimos qui. Impedit eos blanditiis iste mollitia vitae dignissimos id.', 'Dolor ea ea qui quae qui quasi eum. In quo inventore atque quasi non nihil. Libero esse et et quam et mollitia.', 'Qui praesentium quo nam blanditiis unde ea. Aut nobis sunt quasi dignissimos aut. Praesentium culpa non ullam quo. Fugiat quas modi sed nostrum expedita.', 'Nisi et sit ipsum in tempore. Cum alias deleniti itaque eligendi rem odit modi. Eos quod dolores non quas molestias sint praesentium. Autem in commodi eligendi et ipsum repellat.', 0, 'Velit distinctio accusamus et quasi. Necessitatibus recusandae aspernatur culpa voluptatem. Fugiat consequatur consectetur in rerum dolore quis.', 0, 'Explicabo et tempora voluptates itaque sunt iusto. Velit deleniti mollitia reprehenderit earum asperiores qui. Perferendis distinctio blanditiis similique quam. Cumque quidem hic nobis et.', 0, 'Cumque libero ullam qui dolore commodi officia architecto. Quia non et architecto earum et in. Fugiat unde ullam ipsum quis. Laborum voluptatum maxime sed eos eos unde corporis.', 'Ea quam animi numquam. Veniam laboriosam ut eum rerum iusto mollitia asperiores. Voluptatem error temporibus repellendus architecto numquam voluptatem.', 1, 'Architecto qui excepturi quasi. Itaque quidem quia et voluptatem qui. Pariatur accusamus sunt dolores et animi facere quae rerum. Et et blanditiis eligendi excepturi accusantium est.', 'Dejah Miller DVM', 0, 'Numquam sapiente et voluptas non qui incidunt consequatur laborum. Accusantium pariatur quaerat commodi sit quia odio ducimus dicta. Nihil eum natus et ipsa et.', 'Iure illo minima quaerat ab eius delectus. Ut expedita dolor dignissimos voluptatem consequatur. Eligendi rerum labore illum aliquid optio amet. Excepturi labore omnis voluptas ipsum id qui.', 1, 'Mollitia quo mollitia dolorem et quia magnam. Dolorum amet sit alias rerum quia ut pariatur eum. Perspiciatis assumenda fugiat velit deserunt.', '7', '2', '1', '3', '3', '4', '3', 'Voluptates eaque cum doloremque vel velit saepe impedit. Commodi est minus perferendis. Quia sunt minus quia expedita. Excepturi iusto nam sed dolor animi temporibus.', 'Doloremque vero provident omnis. Quos in totam dolorem perspiciatis. Iure ea voluptas est et error amet natus.', 'Recusandae est aperiam ex aliquid et repellendus deleniti et. Iure excepturi accusamus sit corporis. Aut neque velit ut odio vel. Vitae repudiandae modi nihil quos placeat.', 'Dolores aut sint laborum doloribus. Eum qui vitae temporibus est ipsa doloribus. Dolorem consequatur ea minima occaecati.', 'Molestiae sint iusto at perferendis nam quam vero. Qui qui occaecati non dolorem et exercitationem et. Tempora eos beatae consequuntur neque blanditiis veniam eos. Non qui porro adipisci aut quod.', 'Alias aut eum molestiae sunt et non aut laudantium. Rem voluptatum nostrum non nostrum aut dolor. Quod in veritatis aperiam asperiores vel a molestias quam.', 'Beatae eum est velit et cupiditate facilis odit. Nam magnam a delectus. Debitis repudiandae optio omnis quia voluptatem dolore. Cupiditate perspiciatis dolorem sed enim.', '2024-07-20 04:41:57', '2024-07-20 04:41:57'),
(2, 11, '24-0002', 2, 1, 1, '5686 Astrid Coves Suite 235', 'Kundetown', 'Cletus Reinger', 1, 2, 3, 'Magdalen Veum', 1, 1, 'Sequi excepturi architecto a. Repellendus et sit enim corporis earum. Aperiam labore ratione dolorum laboriosam et vel. Incidunt molestiae maxime incidunt accusantium.', 0, 0, 1, 'Tenetur voluptatibus voluptates quasi minus quia sequi aut. Tempora numquam quae accusamus impedit. Ullam est ab enim facere debitis soluta dolore alias. Eos qui nesciunt illum.', '2017-10-22', 'Russel Group', '7', 'Esse reprehenderit consectetur ea officia iusto. Qui quod blanditiis eum non sequi ut. Debitis fugiat nulla nam quis nihil blanditiis.', 'Optio odio aspernatur omnis. Voluptatum eaque omnis qui voluptas optio sit. Excepturi ut et omnis.', 'Est impedit ullam occaecati. Natus iure corrupti quam provident beatae.', 'Impedit quia soluta et placeat aut impedit sed. Ea facilis consequatur vel eum sint et doloribus. Est dolore quia amet ut in. Quia consequatur omnis accusantium culpa voluptatem.', 'Consequatur eligendi labore corrupti qui. Quasi eaque exercitationem hic inventore. Quis qui rem ut ad qui.', 0, 'Esse officiis consequatur dignissimos iure impedit qui. Quod excepturi perferendis hic commodi ut est. Omnis incidunt autem et nihil asperiores.', 0, 'Temporibus est et repudiandae voluptatum. Cupiditate voluptatibus assumenda est qui cumque. Illo qui et error quo accusantium sint.', 0, 'Officiis qui nihil ut facilis minus. Dolor voluptatem in rerum minima consequuntur sed. Sit id nemo labore vel.', 'Sed consequatur quia rerum voluptatem ut. Est velit harum hic quis. Alias saepe ut reprehenderit illum quasi excepturi dolorem inventore. Repellendus qui quos et ut molestiae. Ab sequi id autem quis.', 1, 'Quia sint necessitatibus est quia vel est. Magnam est nostrum eius quod. Sit vel a ducimus sequi consectetur quae voluptatibus. Itaque voluptatem beatae eveniet rerum sunt mollitia.', 'Gerry Klein', 0, 'Voluptates eos tempora laudantium molestiae. Consequatur quae harum possimus quam et eligendi magni est. Quos laboriosam quia rem ullam commodi.', 'Et dicta impedit labore facilis impedit. Magnam labore perspiciatis numquam itaque. Eligendi eius repellendus rem consequuntur blanditiis perspiciatis aut iure.', 1, 'Eum magni explicabo non nobis sint. Necessitatibus eos natus eos deleniti. Itaque minus nesciunt eius quam et.', '7', '1', '8', '3', '2', '5', '4', 'Qui et laudantium voluptatem similique et et. Unde sit mollitia quam ut. Repellat ullam quis dolor odit facilis.', 'Eum quod debitis debitis temporibus soluta molestiae exercitationem. Accusantium vitae alias fugit iure. Vel eaque placeat tempora dolor vitae asperiores.', 'Qui esse sapiente debitis repellendus eos dolore dolor rerum. Blanditiis aut debitis qui est odio eius dolores. Ut veritatis consequuntur velit nisi.', 'Est nisi velit odio molestiae quis. Aut asperiores iure et doloremque. Repudiandae esse consectetur in omnis soluta quod.', 'Quisquam qui quis ad error. Consequuntur earum est fuga et suscipit dolor. Ipsa occaecati autem corrupti dolor fugiat et.', 'At voluptas hic voluptatum dignissimos ducimus doloremque aut delectus. Ut quia aut exercitationem placeat culpa dicta inventore. Ut magnam aperiam sunt consequatur dolorem et.', 'Similique eos nihil excepturi rerum. Aspernatur totam dolorem placeat. Ut animi quis harum iure non rerum.', '2024-07-20 04:41:57', '2024-07-20 04:41:57'),
(3, 12, '24-0003', 2, 1, 1, '95772 Leopoldo Ways', 'New Linwoodfort', 'Dennis Kris', 1, 2, 3, 'Vincenzo Eichmann III', 1, 1, 'Et libero et est vero sit. Non tenetur tempore culpa. Placeat maxime non dolorem excepturi eius tenetur dolorum. Omnis aut adipisci dolorem.', 0, 0, 1, 'Ut quae et dolorum saepe voluptatem. Sit esse maiores veniam. Nobis voluptatem voluptas sed suscipit et.', '2001-09-30', 'Hegmann-Upton', '0', 'Laboriosam repellat doloribus sed consectetur officia repellendus neque quasi. Veritatis similique adipisci dolore reiciendis eveniet. Et quis amet eos tenetur nihil ut.', 'Dicta cumque rerum soluta reprehenderit iste. Sint eveniet vitae officiis aut.', 'Neque tempore veniam molestiae cum amet hic. Sit deserunt dolorem consectetur deleniti voluptas qui aut minus. Suscipit molestiae dolores eaque magnam aut corrupti voluptatem.', 'Autem non ut eveniet voluptatum adipisci animi. Alias ullam perspiciatis vel quas molestiae minus. Nihil nisi voluptates officia sed tempore. Vero dolorum vel quae a distinctio alias.', 'Ex quibusdam tempora est alias repudiandae excepturi. Et dolorem animi est nisi autem.', 0, 'Illo sit et et sed nemo. Consequatur labore molestiae deserunt nisi aperiam consequatur ab. Aperiam voluptatem nostrum doloribus et odit molestias hic.', 0, 'Quaerat et corporis ut accusamus. Delectus pariatur quae fugiat est enim. Et pariatur eius vel.', 0, 'Nesciunt natus laboriosam velit commodi adipisci odio iure. Corrupti consequuntur aut tempore aut eos possimus. Dolorum quia error eaque magnam qui perspiciatis velit.', 'Est rerum unde in sequi nam quaerat magnam officiis. Repudiandae beatae consequatur culpa. Accusamus quis sit aliquid occaecati eum.', 1, 'Sit ea laborum quasi enim. Sunt veniam consectetur sed. Quasi eos non odio reprehenderit. Consectetur inventore sunt ipsam totam.', 'Daniela Sporer DVM', 0, 'Delectus in qui mollitia ipsa pariatur. Ipsum maxime et omnis iusto natus placeat quia. Dolores rerum voluptas dolore. Est voluptatum omnis dignissimos dolores odio.', 'Cumque adipisci incidunt est nihil. Eos excepturi quo voluptatem facilis. Sed ducimus enim consequatur mollitia nesciunt velit dolores. Et nesciunt ipsa asperiores est.', 1, 'Corporis iste eum perferendis veritatis ea delectus. Aspernatur dolores nemo nisi et voluptas. Ad minus qui dolor iste architecto est.', '5', '7', '9', '8', '1', '3', '5', 'Cum cumque architecto aut perspiciatis quisquam. Cumque accusantium nihil in enim ut inventore et. Quasi facere eum asperiores rerum.', 'Repellat totam et fugiat sequi. Et tenetur praesentium aut aut iusto quisquam.', 'Ut suscipit alias magni qui in repellat fuga. Veniam est id voluptas impedit. Ut quaerat ipsam qui dignissimos.', 'Placeat dicta voluptas voluptatem sunt ad doloremque. Ullam ea sed nobis saepe corrupti. Blanditiis ducimus aliquam quia quia qui id.', 'Dolorem neque repudiandae qui sequi labore. Molestiae id iste est aliquam ullam minima. Omnis architecto quae qui.', 'Neque qui sit sit et et. Sint facere quia ex vitae. Porro nihil harum odio repellendus corporis dignissimos at. Ratione harum cupiditate autem.', 'Est aliquam quidem deserunt optio sunt. Aut sit illo sequi voluptas omnis quidem. Debitis sunt recusandae voluptatem repellendus. Esse porro velit non quia.', '2024-07-20 04:41:57', '2024-07-20 04:41:57'),
(4, 13, '24-0004', 2, 1, 1, '642 Bradtke Ranch', 'East Kaylieton', 'Charlotte Kunde', 1, 2, 3, 'Asia Ferry', 1, 1, 'Delectus quibusdam nisi nobis ut et odit. Ipsa accusantium quia pariatur provident. Possimus est et veritatis est nesciunt pariatur ut harum.', 0, 0, 1, 'Sapiente commodi fugiat qui id iste. Totam rerum laudantium facilis modi unde magni totam. Accusamus qui voluptas est eius.', '2005-12-02', 'Tremblay and Sons', '0', 'Temporibus soluta ut earum eligendi ut sunt et. Aut sint officia tempore sint id dolores. Et cupiditate et aut dolor velit et. Debitis in ut quia optio ducimus saepe et.', 'Ut quia saepe reprehenderit rerum blanditiis consequatur. Qui architecto vero quidem fuga repellat dolores eum. Ipsa dolor recusandae est tenetur distinctio ullam.', 'Vel molestiae error aut. Consequatur corporis natus ipsa quia officia nam minima qui. Officiis aut inventore provident.', 'Sequi quia voluptatem deserunt. Qui blanditiis dolorem assumenda omnis. Dicta blanditiis sed molestiae vero sunt praesentium occaecati repellendus.', 'Iusto corrupti omnis ut rerum illo consequatur veritatis. Velit voluptatem ducimus vel omnis et neque. Voluptatem occaecati voluptatem aliquid enim impedit tempore sit.', 0, 'Sed qui molestiae qui voluptatum rerum ipsam necessitatibus. Ea blanditiis porro pariatur et quo eos quas. Molestias tempora dolore et. Reprehenderit enim quis eligendi rerum id iusto rerum.', 0, 'Alias sed autem ut cumque. Ipsa esse cupiditate soluta natus. Quidem cum neque itaque quam sint pariatur.', 0, 'Dolorem voluptas nesciunt sunt quia nisi vitae in. Dolores quos magni voluptatem qui tempore. Eveniet omnis modi maiores ut. Culpa quam omnis dolores.', 'Quo sint id voluptatum assumenda molestiae optio quis sunt. Nisi dolor sunt blanditiis et. In non quo consequatur quo consequatur non. Porro delectus adipisci ipsum quia illo quo ullam.', 1, 'Dicta debitis distinctio fugit. Quae corporis eaque expedita facere porro et deleniti repellat. Unde debitis voluptas ullam ratione.', 'Dominic Abernathy', 0, 'Nesciunt a quia et. Temporibus perspiciatis ut est. Iste laboriosam aut est quas et dolor. Illo soluta sit nesciunt ut sunt.', 'Corporis quis maxime adipisci dolorem non nisi voluptatem. Quis sit quod alias voluptate ut praesentium. Itaque maxime fuga ea sit ut.', 1, 'Qui atque eius sit saepe. Adipisci ipsum veritatis illo. Blanditiis quaerat laborum laudantium cumque quia laudantium fuga.', '1', '6', '8', '5', '1', '9', '5', 'Perspiciatis quia in omnis recusandae ullam laudantium nam. Rem possimus ad est assumenda sed. Qui nesciunt in est omnis. Quod nihil aspernatur impedit eum numquam facilis distinctio laboriosam.', 'Corrupti assumenda corporis omnis rem. Voluptatem et et nisi iusto illum rerum. Repellat veniam molestias officia aut et et consectetur. Suscipit molestias est eos placeat quam.', 'Ut illo dolorem velit beatae est enim aut nulla. Aut et animi odit excepturi. Aliquid adipisci vel natus asperiores.', 'Maiores corrupti dolorem voluptas explicabo tempora neque. Enim qui excepturi quidem beatae impedit est aliquam. Necessitatibus praesentium ex enim.', 'Qui consequuntur unde provident. Neque est quae quasi et quaerat aut. Voluptas dignissimos sed eveniet deserunt.', 'Cum nisi est eaque qui et officia. Inventore officia quo veniam explicabo dolorum. Iste vel enim excepturi vel magni et est.', 'At nihil amet aperiam recusandae. Est et autem mollitia. Soluta possimus sit quas consequuntur pariatur ab. Recusandae aut assumenda voluptatem non deleniti.', '2024-07-20 04:41:57', '2024-07-20 04:41:57'),
(5, 14, '24-0005', 2, 1, 1, '8616 Gusikowski Ports Apt. 642', 'Nicolasshire', 'Terrance Reynolds', 1, 2, 3, 'Colt Bartell', 1, 1, 'Deleniti rerum sequi incidunt mollitia dolor qui. In omnis sunt itaque modi quam. Magnam tenetur non velit ea neque. Qui quidem facilis dicta magnam.', 0, 0, 1, 'Placeat eum quod vel et. Aliquam distinctio ipsa dolor iure eum. Aliquam eum voluptates animi expedita.', '2002-02-01', 'Dicki, Green and Walker', '1', 'Alias voluptas modi pariatur magni quaerat. Labore dolores et sed ea nisi earum.', 'Nostrum explicabo aspernatur et quisquam fugiat eveniet vitae. Autem doloribus officia magni praesentium rerum laudantium.', 'Doloremque quia aliquid quisquam dolores quod et harum. Deserunt molestias sint optio voluptatem nostrum sapiente qui. Modi laboriosam odio ut suscipit dicta libero. Nostrum ipsam ut culpa ipsa rem.', 'Sit fugit velit non blanditiis consequatur iusto saepe. Quaerat ea quia dolorum ullam placeat labore. Quas quis quasi minus vero quia temporibus. Illum facere aliquid voluptatem natus.', 'Minima sequi quod rem aperiam consequatur. Omnis omnis id placeat voluptate vel. Eveniet velit quam nihil vel eum est non.', 0, 'Asperiores accusantium sequi nulla impedit. Illum ipsum ducimus neque reiciendis fugit. Nostrum vel iure commodi aperiam dignissimos. Iste assumenda aut fugit cum enim.', 0, 'Laudantium doloremque autem odit ad dolor ullam in. Ipsa aut repellendus et ut provident. Molestias quidem quo nobis sed.', 0, 'Sed porro iste nesciunt at inventore ducimus sequi voluptate. Velit iste in rerum libero omnis minus. Ducimus dolores at iste.', 'Est possimus officiis architecto. Molestiae tempore nisi voluptatem est ipsam et. Laudantium nemo odit distinctio quae aut qui commodi.', 1, 'Amet delectus commodi quos doloribus libero quaerat aut minus. Facilis rerum voluptatem sed dolorum.', 'Corbin Ziemann', 0, 'Sequi tempora aperiam unde aliquid autem. Nam incidunt harum iste iste qui.', 'Assumenda veniam quisquam nam. Ut architecto exercitationem explicabo magni libero molestiae suscipit. Maiores fugit sit sunt omnis et aut quo qui.', 1, 'Blanditiis non quo quaerat dolores sequi hic architecto. Neque velit provident sed qui est sit. Sed voluptatem quod consequatur et aut omnis. Aut dolore aspernatur ut autem.', '7', '0', '5', '5', '4', '3', '1', 'Molestiae similique ea sint accusamus. Voluptatum labore neque et quia. Magni illum dolore iste officia sunt esse et. Magnam consequatur tempore vero consectetur dicta.', 'Natus est quia voluptas assumenda eius et explicabo. Quo odio saepe nulla cum quos aliquid. Molestiae occaecati dolorem quod ut.', 'Enim at facilis illum ea. Et et odit vitae saepe quia unde voluptatum. Placeat corporis aut illum totam et. Molestiae sapiente et aut.', 'Est sit aut sed eius debitis in. Tempora qui deserunt beatae et. Tempore explicabo non doloremque asperiores alias.', 'Fuga consectetur quam aut. Similique atque aperiam provident architecto quaerat dolorem. Debitis veritatis modi rerum et praesentium blanditiis aspernatur. Exercitationem debitis ut est rem.', 'Aut eius at ut cupiditate tenetur. Quas molestiae debitis voluptas reiciendis. Omnis impedit nostrum sint numquam officiis iste.', 'Sed officia et est itaque. Nihil id rerum amet voluptatem nostrum eum. Voluptatem perferendis a veniam quo fugit.', '2024-07-20 04:41:57', '2024-07-20 04:41:57'),
(6, 15, '24-0006', 2, 1, 1, '572 Lenore Shore Apt. 013', 'North Lizzie', 'Assunta Roberts', 1, 2, 3, 'Prof. Cortez Krajcik II', 1, 1, 'Ex quasi dolore inventore blanditiis et nam placeat. Aut numquam ipsa magni. Id reprehenderit et quis et.', 0, 0, 1, 'Vel earum et quo at et quia non. Minus vel autem corrupti maiores tempora corporis. Laborum expedita voluptates perferendis.', '2013-03-03', 'Carroll-Towne', '7', 'Totam earum quia sint eligendi assumenda vitae vitae at. Doloremque cumque doloremque esse qui quae excepturi aperiam.', 'Ratione dolores accusantium alias nihil. Dicta velit et corporis. Et culpa aperiam ab ut.', 'Quis non ex quod vero fuga modi quia. Eum eveniet quibusdam ea rerum blanditiis natus facilis quo. Eaque illum delectus illo est beatae nihil. Ad quo ut voluptas cupiditate necessitatibus non et.', 'Incidunt eos magnam impedit. Sunt aperiam molestiae accusamus voluptatem voluptatum esse sapiente. Explicabo est sint aut totam qui. Sequi quis doloribus optio incidunt deserunt est labore.', 'Et veritatis neque nisi autem eos qui est. Est odio impedit doloribus repellat corrupti consequatur. Autem sit expedita eligendi natus voluptas est. Iusto quidem id quis ducimus at.', 0, 'Qui dicta excepturi hic. Et ut voluptates et sit amet. Id quidem alias delectus perspiciatis eligendi.', 0, 'Est quis eius excepturi veritatis architecto qui in sapiente. Nesciunt veritatis qui explicabo atque. Vel delectus autem consequatur quasi vero impedit. Libero dolore quasi sapiente.', 0, 'Tenetur nesciunt et et ad impedit. Deleniti facere voluptates amet nisi possimus temporibus dignissimos. Nam eum odio enim consequatur assumenda et qui. Aut optio et blanditiis.', 'Quisquam nihil voluptatem quaerat. Quae molestiae ut est. Et possimus impedit dicta eum distinctio. Autem doloremque blanditiis omnis iste maiores qui iste.', 1, 'Cum illo quibusdam a culpa perspiciatis voluptatem saepe. Architecto voluptas repudiandae eum eius nemo amet nulla. Sit distinctio minima accusantium unde sit. Rem velit dolor voluptatum.', 'Haven Schuppe', 0, 'Non odit adipisci quo quo ducimus aspernatur. Et totam at facilis veniam beatae corrupti. Aut quo officiis nemo ratione. Porro culpa impedit perspiciatis at aut dignissimos.', 'Dolore ut tempora laboriosam repudiandae eligendi. Nisi aliquid et aliquam dolorum consequuntur delectus. Similique ab tempore deserunt maiores dolore illo iusto veritatis.', 1, 'Quo ea sit explicabo accusamus. Nobis sit vel dolorem quia sit unde distinctio. Ut odio et explicabo reiciendis. Velit doloribus similique facere est tenetur deleniti et.', '7', '1', '9', '9', '3', '3', '2', 'Non ea ab at placeat. Sint voluptatum temporibus est quo sint aut dolorem doloribus. Distinctio quia quae aspernatur inventore placeat et dolores.', 'Ut magni perferendis accusamus suscipit. Ipsam ut quo voluptas a est qui. Commodi dolorem soluta voluptates ut repellendus nihil minima. Atque sed voluptas earum placeat sit.', 'Quaerat voluptatum omnis maxime incidunt ex officia optio. Ex enim error quidem maxime. Nihil est commodi fugit eveniet. Ullam illum iure rerum distinctio voluptatem.', 'Explicabo sint sint voluptate aut esse. Illum dolorum deserunt impedit odit. In illo unde consequatur sunt est. Cum aut cupiditate eum totam et.', 'Qui ad et veritatis qui libero. Reprehenderit qui ut odio nihil suscipit inventore. Eos rerum consectetur laboriosam quis. Veniam possimus ipsam sed minus optio.', 'Nobis et non magni vitae sed alias. Consectetur dolorem provident est ullam ipsam. Totam earum unde officia expedita debitis molestiae enim. Aut deserunt tempore rerum doloribus.', 'Ab eligendi molestias veritatis possimus iste quasi eos. Totam deleniti impedit sunt. Ipsa quibusdam dicta rem repudiandae. Maxime assumenda in vitae molestiae aliquid explicabo.', '2024-07-20 04:41:57', '2024-07-20 04:41:57'),
(7, 16, '24-0007', 2, 1, 1, '1826 Satterfield Viaduct', 'Kelliefort', 'Keagan Hoppe Jr.', 1, 2, 3, 'Al Cummerata', 1, 1, 'Soluta non iste illo doloribus omnis reiciendis fugit. Eos doloribus possimus id a repellendus enim. Et incidunt blanditiis voluptas voluptatum at.', 0, 0, 1, 'Ipsam et facilis alias iure neque blanditiis. Molestiae quod nihil ipsam qui assumenda nesciunt. Et laudantium maiores sit nesciunt qui sit.', '1985-05-11', 'Hilpert, Hartmann and Kihn', '1', 'Cum ut temporibus voluptates perferendis vero minus. Porro voluptas possimus illo repudiandae distinctio. Rerum dolor aperiam qui sit. Est illo alias praesentium rem ipsum.', 'Nesciunt quis non quia corporis dolorem explicabo. Iusto tempore deleniti voluptatem veritatis neque aut. Qui totam sit atque ipsam qui. Odio earum maxime delectus voluptas.', 'Sunt tempora aliquid sapiente praesentium veniam. Mollitia delectus ut hic vero aut iusto ullam. Deserunt eius dignissimos quas. Id dicta voluptatibus corrupti non fuga nostrum qui.', 'Laborum quia ea rerum ducimus maxime saepe omnis in. Explicabo recusandae magnam et totam enim. Veritatis debitis reprehenderit iusto dolor ut omnis at.', 'Vel quia veniam at rerum accusantium nulla quia odio. Quis sit corporis aut in ipsum amet. Aliquam sint nam laudantium et quae expedita deserunt non.', 0, 'Ratione et earum ipsum aut aliquam saepe nihil ut. Suscipit beatae amet quia doloribus et. Voluptatum dolorem et sunt quam velit rerum.', 0, 'Voluptatem nobis iure beatae voluptas quam quis. Debitis natus nisi et doloribus nam numquam. Quasi fugit asperiores eos sit optio.', 0, 'Aperiam maiores dolorum sit voluptatem amet. Qui voluptatem quia et dolor accusamus sunt.', 'Enim qui corrupti aspernatur tempore porro. Quis ipsum velit deserunt voluptatibus et. Est quis aut iure ea. Modi veniam velit vel voluptas ut necessitatibus.', 1, 'Ut et occaecati repudiandae modi ducimus. Nam ex omnis est consequuntur quia qui. Dolor aut labore et aut voluptatem. Natus qui nisi et laborum explicabo.', 'Lauren Cartwright', 0, 'Nostrum non error error inventore eum ut. Vitae qui ratione reiciendis impedit. Nulla non accusantium non facilis omnis ad. Dolorem illum rerum ipsa.', 'Ut maiores odio ullam doloribus. Excepturi illum quasi dicta quisquam consequatur maxime ab. Corporis eaque ipsam libero vel incidunt.', 1, 'Nobis debitis ex tempora culpa a assumenda fugiat. Qui est quo rerum atque commodi harum. Nisi quod deserunt tenetur reprehenderit nobis commodi. Iste dolor dolor dolores aut.', '6', '2', '0', '2', '7', '2', '7', 'Maiores voluptas harum praesentium ut quibusdam. Id quia dolor ducimus ut. Et at pariatur eum repellendus dolor et tempore.', 'Consequuntur minima voluptas soluta nihil accusantium. Dolores quia sed occaecati quasi quo fugit. Officia voluptatem aperiam ex harum vitae quia cum. Sint dolores soluta sapiente modi.', 'Inventore ratione nobis eveniet alias. Odio eius reprehenderit ut numquam itaque expedita aliquam. Sit voluptatem et ut sequi aperiam.', 'Labore non porro explicabo et id similique. Fugiat voluptas architecto ratione eum corrupti quidem. Quo iste beatae et est aut voluptatem sit id. Voluptate et omnis illum quasi hic qui.', 'Corrupti omnis illum dolores porro nihil. Quis qui mollitia rerum minima unde veritatis exercitationem.', 'Quo nisi magnam ullam quos ipsum. Est modi eaque vel voluptatum.', 'Sint architecto impedit in. Aut earum distinctio voluptatem ea consectetur voluptates iste exercitationem. Id totam sed magni.', '2024-07-20 04:41:57', '2024-07-20 04:41:57'),
(8, 17, '24-0008', 2, 1, 1, '487 Nils Ranch Suite 879', 'North Serena', 'Mrs. Dena Jacobson', 1, 2, 3, 'Celestine Runte', 1, 1, 'Unde laboriosam suscipit nobis eius quod hic. Nam facilis eum assumenda. Deleniti vel nostrum in consequatur et occaecati consequatur. Cum ipsam ea sed excepturi nulla.', 0, 0, 1, 'Suscipit natus voluptatem commodi a quidem. Facilis atque repellat similique. Ut neque earum quis repellendus eaque atque quam.', '2017-10-30', 'Cruickshank-Schneider', '8', 'Neque optio quia cumque dolorum. Minima assumenda molestiae voluptas molestias voluptas iste. Expedita sed minus optio minima.', 'Magni voluptas ea qui sed necessitatibus quo. Numquam totam hic officia repellendus voluptatem beatae quas quia. Consequuntur delectus unde nemo ut. Harum iusto porro fugit et.', 'Ullam harum eum porro veritatis velit voluptatem vero et. Perspiciatis omnis ipsam aut porro fuga et itaque quas. Dignissimos voluptatem est deleniti sed labore voluptatem.', 'Rem rerum enim amet deleniti iusto. Iure quasi vel quis. Nostrum ab qui cupiditate quis fugiat exercitationem voluptatum. Nostrum sed illum saepe. Et quis ut quo voluptatem natus.', 'Tempora aut sed ut veritatis cumque sint et. Numquam consectetur ad iste commodi sunt. Quidem magni quam quo hic.', 0, 'Temporibus voluptatem dolorem incidunt nihil. Rerum pariatur temporibus est eos. Consequatur temporibus temporibus ab nihil. Cum ex repudiandae aut qui.', 0, 'Sed repudiandae eum autem distinctio. Quo ex id corporis deserunt vel. Ipsam voluptatem totam voluptate et nostrum. Adipisci officiis hic sed esse vitae dignissimos omnis.', 0, 'Asperiores rem quas repellendus porro nobis et ut. Neque ut quae iure quibusdam et quam consequatur. Et voluptatem ut minima nihil.', 'Magni qui et quis aspernatur fugit. Dolorem perspiciatis blanditiis corrupti nihil aliquid. Esse nihil quia inventore harum possimus. Est qui ut consequatur debitis.', 1, 'Alias sunt consequuntur aut omnis. Ex quia ut incidunt. Dolorum corrupti qui quam occaecati minus laborum voluptatum. Officia minima aut illo quae molestiae corporis ab.', 'Prof. Jamir Funk Jr.', 0, 'Officia amet eaque libero accusantium necessitatibus nesciunt et. Id cupiditate asperiores et sit vel animi et. Omnis aspernatur doloremque aut maiores. Aut et dolores voluptatibus qui sit iste.', 'Id omnis at ratione aperiam. Asperiores repudiandae voluptas voluptas architecto at. Error in placeat minima qui.', 1, 'Magni excepturi doloribus quos consectetur ea. Aut velit id quisquam sed soluta. Vero odio quisquam facere rerum dolorum rerum quos. At necessitatibus quam qui et. Debitis quos perferendis odit.', '3', '3', '0', '0', '7', '6', '1', 'Sunt cumque consectetur sint ea. Qui eos id ut quod. Aliquid quo et aut et tenetur dolores.', 'Quis et non sapiente repellat. Ut perspiciatis laboriosam iure quo. Ullam nulla nam ea quaerat libero.', 'Dignissimos quia adipisci culpa mollitia numquam. Eligendi ducimus blanditiis ut voluptatem ut optio. Necessitatibus eaque expedita eius asperiores optio nobis facere.', 'In cumque reprehenderit ab facilis autem modi nesciunt soluta. Sed veniam quisquam consequatur inventore. Nesciunt dolores earum est libero dolorum aut tenetur.', 'Iusto odit deleniti quos non. Vel aspernatur aliquam quaerat odit corrupti eaque. Dicta ut veritatis necessitatibus ab perspiciatis.', 'Tempore tempora et eius rem nisi. Molestiae magni eaque recusandae maxime. Voluptates nihil earum porro aut ipsa. Eum tempore neque necessitatibus cupiditate aut in.', 'Cumque est totam repellat ea. Corporis fugiat nihil inventore autem sint sint ab.', '2024-07-20 04:41:57', '2024-07-20 04:41:57'),
(9, 18, '24-0009', 2, 1, 1, '8382 Bogisich Pass Suite 177', 'North Delaney', 'Haylie Hahn', 1, 2, 3, 'Bobby Labadie', 1, 1, 'Consequatur nesciunt aliquam voluptatibus aut ipsam. Ad molestiae qui accusamus eum cumque ducimus. Sequi similique officiis adipisci cupiditate quae fugiat soluta. Deleniti perspiciatis quia quod.', 0, 0, 1, 'Repudiandae fugit saepe sapiente doloribus quo. Consequatur et et nesciunt sed possimus necessitatibus. Aliquam facilis quo consequuntur quia dolor eos. Autem libero modi nulla eligendi.', '1993-07-09', 'Bergstrom, Schmidt and Ferry', '3', 'Eum optio iure molestias explicabo quod dolorum. Non enim ipsa consequatur quia alias praesentium. Voluptatem hic animi eligendi omnis.', 'Ullam id dolor qui quas. Culpa non consectetur doloribus totam repellat at. Iusto quaerat tempore possimus et molestias et. Voluptatibus eveniet et excepturi.', 'Id eaque illo occaecati et velit repellendus iusto. Quia dolores sunt officia cumque suscipit pariatur in. Reprehenderit odit perferendis nobis repudiandae hic.', 'Dolor occaecati aspernatur enim cumque voluptatem quibusdam fugiat. Dicta inventore tempore culpa voluptas nihil. Placeat in quibusdam a repudiandae. Perspiciatis aliquid dolores rerum et aut.', 'Autem aut laboriosam omnis consequatur quis. Voluptas est ipsa quia exercitationem cupiditate et id. Voluptatem provident et occaecati quos. Magnam ad alias eveniet earum eligendi tempore.', 0, 'Laboriosam mollitia iusto quibusdam voluptatem quibusdam velit in. Dolor id sint ab fugit aliquid quam et. Illo earum ut vero odio.', 0, 'Blanditiis in dolorem quae. Velit qui fuga veritatis est dolore a. Voluptatem sit et possimus impedit cum pariatur corrupti. Sint ut qui voluptas aut.', 0, 'Voluptatem nam deleniti quis. Deserunt aspernatur ipsum similique odit. Deleniti inventore tenetur explicabo dolorem vitae enim.', 'Ducimus error officiis aut possimus. Et sit officiis ut laboriosam. Quia nam recusandae voluptatum ullam molestias enim quo ipsum. Provident facilis quod enim dolor praesentium rem.', 1, 'Necessitatibus est in mollitia sapiente. Quidem doloremque et vel soluta non at molestiae. Ad dolore sint sunt. Sed reiciendis beatae occaecati dolor voluptatem.', 'Dr. Jaylin Gleichner', 0, 'Repudiandae est explicabo rerum suscipit. Consequatur consequatur deserunt incidunt odio eligendi vitae. Culpa voluptatem at deserunt qui. Dignissimos et et in nihil optio.', 'Error unde maxime ut aut aspernatur rerum. Debitis eos facere dolorum alias eum non molestiae. Illo quibusdam ea distinctio omnis delectus.', 1, 'Vero quisquam quia ipsum et. Quisquam amet perspiciatis et omnis. At sit veritatis illum suscipit.', '9', '4', '1', '7', '0', '3', '6', 'Eum est enim eius voluptas harum id. Rerum eum eius occaecati praesentium quia. Repellendus ab culpa ea accusantium animi recusandae. Et iure illum sapiente perspiciatis iste consequatur architecto.', 'Nobis architecto facere et quia assumenda impedit molestias. Sunt quia optio deserunt nihil ut dicta. Nobis praesentium quibusdam quis minus.', 'Minima voluptatem aut mollitia id rem enim. Enim nisi sit quam est provident enim vero quaerat. Sint ipsa optio sunt quis libero. Aut labore molestiae et sed consequatur corporis.', 'Enim provident exercitationem esse asperiores cupiditate voluptatem. Eos eos eum earum maxime a. Architecto voluptates deserunt id est alias enim reiciendis.', 'Rerum aut sunt ullam quos. Deleniti itaque hic voluptatem eius consequatur nemo quo autem. Et et nihil reprehenderit alias similique est.', 'Debitis officiis ullam iure odit qui unde est est. Qui ratione et voluptatem tenetur. Sed ipsum voluptate accusantium corporis. Rerum officia voluptatem expedita accusantium.', 'Veniam nostrum ex id aut laudantium qui. Est velit tenetur sed est doloribus doloremque ad officiis. Autem placeat id delectus quod.', '2024-07-20 04:41:57', '2024-07-20 04:41:57'),
(10, 19, '24-0010', 2, 1, 1, '672 Stamm Shore', 'Franciscohaven', 'Elliott Hessel', 1, 2, 3, 'Nyasia Sauer', 1, 1, 'Ea delectus quisquam voluptatem distinctio et error natus fugit. Qui minima et ea qui. Vero atque eum expedita id. Rerum quisquam aut placeat dolorem ducimus et maxime dolor.', 0, 0, 1, 'Beatae iure culpa molestiae corporis. Aut ut ut voluptate ratione iste quia. Enim sed perferendis similique. Repellat quo sed et accusamus animi possimus.', '1974-11-05', 'Block, Orn and Jacobson', '7', 'Reiciendis numquam rerum consequatur ut. Asperiores autem tempore maxime accusantium molestiae rerum. In iure cum beatae distinctio qui.', 'Illum delectus optio labore voluptatem culpa quo pariatur. Aperiam porro quia commodi dolorem omnis hic eum earum. Aliquid dolor quaerat et ab.', 'Ut dolor dolores eum corporis est. In itaque cupiditate quia doloremque fuga fuga ut fugit. Nulla ab saepe voluptas doloribus qui rerum.', 'Odit nostrum nostrum tempore autem mollitia. Cupiditate et omnis tempora eum aperiam minima magnam.', 'Et repellat enim omnis corporis maxime. Velit ullam ex quisquam est sit accusantium molestiae. Voluptas autem dolorem quia eaque et ut ut. Illo sit id corporis porro explicabo itaque suscipit.', 0, 'Qui odio quasi excepturi asperiores. Perspiciatis reiciendis tenetur asperiores. Sit ut qui id dolorem eum sit quasi.', 0, 'Aut provident iste qui est. Temporibus incidunt ipsum voluptatem minus similique. Magni exercitationem ratione minima dicta. Voluptas nulla voluptas quis rerum.', 0, 'Ad molestiae eum distinctio est est aliquam officiis. Aut deserunt molestiae natus deleniti. Est odit architecto porro eligendi nam est molestiae. Neque et recusandae incidunt labore.', 'Ad facere consequuntur sit facere. Distinctio ipsum quia provident debitis aliquid consequuntur. Sed voluptate eius voluptatum tempore iste. Voluptatem quia voluptate id veniam maxime qui.', 1, 'Quia et cumque natus expedita ut officiis. Aliquid laborum non aperiam unde ut error. Occaecati neque laudantium et omnis. Est eum pariatur quaerat nesciunt et.', 'Edison Leannon', 0, 'Et quibusdam porro nihil odit possimus modi aut. Tenetur minus natus qui. Qui et consectetur accusamus quasi consectetur nemo.', 'Corrupti architecto nulla commodi. At ad omnis voluptatem aut vel. Modi ullam non voluptas sunt vel. Et voluptas ipsam molestiae omnis. Sed est quia quis aut maxime est.', 1, 'Error nihil impedit corrupti cupiditate sunt illo optio. Est iure id beatae qui sed. Magnam itaque sequi iusto omnis et delectus.', '0', '9', '3', '1', '5', '2', '2', 'Magnam dignissimos voluptatem ducimus numquam labore cum. Hic ut odio sed rerum et. Doloremque illo ex voluptatum sunt eum. Quas magni in dolorem tenetur voluptatem.', 'Suscipit consequatur ut dolor est nihil. Eos sed soluta aut optio. Atque temporibus placeat nulla maiores est illo.', 'Dolorem nihil quos laudantium sit voluptatem nam. Qui omnis sed et autem. Dolorum qui qui commodi et.', 'Consequatur commodi accusantium aperiam omnis expedita. Eveniet cupiditate est cum qui. Voluptatum molestias molestiae et et dolores adipisci quo. Rerum consequatur et cupiditate quisquam aliquid.', 'Aliquid et nostrum voluptatem quia dolorem praesentium. Illum facilis alias asperiores eos autem. Veritatis nisi odio quam numquam sint omnis. Eius totam cum dignissimos molestiae iusto.', 'Sed qui totam provident nihil tempore et vero aspernatur. Non nulla quam placeat placeat. Qui quia non est nobis.', 'Quae consequatur numquam enim laudantium quos minima aliquam. Deleniti accusantium eum id. Excepturi sunt libero aut doloremque repellendus consectetur fugit.', '2024-07-20 04:41:57', '2024-07-20 04:41:57');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `student_status`
--

CREATE TABLE `student_status` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `description` varchar(255) NOT NULL,
  `color` varchar(255) NOT NULL DEFAULT 'red-500',
  `status` tinyint(1) NOT NULL DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `student_status`
--

INSERT INTO `student_status` (`id`, `name`, `description`, `color`, `status`) VALUES
(1, 'En espera', 'El alumno ha solicitado ingreso a la institución pero aún no ha sido admitido o rechazado.', 'red-500', 1),
(2, 'Matriculado', 'El alumno está inscrito en cursos para el período actual.', 'green-500', 1),
(3, 'Graduado', 'El alumno ha completado satisfactoriamente todos los requisitos y ha recibido su grado o título.', 'blue-500', 1),
(4, 'De baja', 'El alumno ha solicitado o sido dado de baja de la institución.', 'gray-500', 1),
(5, 'En descanso académico', 'El alumno ha tomado un descanso temporal de sus estudios por razones personales o académicas.', 'gray-500', 1),
(6, 'Suspendido', 'El alumno ha sido temporalmente retirado de la institución debido a problemas académicos o disciplinarios.', 'gray-500', 1),
(7, 'Readmisión', 'El alumno ha sido readmitido después de un período de suspensión.', 'gray-500', 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `subjects`
--

CREATE TABLE `subjects` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `subjects`
--

INSERT INTO `subjects` (`id`, `name`, `created_at`, `updated_at`) VALUES
(1, 'Matemáticas', NULL, NULL),
(2, 'Física', NULL, NULL),
(3, 'Química', NULL, NULL),
(4, 'Biología', NULL, NULL),
(5, 'Historia', NULL, NULL),
(6, 'Geografía', NULL, NULL),
(7, 'Egipcio Reformado', NULL, NULL),
(8, 'Lengua y Literatura', NULL, NULL),
(9, 'Historia del Arte', NULL, NULL),
(10, 'Música', NULL, NULL),
(11, 'Educación Física', NULL, NULL),
(12, 'Tecnología', NULL, NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `systems`
--

CREATE TABLE `systems` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `school_name` varchar(255) NOT NULL,
  `school_address` varchar(255) NOT NULL,
  `contact_email` varchar(255) NOT NULL,
  `contact_email2` varchar(255) NOT NULL,
  `phone_number` varchar(255) NOT NULL,
  `phone_number2` varchar(255) NOT NULL,
  `school_start_time` time NOT NULL,
  `school_end_time` time NOT NULL,
  `school_slogan` varchar(255) NOT NULL,
  `school_motto` varchar(255) NOT NULL,
  `principal_name` varchar(255) NOT NULL,
  `current_academic_year` int(11) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `systems`
--

INSERT INTO `systems` (`id`, `school_name`, `school_address`, `contact_email`, `contact_email2`, `phone_number`, `phone_number2`, `school_start_time`, `school_end_time`, `school_slogan`, `school_motto`, `principal_name`, `current_academic_year`, `created_at`, `updated_at`) VALUES
(1, 'Thomas Russell Crampton', 'Avenida Atahualpa E10-60 y Santiago Sector San Nicolas Cayambe, Pichincha, Ecuador', 'rectorado@trc.edu.ec', 'secretaria@trc.edu.ec', '09 8487 7243', '09 8487 7243', '07:00:00', '13:00:00', 'Educación a otro nivel', 'Formamos seres humanos justos, democráticos, pacíficos y responsables para una sana convivencia con la sociedad y la naturaleza, en un ambiente de calidad y calidez', 'Thomas Russell Crampton', 1, NULL, NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `teachers`
--

CREATE TABLE `teachers` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `person_id` bigint(20) UNSIGNED NOT NULL,
  `profession` varchar(255) NOT NULL,
  `work_place` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `status` tinyint(1) NOT NULL DEFAULT 1,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `teachers`
--

INSERT INTO `teachers` (`id`, `person_id`, `profession`, `work_place`, `email`, `status`, `created_at`, `updated_at`) VALUES
(1, 2, 'Maestro', 'Colegio de la Ciudad', 'lgislason@example.org', 1, '2024-07-20 04:41:56', '2024-07-20 04:41:56'),
(2, 3, 'Maestro', 'Colegio de la Ciudad', 'ivy.raynor@example.org', 1, '2024-07-20 04:41:56', '2024-07-20 04:41:56'),
(3, 4, 'Maestro', 'Colegio de la Ciudad', 'benedict73@example.com', 1, '2024-07-20 04:41:56', '2024-07-20 04:41:56'),
(4, 5, 'Maestro', 'Colegio de la Ciudad', 'pschamberger@example.net', 1, '2024-07-20 04:41:56', '2024-07-20 04:41:56');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `type_houses`
--

CREATE TABLE `type_houses` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `status` tinyint(1) NOT NULL DEFAULT 1,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `type_houses`
--

INSERT INTO `type_houses` (`id`, `name`, `status`, `created_at`, `updated_at`) VALUES
(1, 'Propia', 1, NULL, NULL),
(2, 'Arrendada', 1, NULL, NULL),
(3, 'Prestada', 1, NULL, NULL),
(4, 'Anticresis', 1, NULL, NULL),
(5, 'Con préstamo', 1, NULL, NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

CREATE TABLE `users` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `person_id` bigint(20) UNSIGNED NOT NULL,
  `role_id` bigint(20) UNSIGNED DEFAULT NULL,
  `status` tinyint(1) NOT NULL DEFAULT 1,
  `email` varchar(255) NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) NOT NULL,
  `remember_token` varchar(100) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`id`, `person_id`, `role_id`, `status`, `email`, `email_verified_at`, `password`, `remember_token`, `created_at`, `updated_at`) VALUES
(1, 1, 1, 1, 'joregesosa@gmail.com', '2024-07-20 04:41:56', '$2y$12$zWsuUAbCR/rBgZMUh2OhU.6rcTn0WHs9EuVGWpgp.QOw.CqRLUH1y', 'J9ciNLOe7A', '2024-07-20 04:41:56', '2024-07-20 04:41:56'),
(2, 2, 2, 1, 'vq.coby86@trc.edu.ec', '2024-07-20 04:41:56', '$2y$12$Rb6gwgGbaISqFL2xas0tyOKnuYG/N7IjhXz.qG8x8RhqNnceeydtO', 'KpQRirRUgP', '2024-07-20 04:41:56', '2024-07-20 04:41:56'),
(3, 3, 2, 1, 'dg.qschneider@trc.edu.ec', '2024-07-20 04:41:56', '$2y$12$JioFh3/gvmxNieUe75DBQOz3sQ2yggDWK3TvGVz9vcVEuI..D7nqq', '43ywhw8m3x', '2024-07-20 04:41:56', '2024-07-20 04:41:56'),
(4, 4, 2, 1, 'yb.jerald.damore@trc.edu.ec', '2024-07-20 04:41:57', '$2y$12$J4Xmr7JWDwzobf0kiImi/u8G96gHMs.58aSTiVyLaZYqtpuCWw6r6', 'nrB2AWT67u', '2024-07-20 04:41:57', '2024-07-20 04:41:57'),
(5, 5, 2, 1, 'xq.schroeder.ronny@trc.edu.ec', '2024-07-20 04:41:57', '$2y$12$Oqb3MSeL.KbVJ3yTMsp3d.4BamLA6IYH34usgQesPJk2NnEYLO1mq', 'RGK4WGyEYo', '2024-07-20 04:41:57', '2024-07-20 04:41:57'),
(6, 10, 3, 1, 'ih.linda12@trc.edu.ec', '2024-07-20 04:41:57', '$2y$12$Q6XuPCxv/v6I2HArRFwC7.Ppb38qvOAxmSdatxjEKbCEPKSszZpLC', 'ZpQhxOV12d', '2024-07-20 04:41:58', '2024-07-20 04:41:58'),
(7, 11, 3, 1, 'mu.gjaskolski@trc.edu.ec', '2024-07-20 04:41:58', '$2y$12$43PyjhUbnI6mOf3OJbBOQe2g8.oJRBxik5jy2trlfp0vpLXT9B/LO', '4ycyZOroBa', '2024-07-20 04:41:58', '2024-07-20 04:41:58'),
(8, 12, 3, 1, 'ah.vcummings@trc.edu.ec', '2024-07-20 04:41:58', '$2y$12$Hw/4dtkfeYG5t5bOjap5euIl7zInqqBcuCFGjvd6W57w7jXT5vGRa', 'dKczpisBl8', '2024-07-20 04:41:58', '2024-07-20 04:41:58'),
(9, 13, 3, 1, 'km.geovanni73@trc.edu.ec', '2024-07-20 04:41:58', '$2y$12$.eKNqUFtJ/cHoxeteVDVRud0JM3BVz1Jyt2VwStYQCeBYFqYQ7bge', '3gPpnYphqo', '2024-07-20 04:41:59', '2024-07-20 04:41:59'),
(10, 14, 3, 1, 'qg.mcclure.vena@trc.edu.ec', '2024-07-20 04:41:59', '$2y$12$khIen/J2aDGinOIFS2WrIOomE5Zrr2uW.vxeA20P/5RYKynFpAvEC', 'cGFSdMv9xt', '2024-07-20 04:41:59', '2024-07-20 04:41:59'),
(11, 15, 3, 1, 'fi.dbecker@trc.edu.ec', '2024-07-20 04:41:59', '$2y$12$8vI98WxjQsqMlzUVuD6TJukAXfMNGsmUniuEMmgiLrDSNIQj8sVCq', 'NzYpu33k3t', '2024-07-20 04:41:59', '2024-07-20 04:41:59'),
(12, 16, 3, 1, 'gs.lang.elisabeth@trc.edu.ec', '2024-07-20 04:41:59', '$2y$12$hyXedY4LTnE7foRW8Gl0h.O0W8XTHs9XVgg1XhLmTZU5Lj6Hzy/ye', 'jrUZtbML2X', '2024-07-20 04:41:59', '2024-07-20 04:41:59'),
(13, 17, 3, 1, 'to.marcella.witting@trc.edu.ec', '2024-07-20 04:41:59', '$2y$12$wsfAOrseIAzByK/SU2ClA.iOzrzylnMxjfkcrvNjsnXJ.MRcquRtK', 'M5ZOYdTGlo', '2024-07-20 04:42:00', '2024-07-20 04:42:00'),
(14, 18, 3, 1, 'tr.abby.johnston@trc.edu.ec', '2024-07-20 04:42:00', '$2y$12$G9vlCPogrwbSYnjNhe3TD.Kldxa55EL3AEBS2YMLcjLhycG82Spzu', 'Ijt1cXITV8', '2024-07-20 04:42:00', '2024-07-20 04:42:00'),
(15, 19, 3, 1, 'no.fiona.kassulke@trc.edu.ec', '2024-07-20 04:42:00', '$2y$12$yZ32Gksh8uNPyoQ3qBAIreJ6aAxeUxtIMl3y8Or1T4XxX06NYpyIO', 'ObvgOM133X', '2024-07-20 04:42:00', '2024-07-20 04:42:00');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `cache`
--
ALTER TABLE `cache`
  ADD PRIMARY KEY (`key`);

--
-- Indices de la tabla `cache_locks`
--
ALTER TABLE `cache_locks`
  ADD PRIMARY KEY (`key`);

--
-- Indices de la tabla `contacts`
--
ALTER TABLE `contacts`
  ADD PRIMARY KEY (`id`),
  ADD KEY `contacts_level_id_foreign` (`level_id`),
  ADD KEY `contacts_phone_type_id_foreign` (`phone_type_id`),
  ADD KEY `contacts_father_phone_type_id_foreign` (`father_phone_type_id`),
  ADD KEY `contacts_mother_phone_type_id_foreign` (`mother_phone_type_id`);

--
-- Indices de la tabla `education_levels`
--
ALTER TABLE `education_levels`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `elective_years`
--
ALTER TABLE `elective_years`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `enrollment_payments`
--
ALTER TABLE `enrollment_payments`
  ADD PRIMARY KEY (`id`),
  ADD KEY `enrollment_payments_contact_id_foreign` (`contact_id`);

--
-- Indices de la tabla `failed_jobs`
--
ALTER TABLE `failed_jobs`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`);

--
-- Indices de la tabla `family_structures`
--
ALTER TABLE `family_structures`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `groups`
--
ALTER TABLE `groups`
  ADD PRIMARY KEY (`id`),
  ADD KEY `groups_level_id_foreign` (`level_id`),
  ADD KEY `groups_teacher_id_foreign` (`teacher_id`);

--
-- Indices de la tabla `jobs`
--
ALTER TABLE `jobs`
  ADD PRIMARY KEY (`id`),
  ADD KEY `jobs_queue_index` (`queue`);

--
-- Indices de la tabla `job_batches`
--
ALTER TABLE `job_batches`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `levels`
--
ALTER TABLE `levels`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `level_subject`
--
ALTER TABLE `level_subject`
  ADD PRIMARY KEY (`id`),
  ADD KEY `level_subject_level_id_foreign` (`level_id`),
  ADD KEY `level_subject_subject_id_foreign` (`subject_id`),
  ADD KEY `level_subject_elective_year_id_foreign` (`elective_year_id`),
  ADD KEY `level_subject_teacher_id_foreign` (`teacher_id`);

--
-- Indices de la tabla `marital_status`
--
ALTER TABLE `marital_status`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `medical_attention_types`
--
ALTER TABLE `medical_attention_types`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `parents`
--
ALTER TABLE `parents`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `parents_email_unique` (`email`),
  ADD KEY `parents_person_id_foreign` (`person_id`),
  ADD KEY `parents_marital_status_id_foreign` (`marital_status_id`),
  ADD KEY `parents_education_level_id_foreign` (`education_level_id`);

--
-- Indices de la tabla `parent_types`
--
ALTER TABLE `parent_types`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `password_reset_tokens`
--
ALTER TABLE `password_reset_tokens`
  ADD PRIMARY KEY (`email`);

--
-- Indices de la tabla `pathological_family_histories`
--
ALTER TABLE `pathological_family_histories`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `payment_types`
--
ALTER TABLE `payment_types`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `people`
--
ALTER TABLE `people`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `people_id_card_unique` (`id_card`);

--
-- Indices de la tabla `permissions`
--
ALTER TABLE `permissions`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `permission_role`
--
ALTER TABLE `permission_role`
  ADD PRIMARY KEY (`id`),
  ADD KEY `permission_role_role_id_foreign` (`role_id`),
  ADD KEY `permission_role_permission_id_foreign` (`permission_id`);

--
-- Indices de la tabla `phones`
--
ALTER TABLE `phones`
  ADD PRIMARY KEY (`id`),
  ADD KEY `phones_person_id_foreign` (`person_id`),
  ADD KEY `phones_phone_type_id_foreign` (`phone_type_id`);

--
-- Indices de la tabla `phone_types`
--
ALTER TABLE `phone_types`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `pregnancy_types`
--
ALTER TABLE `pregnancy_types`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `roles`
--
ALTER TABLE `roles`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `scores`
--
ALTER TABLE `scores`
  ADD PRIMARY KEY (`id`),
  ADD KEY `scores_student_id_foreign` (`student_id`),
  ADD KEY `scores_subject_id_foreign` (`subject_id`),
  ADD KEY `scores_level_id_foreign` (`level_id`),
  ADD KEY `scores_elective_year_id_foreign` (`elective_year_id`);

--
-- Indices de la tabla `score_qualifiers`
--
ALTER TABLE `score_qualifiers`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `sessions`
--
ALTER TABLE `sessions`
  ADD PRIMARY KEY (`id`),
  ADD KEY `sessions_user_id_index` (`user_id`),
  ADD KEY `sessions_last_activity_index` (`last_activity`);

--
-- Indices de la tabla `students`
--
ALTER TABLE `students`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `students_matricula_unique` (`matricula`),
  ADD KEY `students_person_id_foreign` (`person_id`),
  ADD KEY `students_status_id_foreign` (`status_id`),
  ADD KEY `students_level_id_foreign` (`level_id`),
  ADD KEY `students_group_id_foreign` (`group_id`),
  ADD KEY `students_father_id_foreign` (`father_id`),
  ADD KEY `students_mother_id_foreign` (`mother_id`),
  ADD KEY `students_tutor_id_foreign` (`tutor_id`),
  ADD KEY `students_family_structure_id_foreign` (`family_structure_id`),
  ADD KEY `students_type_house_id_foreign` (`type_house_id`),
  ADD KEY `students_medical_attention_type_id_foreign` (`medical_attention_type_id`),
  ADD KEY `students_pregnancy_type_id_foreign` (`pregnancy_type_id`);

--
-- Indices de la tabla `student_status`
--
ALTER TABLE `student_status`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `subjects`
--
ALTER TABLE `subjects`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `systems`
--
ALTER TABLE `systems`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `teachers`
--
ALTER TABLE `teachers`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `teachers_email_unique` (`email`),
  ADD KEY `teachers_person_id_foreign` (`person_id`);

--
-- Indices de la tabla `type_houses`
--
ALTER TABLE `type_houses`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`),
  ADD KEY `users_role_id_foreign` (`role_id`),
  ADD KEY `users_person_id_foreign` (`person_id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `contacts`
--
ALTER TABLE `contacts`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `education_levels`
--
ALTER TABLE `education_levels`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de la tabla `elective_years`
--
ALTER TABLE `elective_years`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `enrollment_payments`
--
ALTER TABLE `enrollment_payments`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `failed_jobs`
--
ALTER TABLE `failed_jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `family_structures`
--
ALTER TABLE `family_structures`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT de la tabla `groups`
--
ALTER TABLE `groups`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT de la tabla `jobs`
--
ALTER TABLE `jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `levels`
--
ALTER TABLE `levels`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT de la tabla `level_subject`
--
ALTER TABLE `level_subject`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=66;

--
-- AUTO_INCREMENT de la tabla `marital_status`
--
ALTER TABLE `marital_status`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT de la tabla `medical_attention_types`
--
ALTER TABLE `medical_attention_types`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT de la tabla `parents`
--
ALTER TABLE `parents`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `parent_types`
--
ALTER TABLE `parent_types`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT de la tabla `pathological_family_histories`
--
ALTER TABLE `pathological_family_histories`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT de la tabla `payment_types`
--
ALTER TABLE `payment_types`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `people`
--
ALTER TABLE `people`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

--
-- AUTO_INCREMENT de la tabla `permissions`
--
ALTER TABLE `permissions`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=38;

--
-- AUTO_INCREMENT de la tabla `permission_role`
--
ALTER TABLE `permission_role`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=38;

--
-- AUTO_INCREMENT de la tabla `phones`
--
ALTER TABLE `phones`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

--
-- AUTO_INCREMENT de la tabla `phone_types`
--
ALTER TABLE `phone_types`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `pregnancy_types`
--
ALTER TABLE `pregnancy_types`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `roles`
--
ALTER TABLE `roles`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `scores`
--
ALTER TABLE `scores`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=32;

--
-- AUTO_INCREMENT de la tabla `score_qualifiers`
--
ALTER TABLE `score_qualifiers`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT de la tabla `students`
--
ALTER TABLE `students`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT de la tabla `student_status`
--
ALTER TABLE `student_status`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT de la tabla `subjects`
--
ALTER TABLE `subjects`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT de la tabla `systems`
--
ALTER TABLE `systems`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `teachers`
--
ALTER TABLE `teachers`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `type_houses`
--
ALTER TABLE `type_houses`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de la tabla `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `contacts`
--
ALTER TABLE `contacts`
  ADD CONSTRAINT `contacts_father_phone_type_id_foreign` FOREIGN KEY (`father_phone_type_id`) REFERENCES `phone_types` (`id`),
  ADD CONSTRAINT `contacts_level_id_foreign` FOREIGN KEY (`level_id`) REFERENCES `levels` (`id`),
  ADD CONSTRAINT `contacts_mother_phone_type_id_foreign` FOREIGN KEY (`mother_phone_type_id`) REFERENCES `phone_types` (`id`),
  ADD CONSTRAINT `contacts_phone_type_id_foreign` FOREIGN KEY (`phone_type_id`) REFERENCES `phone_types` (`id`);

--
-- Filtros para la tabla `enrollment_payments`
--
ALTER TABLE `enrollment_payments`
  ADD CONSTRAINT `enrollment_payments_contact_id_foreign` FOREIGN KEY (`contact_id`) REFERENCES `contacts` (`id`);

--
-- Filtros para la tabla `groups`
--
ALTER TABLE `groups`
  ADD CONSTRAINT `groups_level_id_foreign` FOREIGN KEY (`level_id`) REFERENCES `levels` (`id`),
  ADD CONSTRAINT `groups_teacher_id_foreign` FOREIGN KEY (`teacher_id`) REFERENCES `teachers` (`id`) ON DELETE SET NULL;

--
-- Filtros para la tabla `level_subject`
--
ALTER TABLE `level_subject`
  ADD CONSTRAINT `level_subject_elective_year_id_foreign` FOREIGN KEY (`elective_year_id`) REFERENCES `elective_years` (`id`),
  ADD CONSTRAINT `level_subject_level_id_foreign` FOREIGN KEY (`level_id`) REFERENCES `levels` (`id`),
  ADD CONSTRAINT `level_subject_subject_id_foreign` FOREIGN KEY (`subject_id`) REFERENCES `subjects` (`id`),
  ADD CONSTRAINT `level_subject_teacher_id_foreign` FOREIGN KEY (`teacher_id`) REFERENCES `teachers` (`id`);

--
-- Filtros para la tabla `parents`
--
ALTER TABLE `parents`
  ADD CONSTRAINT `parents_education_level_id_foreign` FOREIGN KEY (`education_level_id`) REFERENCES `education_levels` (`id`) ON DELETE SET NULL,
  ADD CONSTRAINT `parents_marital_status_id_foreign` FOREIGN KEY (`marital_status_id`) REFERENCES `marital_status` (`id`) ON DELETE SET NULL,
  ADD CONSTRAINT `parents_person_id_foreign` FOREIGN KEY (`person_id`) REFERENCES `people` (`id`) ON DELETE CASCADE;

--
-- Filtros para la tabla `permission_role`
--
ALTER TABLE `permission_role`
  ADD CONSTRAINT `permission_role_permission_id_foreign` FOREIGN KEY (`permission_id`) REFERENCES `permissions` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `permission_role_role_id_foreign` FOREIGN KEY (`role_id`) REFERENCES `roles` (`id`) ON DELETE CASCADE;

--
-- Filtros para la tabla `phones`
--
ALTER TABLE `phones`
  ADD CONSTRAINT `phones_person_id_foreign` FOREIGN KEY (`person_id`) REFERENCES `people` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `phones_phone_type_id_foreign` FOREIGN KEY (`phone_type_id`) REFERENCES `phone_types` (`id`);

--
-- Filtros para la tabla `scores`
--
ALTER TABLE `scores`
  ADD CONSTRAINT `scores_elective_year_id_foreign` FOREIGN KEY (`elective_year_id`) REFERENCES `elective_years` (`id`),
  ADD CONSTRAINT `scores_level_id_foreign` FOREIGN KEY (`level_id`) REFERENCES `levels` (`id`),
  ADD CONSTRAINT `scores_student_id_foreign` FOREIGN KEY (`student_id`) REFERENCES `students` (`id`),
  ADD CONSTRAINT `scores_subject_id_foreign` FOREIGN KEY (`subject_id`) REFERENCES `subjects` (`id`);

--
-- Filtros para la tabla `students`
--
ALTER TABLE `students`
  ADD CONSTRAINT `students_family_structure_id_foreign` FOREIGN KEY (`family_structure_id`) REFERENCES `family_structures` (`id`) ON DELETE SET NULL,
  ADD CONSTRAINT `students_father_id_foreign` FOREIGN KEY (`father_id`) REFERENCES `parents` (`id`) ON DELETE SET NULL,
  ADD CONSTRAINT `students_group_id_foreign` FOREIGN KEY (`group_id`) REFERENCES `groups` (`id`) ON DELETE SET NULL,
  ADD CONSTRAINT `students_level_id_foreign` FOREIGN KEY (`level_id`) REFERENCES `levels` (`id`),
  ADD CONSTRAINT `students_medical_attention_type_id_foreign` FOREIGN KEY (`medical_attention_type_id`) REFERENCES `medical_attention_types` (`id`) ON DELETE SET NULL,
  ADD CONSTRAINT `students_mother_id_foreign` FOREIGN KEY (`mother_id`) REFERENCES `parents` (`id`) ON DELETE SET NULL,
  ADD CONSTRAINT `students_person_id_foreign` FOREIGN KEY (`person_id`) REFERENCES `people` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `students_pregnancy_type_id_foreign` FOREIGN KEY (`pregnancy_type_id`) REFERENCES `pregnancy_types` (`id`) ON DELETE SET NULL,
  ADD CONSTRAINT `students_status_id_foreign` FOREIGN KEY (`status_id`) REFERENCES `student_status` (`id`),
  ADD CONSTRAINT `students_tutor_id_foreign` FOREIGN KEY (`tutor_id`) REFERENCES `parents` (`id`) ON DELETE SET NULL,
  ADD CONSTRAINT `students_type_house_id_foreign` FOREIGN KEY (`type_house_id`) REFERENCES `type_houses` (`id`) ON DELETE SET NULL;

--
-- Filtros para la tabla `teachers`
--
ALTER TABLE `teachers`
  ADD CONSTRAINT `teachers_person_id_foreign` FOREIGN KEY (`person_id`) REFERENCES `people` (`id`) ON DELETE CASCADE;

--
-- Filtros para la tabla `users`
--
ALTER TABLE `users`
  ADD CONSTRAINT `users_person_id_foreign` FOREIGN KEY (`person_id`) REFERENCES `people` (`id`),
  ADD CONSTRAINT `users_role_id_foreign` FOREIGN KEY (`role_id`) REFERENCES `roles` (`id`) ON DELETE SET NULL;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
