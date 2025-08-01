-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Aug 01, 2025 at 05:21 AM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.0.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `user_details`
--

-- --------------------------------------------------------

--
-- Table structure for table `permissions`
--

CREATE TABLE `permissions` (
  `id` int(11) NOT NULL,
  `permissions` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `roles`
--

CREATE TABLE `roles` (
  `id` int(11) NOT NULL,
  `roles` varchar(255) NOT NULL DEFAULT 'Admin'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `Name` varchar(255) NOT NULL,
  `Email` varchar(255) NOT NULL,
  `Password` varchar(255) NOT NULL,
  `roles` varchar(255) NOT NULL DEFAULT 'Admin',
  `creator` varchar(255) DEFAULT NULL,
  `isActive` tinyint(1) NOT NULL DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `Name`, `Email`, `Password`, `roles`, `creator`, `isActive`) VALUES
(1, 'a.a', 'hello10@yopmail.com', '$2b$10$9MOi2dbZsadg6JlE38Rd3.Ep3do953nP6xFNJFzbhwnQdNLa3nWXa', 'Admin', NULL, 0),
(2, 'byeee', 'hello14@yopmail.com', '$2b$10$hOHCXeSnW0uYWavO9mBFteziRg.GN8OTBofv2P64oeIEWX.Mbgiju', 'User', 'hello10@yopmail.com', 0),
(3, 'hello1', 'hello1@yopmail.com', '$2b$10$.Kqr.oyCpyrLeWZqQu62PONeUmTLyuulvAL0Yd.Qbl1UMQ7mj.vuu', 'Admin', NULL, 0),
(4, 'hello2', 'hello2@yopmail.com', '$2b$10$cYN6R3i5W7/ACwFtRWErtu4IbdFeZHNgpoWEDswMpXcBJemaZukN.', 'User', 'hello1@yopmail.com', 0),
(5, 'hello3', 'hello3@yopmail.com', '$2b$10$HFcngc1B5aI1v80CKBJh4.kd9MozkolsNY3/5NkwLF/ZFxqZMSsh.', 'Student', 'hello1@yopmail.com', 1),
(6, 'hello5', 'hello5@yopmail.com', '$2b$10$/0C.scceqK.bWb9qZkB7SOfo4S/aWW490NhQD6B3ZIOQpUEwmA9ga', 'Admin', NULL, 1),
(7, 'hello6', 'hello6@yopmail.com', '$2b$10$tX5PT2g7SBvAaah9/kI4te986LriDVetcTExCAAX/wU1XVbNjuUQu', 'Student', 'hello5@yopmail.com', 0),
(8, 'hello7', 'hello7@yopmail.com', '$2b$10$.ned.SlYI0l9JQYiGMTFYupjzDI9B369N0jhUhzUgucR/imaJxeG6', 'Teacher', 'hello5@yopmail.com', 0),
(9, 'hello4', 'hello4@yopmail.com', '$2b$10$gOf9KfPuqTmGW76KQJ0I2uqAnqqa4ADOMvlt8ZfMjBU7K7gTg30w2', 'Admin', NULL, 1),
(10, 'hello5', 'hello9@yopmail.com', '$2b$10$T4jZ3gPNLH7CYmcH2TWSSu0kbUdF/W034gSf3Kie304Rq4/8GEHXC', 'Teacher', 'hello4@yopmail.com', 1),
(11, 'hello10', 'hello12@yopmail.com', '$2b$10$CpwWqq8Vx6eFkkF8GLvWp.mY8J6Ffp.XBHK289LlTK8Es8asKGi7O', 'Student', 'hello5@yopmail.com', 1),
(12, 'hello4', 'hello13@yopmail.com', '$2b$10$64ylLOjKpWKs48bOitlrJuO3dOAI19zYU1bcpaJpIUM/EFztPpfJy', 'Admin', NULL, 1),
(13, 'Test9', 'hello15@yopmail.com', '$2b$10$fJXvSVVwWg73ZiK4wGrODOZz6s5rtXG9CWgOixrqYJdEDJpYeg8I.', 'Teacher', 'hello4@yopmail.com', 0),
(14, 'hello8', 'hello8@yopmail.com', '$2b$10$92fFU5aOa3anC9slHSa8UerR//QmVrvkfLdKsTZhKkJ1yUDT3xncG', 'Admin', NULL, 1),
(15, 'a.a', 'hello16@yopmail.com', '$2b$10$bEZK3NFGgiJwM/zMjB2BceWq.3EifFxxm7NU1.SFUQz9g2GpGWYBC', 'Student', 'hello8@yopmail.com', 0),
(16, 'hello17', 'hello18@yopmail.com', '$2b$10$2B0/W2cg8bfqsSUGnH0NB.vW1PkrM97CwOLwix6j3TVJj0vfUwQzu', 'Teacher', 'hello8@yopmail.com', 0),
(17, 'hello', 'adnanarisha0@gmail.com', '$2b$10$5PgzDizAxNajtUnTjRsVmuECE/0PA6dRz51MIQr1QVXZC8KCnnFH2', 'Student', 'hello8@yopmail.com', 0),
(18, 'Test9', 'hello20@yopmail.com', '$2b$10$OGksI8RAHiyMrnx20iwcXOYa78qeomYJYRBuFjKbwcjs./CH3lY3e', 'Student', 'hello5@yopmail.com', 0),
(19, 'a.a', 'hello21@gmail.com', '$2b$10$SB/B6UfpdvouhGvbuJWoeOCZLqhtKxI9ysu9Pztwp6DgQqNDY.Fem', 'Teacher', 'hello1@yopmail.com', 1),
(20, 'Test8', 'hello22@gmail.com', '$2b$10$.HxAMAGlmW6Oj3cyhtdgluJxOwasLjv0ShUXvPpSggKFxncEOvcZK', 'Student', 'hello4@yopmail.com', 1);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `permissions`
--
ALTER TABLE `permissions`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `roles`
--
ALTER TABLE `roles`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `permissions`
--
ALTER TABLE `permissions`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `roles`
--
ALTER TABLE `roles`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
