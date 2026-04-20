---
title: "App Carrito de Compras Simple"
meta_title: "App Carrito de Compras Simple"
description: "Descripción del Proyecto del App Carrito de Compras Simple"
date: 2026-02-05T05:00:00Z
image: "/images/image-placeholder.png"
categories: ["App", "React Native"]
author: "Juan Carlos Garcia"
tags: ["React Native", "Expo", "App", "Mobile"]
draft: false
---

### Descripción del Proyecto

{{< notice "info" >}} **Carrito de Compras Simple** es una aplicación móvil desarrollada con React Native y Expo, diseñada para ofrecer una experiencia intuitiva, rápida y fluida en la gestión de compras y catálogos de productos. {{< /notice >}}

El objetivo principal de la aplicación es facilitar a los usuarios la creación y administración de listas de compras detalladas, al mismo tiempo que les permite llevar un registro de diferentes tiendas y los productos asignados a ellas. Esto sienta las bases para futuras implementaciones de comparación de precios.

La aplicación destaca por tener un diseño minimalista, priorizando una interfaz limpia, con componentes gráficos basados en "chips", un enfoque en tipografías claras, soporte para entorno visual oscuro (Dark Mode) y fluidez en sus interacciones.

### Características Principales

- **Gestión de Carritos:** Creación, visualización y organización de múltiples listas de compras. En la pantalla principal, los usuarios pueden consultar información clave como el título, la fecha y el costo total del carrito.
- **Detalle de Productos:** Visualización minuciosa de los artículos contemplados en cada carrito, especificando el nombre, el precio, la cantidad unitaria y el importe acumulado del producto en cuestión.
- **Acciones Dinámicas (Interacciones Táctiles):** Incorporación de paneles interactivos deslizables (swipeables) en las tarjetas de la interfaz, que permiten realizar acciones de edición o eliminación de forma ágil e intuitiva.
- **Directorio de Tiendas:** Funcionalidad dedicada para registrar y gestionar diversos establecimientos y sucursales. Esto permite contextualizar el catálogo y prepararlo referencialmente para características avanzadas de comparación económica.
- **Catálogo Integrado:** Interfaz designada para agrupar, listar y editar los productos y sus características globales directamente en la aplicación.
- **Almacenamiento Persistente Local:** Uso de AsyncStorage para el guardado local de toda la información (carritos, tiendas y productos), permitiendo una respuesta inmediata y una experiencia libre de latencias ligadas a conectividad web.
- **Módulos Nativos Complementarios:** Integración de accesibilidad directa al carrete de imágenes y cámara de fotos gracias a submódulos nativos, enriqueciendo la forma de visualizar los datos.

### Tecnologías y Librerías Utilizadas

#### Framework Núcleo
**React Native (v0.81)** junto con **Expo (SDK 54)**. El proyecto se encuentra construido implementando la Nueva Arquitectura (New Architecture) disponible.

#### Enrutamiento y Control de Datos
**React Navigation** implementando tanto navegación en pestañas inferiores (Bottom Tabs) como apilamiento estándar (Native Stack). **AsyncStorage** para la persistencia estructural a nivel celular.

#### Interactividad, Gestos e Interfaces Especializadas
**React Native Gesture Handler** en conjunto con utilidades de Animatable para el diseño fino del movimiento de los componentes. **Expo Camera** y **Expo Image Picker** para interfaces especializadas.

### Prerrequisitos y Configuración Inicial
Para abrir, editar y ejecutar este proyecto en un entorno local, se requiere Node.js, npm/yarn, y un emulador/simulador o un teléfono con Expo Go.

### Estilo Arquitectónico y Optimizaciones
El proyecto está diseñado manteniendo presentes fundamentos de experiencia de usuario de "alta fidelidad" y retención móvil. La navegación está dividida de tal forma que todo proceso fluye hacia adelante predeciblemente.

A nivel gráfico, todo ha sido estructurado en componentes y estilos estrictos de abstracción en `StyleSheet` para resguardar la máxima capacidad de la tasa de visualización sostenida a la que puede llegar el dispositivo inteligente. Todos los estilos visuales siguen una narrativa premium libre de inconsistencias y asiste a usuarios de primera vez por medio de ayudas de texto para el llenado preliminar de listados vacíos de información emparejado con validaciones para el ingreso asertivo de información.

### Código Fuente
Esta aplicación móvil muestra el manejo robusto de estado local y patrones modernos de desarrollo móvil. El repositorio completo está disponible en GitHub.
