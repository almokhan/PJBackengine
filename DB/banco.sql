SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";

CREATE TABLE `users` (
  `id` int(7) NOT NULL,
  `nome` varchar(100) NOT NULL,
  `cargo` varchar(75) NOT NULL,
  `email` varchar(75) NOT NULL,
  
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
