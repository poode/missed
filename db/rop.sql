-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 21, 2020 at 11:32 PM
-- Server version: 10.4.11-MariaDB
-- PHP Version: 7.4.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `rop`
--

-- --------------------------------------------------------

--
-- Table structure for table `airports`
--

CREATE TABLE `airports` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `airports`
--

INSERT INTO `airports` (`id`, `name`, `createdAt`, `updatedAt`) VALUES
(1, 'مطار مسقط الدولي', '2020-06-05 19:01:26', '2020-06-05 19:01:26'),
(2, 'مطار صلاله', '2020-06-05 19:01:26', '2020-06-05 19:01:26'),
(3, 'مطار الدقم', '2020-06-05 19:01:26', '2020-06-05 19:01:26'),
(4, 'مطار صحار', '2020-06-05 19:01:26', '2020-06-05 19:01:26');

-- --------------------------------------------------------

--
-- Table structure for table `categories`
--

CREATE TABLE `categories` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `categories`
--

INSERT INTO `categories` (`id`, `name`, `createdAt`, `updatedAt`) VALUES
(1, 'هواتف', '2020-06-05 19:45:23', '2020-06-17 09:02:38'),
(13, 'ساعات', '2020-06-17 09:03:21', '2020-06-17 09:07:42'),
(14, 'محافظ', '2020-06-17 09:03:48', '2020-06-17 09:06:06'),
(15, 'نظارات', '2020-06-17 09:06:31', '2020-06-17 09:06:31'),
(16, 'أجهزة حاسب', '2020-06-17 09:06:42', '2020-06-17 09:06:42'),
(17, 'أجهزة لوحية', '2020-06-17 09:06:49', '2020-06-17 09:06:49'),
(18, 'وثائق', '2020-06-17 09:07:01', '2020-06-17 09:07:01'),
(19, 'مفاتيح', '2020-06-17 09:07:09', '2020-06-17 09:07:09'),
(20, 'عطور ومستحضرات تجميل', '2020-06-17 09:07:21', '2020-06-17 09:07:21'),
(21, 'حقائب', '2020-06-17 09:07:31', '2020-06-17 09:07:31'),
(22, 'أخرى', '2020-06-17 09:07:37', '2020-06-17 09:07:37');

-- --------------------------------------------------------

--
-- Table structure for table `colors`
--

CREATE TABLE `colors` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `colors`
--

INSERT INTO `colors` (`id`, `name`, `createdAt`, `updatedAt`) VALUES
(2, 'الابيض', '2020-06-15 00:05:21', '2020-06-15 00:05:21'),
(3, 'الأصفر', '2020-06-15 00:05:30', '2020-06-15 00:05:30'),
(4, 'البني', '2020-06-15 00:05:37', '2020-06-15 00:05:37'),
(5, 'البيج', '2020-06-15 00:05:45', '2020-06-15 00:05:45'),
(6, 'الوردي', '2020-06-15 00:05:51', '2020-06-15 00:05:51'),
(7, 'البرتقالي', '2020-06-15 00:05:57', '2020-06-15 00:05:57'),
(8, 'الأحمر', '2020-06-15 00:06:04', '2020-06-15 00:06:04'),
(9, 'الأخضر', '2020-06-15 00:06:11', '2020-06-15 00:06:11'),
(10, 'البنفسجي', '2020-06-15 00:06:18', '2020-06-15 00:06:18'),
(11, 'الرمادي', '2020-06-15 00:06:25', '2020-06-15 00:06:25'),
(12, 'الأسود', '2020-06-15 00:06:32', '2020-06-15 00:06:32'),
(13, 'الازرق', '2020-06-15 00:06:39', '2020-06-15 00:06:39');

-- --------------------------------------------------------

--
-- Table structure for table `founderdepartments`
--

CREATE TABLE `founderdepartments` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `founderdepartments`
--

INSERT INTO `founderdepartments` (`id`, `name`, `createdAt`, `updatedAt`) VALUES
(2, 'شرطة عمان السلطانيه', '2020-06-14 21:12:45', '2020-06-14 21:12:45'),
(3, 'شركه مطارات عمان', '2020-06-14 21:13:01', '2020-06-14 21:13:01'),
(4, 'شركة النبع', '2020-06-14 21:13:10', '2020-06-14 21:13:10'),
(5, 'الخدمات الارضيه', '2020-06-14 21:13:20', '2020-06-14 21:13:20'),
(6, 'شركات اخرى', '2020-06-14 21:13:28', '2020-06-14 21:13:28'),
(7, 'جهة  حكومية', '2020-06-14 21:13:36', '2020-06-14 21:13:36');

-- --------------------------------------------------------

--
-- Table structure for table `foundertitles`
--

CREATE TABLE `foundertitles` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `foundertitles`
--

INSERT INTO `foundertitles` (`id`, `name`, `createdAt`, `updatedAt`) VALUES
(3, 'لواء', '2020-06-14 18:20:19', '2020-06-14 18:20:19'),
(4, 'شرطي', '2020-06-14 18:21:43', '2020-06-14 18:21:43'),
(5, 'عريف', '2020-06-14 18:21:53', '2020-06-14 18:21:53'),
(6, 'رقيب', '2020-06-14 18:22:03', '2020-06-14 18:22:03'),
(7, 'رقيب اول', '2020-06-14 18:22:15', '2020-06-14 18:22:15'),
(8, 'وكيل', '2020-06-14 18:22:31', '2020-06-14 18:22:31'),
(9, 'وكيل اول', '2020-06-14 18:22:41', '2020-06-14 18:22:41'),
(10, 'ملازم ثاني', '2020-06-14 18:22:59', '2020-06-14 18:22:59'),
(11, 'ملازم اول', '2020-06-14 18:23:12', '2020-06-14 18:23:12'),
(12, 'نقيب', '2020-06-14 18:23:23', '2020-06-14 18:23:23'),
(13, 'رائد', '2020-06-14 18:23:30', '2020-06-14 18:23:30'),
(14, 'مقدم', '2020-06-14 18:23:40', '2020-06-14 18:23:40'),
(15, 'عقيد', '2020-06-14 18:23:46', '2020-06-14 18:23:46'),
(16, 'عميد', '2020-06-14 18:23:53', '2020-06-14 18:23:53'),
(17, 'فريق اول', '2020-06-14 18:24:15', '2020-06-14 18:24:15'),
(18, 'موظف بشركه', '2020-06-14 18:24:32', '2020-06-14 18:24:32'),
(19, 'موظف بجهة حكومية', '2020-06-14 18:24:59', '2020-06-14 18:24:59');

-- --------------------------------------------------------

--
-- Table structure for table `items`
--

CREATE TABLE `items` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `desc` varchar(5000) DEFAULT NULL,
  `photo` varchar(1000) NOT NULL,
  `handOverPersonFile` varchar(1000) DEFAULT NULL,
  `founderName` varchar(255) NOT NULL,
  `founderMobile` varchar(255) NOT NULL,
  `founderNote` varchar(500) DEFAULT NULL,
  `categoryId` int(11) NOT NULL,
  `modelId` int(11) NOT NULL,
  `locationId` int(11) NOT NULL,
  `founderTitleId` int(11) NOT NULL,
  `founderDepartmentId` int(11) NOT NULL,
  `colorId` int(11) NOT NULL,
  `airportId` int(11) NOT NULL,
  `userId` int(11) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `locations`
--

CREATE TABLE `locations` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `locations`
--

INSERT INTO `locations` (`id`, `name`, `createdAt`, `updatedAt`) VALUES
(2, 'خفارة المغادرون', '2020-06-14 21:18:40', '2020-06-14 21:18:40'),
(3, 'خفارة القادمون', '2020-06-14 21:19:37', '2020-06-14 21:19:37'),
(4, 'خفارة المحولون', '2020-06-14 21:19:47', '2020-06-14 21:19:47'),
(5, 'دخول / خروج الموظفين المغادرة', '2020-06-14 21:25:47', '2020-06-14 21:25:47'),
(6, 'دخول / خروج الموظفين القادمون ( الاستقبال)', '2020-06-14 21:26:04', '2020-06-14 21:26:04'),
(7, 'دخول / خروج الموظفين المستوى الارضي', '2020-06-14 21:26:15', '2020-06-14 21:26:15'),
(8, 'مبنى الشحن الجوي', '2020-06-14 21:26:26', '2020-06-14 21:26:26'),
(9, 'بوابة الصيانة', '2020-06-14 21:26:34', '2020-06-14 21:26:34'),
(10, 'البوابة الرئيسية', '2020-06-14 21:26:44', '2020-06-14 21:26:44'),
(11, 'مبنى التموين', '2020-06-14 21:26:52', '2020-06-14 21:26:52'),
(12, 'مبنى الملاحين', '2020-06-14 21:27:00', '2020-06-14 21:27:00'),
(13, 'مبنى المبعدين', '2020-06-14 21:27:08', '2020-06-14 21:27:08');

-- --------------------------------------------------------

--
-- Table structure for table `models`
--

CREATE TABLE `models` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `categoryId` int(11) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `models`
--

INSERT INTO `models` (`id`, `name`, `categoryId`, `createdAt`, `updatedAt`) VALUES
(2, 'ابل', 1, '2020-06-14 23:55:41', '2020-06-14 23:55:41'),
(3, 'سامسونج', 1, '2020-06-14 23:55:51', '2020-06-14 23:55:51'),
(4, 'سوني', 1, '2020-06-14 23:55:59', '2020-06-14 23:55:59'),
(5, 'ال جي', 1, '2020-06-14 23:56:06', '2020-06-14 23:56:06'),
(6, 'الكاتيل', 1, '2020-06-14 23:56:16', '2020-06-14 23:56:16'),
(7, 'شاومي', 1, '2020-06-14 23:57:33', '2020-06-14 23:57:33'),
(8, 'نوكيا', 1, '2020-06-14 23:57:46', '2020-06-14 23:57:46'),
(9, 'موتورولا', 1, '2020-06-14 23:57:53', '2020-06-14 23:57:53'),
(10, 'بلاك بيري', 1, '2020-06-14 23:58:01', '2020-06-14 23:58:01'),
(11, 'لينوفو', 1, '2020-06-14 23:58:13', '2020-06-14 23:58:13'),
(12, 'اسس', 1, '2020-06-14 23:58:19', '2020-06-14 23:58:19'),
(13, 'انفينيكس', 1, '2020-06-14 23:58:46', '2020-06-14 23:58:46'),
(51, 'اخرى', 1, '2020-06-18 13:00:35', '2020-06-18 13:00:35'),
(52, 'Rolex', 13, '2020-06-18 13:36:56', '2020-06-18 13:36:56'),
(53, 'Tag Heuer', 13, '2020-06-18 13:37:08', '2020-06-18 13:37:08'),
(54, 'Rado', 13, '2020-06-18 13:37:18', '2020-06-18 13:37:18'),
(55, 'Omega', 13, '2020-06-18 13:37:25', '2020-06-18 13:37:25'),
(56, 'Breitling', 13, '2020-06-18 13:37:32', '2020-06-18 13:37:32'),
(57, 'Patek Philippe', 13, '2020-06-18 13:37:42', '2020-06-18 13:37:42'),
(58, 'Tissot', 13, '2020-06-18 13:37:51', '2020-06-18 13:37:51'),
(59, 'apple', 13, '2020-06-18 13:37:58', '2020-06-18 13:37:58'),
(60, 'samsung', 13, '2020-06-18 13:38:13', '2020-06-18 13:38:13'),
(61, 'huawei', 13, '2020-06-18 13:38:19', '2020-06-18 13:38:19'),
(62, 'google', 13, '2020-06-18 13:38:28', '2020-06-18 13:38:28'),
(63, 'اخرى', 13, '2020-06-18 13:38:36', '2020-06-18 13:38:36'),
(64, 'محفظة نقود', 14, '2020-06-18 13:40:09', '2020-06-18 13:40:09'),
(65, 'محفظة الكترونيه', 14, '2020-06-18 13:40:28', '2020-06-18 13:40:28'),
(66, 'بولو', 15, '2020-06-18 13:41:22', '2020-06-18 13:41:22'),
(67, 'راى بان', 15, '2020-06-18 13:41:31', '2020-06-18 13:41:31'),
(68, 'كاريرا', 15, '2020-06-18 13:41:39', '2020-06-18 13:41:39'),
(69, 'gargoyles', 15, '2020-06-18 13:41:46', '2020-06-18 13:41:46'),
(70, 'ماركولين', 15, '2020-06-18 13:41:52', '2020-06-18 13:41:52'),
(71, 'ماكو', 15, '2020-06-18 13:41:59', '2020-06-18 13:41:59'),
(72, 'Vogue', 15, '2020-06-18 13:42:05', '2020-06-18 13:42:05'),
(73, 'سولو', 15, '2020-06-18 13:42:11', '2020-06-18 13:42:11'),
(74, 'كالفن كلاين', 15, '2020-06-18 13:42:20', '2020-06-18 13:42:20'),
(75, 'لاكوست', 15, '2020-06-18 13:42:27', '2020-06-18 13:42:27'),
(76, 'بوليسي', 15, '2020-06-18 13:42:33', '2020-06-18 13:42:33'),
(77, 'ريبان', 15, '2020-06-18 13:42:39', '2020-06-18 13:42:39'),
(78, 'نوتيكا', 15, '2020-06-18 13:42:45', '2020-06-18 13:42:45'),
(79, 'الدو', 15, '2020-06-18 13:42:53', '2020-06-18 13:42:53'),
(80, 'جوجل', 15, '2020-06-18 13:43:01', '2020-06-18 13:43:01'),
(81, 'هواوي', 15, '2020-06-18 13:43:10', '2020-06-18 13:43:10'),
(82, 'اخرى', 15, '2020-06-18 13:43:18', '2020-06-18 13:43:18'),
(83, 'ابل', 16, '2020-06-18 13:45:07', '2020-06-18 13:45:07'),
(84, 'لينوفو', 16, '2020-06-18 13:45:13', '2020-06-18 13:45:13'),
(85, 'الينوار', 16, '2020-06-18 13:45:20', '2020-06-18 13:45:20'),
(86, 'اسس', 16, '2020-06-18 13:45:27', '2020-06-18 13:45:27'),
(87, 'سوني', 16, '2020-06-18 13:45:33', '2020-06-18 13:45:33'),
(88, 'جاتواي', 16, '2020-06-18 13:45:41', '2020-06-18 13:45:41'),
(89, 'توشيبا', 16, '2020-06-18 13:45:48', '2020-06-18 13:45:48'),
(90, 'اتش بي', 16, '2020-06-18 13:45:59', '2020-06-18 13:45:59'),
(91, 'ديل', 16, '2020-06-18 13:46:07', '2020-06-18 13:46:07'),
(92, 'ايسر', 16, '2020-06-18 13:46:14', '2020-06-18 13:46:14'),
(93, 'اخرى', 16, '2020-06-18 13:46:25', '2020-06-18 13:46:25'),
(94, 'سامسونج', 17, '2020-06-18 13:46:54', '2020-06-18 13:46:54'),
(95, 'امازون', 17, '2020-06-18 13:47:01', '2020-06-18 13:47:01'),
(96, 'هواوي', 17, '2020-06-18 13:47:07', '2020-06-18 13:47:07'),
(97, 'ابل', 17, '2020-06-18 13:47:14', '2020-06-18 13:47:14'),
(98, 'اسس', 17, '2020-06-18 13:47:20', '2020-06-18 13:47:20'),
(99, 'ال جي', 17, '2020-06-18 13:47:30', '2020-06-18 13:47:30'),
(100, 'لينوفو', 17, '2020-06-18 13:47:37', '2020-06-18 13:47:37'),
(101, 'توشيبا', 17, '2020-06-18 13:47:43', '2020-06-18 13:47:43'),
(102, 'اتش بي', 17, '2020-06-18 13:47:53', '2020-06-18 13:47:53'),
(103, 'اخرى', 17, '2020-06-18 13:48:01', '2020-06-18 13:48:01'),
(104, 'البطاقة الشخصيه / بطاقه العمل', 18, '2020-06-18 13:49:02', '2020-06-18 13:49:02'),
(105, 'جواز سفر', 18, '2020-06-18 13:49:10', '2020-06-18 13:50:53'),
(106, 'تصريح المطار', 18, '2020-06-18 13:49:27', '2020-06-18 13:49:27'),
(107, 'مستندات', 18, '2020-06-18 13:49:42', '2020-06-18 13:49:42'),
(108, 'مفاتيح  خاصه بالمركبات', 19, '2020-06-18 13:52:06', '2020-06-18 13:52:06'),
(109, 'مفاتيح آخرى', 19, '2020-06-18 13:52:36', '2020-06-18 13:52:36'),
(110, 'عطور', 20, '2020-06-18 13:58:39', '2020-06-18 13:58:39'),
(111, 'مستحضرات تجميلية', 20, '2020-06-18 13:58:52', '2020-06-18 13:58:52'),
(112, 'حقيبه يدويه', 21, '2020-06-18 14:00:21', '2020-06-18 14:00:21'),
(113, 'حقيبه شحن', 21, '2020-06-18 14:00:37', '2020-06-18 14:00:37'),
(114, 'حقيبه دوبلوماسيه', 21, '2020-06-18 14:00:48', '2020-06-18 14:00:48'),
(115, 'اخرى', 22, '2020-06-18 14:01:37', '2020-06-18 14:01:37');

-- --------------------------------------------------------

--
-- Table structure for table `sequelizemeta`
--

CREATE TABLE `sequelizemeta` (
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `sequelizemeta`
--

INSERT INTO `sequelizemeta` (`name`) VALUES
('00000-fix-db-charset.js'),
('20200223224429-create-airport.js'),
('20200323215555-create-user.js'),
('20200525004450-create-category.js'),
('20200525004627-create-model.js'),
('20200525004711-create-location.js'),
('20200525004723-create-founder-title.js'),
('20200525004742-create-founder-department.js'),
('20200525004809-create-color.js'),
('20200525005205-create-item.js');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `airportId` int(11) NOT NULL,
  `password` varchar(500) NOT NULL,
  `role` enum('admin','user') NOT NULL DEFAULT 'user',
  `name` varchar(255) DEFAULT NULL,
  `username` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `airports`
--
ALTER TABLE `airports`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `name` (`name`);

--
-- Indexes for table `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `colors`
--
ALTER TABLE `colors`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `founderdepartments`
--
ALTER TABLE `founderdepartments`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `foundertitles`
--
ALTER TABLE `foundertitles`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `items`
--
ALTER TABLE `items`
  ADD PRIMARY KEY (`id`),
  ADD KEY `categoryId` (`categoryId`),
  ADD KEY `modelId` (`modelId`),
  ADD KEY `locationId` (`locationId`),
  ADD KEY `founderTitleId` (`founderTitleId`),
  ADD KEY `founderDepartmentId` (`founderDepartmentId`),
  ADD KEY `colorId` (`colorId`),
  ADD KEY `airportId` (`airportId`),
  ADD KEY `userId` (`userId`);

--
-- Indexes for table `locations`
--
ALTER TABLE `locations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `models`
--
ALTER TABLE `models`
  ADD PRIMARY KEY (`id`),
  ADD KEY `categoryId` (`categoryId`);

--
-- Indexes for table `sequelizemeta`
--
ALTER TABLE `sequelizemeta`
  ADD PRIMARY KEY (`name`),
  ADD UNIQUE KEY `name` (`name`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `username` (`username`),
  ADD KEY `airportId` (`airportId`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `airports`
--
ALTER TABLE `airports`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `categories`
--
ALTER TABLE `categories`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;

--
-- AUTO_INCREMENT for table `colors`
--
ALTER TABLE `colors`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT for table `founderdepartments`
--
ALTER TABLE `founderdepartments`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `foundertitles`
--
ALTER TABLE `foundertitles`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

--
-- AUTO_INCREMENT for table `items`
--
ALTER TABLE `items`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `locations`
--
ALTER TABLE `locations`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT for table `models`
--
ALTER TABLE `models`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=116;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `items`
--
ALTER TABLE `items`
  ADD CONSTRAINT `items_ibfk_1` FOREIGN KEY (`categoryId`) REFERENCES `categories` (`id`),
  ADD CONSTRAINT `items_ibfk_2` FOREIGN KEY (`modelId`) REFERENCES `models` (`id`),
  ADD CONSTRAINT `items_ibfk_3` FOREIGN KEY (`locationId`) REFERENCES `locations` (`id`),
  ADD CONSTRAINT `items_ibfk_4` FOREIGN KEY (`founderTitleId`) REFERENCES `foundertitles` (`id`),
  ADD CONSTRAINT `items_ibfk_5` FOREIGN KEY (`founderDepartmentId`) REFERENCES `founderdepartments` (`id`),
  ADD CONSTRAINT `items_ibfk_6` FOREIGN KEY (`colorId`) REFERENCES `colors` (`id`),
  ADD CONSTRAINT `items_ibfk_7` FOREIGN KEY (`airportId`) REFERENCES `airports` (`id`),
  ADD CONSTRAINT `items_ibfk_8` FOREIGN KEY (`userId`) REFERENCES `users` (`id`);

--
-- Constraints for table `models`
--
ALTER TABLE `models`
  ADD CONSTRAINT `models_ibfk_1` FOREIGN KEY (`categoryId`) REFERENCES `categories` (`id`);

--
-- Constraints for table `users`
--
ALTER TABLE `users`
  ADD CONSTRAINT `users_ibfk_1` FOREIGN KEY (`airportId`) REFERENCES `airports` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
