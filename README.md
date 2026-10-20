# Proyecto final — Calculadora en React Native

Proyecto de **React Nivel Avanzado**. Aplicación móvil básica para Android y iOS creada con **React Native + Expo + JavaScript**; está diseñada para abrirse en **Visual Studio Code** y ejecutarse en un emulador de **Android Studio** o mediante Expo Go.

> **Importante:** el enunciado pide React Native, no React para navegador. Por eso el proyecto usa componentes nativos (`View`, `Text`, `Pressable`) y no archivos HTML/CSS. Los estilos se crean con `StyleSheet`.

## Requisitos
- Node.js 20.19 o posterior (preferentemente versión LTS compatible con Expo SDK 54).
- Visual Studio Code.
- Android Studio con Android SDK y un dispositivo virtual configurado, **o** teléfono con Expo Go compatible.

## Cómo ejecutar
1. Descomprime el ZIP y abre `Calculadora_React_Native` en VS Code.
2. Abre una terminal en esa carpeta.
3. Ejecuta `npm install`.
4. Ejecuta `npx expo start`.
5. Pulsa **a** para abrir el emulador Android, si está iniciado y correctamente configurado. Alternativamente, escanea el QR con Expo Go.
6. Para ejecutar directamente el emulador: `npm run android`.

Para correr las pruebas de lógica: `npm test` (Node.js 20+).

Si Expo informa que algunas versiones no coinciden con el SDK instalado, ejecuta `npx expo install --fix` después de `npm install`.

## Funcionalidad
- Inicio con botón **Abrir calculadora** y navegación entre pantallas.
- Botones 0–9, decimal, suma, resta, multiplicación y división.
- Resultado visible en pantalla, operaciones encadenadas, porcentaje, cambio de signo, borrar y retroceso.
- Manejo de división entre cero con mensaje de error y recuperación pulsando un número o AC.
- Interfaz adaptable con Flexbox y controles táctiles accesibles.

## Estructura
```
App.js                         Navegación principal
src/screens/HomeScreen.js      Pantalla de inicio
src/screens/CalculatorScreen.js Pantalla de calculadora
src/components/CalcButton.js   Botón reutilizable
src/utils/calculator.js        Estado, eventos y operaciones
src/theme/colors.js            Paleta de diseño
tests/calculator.test.js       Pruebas de la lógica
docs/Diseno_y_arquitectura.pdf Documento de diseño y sketch
docs/Checklist_entrega.md      Verificación según rúbrica
```

## Notas técnicas
La evaluación se procesa secuencialmente: `2 + 3 × 4 = 20` (como una calculadora básica, **sin precedencia algebraica**). El porcentaje divide el número mostrado entre cien. La precisión de resultados se limita a 12 cifras significativas para evitar artefactos comunes de coma flotante.

Las dependencias se instalan con `npm install`: `node_modules` no está incluido en el ZIP. No se adjunta APK compilado; para obtener una compilación nativa, configura Android Studio y herramientas de compilación o Expo EAS.

## Evidencia y entrega
Revisar `docs/Diseno_y_arquitectura.pdf` y `docs/Checklist_entrega.md`. Se incluyen las fuentes del proyecto completo, no un proyecto compilado. Se recomienda adjuntar capturas obtenidas al ejecutarlo en el emulador si el docente las requiere.
# ReactAvanzado-Calculadora
