-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 16-11-2022 a las 20:39:12
-- Versión del servidor: 10.4.22-MariaDB
-- Versión de PHP: 8.1.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `devs_lutions`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `articulos`
--

CREATE TABLE `articulos` (
  `Id_Articulo` int(11) NOT NULL,
  `Nombre` varchar(40) NOT NULL,
  `Detalles` varchar(50) DEFAULT NULL,
  `Precio` double(8,2) NOT NULL DEFAULT 0.00,
  `Imagen` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `locales`
--

CREATE TABLE `locales` (
  `Id_Local` int(11) NOT NULL,
  `Nombre` varchar(30) NOT NULL,
  `Telefono` varchar(30) DEFAULT NULL,
  `Sitio_web` varchar(40) DEFAULT NULL,
  `Correo` varchar(30) NOT NULL,
  `Horario` varchar(50) NOT NULL,
  `Detalles` varchar(150) DEFAULT NULL,
  `Logo` varchar(50) DEFAULT NULL,
  `Id_ubicacion` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `pedidos`
--

CREATE TABLE `pedidos` (
  `Id_pedido` int(11) NOT NULL,
  `Id_usuario` int(11) NOT NULL,
  `Id_articulo` int(11) NOT NULL,
  `Total` double(8,2) NOT NULL,
  `Tiempo_Estimado` time NOT NULL,
  `Status` enum('Aceptado','Rechazado','Listo','Cocinándose','No se pudo completar','Atrasado') DEFAULT NULL,
  `Id_local` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `ubicaciones`
--

CREATE TABLE `ubicaciones` (
  `Id_ubicacion` int(11) NOT NULL,
  `Calle` varchar(30) NOT NULL,
  `Numero` int(5) DEFAULT NULL,
  `Colonia` varchar(30) DEFAULT NULL,
  `Edificio_Privada` varchar(30) DEFAULT NULL,
  `Codigo_postal` int(6) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `Id_Usuario` int(11) NOT NULL,
  `Nombre` varchar(30) NOT NULL,
  `Apellidos` varchar(30) NOT NULL,
  `Correo` varchar(30) NOT NULL,
  `Contrasena` varchar(50) NOT NULL,
  `Edad` int(11) NOT NULL,
  `Genero` enum('Masculino','Femenino','Otro') DEFAULT NULL,
  `Telefono` varchar(30) DEFAULT NULL,
  `Pago_Preferido` enum('Tarjeta','paypal','Efectivo','Mercado Pago') DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `articulos`
--
ALTER TABLE `articulos`
  ADD PRIMARY KEY (`Id_Articulo`);

--
-- Indices de la tabla `locales`
--
ALTER TABLE `locales`
  ADD PRIMARY KEY (`Id_Local`),
  ADD UNIQUE KEY `Correo` (`Correo`),
  ADD UNIQUE KEY `Telefono` (`Telefono`),
  ADD UNIQUE KEY `Sitio_web` (`Sitio_web`),
  ADD KEY `Id_ubicacion` (`Id_ubicacion`);

--
-- Indices de la tabla `pedidos`
--
ALTER TABLE `pedidos`
  ADD PRIMARY KEY (`Id_pedido`),
  ADD KEY `Id_usuario` (`Id_usuario`),
  ADD KEY `Id_articulo` (`Id_articulo`),
  ADD KEY `Id_local` (`Id_local`);

--
-- Indices de la tabla `ubicaciones`
--
ALTER TABLE `ubicaciones`
  ADD PRIMARY KEY (`Id_ubicacion`),
  ADD UNIQUE KEY `Numero` (`Numero`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`Id_Usuario`),
  ADD UNIQUE KEY `Correo` (`Correo`),
  ADD UNIQUE KEY `Telefono` (`Telefono`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `articulos`
--
ALTER TABLE `articulos`
  MODIFY `Id_Articulo` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `locales`
--
ALTER TABLE `locales`
  MODIFY `Id_Local` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `pedidos`
--
ALTER TABLE `pedidos`
  MODIFY `Id_pedido` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `ubicaciones`
--
ALTER TABLE `ubicaciones`
  MODIFY `Id_ubicacion` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `Id_Usuario` int(11) NOT NULL AUTO_INCREMENT;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `locales`
--
ALTER TABLE `locales`
  ADD CONSTRAINT `locales_ibfk_1` FOREIGN KEY (`Id_ubicacion`) REFERENCES `ubicaciones` (`Id_ubicacion`),
  ADD CONSTRAINT `locales_ibfk_2` FOREIGN KEY (`Id_ubicacion`) REFERENCES `ubicaciones` (`Id_ubicacion`);

--
-- Filtros para la tabla `pedidos`
--
ALTER TABLE `pedidos`
  ADD CONSTRAINT `pedidos_ibfk_1` FOREIGN KEY (`Id_usuario`) REFERENCES `usuarios` (`Id_Usuario`),
  ADD CONSTRAINT `pedidos_ibfk_2` FOREIGN KEY (`Id_articulo`) REFERENCES `articulos` (`Id_Articulo`),
  ADD CONSTRAINT `pedidos_ibfk_3` FOREIGN KEY (`Id_usuario`) REFERENCES `usuarios` (`Id_Usuario`),
  ADD CONSTRAINT `pedidos_ibfk_4` FOREIGN KEY (`Id_articulo`) REFERENCES `articulos` (`Id_Articulo`),
  ADD CONSTRAINT `pedidos_ibfk_5` FOREIGN KEY (`Id_local`) REFERENCES `locales` (`Id_Local`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
