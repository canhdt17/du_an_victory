-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Oct 30, 2024 at 09:25 AM
-- Server version: 8.0.30
-- PHP Version: 8.1.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `du_an_victory`
--

-- --------------------------------------------------------

--
-- Table structure for table `areas`
--

CREATE TABLE `areas` (
  `area_id` bigint UNSIGNED NOT NULL,
  `area_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `areas`
--

INSERT INTO `areas` (`area_id`, `area_name`, `created_at`, `updated_at`, `deleted_at`) VALUES
(1, 'Hà Nội', '2024-10-30 02:08:07', '2024-10-30 02:08:07', NULL),
(2, 'Hải Phòng', '2024-10-30 02:08:18', '2024-10-30 02:08:18', NULL),
(3, 'Hồ Chí Minh', '2024-10-30 02:08:36', '2024-10-30 02:08:36', NULL),
(4, 'Nam Định', '2024-10-30 02:08:48', '2024-10-30 02:08:48', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `banners`
--

CREATE TABLE `banners` (
  `id` bigint UNSIGNED NOT NULL,
  `image` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `link` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `banners`
--

INSERT INTO `banners` (`id`, `image`, `link`, `deleted_at`, `created_at`, `updated_at`) VALUES
(1, 'images/0PcK3MihK0gBrpVkb86jChRWzjxYGwVV2bf7cWZ6.webp', 'dsa', '2024-10-30 02:11:20', '2024-10-30 01:31:49', '2024-10-30 02:11:20'),
(2, 'images/a5hGzL6bpFLkNHwmNwFRhCAxt99Zj6JW4ghr1ffl.webp', 'http://localhost/du_an_1/index.php?act=danhsachnhomsp&id_nhom_sp=14', NULL, '2024-10-30 02:11:54', '2024-10-30 02:11:54'),
(3, 'images/5va4YWTMZlvyGj077H4sCy7hay47RcjLanX1mUSj.webp', 'http://localhost/du_an_1/index.php?act=danhsachnhomsp&id_nhom_sp=14', NULL, '2024-10-30 02:12:13', '2024-10-30 02:12:13'),
(4, 'images/pioyATTvTZQ5Ss6Ze9WxtuanFavIE3snHGeZ8QDI.webp', 'http://localhost/du_an_1/index.php?act=danhsachnhomsp&id_nhom_sp=14', NULL, '2024-10-30 02:12:28', '2024-10-30 02:12:28'),
(5, 'images/LsjHWpnKW5PUVSh8dPNsRBAtWC0aEdrnbgWi8AU6.webp', 'http://localhost/du_an_1/index.php?act=danhsachsp', NULL, '2024-10-30 02:12:50', '2024-10-30 02:12:50'),
(6, 'images/E44z9bEEGFFgDOWsucDKjuz2McTWtzr5CSPnjRaL.webp', 'http://localhost/du_an_1/index.php?act=danhsachnhomsp&id_nhom_sp=14', NULL, '2024-10-30 02:13:09', '2024-10-30 02:13:09'),
(7, 'images/V1CaQaQng7KT0T5ewCOK74nzxi1r6H39kG8Zzz4q.webp', 'http://localhost/du_an_1/index.php?act=danhsachgioitinhsp&id_gioitinh=2', NULL, '2024-10-30 02:13:24', '2024-10-30 02:13:24'),
(8, 'images/NSUUx1IbXGgOqjkJJ2NzTCydZnkIA8NAPuKsYuxo.webp', 'http://localhost/du_an_1/index.php?act=danhsachgioitinhsp&id_gioitinh=1', NULL, '2024-10-30 02:13:41', '2024-10-30 02:13:41'),
(9, 'images/vrFlIG8rgsU06G5FYdXIir8SYt2DA8bdmSSygGKI.webp', 'http://localhost/du_an_1/index.php?act=danhsachnhomsp&id_nhom_sp=14', NULL, '2024-10-30 02:13:56', '2024-10-30 02:13:56');

-- --------------------------------------------------------

--
-- Table structure for table `categories`
--

CREATE TABLE `categories` (
  `id` bigint UNSIGNED NOT NULL,
  `name_category` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `categories`
--

INSERT INTO `categories` (`id`, `name_category`, `deleted_at`, `created_at`, `updated_at`) VALUES
(1, 'Hành động', NULL, NULL, NULL),
(2, 'Khoa học viễn tưởng', NULL, NULL, NULL),
(3, 'Hoạt hình', NULL, NULL, NULL),
(4, 'Kinh dị', NULL, NULL, NULL),
(5, 'Tình cảm', NULL, NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `combo_foods`
--

CREATE TABLE `combo_foods` (
  `combofood_id` bigint UNSIGNED NOT NULL,
  `combofood_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `combofood_price` decimal(8,2) NOT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `combo_foods`
--

INSERT INTO `combo_foods` (`combofood_id`, `combofood_name`, `combofood_price`, `deleted_at`, `created_at`, `updated_at`) VALUES
(1, 'dsad', '100.00', NULL, '2024-10-30 01:32:08', '2024-10-30 01:32:08');

-- --------------------------------------------------------

--
-- Table structure for table `comments`
--

CREATE TABLE `comments` (
  `id` bigint UNSIGNED NOT NULL,
  `user_id` bigint UNSIGNED NOT NULL,
  `movie_id` bigint UNSIGNED NOT NULL,
  `content` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `failed_jobs`
--

CREATE TABLE `failed_jobs` (
  `id` bigint UNSIGNED NOT NULL,
  `uuid` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `connection` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `queue` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `payload` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `exception` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `ho_tro`
--

CREATE TABLE `ho_tro` (
  `id` bigint UNSIGNED NOT NULL,
  `user_id` bigint UNSIGNED NOT NULL,
  `subject` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `content` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `status` tinyint(1) NOT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `khuyen_mais`
--

CREATE TABLE `khuyen_mais` (
  `id` bigint UNSIGNED NOT NULL,
  `title` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `content` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `image` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `time_date` timestamp NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `migrations`
--

CREATE TABLE `migrations` (
  `id` int UNSIGNED NOT NULL,
  `migration` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(20, '2014_10_12_100000_create_password_reset_tokens_table', 1),
(21, '2019_08_19_000000_create_failed_jobs_table', 1),
(22, '2019_12_14_000001_create_personal_access_tokens_table', 1),
(23, '2024_10_12_104920_create_users_table', 1),
(24, '2024_10_15_092414_create_categories_table', 1),
(25, '2024_10_15_094057_create_types_table', 1),
(26, '2024_10_16_162556_create_seat_types_table', 1),
(27, '2024_10_17_124255_create_areas_table', 1),
(28, '2024_10_18_124245_create_rooms_table', 1),
(29, '2024_10_19_094152_create_movies_table', 1),
(30, '2024_10_19_162624_create_seats_table', 1),
(31, '2024_10_20_000002_create_showtimes_table', 1),
(32, '2024_10_27_005605_create_role_table', 1),
(33, '2024_10_27_094510_create_banners_table', 1),
(34, '2024_10_27_104725_create_comments_table', 1),
(35, '2024_10_27_124100_create_khuyen_mais_table', 1),
(36, '2024_10_27_133637_create_vouchers_table', 1),
(37, '2024_10_27_162339_create_combo_foods_table', 2),
(38, '2024_10_27_162432_create_ho_tro_table', 3);

-- --------------------------------------------------------

--
-- Table structure for table `movies`
--

CREATE TABLE `movies` (
  `id` bigint UNSIGNED NOT NULL,
  `name_movie` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `image` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `type_id` bigint UNSIGNED NOT NULL,
  `duration` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `nation` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `director` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `performer` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `show` date NOT NULL,
  `content` varchar(1000) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `link_trailler` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `category_id` bigint UNSIGNED NOT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `movies`
--

INSERT INTO `movies` (`id`, `name_movie`, `image`, `type_id`, `duration`, `nation`, `director`, `performer`, `show`, `content`, `link_trailler`, `category_id`, `deleted_at`, `created_at`, `updated_at`) VALUES
(1, 'NGÀY XƯA CÓ MỘT CHUYỆN TÌNH', 'images/oirpoF5CV2okVIBUyCeurQK6yqghrX3bcjjr42bK.webp', 1, '135 phút', 'Viet Nam', 'Trịnh Đình Lê Minh', 'Avin Lu, Ngọc Xuân, Đỗ Nhật Hoàng, Thanh Tú, Bảo Tiên, Hạo Khang', '2024-10-31', 'Ngày Xưa Có Một Chuyện Tình xoay quanh câu chuyện tình bạn, tình yêu giữa hai chàng trai và một cô gái từ thuở ấu thơ cho đến khi trưởng thành, phải đối mặt với những thử thách của số phận. Trải dài trong 4 giai đoạn từ năm 1987 - 2000, ba người bạn cùng tuổi - Vinh, Miền, Phúc đã cùng yêu, cùng bỡ ngỡ bước vào đời, va vấp và vượt qua.', 'https://youtu.be/IcpKkCzvcU4?si=gtrJxkEn-1FJCEzg', 5, NULL, '2024-10-30 01:35:10', '2024-10-30 01:38:06'),
(2, 'THẦN DƯỢC', 'images/ZD0ecDHxGykJBwqk5HNZ4tf0mIgtoqRA66ROHBK0.webp', 1, '139 phút', 'Mỹ', 'Coralie Fargeat', 'Demi Moore, Margaret Qualley, Dennis Quaid', '2024-11-03', 'Elizabeth Sparkle, minh tinh sở hữu vẻ đẹp hút hồn cùng với tài năng được mến mộ nồng nhiệt. Khi đã trải qua thời kỳ đỉnh cao, nhan sắc dần tàn phai, cô tìm đến những kẻ buôn lậu để mua một loại thuốc bí hiểm nhằm “thay da đổi vận\", tạo ra một phiên bản trẻ trung hơn của chính mình.', 'https://youtu.be/zBIDSp17AOo', 4, NULL, '2024-10-30 01:45:00', '2024-10-30 01:45:00'),
(3, 'VENOM: THE LAST DANCE', 'images/iVRN4vrRmtDmQU8sKeeUfQCEaitXQmaNdruR1Umw.webp', 1, '100 phút', 'Mỹ', 'Kelly Marcel', 'Tom Hardy, Juno Temple, Chiwetel Ejiofor, Clark Backo, Stephen Graham', '2024-11-07', 'Tom Hardy sẽ tái xuất trong bom tấn Venom: The Last Dance (Tựa Việt: Venom: Kèo Cuối) và phải đối mặt với kẻ thù lớn nhất từ trước đến nay - toàn bộ chủng tộc Symbiote Venom: Kèo cuối - Dự kiến khởi chiếu 25.10.2024', 'https://youtu.be/IVbRJZyxdMQ', 2, NULL, '2024-10-30 01:46:55', '2024-10-30 01:46:55'),
(4, 'TRÒ CHƠI NHÂN TÍNH', 'images/56m48kDP2oG6ZJ7wTraHfyXZbShMyGovD4W9vfFm.webp', 1, '125 phút', 'Thái Lan', 'WILLIAM AHERNE (FedZ KiiD)', 'Worranit Thawornwong; Wachirawit Phaisankulwong; Supachaya Sukbaiyen; Rapeepong Thapsuwan; Natnicha Lueanganan; Ngoc Lan Vy; Chalongrat Nob Samrong; Naphat Na Ranong', '2024-11-16', 'Lễ hội trường bỗng biến thành sân chơi \"khát máu\" của thế lực bí ẩn buộc nhóm học sinh phải tham gia vào những trò chơi kỳ dị và tàn bạo. Không có ngoại lệ nào dành cho kẻ yếu, thua một trò chơi mất cả mạng người. Liệu trong một thế giới tàn khốc sẽ luôn tồn tại một lối thoát hay đó chỉ là niềm tin \"ảo\" của những trái tim đang hoảng loạn trước cái chết?', 'https://youtu.be/DQo5G0YCxW0', 1, NULL, '2024-10-30 01:49:54', '2024-10-30 01:49:54'),
(5, 'ÁC QUỶ TRUY HỒN', 'images/5MSF8bQuOTN2u8ODklZti2EHoi9Z1sPmSybAP9pV.webp', 1, '107 phút', 'Indonesia', 'Sidharta Tara', 'Indah Permatasari, Claresta Taufan Kusumarina, José Rizal Manua,...', '2024-11-17', 'Sau một tai nạn, cô gái trẻ Retno mất mẹ, trong khi cha cô rơi vào tình trạng hôn mê. Cô cùng chị gái mình quyết định đưa cha về chăm sóc, nhưng quãng thời gian này trở thành địa ngục với cả gia đình khi những sự kiện ghê rợn liên tiếp xảy ra. Cùng lúc đó, sự xuất hiện của người con trai ngoài giá thú của cha cô châm ngòi cho cuộc chiến tranh giành khoản thừa kế, đồng thời mở ra những bí ẩn kinh hoàng trong quá khứ.', 'https://youtu.be/_lRQp0B8Szc', 4, NULL, '2024-10-30 01:52:00', '2024-10-30 01:52:00'),
(6, 'BIỆT ĐỘI HOT GIRL', 'images/5DhfsfrNhXc6PHngRHc1jLVEGQ4iP7djS9xRXA5I.webp', 1, '95 phút', 'Viet Nam', 'Vĩnh Khương', 'NSND Hoàng Dũng, Mr Kim, Yu CHU, Sam Sony, Bảo Uyên, Tuệ Minh, Thuỳ Trang, Ái Vân, Anna Linh,', '2024-11-07', 'Câu chuyện của 6 cô gái đến từ 3 quốc gia Châu Á. Họ không biết mình là ai? Đến từ quốc gia gia nào? HẮC VÔ ĐẠO một tay trùm mafia buôn ma túy, buôn người giải thoát cứu sống 6 cô gái từ lúc nhỏ và nuôi dạy các cô gái trên hoang đảo. Các cô gái trưởng thành, khao khát được yêu nhưng cuộc sống và số phận buộc họ phải thực hiện những phi vụ mạo hiểm, kể cả giết người để bảo vệ những trẻ em vô tội.', 'https://youtu.be/GCxopxk_BwY', 5, NULL, '2024-10-30 01:53:36', '2024-10-30 01:53:36'),
(7, 'ELLI VÀ BÍ ẨN CHIẾC TÀU MA-K - Lồng tiếng', 'images/o6MNYt8WPnPAqY25uv4atoJpKDFKFKLMOZwUPv4e.webp', 1, '86 phút', 'Đức', 'Piet De Rycker, Jesper Møller, Jens Møller', 'Dalia Schmidt-Foß, Oliver Kalkofe', '2024-10-31', 'Một cuộc truy đuổi của những chiếc drone bí ẩn đã bị bắt đi người chú thân thiết của hồn ma Elli bé bỏng. Quyết định rời khỏi căn biệt thự ma ám để giải cứu người chú đáng thương khiến cô bé dấn thân vào một chuyến phiêu lưu đầy gay go với những thách thức, cũng chính là cơ hội cô bé gặp gỡ những người bạn quái vật thú vị và khám phá được năng lực bí ẩn của chính mình. Liệu Elli có chiến thắng cuộc truy đuổi căng thẳng và đoàn tụ với người chú của mình? Câu trả lời sẽ có trong bộ phim “Elli And The Ghostly Ghost Train / Elli và Bí Ẩn Chiếc Tàu Ma”', 'https://youtu.be/_lRQp0B8Szc', 3, NULL, '2024-10-30 01:55:53', '2024-10-30 01:55:53'),
(8, 'CÔ DÂU HÀO MÔN- T18', 'images/TkcljQ5hbDMFXB0z1HOhTQ39vo5CsiX9oawmOQ2J.webp', 1, '114 phút', 'Viet Nam', 'Vũ Ngọc Đãng', 'Uyển Ân, Samuel An, Thu Trang, Lê Giang, Kiều Minh Tuấn, NSND Hồng Vân,.', '2024-10-17', 'Phim lấy đề tài làm dâu hào môn và khai thác câu chuyện môn đăng hộ đối, lối sống và quy tắc của giới thượng lưu dưới góc nhìn hài hước và châm biếm.', 'https://youtu.be/9gmv3hOp1pk', 5, NULL, '2024-10-30 02:00:12', '2024-10-30 02:00:12'),
(9, 'TEE YOD: QUỶ ĂN TẠNG PHẦN 2-T18', 'images/dHQ0WwR9mxtC6P0hTiAFUr8KKc5H9P1aQYURLNaX.webp', 1, '111 phút', 'Thái Lan', 'Taweewat Wantha', 'Nadech Kugimiya, Denise Jelilcha Kapaun, Mim Rattawadee Wongthong, Junior Kajbhunditt Jaidee, Friend Peerakrit Phacharaboonyakiat, Nutthatcha Jessica Padovan', '2024-11-09', 'Ba năm sau cái chết của Yam, Yak vẫn tiếp tục săn lùng linh hồn bí ẩn mặc áo choàng đen. Gặp một cô gái có triệu chứng giống Yam, Yak phát hiện ra người bảo vệ linh hồn, pháp sư ẩn dật Puang, sống trong một khu rừng đầy nguy hiểm. Giữa những phép thuật ma quỷ và những sinh vật nguy hiểm. Khi họ đuổi theo linh hồn mặc áo choàng đen, tiếng kêu đầy ám ảnh của Tee Yod sắp quay trở lại một lần nữa...', 'https://youtu.be/vHONH3M9RYU', 1, NULL, '2024-10-30 02:01:48', '2024-10-30 02:01:48'),
(10, 'ROBOT HOANG DÃ-P - Lồng tiếng', 'images/la8QcBf0QB8S9qZGLYJGoOG5m0B2BXsZo1lPkNSQ.webp', 1, '95 phút', 'Mỹ', 'Chris Sanders', 'Lupita Nyong\'o, Pedro Pascal, Catherine O’hara, Bill Nighy,...', '2024-11-12', 'Cuộc phiêu lưu hoành tráng theo chân hành trình của một robot — đơn vị ROZZUM 7134, gọi tắt là Roz. Roz vô tình dạt vào hoang đảo sau một sự cố và nơi đây trở thành địa điểm sống mới của cô. Tại đây, Roz kết thân và nhận nuôi một chú ngỗng con, đặt tên là Brightbill. Roz và Brightbill dần dần thân thiết với các bạn thú trên đảo, song sau đó phải chống chọi, bảo vệ “nhà mới” trước sự xâm lăng của nhà máy từng sản xuất ra Roz.', 'cxzcz', 2, NULL, '2024-10-30 02:03:39', '2024-10-30 02:03:39'),
(11, 'TRANSFORMERS MỘT-T13 ( Phụ đề )', 'images/oaEOYdA51gEhsmrVyYbIqz89R7ytXDEkgjPm1WjO.webp', 1, '104 phút', 'Mỹ', 'Josh Cooley', 'Chris Hemsworth; Brian Tyree Henry; Scarlett Johansson', '2024-11-17', 'Câu chuyện về nguồn gốc chưa từng được hé lộ của Optimus Prime và Megatron. Hai nhân vật được biết đến như những kẻ thù truyền kiếp, nhưng cũng từng là những người anh em gắn bó, đã thay đổi vận mệnh của Cybertron mãi mãi.', 'https://youtu.be/ad5_EY2P6Vg', 1, NULL, '2024-10-30 02:05:32', '2024-10-30 02:05:32'),
(12, 'ĐỐ ANH CÒNG ĐƯỢC TÔI - T18', 'images/4rzId3XFHzZJoTXufkHfuDuvXj5nky3nA3CdGW7r.webp', 1, '115 phút', 'Hàn Quốc', 'RYOO Seung-wan', 'HWANG Jung-min, JUNG Hae-in', '2024-11-13', 'Các thanh tra kỳ cựu nổi tiếng đã hoạt động trở lại! Thám tử Seo Do-cheol (HWANG Jung-min) và đội điều tra tội phạm nguy hiểm của anh không ngừng truy lùng tội phạm cả ngày lẫn đêm, đặt cược cả cuộc sống cá nhân của họ. Nhận một vụ án sát hại một giáo sư, đội thanh tra nhận ra những mối liên hệ với các vụ án trong quá khứ và nảy sinh những nghi ngờ về một kẻ giết người hàng loạt. Điều này đã khiến cả nước rơi vào tình trạng hỗn loạn. Khi đội thanh tra đi sâu vào cuộc điều tra, kẻ sát nhân đã chế nhạo họ bằng cách công khai tung ra một đoạn giới thiệu trực tuyến, chỉ ra nạn nhân tiếp theo và làm gia tăng sự hỗn loạn. Để giải quyết mối đe dọa ngày càng leo thang, nhóm đã kết nạp một sĩ quan tân binh trẻ Park Sun-woo (JUNG Hae-in), dẫn đến những khúc mắc và đầy rẫy bất ngờ trong vụ án.', 'https://youtu.be/JgUWVooKSrA', 1, NULL, '2024-10-30 02:07:12', '2024-10-30 02:07:12'),
(13, 'MỘ ĐOM ĐÓM-K ( Phụ đề )', 'images/ArRAoOTs9AhcblFmIapTtKjMOouA9wBXgTmdlrAV.webp', 1, '89 phút', 'Nhật bản', 'Takahata Isao', 'Tatsumi Tsutomu, Shiraishi Ayano, Shinohara Yoshiko  Khởi chiếu: 04/10/2024', '2024-11-08', 'Hai anh em Seita và Setsuko mất mẹ sau cuộc thả bom dữ dội của không quân Mỹ. Cả hai phải vật lộn để tồn tại ở Nhật Bản hậu Thế chiến II. Nhưng xã hội khắc nghiệt và chúng vật lộn tìm kiếm thức ăn cũng như thoát khỏi những khó khăn giữa chiến tranh.', 'https://youtu.be/IcpKkCzvcU4?si=gtrJxkEn-1FJCEzg', 3, NULL, '2024-10-30 02:15:51', '2024-10-30 02:15:51');

-- --------------------------------------------------------

--
-- Table structure for table `password_reset_tokens`
--

CREATE TABLE `password_reset_tokens` (
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `personal_access_tokens`
--

CREATE TABLE `personal_access_tokens` (
  `id` bigint UNSIGNED NOT NULL,
  `tokenable_type` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `tokenable_id` bigint UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(64) COLLATE utf8mb4_unicode_ci NOT NULL,
  `abilities` text COLLATE utf8mb4_unicode_ci,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `expires_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `roles`
--

CREATE TABLE `roles` (
  `role_id` bigint UNSIGNED NOT NULL,
  `role` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `rooms`
--

CREATE TABLE `rooms` (
  `id` bigint UNSIGNED NOT NULL,
  `room_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `area_id` bigint UNSIGNED NOT NULL,
  `total_seat` int NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `seats`
--

CREATE TABLE `seats` (
  `id` bigint UNSIGNED NOT NULL,
  `seat_type_id` bigint UNSIGNED NOT NULL,
  `seat_number` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `room_id` bigint UNSIGNED NOT NULL,
  `seat_status` tinyint(1) NOT NULL DEFAULT '1',
  `deleted_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `seat_types`
--

CREATE TABLE `seat_types` (
  `id` bigint UNSIGNED NOT NULL,
  `seat_type_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `seat_price` decimal(8,2) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `seat_types`
--

INSERT INTO `seat_types` (`id`, `seat_type_name`, `seat_price`, `created_at`, `updated_at`) VALUES
(1, 'Ghế vip', '250000.00', '2024-10-30 02:09:29', '2024-10-30 02:10:49'),
(2, 'Ghế thường', '150000.00', '2024-10-30 02:09:53', '2024-10-30 02:10:37'),
(3, 'Ghế đôi', '300000.00', '2024-10-30 02:10:10', '2024-10-30 02:10:57');

-- --------------------------------------------------------

--
-- Table structure for table `showtimes`
--

CREATE TABLE `showtimes` (
  `id` bigint UNSIGNED NOT NULL,
  `movie_id` bigint UNSIGNED NOT NULL,
  `room_id` bigint UNSIGNED NOT NULL,
  `showtime_date` date NOT NULL,
  `start_time` time NOT NULL,
  `end_time` time NOT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `types`
--

CREATE TABLE `types` (
  `id` bigint UNSIGNED NOT NULL,
  `name_type` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `types`
--

INSERT INTO `types` (`id`, `name_type`, `deleted_at`, `created_at`, `updated_at`) VALUES
(1, '2D', NULL, NULL, NULL),
(2, '3D', NULL, NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` bigint UNSIGNED NOT NULL,
  `fullname` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `username` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `phone` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `gender` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `role` enum('admin','user') COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'user',
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `fullname`, `username`, `email`, `email_verified_at`, `password`, `phone`, `gender`, `role`, `remember_token`, `created_at`, `updated_at`) VALUES
(1, 'abc', 'cuong', 'abc@gmail.com', NULL, '12345678', '0483208497', 'cajkshcjk', 'user', NULL, NULL, NULL),
(2, 'admin', 'admin', 'admin@gmail.com', NULL, '12345678', '0937823648', 'xzcz', 'admin', NULL, NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `vouchers`
--

CREATE TABLE `vouchers` (
  `id` bigint UNSIGNED NOT NULL,
  `code` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `discount_amount` decimal(10,2) NOT NULL,
  `expiry_date` date NOT NULL,
  `is_active` tinyint(1) NOT NULL DEFAULT '1',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `areas`
--
ALTER TABLE `areas`
  ADD PRIMARY KEY (`area_id`);

--
-- Indexes for table `banners`
--
ALTER TABLE `banners`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `combo_foods`
--
ALTER TABLE `combo_foods`
  ADD PRIMARY KEY (`combofood_id`);

--
-- Indexes for table `comments`
--
ALTER TABLE `comments`
  ADD PRIMARY KEY (`id`),
  ADD KEY `comments_user_id_foreign` (`user_id`),
  ADD KEY `comments_movie_id_foreign` (`movie_id`);

--
-- Indexes for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`);

--
-- Indexes for table `ho_tro`
--
ALTER TABLE `ho_tro`
  ADD PRIMARY KEY (`id`),
  ADD KEY `ho_tro_user_id_foreign` (`user_id`);

--
-- Indexes for table `khuyen_mais`
--
ALTER TABLE `khuyen_mais`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `movies`
--
ALTER TABLE `movies`
  ADD PRIMARY KEY (`id`),
  ADD KEY `movies_type_id_foreign` (`type_id`),
  ADD KEY `movies_category_id_foreign` (`category_id`);

--
-- Indexes for table `password_reset_tokens`
--
ALTER TABLE `password_reset_tokens`
  ADD PRIMARY KEY (`email`);

--
-- Indexes for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `personal_access_tokens_token_unique` (`token`),
  ADD KEY `personal_access_tokens_tokenable_type_tokenable_id_index` (`tokenable_type`,`tokenable_id`);

--
-- Indexes for table `roles`
--
ALTER TABLE `roles`
  ADD PRIMARY KEY (`role_id`),
  ADD UNIQUE KEY `roles_role_unique` (`role`);

--
-- Indexes for table `rooms`
--
ALTER TABLE `rooms`
  ADD PRIMARY KEY (`id`),
  ADD KEY `rooms_area_id_foreign` (`area_id`);

--
-- Indexes for table `seats`
--
ALTER TABLE `seats`
  ADD PRIMARY KEY (`id`),
  ADD KEY `seats_seat_type_id_foreign` (`seat_type_id`),
  ADD KEY `seats_room_id_foreign` (`room_id`);

--
-- Indexes for table `seat_types`
--
ALTER TABLE `seat_types`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `showtimes`
--
ALTER TABLE `showtimes`
  ADD PRIMARY KEY (`id`),
  ADD KEY `showtimes_movie_id_foreign` (`movie_id`),
  ADD KEY `showtimes_room_id_foreign` (`room_id`);

--
-- Indexes for table `types`
--
ALTER TABLE `types`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_username_unique` (`username`),
  ADD UNIQUE KEY `users_email_unique` (`email`);

--
-- Indexes for table `vouchers`
--
ALTER TABLE `vouchers`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `areas`
--
ALTER TABLE `areas`
  MODIFY `area_id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `banners`
--
ALTER TABLE `banners`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `categories`
--
ALTER TABLE `categories`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `combo_foods`
--
ALTER TABLE `combo_foods`
  MODIFY `combofood_id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `comments`
--
ALTER TABLE `comments`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `ho_tro`
--
ALTER TABLE `ho_tro`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `khuyen_mais`
--
ALTER TABLE `khuyen_mais`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=39;

--
-- AUTO_INCREMENT for table `movies`
--
ALTER TABLE `movies`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `roles`
--
ALTER TABLE `roles`
  MODIFY `role_id` bigint UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `rooms`
--
ALTER TABLE `rooms`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `seats`
--
ALTER TABLE `seats`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `seat_types`
--
ALTER TABLE `seat_types`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `showtimes`
--
ALTER TABLE `showtimes`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `types`
--
ALTER TABLE `types`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `vouchers`
--
ALTER TABLE `vouchers`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `comments`
--
ALTER TABLE `comments`
  ADD CONSTRAINT `comments_movie_id_foreign` FOREIGN KEY (`movie_id`) REFERENCES `movies` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `comments_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `ho_tro`
--
ALTER TABLE `ho_tro`
  ADD CONSTRAINT `ho_tro_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `movies`
--
ALTER TABLE `movies`
  ADD CONSTRAINT `movies_category_id_foreign` FOREIGN KEY (`category_id`) REFERENCES `categories` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `movies_type_id_foreign` FOREIGN KEY (`type_id`) REFERENCES `types` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `rooms`
--
ALTER TABLE `rooms`
  ADD CONSTRAINT `rooms_area_id_foreign` FOREIGN KEY (`area_id`) REFERENCES `areas` (`area_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `seats`
--
ALTER TABLE `seats`
  ADD CONSTRAINT `seats_room_id_foreign` FOREIGN KEY (`room_id`) REFERENCES `rooms` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `seats_seat_type_id_foreign` FOREIGN KEY (`seat_type_id`) REFERENCES `seat_types` (`id`);

--
-- Constraints for table `showtimes`
--
ALTER TABLE `showtimes`
  ADD CONSTRAINT `showtimes_movie_id_foreign` FOREIGN KEY (`movie_id`) REFERENCES `movies` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `showtimes_room_id_foreign` FOREIGN KEY (`room_id`) REFERENCES `rooms` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
