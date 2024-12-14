-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Dec 03, 2024 at 04:28 PM
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
(1, 'đa', 'đá', NULL, NULL, NULL),
(2, 'dsad', 'dsa', NULL, NULL, NULL),
(3, 'dá', 'dá', NULL, NULL, NULL),
(4, 'dá', 'da', NULL, NULL, NULL),
(5, 'sa', 'dfga', NULL, NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `bases`
--

CREATE TABLE `bases` (
  `id` bigint UNSIGNED NOT NULL,
  `base_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `bases`
--

INSERT INTO `bases` (`id`, `base_name`, `created_at`, `updated_at`, `deleted_at`) VALUES
(1, 'cơ sở 1', NULL, NULL, NULL),
(2, 'cơ sở 1', NULL, NULL, NULL);

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
(1, 'Hoạt hình', NULL, NULL, NULL),
(2, 'kinh dị', NULL, NULL, NULL),
(3, 'Tình cảm', NULL, NULL, NULL),
(4, 'Hài', NULL, NULL, NULL),
(5, 'Hành động', NULL, NULL, NULL),
(6, 'Khoa học viễn tưởng', NULL, NULL, NULL);

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
(1, 'Nước cô ca + Bỏng', '100000.00', NULL, NULL, NULL),
(2, 'khoai tây + Bảng + Nước ép', '150000.00', NULL, NULL, NULL);

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
-- Table structure for table `invoices`
--

CREATE TABLE `invoices` (
  `id` bigint UNSIGNED NOT NULL,
  `time_date` date NOT NULL,
  `total_price` int NOT NULL,
  `showtime_id` bigint UNSIGNED NOT NULL,
  `user_id` bigint UNSIGNED NOT NULL,
  `combofood_id` bigint UNSIGNED NOT NULL,
  `voucher_id` bigint UNSIGNED NOT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `invoice_details`
--

CREATE TABLE `invoice_details` (
  `id` bigint UNSIGNED NOT NULL,
  `invoice_id` bigint UNSIGNED NOT NULL,
  `seat_id` bigint UNSIGNED NOT NULL,
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

--
-- Dumping data for table `khuyen_mais`
--

INSERT INTO `khuyen_mais` (`id`, `title`, `content`, `image`, `time_date`, `created_at`, `updated_at`) VALUES
(1, 'RA MẮT BỎNG MIX VỊ - GIÁ KHÔNG ĐỔI', 'RA MẮT BỎNG MIX VỊ - GIÁ KHÔNG ĐỔI\r\n\r\n\r\nKể từ tháng 08/2024, Trung tâm Chiếu phim Quốc gia chính thức ra mắt BỎNG MIX VỊ \r\n\r\nKhán giả thưởng thức cùng lúc 2 vị bỏng: Phô Mai béo ngậy cùng Caramen ngọt ngào với mức giá không đổi chỉ 60.000đ/túi bỏng\r\n\r\nĐến Trung tâm Chiếu phim Quốc gia xem phim và thưởng thức ngay combo hay ho này nha!', 'dasd', '2024-12-03 14:52:29', NULL, NULL),
(2, 'SIÊU ƯU ĐÃI ĐỒNG GIÁ BỎNG, NƯỚC NGÀY THỨ 3, THỨ 4', 'Chính thức kể từ tháng 8/2024, NCC tặng bạn ưu đãi bỏng, nước hấp dẫn\r\n\r\n\r\nThứ 3 - Tuần đầu tiên của tháng\r\nĂn bắp siêu rẻ đồng giá 25.000đ/bỏng ngọt/caramel/phô mai/mix 2 vị\r\n\r\n\r\n\r\nThứ 4 - Tuần thứ hai của tháng\r\nUống nước thả ga đồng giá 15.000đ/nước Pepsi/7up/Mirinda/Lipton\r\n\r\n\r\n\r\nThứ 2 - Cuối tháng\r\nXem phim xả láng đồng giá 50.000đ/vé 2D mọi loại ghế và suất chiếu\r\n\r\n\r\n\r\nĐến xem phim tại Trung tâm Chiếu phim Quốc gia và nhận ưu đãi thôi nào cả nhà ơi !!!!\r\n\r\n\r\n\r\n(*) Ưu đãi không áp dụng các ngày lễ, Tết ', 'dsad', '2024-12-03 14:53:07', NULL, NULL),
(3, 'ƯU ĐÃI ĐẶC BIỆT THỨ 2 - THỨ 3 - THỨ 4 HÀNG THÁNG', 'Nhấn vào link sự kiện trên Fanpage Trung tâm Chiếu Phim Quốc gia dưới đây và chọn nút \"Sẽ tham gia\" hoặc \"Quan tâm\" ngay để nhận thông tin ưu đãi ĐẶC BIỆT khi sự kiện bắt đầu nha các bạn!\r\n\r\n\r\n\r\nhttps://www.facebook.com/events/893233799302232/?ref=newsfeed', 'dasd', '2024-12-03 14:53:33', NULL, NULL),
(4, 'BẢNG GIÁ BỎNG, NƯỚC MỚI NHẤT 2024', 'Trung tâm Chiếu phim Quốc gia xin gửi tới quý vị khán giả menu bỏng, nước mới nhất sau đây:\r\n\r\n﻿', 'dsa', '2024-12-03 14:54:05', NULL, NULL),
(5, 'THẺ U22 ƯU ĐÃI GIÁ VÉ CHO HỌC SINH, SINH VIÊN 55.000Đ/VÉ 2D', 'Học sinh, sinh viên từ 22 tuổi trở xuống sẽ tiếp tục được ưu đãi 55.000đ/Vé 2D, áp dụng cho tất cả các suất chiếu từ Thứ 2 đến Thứ 6.\r\n\r\n﻿\r\n\r\n1. Điều kiện áp dụng khi mua vé:\r\n\r\n- Áp dụng cho Học sinh, sinh viên từ 22 tuổi trở xuống.\r\n\r\n- Chỉ áp dụng khi mua vé trực tiếp tại quầy vé và không áp dụng cho ghế đôi.\r\n\r\n- Mỗi thẻ U22 chỉ được mua 01 vé xem phim/ngày.\r\n\r\n- Khi mua vé vui lòng xuất trình thẻ U22 kèm thẻ HSSV.\r\n\r\n2. Hướng dẫn đăng ký thẻ U22: \r\n\r\n- Khách hàng mang theo thẻ HSSV và căn cước công dân để đăng kí làm thẻ U22 tại quầy thông tin (Ưu đãi được áp dụng sau khi thẻ được kích hoạt; Thẻ được kích hoạt trong vòng 24h - 48h kể từ khi đăng ký).\r\n\r\n + Trường hợp khách hàng là sinh viên chưa có thẻ sinh viên thì sử dụng căn cước công dân + thẻ học sinh.\r\n\r\n + Trường hợp khách hàng là học sinh chưa có thẻ học sinh thì sử dụng căn cước công dân.\r\n\r\n + Trường hợp khách hàng là trẻ em chưa có thẻ học sinh và chưa có căn cước công dân thì bắt buộc có sự hiện diện của người làm thẻ (chủ thẻ).\r\n\r\n3. Lưu ý: \r\n\r\n- Học sinh, sinh viên chỉ được hưởng ưu đãi đồng giá 55.000đ/vé 2D khi đăng ký thẻ U22.\r\n\r\n- Không áp dụng vào các ngày Lễ, Tết (ngày bù Lễ) theo quy định của nhà nước; suất chiếu sớm và suất chiếu đặc biệt.\r\n\r\n\r\n\r\n  Mua vé ngay tại http://chieuphimquocgia.com.vn/PlanScreenings/Sessiontimes', 'dsad', '2024-12-03 14:55:26', NULL, NULL);

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
(1, '2014_10_12_100000_create_password_reset_tokens_table', 1),
(2, '2019_08_19_000000_create_failed_jobs_table', 1),
(3, '2019_12_14_000001_create_personal_access_tokens_table', 1),
(4, '2024_10_12_104920_create_users_table', 1),
(5, '2024_10_15_092414_create_categories_table', 1),
(6, '2024_10_15_094057_create_types_table', 1),
(7, '2024_10_16_124255_create_bases_table', 1),
(8, '2024_10_16_162556_create_seat_types_table', 1),
(9, '2024_10_18_124245_create_rooms_table', 1),
(10, '2024_10_19_094152_create_movies_table', 1),
(11, '2024_10_19_162624_create_seats_table', 1),
(12, '2024_10_20_000002_create_showtimes_table', 1),
(13, '2024_10_27_005605_create_role_table', 1),
(14, '2024_10_27_094510_create_banners_table', 1),
(15, '2024_10_27_104725_create_comments_table', 1),
(16, '2024_10_27_124100_create_khuyen_mais_table', 1),
(17, '2024_10_27_133637_create_vouchers_table', 1),
(18, '2024_10_27_162339_create_combo_foods_table', 1),
(19, '2024_10_27_162432_create_ho_tro_table', 1),
(20, '2024_10_30_153838_create_tin_tucs_table', 1),
(21, '2024_11_27_182902_update_users_table_change_role_to_role_id', 1),
(22, '2024_11_27_183549_add_role_id_to_users_table', 1),
(23, '2024_11_28_051215_create_status_seats_table', 1),
(24, '2024_11_28_062202_create_invoices_table', 1),
(25, '2024_11_28_062246_create_invoice_details_table', 1);

-- --------------------------------------------------------

--
-- Table structure for table `movies`
--

CREATE TABLE `movies` (
  `id` bigint UNSIGNED NOT NULL,
  `name_movie` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `image` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `type_id` bigint UNSIGNED NOT NULL,
  `duration` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `nation` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `director` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `performer` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `show` date NOT NULL,
  `content` text COLLATE utf8mb4_unicode_ci NOT NULL,
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
(1, 'VENOM: THE LAST DANCE-T13', 'dad', 1, '100 phút', 'Mỹ', 'Kelly Marcel', 'Tom Hardy, Juno Temple, Chiwetel Ejiofor, Clark Backo, Stephen Graham', '2024-11-15', 'Tom Hardy sẽ tái xuất trong bom tấn Venom: The Last Dance (Tựa Việt: Venom: Kèo Cuối) và phải đối mặt với kẻ thù lớn nhất từ trước đến nay - toàn bộ chủng tộc Symbiote Venom: Kèo cuối - Dự kiến khởi chiếu 25.10.2024', 'https://youtu.be/IVbRJZyxdMQ?si=cHB75FlrwnalG-1a', 6, NULL, NULL, NULL),
(2, 'NGÀY XƯA CÓ MỘT CHUYỆN TÌNH - T16', 'dada', 1, '135 phút', 'Viet Nam', 'Trịnh Đình Lê Minh', 'Avin Lu, Ngọc Xuân, Đỗ Nhật Hoàng, Thanh Tú, Bảo Tiên, Hạo Khang', '2024-11-15', 'Ngày Xưa Có Một Chuyện Tình xoay quanh câu chuyện tình bạn, tình yêu giữa hai chàng trai và một cô gái từ thuở ấu thơ cho đến khi trưởng thành, phải đối mặt với những thử thách của số phận. Trải dài trong 4 giai đoạn từ năm 1987 - 2000, ba người bạn cùng tuổi - Vinh, Miền, Phúc đã cùng yêu, cùng bỡ ngỡ bước vào đời, va vấp và vượt qua.', 'https://youtu.be/IcpKkCzvcU4?si=meoK9jZ9fhOEziSH', 3, NULL, NULL, NULL),
(3, 'MẬT MÃ ĐỎ-K - Phụ đề', 'dasdsa', 1, '120 phút', 'Mỹ', 'Jake Kasdan', 'Dwayne Johnson; Chris Evans; Lucy Liu', '2024-12-04', 'Sau khi Ông già Noel (mật danh: Red One) bị bắt cóc, Trưởng An ninh Bắc Cực (Dwayne Johnson) phải hợp tác với thợ săn tiền thưởng khét tiếng nhất thế giới (Chris Evans) trong một nhiệm vụ kịch tính xuyên lục địa để giải cứu Giáng Sinh.', 'https://youtu.be/2T_mKyH17mY?si=MbOM2jC7RyjWaxYm', 5, NULL, NULL, NULL),
(4, 'CƯỜI XUYÊN BIÊN GIỚI - T13 - Phụ đề\r\n', 'ffdsaf', 1, '110 phút', 'Hàn Quốc', 'KIM Chang-ju', 'Ryu Seung-ryong , Jin Sun-kyu, Igor Rafael P EDROSO, Luan B RUM DE ABREU E LIMA, JB João Batista GOMES DE O LIVEIRA, Yeom Hye-ran và Go Kyoung- pyo, Lee Soon-won', '2024-12-09', 'Cười Xuyên Biên Giới kể về hành trình của Jin-bong (Ryu Seung-ryong) - cựu vô địch bắn cung quốc gia, sau khi nghỉ hưu, anh đã trở thành một nhân viên văn phòng bình thường. Đứng trước nguy cơ bị sa thải, Jin-bong phải nhận một nhiệm vụ bất khả thi là bay đến nửa kia của trái đất trong nỗ lực tuyệt vọng để sinh tồn. Sống sót sau một sự cố đe doạ tính mạng, Jin-bong đã “hạ cánh” xuống khu rừng Amazon, nơi anh gặp bộ ba thổ dân bản địa có kỹ năng bắn cung thượng thừa: Sika, Eeba và Walbu. Tin rằng đã tìm ra cách để tự cứu mình, Jin-bong hợp tác với phiên dịch ngáo ngơ Bbang-sik (Jin Sun-kyu) và đưa ba chiến thần cung thủ đến Hàn Quốc cho một nhiệm vụ táo bạo.', 'https://youtu.be/2T_mKyH17mY?si=MbOM2jC7RyjWaxYm', 4, NULL, NULL, NULL),
(7, 'WICKED-K - Phụ đề', 'dada', 1, '161 phút', 'Mỹ', 'Jon M. Chu', 'Cynthia Erivo; Ariana Grande; Jonathan Bailey', '2024-12-09', 'Wicked, câu chuyện chưa kể về các phù thủy xứ Oz, có sự tham gia của nữ viên viên Cynthia Erivo người từng đoạt giải Emmy, Grammy và Tony trong vai Elphaba, một phù thủy trẻ với làn da xanh đặc biệt, người vẫn chưa khám phá ra sức mạnh tiềm ẩn bên trong mình và “công chúa nhạc pop” Ariana Grande trong vai Glinda, một phù thủy trẻ nổi tiếng, được tô điểm bởi đặc quyền và tham vọng, người vẫn chưa khám phá ra trái tim thực sự của mình.', 'https://youtu.be/Fliq31HOS1I?si=7I7gvVCKRtV7BCBl', 3, NULL, NULL, NULL),
(8, 'LINH MIÊU-T18', 'dad', 1, '109 phút', 'Viet Nam', 'Lưu Thành Luân', 'Hồng Đào, Thiên An, Thuỳ Tiên, Văn Anh, Samuel An,...', '2024-12-09', 'Linh Miêu: Quỷ Nhập Tràng lấy cảm hứng từ truyền thuyết dân gian về “quỷ nhập tràng” để xây dựng cốt truyện. Phim lồng ghép những nét văn hóa đặc trưng của Huế như nghệ thuật khảm sành - một văn hóa đặc sắc của thời nhà Nguyễn, đề cập đến các vấn đề về giai cấp và quan điểm trọng nam khinh nữ. Đặc biệt, hình ảnh rước kiệu thây ma và những hình nhân giấy không chỉ biểu trưng cho tai ương hay điềm dữ mà còn là hiện thân của nghiệp quả.', 'https://youtu.be/4oxoPMxBO6s?si=TW4r1H9UCyjmTVUn', 2, NULL, NULL, NULL);

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

--
-- Dumping data for table `roles`
--

INSERT INTO `roles` (`role_id`, `role`, `description`, `created_at`, `updated_at`, `deleted_at`) VALUES
(1, 'Admin', NULL, NULL, NULL, NULL),
(2, 'User', NULL, NULL, '2024-12-01 02:26:12', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `rooms`
--

CREATE TABLE `rooms` (
  `id` bigint UNSIGNED NOT NULL,
  `room_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `bases_id` bigint UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `rooms`
--

INSERT INTO `rooms` (`id`, `room_name`, `bases_id`, `created_at`, `updated_at`, `deleted_at`) VALUES
(1, 'Phòng 01', 1, NULL, NULL, NULL),
(2, 'Phòng 02', 1, NULL, NULL, NULL),
(3, 'Phòng 03', 1, NULL, NULL, NULL),
(4, 'Phòng 04', 1, NULL, NULL, NULL),
(5, 'Phòng 05', 1, NULL, NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `seats`
--

CREATE TABLE `seats` (
  `id` bigint UNSIGNED NOT NULL,
  `seat_type_id` bigint UNSIGNED NOT NULL,
  `seat_number` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `room_id` bigint UNSIGNED NOT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `seats`
--

INSERT INTO `seats` (`id`, `seat_type_id`, `seat_number`, `room_id`, `deleted_at`, `created_at`, `updated_at`) VALUES
(1, 1, 'A1', 1, NULL, '2024-12-03 08:54:34', '2024-12-03 08:54:34'),
(2, 1, 'A2', 1, NULL, '2024-12-03 08:54:34', '2024-12-03 08:54:34'),
(3, 1, 'A3', 1, NULL, '2024-12-03 08:54:34', '2024-12-03 08:54:34'),
(4, 1, 'A4', 1, NULL, '2024-12-03 08:54:34', '2024-12-03 08:54:34'),
(5, 1, 'A5', 1, NULL, '2024-12-03 08:54:34', '2024-12-03 08:54:34'),
(6, 1, 'A6', 1, NULL, '2024-12-03 08:54:34', '2024-12-03 08:54:34'),
(7, 1, 'A7', 1, NULL, '2024-12-03 08:54:34', '2024-12-03 08:54:34'),
(8, 1, 'A8', 1, NULL, '2024-12-03 08:54:34', '2024-12-03 08:54:34'),
(9, 1, 'A9', 1, NULL, '2024-12-03 08:54:34', '2024-12-03 08:54:34'),
(10, 1, 'A10', 1, NULL, '2024-12-03 08:54:34', '2024-12-03 08:54:34'),
(11, 1, 'A11', 1, NULL, '2024-12-03 08:54:34', '2024-12-03 08:54:34'),
(12, 1, 'A12', 1, NULL, '2024-12-03 08:54:34', '2024-12-03 08:54:34'),
(13, 1, 'A13', 1, NULL, '2024-12-03 08:54:34', '2024-12-03 08:54:34'),
(14, 1, 'A14', 1, NULL, '2024-12-03 08:54:34', '2024-12-03 08:54:34'),
(15, 1, 'A15', 1, NULL, '2024-12-03 08:54:34', '2024-12-03 08:54:34'),
(16, 1, 'A16', 1, NULL, '2024-12-03 08:54:34', '2024-12-03 08:54:34'),
(17, 1, 'A17', 1, NULL, '2024-12-03 08:54:34', '2024-12-03 08:54:34'),
(18, 1, 'A18', 1, NULL, '2024-12-03 08:54:34', '2024-12-03 08:54:34'),
(19, 1, 'A19', 1, NULL, '2024-12-03 08:54:34', '2024-12-03 08:54:34'),
(20, 1, 'A20', 1, NULL, '2024-12-03 08:54:34', '2024-12-03 08:54:34'),
(21, 2, 'B1', 1, NULL, '2024-12-03 09:13:33', '2024-12-03 09:13:33'),
(22, 2, 'B2', 1, NULL, '2024-12-03 09:13:33', '2024-12-03 09:13:33'),
(23, 2, 'B3', 1, NULL, '2024-12-03 09:13:33', '2024-12-03 09:13:33'),
(24, 2, 'B4', 1, NULL, '2024-12-03 09:13:33', '2024-12-03 09:13:33'),
(25, 2, 'B5', 1, NULL, '2024-12-03 09:13:33', '2024-12-03 09:13:33'),
(26, 2, 'B6', 1, NULL, '2024-12-03 09:13:33', '2024-12-03 09:13:33'),
(27, 2, 'B7', 1, NULL, '2024-12-03 09:13:33', '2024-12-03 09:13:33'),
(28, 2, 'B8', 1, NULL, '2024-12-03 09:13:33', '2024-12-03 09:13:33'),
(29, 2, 'B9', 1, NULL, '2024-12-03 09:13:33', '2024-12-03 09:13:33'),
(30, 2, 'B10', 1, NULL, '2024-12-03 09:13:33', '2024-12-03 09:13:33'),
(31, 2, 'B11', 1, NULL, '2024-12-03 09:13:33', '2024-12-03 09:13:33'),
(32, 2, 'B12', 1, NULL, '2024-12-03 09:13:33', '2024-12-03 09:13:33'),
(33, 2, 'B13', 1, NULL, '2024-12-03 09:13:33', '2024-12-03 09:13:33'),
(34, 2, 'B14', 1, NULL, '2024-12-03 09:13:33', '2024-12-03 09:13:33'),
(35, 2, 'B15', 1, NULL, '2024-12-03 09:13:33', '2024-12-03 09:13:33'),
(36, 2, 'B16', 1, NULL, '2024-12-03 09:13:33', '2024-12-03 09:13:33'),
(37, 2, 'B17', 1, NULL, '2024-12-03 09:13:33', '2024-12-03 09:13:33'),
(38, 2, 'B18', 1, NULL, '2024-12-03 09:13:33', '2024-12-03 09:13:33'),
(39, 2, 'B19', 1, NULL, '2024-12-03 09:13:33', '2024-12-03 09:13:33'),
(40, 2, 'B20', 1, NULL, '2024-12-03 09:13:33', '2024-12-03 09:13:33'),
(41, 2, 'B1', 1, NULL, '2024-12-03 09:14:12', '2024-12-03 09:14:12'),
(42, 2, 'B2', 1, NULL, '2024-12-03 09:14:12', '2024-12-03 09:14:12'),
(43, 2, 'B3', 1, NULL, '2024-12-03 09:14:12', '2024-12-03 09:14:12'),
(44, 2, 'B4', 1, NULL, '2024-12-03 09:14:12', '2024-12-03 09:14:12'),
(45, 2, 'B5', 1, NULL, '2024-12-03 09:14:12', '2024-12-03 09:14:12'),
(46, 2, 'B6', 1, NULL, '2024-12-03 09:14:12', '2024-12-03 09:14:12'),
(47, 2, 'B7', 1, NULL, '2024-12-03 09:14:12', '2024-12-03 09:14:12'),
(48, 2, 'B8', 1, NULL, '2024-12-03 09:14:12', '2024-12-03 09:14:12'),
(49, 2, 'B9', 1, NULL, '2024-12-03 09:14:12', '2024-12-03 09:14:12'),
(50, 2, 'B10', 1, NULL, '2024-12-03 09:14:12', '2024-12-03 09:14:12'),
(51, 3, 'C1', 1, NULL, '2024-12-03 09:16:48', '2024-12-03 09:16:48'),
(52, 3, 'C2', 1, NULL, '2024-12-03 09:16:48', '2024-12-03 09:16:48'),
(53, 3, 'C3', 1, NULL, '2024-12-03 09:16:48', '2024-12-03 09:16:48'),
(54, 3, 'C4', 1, NULL, '2024-12-03 09:16:48', '2024-12-03 09:16:48'),
(55, 3, 'C5', 1, NULL, '2024-12-03 09:16:48', '2024-12-03 09:16:48'),
(56, 3, 'C6', 1, NULL, '2024-12-03 09:16:48', '2024-12-03 09:16:48'),
(57, 3, 'C7', 1, NULL, '2024-12-03 09:16:48', '2024-12-03 09:16:48'),
(58, 3, 'C8', 1, NULL, '2024-12-03 09:16:48', '2024-12-03 09:16:48'),
(59, 3, 'C9', 1, NULL, '2024-12-03 09:16:48', '2024-12-03 09:16:48'),
(60, 3, 'C10', 1, NULL, '2024-12-03 09:16:48', '2024-12-03 09:16:48'),
(61, 3, 'C1', 1, NULL, '2024-12-03 09:18:34', '2024-12-03 09:18:34'),
(62, 3, 'C2', 1, NULL, '2024-12-03 09:18:34', '2024-12-03 09:18:34'),
(63, 3, 'C3', 1, NULL, '2024-12-03 09:18:34', '2024-12-03 09:18:34'),
(64, 3, 'C4', 1, NULL, '2024-12-03 09:18:34', '2024-12-03 09:18:34'),
(65, 3, 'C5', 1, NULL, '2024-12-03 09:18:34', '2024-12-03 09:18:34'),
(66, 3, 'C6', 1, NULL, '2024-12-03 09:18:34', '2024-12-03 09:18:34'),
(67, 3, 'C7', 1, NULL, '2024-12-03 09:18:34', '2024-12-03 09:18:34'),
(68, 3, 'C8', 1, NULL, '2024-12-03 09:18:34', '2024-12-03 09:18:34'),
(69, 3, 'C9', 1, NULL, '2024-12-03 09:18:34', '2024-12-03 09:18:34'),
(70, 3, 'C10', 1, NULL, '2024-12-03 09:18:34', '2024-12-03 09:18:34'),
(71, 3, 'C1', 1, NULL, '2024-12-03 09:18:52', '2024-12-03 09:18:52'),
(72, 3, 'C2', 1, NULL, '2024-12-03 09:18:52', '2024-12-03 09:18:52'),
(73, 3, 'C3', 1, NULL, '2024-12-03 09:18:52', '2024-12-03 09:18:52'),
(74, 3, 'C4', 1, NULL, '2024-12-03 09:18:52', '2024-12-03 09:18:52'),
(75, 3, 'C5', 1, NULL, '2024-12-03 09:18:52', '2024-12-03 09:18:52'),
(76, 3, 'C6', 1, NULL, '2024-12-03 09:18:52', '2024-12-03 09:18:52'),
(77, 3, 'C7', 1, NULL, '2024-12-03 09:18:52', '2024-12-03 09:18:52'),
(78, 3, 'C8', 1, NULL, '2024-12-03 09:18:52', '2024-12-03 09:18:52'),
(79, 3, 'C9', 1, NULL, '2024-12-03 09:18:52', '2024-12-03 09:18:52'),
(80, 3, 'C10', 1, NULL, '2024-12-03 09:18:52', '2024-12-03 09:18:52'),
(81, 3, 'C1', 1, NULL, '2024-12-03 09:19:09', '2024-12-03 09:19:09'),
(82, 3, 'C2', 1, NULL, '2024-12-03 09:19:09', '2024-12-03 09:19:09'),
(83, 3, 'C3', 1, NULL, '2024-12-03 09:19:09', '2024-12-03 09:19:09'),
(84, 3, 'C4', 1, NULL, '2024-12-03 09:19:09', '2024-12-03 09:19:09'),
(85, 3, 'C5', 1, NULL, '2024-12-03 09:19:09', '2024-12-03 09:19:09'),
(86, 3, 'C6', 1, NULL, '2024-12-03 09:19:09', '2024-12-03 09:19:09'),
(87, 3, 'C7', 1, NULL, '2024-12-03 09:19:09', '2024-12-03 09:19:09'),
(88, 3, 'C8', 1, NULL, '2024-12-03 09:19:09', '2024-12-03 09:19:09'),
(89, 3, 'C9', 1, NULL, '2024-12-03 09:19:09', '2024-12-03 09:19:09'),
(90, 3, 'C10', 1, NULL, '2024-12-03 09:19:09', '2024-12-03 09:19:09'),
(91, 1, 'A1', 3, NULL, '2024-12-03 09:19:58', '2024-12-03 09:19:58'),
(92, 1, 'A2', 3, NULL, '2024-12-03 09:19:58', '2024-12-03 09:19:58'),
(93, 1, 'A3', 3, NULL, '2024-12-03 09:19:58', '2024-12-03 09:19:58'),
(94, 1, 'A4', 3, NULL, '2024-12-03 09:19:58', '2024-12-03 09:19:58'),
(95, 1, 'A5', 3, NULL, '2024-12-03 09:19:58', '2024-12-03 09:19:58'),
(96, 1, 'A6', 3, NULL, '2024-12-03 09:19:58', '2024-12-03 09:19:58'),
(97, 1, 'A7', 3, NULL, '2024-12-03 09:19:58', '2024-12-03 09:19:58'),
(98, 1, 'A8', 3, NULL, '2024-12-03 09:19:58', '2024-12-03 09:19:58'),
(99, 1, 'A9', 3, NULL, '2024-12-03 09:19:58', '2024-12-03 09:19:58'),
(100, 1, 'A10', 3, NULL, '2024-12-03 09:19:58', '2024-12-03 09:19:58'),
(101, 1, 'A11', 3, NULL, '2024-12-03 09:19:58', '2024-12-03 09:19:58'),
(102, 1, 'A12', 3, NULL, '2024-12-03 09:19:58', '2024-12-03 09:19:58'),
(103, 1, 'A13', 3, NULL, '2024-12-03 09:19:58', '2024-12-03 09:19:58'),
(104, 1, 'A14', 3, NULL, '2024-12-03 09:19:58', '2024-12-03 09:19:58'),
(105, 1, 'A15', 3, NULL, '2024-12-03 09:19:58', '2024-12-03 09:19:58'),
(106, 1, 'A16', 3, NULL, '2024-12-03 09:19:58', '2024-12-03 09:19:58'),
(107, 1, 'A17', 3, NULL, '2024-12-03 09:19:58', '2024-12-03 09:19:58'),
(108, 1, 'A18', 3, NULL, '2024-12-03 09:19:58', '2024-12-03 09:19:58'),
(109, 1, 'A19', 3, NULL, '2024-12-03 09:19:58', '2024-12-03 09:19:58'),
(110, 1, 'A20', 3, NULL, '2024-12-03 09:19:58', '2024-12-03 09:19:58'),
(111, 1, 'A1', 3, NULL, '2024-12-03 09:20:14', '2024-12-03 09:20:14'),
(112, 1, 'A2', 3, NULL, '2024-12-03 09:20:14', '2024-12-03 09:20:14'),
(113, 1, 'A3', 3, NULL, '2024-12-03 09:20:14', '2024-12-03 09:20:14'),
(114, 1, 'A4', 3, NULL, '2024-12-03 09:20:14', '2024-12-03 09:20:14'),
(115, 1, 'A5', 3, NULL, '2024-12-03 09:20:14', '2024-12-03 09:20:14'),
(116, 1, 'A6', 3, NULL, '2024-12-03 09:20:14', '2024-12-03 09:20:14'),
(117, 1, 'A7', 3, NULL, '2024-12-03 09:20:14', '2024-12-03 09:20:14'),
(118, 1, 'A8', 3, NULL, '2024-12-03 09:20:14', '2024-12-03 09:20:14'),
(119, 1, 'A9', 3, NULL, '2024-12-03 09:20:14', '2024-12-03 09:20:14'),
(120, 1, 'A10', 3, NULL, '2024-12-03 09:20:14', '2024-12-03 09:20:14'),
(121, 1, 'A11', 3, NULL, '2024-12-03 09:20:14', '2024-12-03 09:20:14'),
(122, 1, 'A12', 3, NULL, '2024-12-03 09:20:14', '2024-12-03 09:20:14'),
(123, 1, 'A13', 3, NULL, '2024-12-03 09:20:14', '2024-12-03 09:20:14'),
(124, 1, 'A14', 3, NULL, '2024-12-03 09:20:14', '2024-12-03 09:20:14'),
(125, 1, 'A15', 3, NULL, '2024-12-03 09:20:14', '2024-12-03 09:20:14'),
(126, 1, 'A16', 3, NULL, '2024-12-03 09:20:14', '2024-12-03 09:20:14'),
(127, 1, 'A17', 3, NULL, '2024-12-03 09:20:14', '2024-12-03 09:20:14'),
(128, 1, 'A18', 3, NULL, '2024-12-03 09:20:14', '2024-12-03 09:20:14'),
(129, 1, 'A19', 3, NULL, '2024-12-03 09:20:14', '2024-12-03 09:20:14'),
(130, 1, 'A20', 3, NULL, '2024-12-03 09:20:14', '2024-12-03 09:20:14'),
(131, 1, 'A1', 3, NULL, '2024-12-03 09:20:32', '2024-12-03 09:20:32'),
(132, 1, 'A2', 3, NULL, '2024-12-03 09:20:32', '2024-12-03 09:20:32'),
(133, 1, 'A3', 3, NULL, '2024-12-03 09:20:32', '2024-12-03 09:20:32'),
(134, 1, 'A4', 3, NULL, '2024-12-03 09:20:32', '2024-12-03 09:20:32'),
(135, 1, 'A5', 3, NULL, '2024-12-03 09:20:32', '2024-12-03 09:20:32'),
(136, 1, 'A6', 3, NULL, '2024-12-03 09:20:32', '2024-12-03 09:20:32'),
(137, 1, 'A7', 3, NULL, '2024-12-03 09:20:32', '2024-12-03 09:20:32'),
(138, 1, 'A8', 3, NULL, '2024-12-03 09:20:32', '2024-12-03 09:20:32'),
(139, 1, 'A9', 3, NULL, '2024-12-03 09:20:32', '2024-12-03 09:20:32'),
(140, 1, 'A10', 3, NULL, '2024-12-03 09:20:32', '2024-12-03 09:20:32'),
(141, 1, 'A11', 3, NULL, '2024-12-03 09:20:32', '2024-12-03 09:20:32'),
(142, 1, 'A12', 3, NULL, '2024-12-03 09:20:32', '2024-12-03 09:20:32'),
(143, 1, 'A13', 3, NULL, '2024-12-03 09:20:32', '2024-12-03 09:20:32'),
(144, 1, 'A14', 3, NULL, '2024-12-03 09:20:32', '2024-12-03 09:20:32'),
(145, 1, 'A15', 3, NULL, '2024-12-03 09:20:32', '2024-12-03 09:20:32'),
(146, 1, 'A16', 3, NULL, '2024-12-03 09:20:32', '2024-12-03 09:20:32'),
(147, 1, 'A17', 3, NULL, '2024-12-03 09:20:32', '2024-12-03 09:20:32'),
(148, 1, 'A18', 3, NULL, '2024-12-03 09:20:32', '2024-12-03 09:20:32'),
(149, 1, 'A19', 3, NULL, '2024-12-03 09:20:32', '2024-12-03 09:20:32'),
(150, 1, 'A20', 3, NULL, '2024-12-03 09:20:32', '2024-12-03 09:20:32');

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
(1, 'Thường ', '100000.00', NULL, NULL),
(2, 'vip', '250000.00', NULL, NULL),
(3, 'Đôi', '200000.00', NULL, NULL);

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
  `base_id` bigint UNSIGNED NOT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `showtimes`
--

INSERT INTO `showtimes` (`id`, `movie_id`, `room_id`, `showtime_date`, `start_time`, `end_time`, `base_id`, `deleted_at`, `created_at`, `updated_at`) VALUES
(1, 1, 1, '2024-12-04', '09:00:00', '10:00:00', 1, NULL, NULL, NULL),
(2, 2, 2, '2024-12-05', '09:00:00', '11:00:00', 1, NULL, NULL, NULL),
(3, 3, 3, '2024-12-04', '10:00:00', '12:00:00', 1, NULL, NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `status_seats`
--

CREATE TABLE `status_seats` (
  `id` bigint UNSIGNED NOT NULL,
  `showtime_id` bigint UNSIGNED NOT NULL,
  `seat_id` bigint UNSIGNED NOT NULL,
  `status` enum('Ghế trống','Đã đặt','Đang chọn') COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'Ghế trống',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `tin_tucs`
--

CREATE TABLE `tin_tucs` (
  `id` bigint UNSIGNED NOT NULL,
  `name_TinTuc` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `sub_title` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `content` text COLLATE utf8mb4_unicode_ci,
  `imager` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `tin_tucs`
--

INSERT INTO `tin_tucs` (`id`, `name_TinTuc`, `sub_title`, `content`, `imager`, `created_at`, `updated_at`) VALUES
(1, 'VUI TẾT TRUNG THU - RINH QUÀ VI VU', 'VUI TẾT TRUNG THU - RINH QUÀ VI VU', 'Nhân dịp Tết Trung thu 2024, Trung tâm Chiếu phim Quốc gia xin được gửi những lời chúc ấm áp nhất tới quý khán giả, mong bình an sẽ gõ cửa đến mọi nhà\n\n\nTrung thu đã chạm ngõ, NCC dành tặng hàng trăm phần quà là những chiếc đèn lồng xinh xắn gửi tới các bạn thiếu nhi khi đến rạp xem phim:\n\n\n\n👉Thời gian tặng quà: từ 18h - 20h30 ngày 14/09/2024 (tối thứ 7) tại sảnh tầng 1 của Trung tâm.\n\n\n\nNCC mong rằng những chiếu đèn lồng sẽ mang lại những niềm vui nho nhỏ đến với các bạn thiếu nhi mùa Tết Trung thu năm nay!\n\n_______________________________________________\n\n📍 Trung tâm Chiếu phim Quốc gia\n\n📱 Website: https://chieuphimquocgia.com.vn/\n\n❤ Địa chỉ: 87 Láng Hạ, phường Thành Công, quận Ba Đình, Hà Nội\n\n☎️ Hotline: 024.3514.1791', 'https://picsum.photos/seed/1/600/400', '2024-12-03 09:26:44', '2024-12-03 09:26:44'),
(2, 'VUI TẾT TRUNG THU - RINH QUÀ VI VU', 'VUI TẾT TRUNG THU - RINH QUÀ VI VU', 'Nhân dịp Tết Trung thu 2024, Trung tâm Chiếu phim Quốc gia xin được gửi những lời chúc ấm áp nhất tới quý khán giả, mong bình an sẽ gõ cửa đến mọi nhà\n\n\nTrung thu đã chạm ngõ, NCC dành tặng hàng trăm phần quà là những chiếc đèn lồng xinh xắn gửi tới các bạn thiếu nhi khi đến rạp xem phim:\n\n\n\n👉Thời gian tặng quà: từ 18h - 20h30 ngày 14/09/2024 (tối thứ 7) tại sảnh tầng 1 của Trung tâm.\n\n\n\nNCC mong rằng những chiếu đèn lồng sẽ mang lại những niềm vui nho nhỏ đến với các bạn thiếu nhi mùa Tết Trung thu năm nay!\n\n_______________________________________________\n\n📍 Trung tâm Chiếu phim Quốc gia\n\n📱 Website: https://chieuphimquocgia.com.vn/\n\n❤ Địa chỉ: 87 Láng Hạ, phường Thành Công, quận Ba Đình, Hà Nội\n\n☎️ Hotline: 024.3514.1791', 'https://picsum.photos/seed/2/600/400', '2024-12-03 09:26:44', '2024-12-03 09:26:44'),
(3, 'VUI TẾT TRUNG THU - RINH QUÀ VI VU', 'VUI TẾT TRUNG THU - RINH QUÀ VI VU', 'Nhân dịp Tết Trung thu 2024, Trung tâm Chiếu phim Quốc gia xin được gửi những lời chúc ấm áp nhất tới quý khán giả, mong bình an sẽ gõ cửa đến mọi nhà\n\n\nTrung thu đã chạm ngõ, NCC dành tặng hàng trăm phần quà là những chiếc đèn lồng xinh xắn gửi tới các bạn thiếu nhi khi đến rạp xem phim:\n\n\n\n👉Thời gian tặng quà: từ 18h - 20h30 ngày 14/09/2024 (tối thứ 7) tại sảnh tầng 1 của Trung tâm.\n\n\n\nNCC mong rằng những chiếu đèn lồng sẽ mang lại những niềm vui nho nhỏ đến với các bạn thiếu nhi mùa Tết Trung thu năm nay!\n\n_______________________________________________\n\n📍 Trung tâm Chiếu phim Quốc gia\n\n📱 Website: https://chieuphimquocgia.com.vn/\n\n❤ Địa chỉ: 87 Láng Hạ, phường Thành Công, quận Ba Đình, Hà Nội\n\n☎️ Hotline: 024.3514.1791', 'https://picsum.photos/seed/3/600/400', '2024-12-03 09:26:44', '2024-12-03 09:26:44'),
(4, 'VUI TẾT TRUNG THU - RINH QUÀ VI VU', 'VUI TẾT TRUNG THU - RINH QUÀ VI VU', 'Nhân dịp Tết Trung thu 2024, Trung tâm Chiếu phim Quốc gia xin được gửi những lời chúc ấm áp nhất tới quý khán giả, mong bình an sẽ gõ cửa đến mọi nhà\n\n\nTrung thu đã chạm ngõ, NCC dành tặng hàng trăm phần quà là những chiếc đèn lồng xinh xắn gửi tới các bạn thiếu nhi khi đến rạp xem phim:\n\n\n\n👉Thời gian tặng quà: từ 18h - 20h30 ngày 14/09/2024 (tối thứ 7) tại sảnh tầng 1 của Trung tâm.\n\n\n\nNCC mong rằng những chiếu đèn lồng sẽ mang lại những niềm vui nho nhỏ đến với các bạn thiếu nhi mùa Tết Trung thu năm nay!\n\n_______________________________________________\n\n📍 Trung tâm Chiếu phim Quốc gia\n\n📱 Website: https://chieuphimquocgia.com.vn/\n\n❤ Địa chỉ: 87 Láng Hạ, phường Thành Công, quận Ba Đình, Hà Nội\n\n☎️ Hotline: 024.3514.1791', 'https://picsum.photos/seed/4/600/400', '2024-12-03 09:26:44', '2024-12-03 09:26:44'),
(5, 'VUI TẾT TRUNG THU - RINH QUÀ VI VU', 'VUI TẾT TRUNG THU - RINH QUÀ VI VU', 'Nhân dịp Tết Trung thu 2024, Trung tâm Chiếu phim Quốc gia xin được gửi những lời chúc ấm áp nhất tới quý khán giả, mong bình an sẽ gõ cửa đến mọi nhà\n\n\nTrung thu đã chạm ngõ, NCC dành tặng hàng trăm phần quà là những chiếc đèn lồng xinh xắn gửi tới các bạn thiếu nhi khi đến rạp xem phim:\n\n\n\n👉Thời gian tặng quà: từ 18h - 20h30 ngày 14/09/2024 (tối thứ 7) tại sảnh tầng 1 của Trung tâm.\n\n\n\nNCC mong rằng những chiếu đèn lồng sẽ mang lại những niềm vui nho nhỏ đến với các bạn thiếu nhi mùa Tết Trung thu năm nay!\n\n_______________________________________________\n\n📍 Trung tâm Chiếu phim Quốc gia\n\n📱 Website: https://chieuphimquocgia.com.vn/\n\n❤ Địa chỉ: 87 Láng Hạ, phường Thành Công, quận Ba Đình, Hà Nội\n\n☎️ Hotline: 024.3514.1791', 'https://picsum.photos/seed/5/600/400', '2024-12-03 09:26:44', '2024-12-03 09:26:44'),
(6, 'VUI TẾT TRUNG THU - RINH QUÀ VI VU', 'VUI TẾT TRUNG THU - RINH QUÀ VI VU', 'Nhân dịp Tết Trung thu 2024, Trung tâm Chiếu phim Quốc gia xin được gửi những lời chúc ấm áp nhất tới quý khán giả, mong bình an sẽ gõ cửa đến mọi nhà\n\n\nTrung thu đã chạm ngõ, NCC dành tặng hàng trăm phần quà là những chiếc đèn lồng xinh xắn gửi tới các bạn thiếu nhi khi đến rạp xem phim:\n\n\n\n👉Thời gian tặng quà: từ 18h - 20h30 ngày 14/09/2024 (tối thứ 7) tại sảnh tầng 1 của Trung tâm.\n\n\n\nNCC mong rằng những chiếu đèn lồng sẽ mang lại những niềm vui nho nhỏ đến với các bạn thiếu nhi mùa Tết Trung thu năm nay!\n\n_______________________________________________\n\n📍 Trung tâm Chiếu phim Quốc gia\n\n📱 Website: https://chieuphimquocgia.com.vn/\n\n❤ Địa chỉ: 87 Láng Hạ, phường Thành Công, quận Ba Đình, Hà Nội\n\n☎️ Hotline: 024.3514.1791', 'https://picsum.photos/seed/6/600/400', '2024-12-03 09:26:44', '2024-12-03 09:26:44'),
(7, 'VUI TẾT TRUNG THU - RINH QUÀ VI VU', 'VUI TẾT TRUNG THU - RINH QUÀ VI VU', 'Nhân dịp Tết Trung thu 2024, Trung tâm Chiếu phim Quốc gia xin được gửi những lời chúc ấm áp nhất tới quý khán giả, mong bình an sẽ gõ cửa đến mọi nhà\n\n\nTrung thu đã chạm ngõ, NCC dành tặng hàng trăm phần quà là những chiếc đèn lồng xinh xắn gửi tới các bạn thiếu nhi khi đến rạp xem phim:\n\n\n\n👉Thời gian tặng quà: từ 18h - 20h30 ngày 14/09/2024 (tối thứ 7) tại sảnh tầng 1 của Trung tâm.\n\n\n\nNCC mong rằng những chiếu đèn lồng sẽ mang lại những niềm vui nho nhỏ đến với các bạn thiếu nhi mùa Tết Trung thu năm nay!\n\n_______________________________________________\n\n📍 Trung tâm Chiếu phim Quốc gia\n\n📱 Website: https://chieuphimquocgia.com.vn/\n\n❤ Địa chỉ: 87 Láng Hạ, phường Thành Công, quận Ba Đình, Hà Nội\n\n☎️ Hotline: 024.3514.1791', 'https://picsum.photos/seed/7/600/400', '2024-12-03 09:26:44', '2024-12-03 09:26:44'),
(8, 'VUI TẾT TRUNG THU - RINH QUÀ VI VU', 'VUI TẾT TRUNG THU - RINH QUÀ VI VU', 'Nhân dịp Tết Trung thu 2024, Trung tâm Chiếu phim Quốc gia xin được gửi những lời chúc ấm áp nhất tới quý khán giả, mong bình an sẽ gõ cửa đến mọi nhà\n\n\nTrung thu đã chạm ngõ, NCC dành tặng hàng trăm phần quà là những chiếc đèn lồng xinh xắn gửi tới các bạn thiếu nhi khi đến rạp xem phim:\n\n\n\n👉Thời gian tặng quà: từ 18h - 20h30 ngày 14/09/2024 (tối thứ 7) tại sảnh tầng 1 của Trung tâm.\n\n\n\nNCC mong rằng những chiếu đèn lồng sẽ mang lại những niềm vui nho nhỏ đến với các bạn thiếu nhi mùa Tết Trung thu năm nay!\n\n_______________________________________________\n\n📍 Trung tâm Chiếu phim Quốc gia\n\n📱 Website: https://chieuphimquocgia.com.vn/\n\n❤ Địa chỉ: 87 Láng Hạ, phường Thành Công, quận Ba Đình, Hà Nội\n\n☎️ Hotline: 024.3514.1791', 'https://picsum.photos/seed/8/600/400', '2024-12-03 09:26:44', '2024-12-03 09:26:44'),
(9, 'VUI TẾT TRUNG THU - RINH QUÀ VI VU', 'VUI TẾT TRUNG THU - RINH QUÀ VI VU', 'Nhân dịp Tết Trung thu 2024, Trung tâm Chiếu phim Quốc gia xin được gửi những lời chúc ấm áp nhất tới quý khán giả, mong bình an sẽ gõ cửa đến mọi nhà\n\n\nTrung thu đã chạm ngõ, NCC dành tặng hàng trăm phần quà là những chiếc đèn lồng xinh xắn gửi tới các bạn thiếu nhi khi đến rạp xem phim:\n\n\n\n👉Thời gian tặng quà: từ 18h - 20h30 ngày 14/09/2024 (tối thứ 7) tại sảnh tầng 1 của Trung tâm.\n\n\n\nNCC mong rằng những chiếu đèn lồng sẽ mang lại những niềm vui nho nhỏ đến với các bạn thiếu nhi mùa Tết Trung thu năm nay!\n\n_______________________________________________\n\n📍 Trung tâm Chiếu phim Quốc gia\n\n📱 Website: https://chieuphimquocgia.com.vn/\n\n❤ Địa chỉ: 87 Láng Hạ, phường Thành Công, quận Ba Đình, Hà Nội\n\n☎️ Hotline: 024.3514.1791', 'https://picsum.photos/seed/9/600/400', '2024-12-03 09:26:44', '2024-12-03 09:26:44'),
(10, 'VUI TẾT TRUNG THU - RINH QUÀ VI VU', 'VUI TẾT TRUNG THU - RINH QUÀ VI VU', 'Nhân dịp Tết Trung thu 2024, Trung tâm Chiếu phim Quốc gia xin được gửi những lời chúc ấm áp nhất tới quý khán giả, mong bình an sẽ gõ cửa đến mọi nhà\n\n\nTrung thu đã chạm ngõ, NCC dành tặng hàng trăm phần quà là những chiếc đèn lồng xinh xắn gửi tới các bạn thiếu nhi khi đến rạp xem phim:\n\n\n\n👉Thời gian tặng quà: từ 18h - 20h30 ngày 14/09/2024 (tối thứ 7) tại sảnh tầng 1 của Trung tâm.\n\n\n\nNCC mong rằng những chiếu đèn lồng sẽ mang lại những niềm vui nho nhỏ đến với các bạn thiếu nhi mùa Tết Trung thu năm nay!\n\n_______________________________________________\n\n📍 Trung tâm Chiếu phim Quốc gia\n\n📱 Website: https://chieuphimquocgia.com.vn/\n\n❤ Địa chỉ: 87 Láng Hạ, phường Thành Công, quận Ba Đình, Hà Nội\n\n☎️ Hotline: 024.3514.1791', 'https://picsum.photos/seed/10/600/400', '2024-12-03 09:26:44', '2024-12-03 09:26:44'),
(11, 'VUI TẾT TRUNG THU - RINH QUÀ VI VU', 'VUI TẾT TRUNG THU - RINH QUÀ VI VU', 'Nhân dịp Tết Trung thu 2024, Trung tâm Chiếu phim Quốc gia xin được gửi những lời chúc ấm áp nhất tới quý khán giả, mong bình an sẽ gõ cửa đến mọi nhà\n\n\nTrung thu đã chạm ngõ, NCC dành tặng hàng trăm phần quà là những chiếc đèn lồng xinh xắn gửi tới các bạn thiếu nhi khi đến rạp xem phim:\n\n\n\n👉Thời gian tặng quà: từ 18h - 20h30 ngày 14/09/2024 (tối thứ 7) tại sảnh tầng 1 của Trung tâm.\n\n\n\nNCC mong rằng những chiếu đèn lồng sẽ mang lại những niềm vui nho nhỏ đến với các bạn thiếu nhi mùa Tết Trung thu năm nay!\n\n_______________________________________________\n\n📍 Trung tâm Chiếu phim Quốc gia\n\n📱 Website: https://chieuphimquocgia.com.vn/\n\n❤ Địa chỉ: 87 Láng Hạ, phường Thành Công, quận Ba Đình, Hà Nội\n\n☎️ Hotline: 024.3514.1791', 'https://picsum.photos/seed/11/600/400', '2024-12-03 09:26:44', '2024-12-03 09:26:44'),
(12, 'VUI TẾT TRUNG THU - RINH QUÀ VI VU', 'VUI TẾT TRUNG THU - RINH QUÀ VI VU', 'Nhân dịp Tết Trung thu 2024, Trung tâm Chiếu phim Quốc gia xin được gửi những lời chúc ấm áp nhất tới quý khán giả, mong bình an sẽ gõ cửa đến mọi nhà\n\n\nTrung thu đã chạm ngõ, NCC dành tặng hàng trăm phần quà là những chiếc đèn lồng xinh xắn gửi tới các bạn thiếu nhi khi đến rạp xem phim:\n\n\n\n👉Thời gian tặng quà: từ 18h - 20h30 ngày 14/09/2024 (tối thứ 7) tại sảnh tầng 1 của Trung tâm.\n\n\n\nNCC mong rằng những chiếu đèn lồng sẽ mang lại những niềm vui nho nhỏ đến với các bạn thiếu nhi mùa Tết Trung thu năm nay!\n\n_______________________________________________\n\n📍 Trung tâm Chiếu phim Quốc gia\n\n📱 Website: https://chieuphimquocgia.com.vn/\n\n❤ Địa chỉ: 87 Láng Hạ, phường Thành Công, quận Ba Đình, Hà Nội\n\n☎️ Hotline: 024.3514.1791', 'https://picsum.photos/seed/12/600/400', '2024-12-03 09:26:44', '2024-12-03 09:26:44'),
(13, 'VUI TẾT TRUNG THU - RINH QUÀ VI VU', 'VUI TẾT TRUNG THU - RINH QUÀ VI VU', 'Nhân dịp Tết Trung thu 2024, Trung tâm Chiếu phim Quốc gia xin được gửi những lời chúc ấm áp nhất tới quý khán giả, mong bình an sẽ gõ cửa đến mọi nhà\n\n\nTrung thu đã chạm ngõ, NCC dành tặng hàng trăm phần quà là những chiếc đèn lồng xinh xắn gửi tới các bạn thiếu nhi khi đến rạp xem phim:\n\n\n\n👉Thời gian tặng quà: từ 18h - 20h30 ngày 14/09/2024 (tối thứ 7) tại sảnh tầng 1 của Trung tâm.\n\n\n\nNCC mong rằng những chiếu đèn lồng sẽ mang lại những niềm vui nho nhỏ đến với các bạn thiếu nhi mùa Tết Trung thu năm nay!\n\n_______________________________________________\n\n📍 Trung tâm Chiếu phim Quốc gia\n\n📱 Website: https://chieuphimquocgia.com.vn/\n\n❤ Địa chỉ: 87 Láng Hạ, phường Thành Công, quận Ba Đình, Hà Nội\n\n☎️ Hotline: 024.3514.1791', 'https://picsum.photos/seed/13/600/400', '2024-12-03 09:26:44', '2024-12-03 09:26:44'),
(14, 'VUI TẾT TRUNG THU - RINH QUÀ VI VU', 'VUI TẾT TRUNG THU - RINH QUÀ VI VU', 'Nhân dịp Tết Trung thu 2024, Trung tâm Chiếu phim Quốc gia xin được gửi những lời chúc ấm áp nhất tới quý khán giả, mong bình an sẽ gõ cửa đến mọi nhà\n\n\nTrung thu đã chạm ngõ, NCC dành tặng hàng trăm phần quà là những chiếc đèn lồng xinh xắn gửi tới các bạn thiếu nhi khi đến rạp xem phim:\n\n\n\n👉Thời gian tặng quà: từ 18h - 20h30 ngày 14/09/2024 (tối thứ 7) tại sảnh tầng 1 của Trung tâm.\n\n\n\nNCC mong rằng những chiếu đèn lồng sẽ mang lại những niềm vui nho nhỏ đến với các bạn thiếu nhi mùa Tết Trung thu năm nay!\n\n_______________________________________________\n\n📍 Trung tâm Chiếu phim Quốc gia\n\n📱 Website: https://chieuphimquocgia.com.vn/\n\n❤ Địa chỉ: 87 Láng Hạ, phường Thành Công, quận Ba Đình, Hà Nội\n\n☎️ Hotline: 024.3514.1791', 'https://picsum.photos/seed/14/600/400', '2024-12-03 09:26:44', '2024-12-03 09:26:44'),
(15, 'VUI TẾT TRUNG THU - RINH QUÀ VI VU', 'VUI TẾT TRUNG THU - RINH QUÀ VI VU', 'Nhân dịp Tết Trung thu 2024, Trung tâm Chiếu phim Quốc gia xin được gửi những lời chúc ấm áp nhất tới quý khán giả, mong bình an sẽ gõ cửa đến mọi nhà\n\n\nTrung thu đã chạm ngõ, NCC dành tặng hàng trăm phần quà là những chiếc đèn lồng xinh xắn gửi tới các bạn thiếu nhi khi đến rạp xem phim:\n\n\n\n👉Thời gian tặng quà: từ 18h - 20h30 ngày 14/09/2024 (tối thứ 7) tại sảnh tầng 1 của Trung tâm.\n\n\n\nNCC mong rằng những chiếu đèn lồng sẽ mang lại những niềm vui nho nhỏ đến với các bạn thiếu nhi mùa Tết Trung thu năm nay!\n\n_______________________________________________\n\n📍 Trung tâm Chiếu phim Quốc gia\n\n📱 Website: https://chieuphimquocgia.com.vn/\n\n❤ Địa chỉ: 87 Láng Hạ, phường Thành Công, quận Ba Đình, Hà Nội\n\n☎️ Hotline: 024.3514.1791', 'https://picsum.photos/seed/15/600/400', '2024-12-03 09:26:44', '2024-12-03 09:26:44');

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
  `role_id` bigint UNSIGNED DEFAULT NULL,
  `fullname` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `username` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `phone` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `gender` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `role_id`, `fullname`, `username`, `email`, `email_verified_at`, `password`, `phone`, `gender`, `remember_token`, `created_at`, `updated_at`) VALUES
(1, 2, 'ta dong canh', 'canh123', 'tadongcanh123@gmail.com', NULL, '203881', '0938173821', 'nam', NULL, NULL, '2024-12-01 02:25:03');

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
-- Indexes for table `banners`
--
ALTER TABLE `banners`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `bases`
--
ALTER TABLE `bases`
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
-- Indexes for table `invoices`
--
ALTER TABLE `invoices`
  ADD PRIMARY KEY (`id`),
  ADD KEY `invoices_showtime_id_foreign` (`showtime_id`),
  ADD KEY `invoices_user_id_foreign` (`user_id`),
  ADD KEY `invoices_combofood_id_foreign` (`combofood_id`),
  ADD KEY `invoices_voucher_id_foreign` (`voucher_id`);

--
-- Indexes for table `invoice_details`
--
ALTER TABLE `invoice_details`
  ADD PRIMARY KEY (`id`),
  ADD KEY `invoice_details_invoice_id_foreign` (`invoice_id`),
  ADD KEY `invoice_details_seat_id_foreign` (`seat_id`);

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
  ADD KEY `rooms_bases_id_foreign` (`bases_id`);

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
  ADD KEY `showtimes_room_id_foreign` (`room_id`),
  ADD KEY `showtimes_base_id_foreign` (`base_id`);

--
-- Indexes for table `status_seats`
--
ALTER TABLE `status_seats`
  ADD PRIMARY KEY (`id`),
  ADD KEY `status_seats_showtime_id_foreign` (`showtime_id`),
  ADD KEY `status_seats_seat_id_foreign` (`seat_id`);

--
-- Indexes for table `tin_tucs`
--
ALTER TABLE `tin_tucs`
  ADD PRIMARY KEY (`id`);

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
  ADD UNIQUE KEY `users_email_unique` (`email`),
  ADD KEY `users_role_id_foreign` (`role_id`);

--
-- Indexes for table `vouchers`
--
ALTER TABLE `vouchers`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `banners`
--
ALTER TABLE `banners`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `bases`
--
ALTER TABLE `bases`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `categories`
--
ALTER TABLE `categories`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `combo_foods`
--
ALTER TABLE `combo_foods`
  MODIFY `combofood_id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

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
-- AUTO_INCREMENT for table `invoices`
--
ALTER TABLE `invoices`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `invoice_details`
--
ALTER TABLE `invoice_details`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `khuyen_mais`
--
ALTER TABLE `khuyen_mais`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;

--
-- AUTO_INCREMENT for table `movies`
--
ALTER TABLE `movies`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `roles`
--
ALTER TABLE `roles`
  MODIFY `role_id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `rooms`
--
ALTER TABLE `rooms`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `seats`
--
ALTER TABLE `seats`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=151;

--
-- AUTO_INCREMENT for table `seat_types`
--
ALTER TABLE `seat_types`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `showtimes`
--
ALTER TABLE `showtimes`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `status_seats`
--
ALTER TABLE `status_seats`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `tin_tucs`
--
ALTER TABLE `tin_tucs`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT for table `types`
--
ALTER TABLE `types`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

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
-- Constraints for table `invoices`
--
ALTER TABLE `invoices`
  ADD CONSTRAINT `invoices_combofood_id_foreign` FOREIGN KEY (`combofood_id`) REFERENCES `combo_foods` (`combofood_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `invoices_showtime_id_foreign` FOREIGN KEY (`showtime_id`) REFERENCES `showtimes` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `invoices_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `invoices_voucher_id_foreign` FOREIGN KEY (`voucher_id`) REFERENCES `vouchers` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `invoice_details`
--
ALTER TABLE `invoice_details`
  ADD CONSTRAINT `invoice_details_invoice_id_foreign` FOREIGN KEY (`invoice_id`) REFERENCES `invoices` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `invoice_details_seat_id_foreign` FOREIGN KEY (`seat_id`) REFERENCES `seats` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

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
  ADD CONSTRAINT `rooms_bases_id_foreign` FOREIGN KEY (`bases_id`) REFERENCES `bases` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

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
  ADD CONSTRAINT `showtimes_base_id_foreign` FOREIGN KEY (`base_id`) REFERENCES `bases` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `showtimes_movie_id_foreign` FOREIGN KEY (`movie_id`) REFERENCES `movies` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `showtimes_room_id_foreign` FOREIGN KEY (`room_id`) REFERENCES `rooms` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `status_seats`
--
ALTER TABLE `status_seats`
  ADD CONSTRAINT `status_seats_seat_id_foreign` FOREIGN KEY (`seat_id`) REFERENCES `seats` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `status_seats_showtime_id_foreign` FOREIGN KEY (`showtime_id`) REFERENCES `showtimes` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `users`
--
ALTER TABLE `users`
  ADD CONSTRAINT `users_role_id_foreign` FOREIGN KEY (`role_id`) REFERENCES `roles` (`role_id`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
