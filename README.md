# TaskCampus — Gestor de tareas académicas

## 1. Descripción del proyecto

TaskCampus es una aplicación web desarrollada con React, JavaScript y Vite, orientada a la gestión de tareas académicas. El proyecto se construyó a partir de una base proporcionada, transformando una interfaz inicialmente estática en una aplicación interactiva que permite administrar tareas y visualizar su estado de manera dinámica.

Entre las principales mejoras realizadas se encuentra la posibilidad de **cambiar el estado de una tarea entre pendiente y completada**, funcionalidad que anteriormente no estaba disponible para las tareas creadas por el usuario. Esta modificación permite mantener una gestión más coherente de las actividades y actualizar los indicadores de tareas totales, completadas y pendientes.

También se incorporaron funcionalidades relacionadas con los contenidos formativos de React, entre ellas la edición del título directamente en línea, los indicadores de carga durante las operaciones y la búsqueda de tareas mediante texto. Estas funciones complementan los filtros por estado y permiten interactuar con la lista sin necesidad de recargar la página.

Además, se desarrolló el componente reutilizable `EmptyState.jsx`, encargado de mostrar un mensaje amigable acompañado de un emoji o icono cuando la lista de tareas está vacía o no existen resultados para los criterios seleccionados. El componente recibe mediante props el mensaje y el icono que debe mostrar, permitiendo adaptar su presentación a diferentes situaciones.

Por otra parte, se modificó el componente `Badge` para admitir una prop `onClick`. De esta manera, el indicador visual del estado de una tarea también puede utilizarse como un control interactivo para cambiarla directamente entre pendiente y completada.

Finalmente, se realizaron ajustes en los componentes y las hojas de estilo CSS para mejorar la presentación visual de la aplicación, organizar la información y destacar los indicadores de tareas totales, completadas y pendientes. Estas modificaciones buscan ofrecer una interfaz más clara, consistente y fácil de utilizar.

El proyecto utiliza JSONPlaceholder como API de práctica para la carga y las operaciones HTTP. Debido a las limitaciones de esta API, las modificaciones se mantienen en el estado local de la aplicación durante la sesión, sin garantizar su persistencia después de recargar la página.

## 2. Objetivos

### Objetivo general

Desarrollar una aplicación de gestión de tareas académicas mediante React y JavaScript, aplicando componentes reutilizables, administración del estado, formularios controlados, peticiones HTTP y renderizado dinámico.

### Objetivos específicos

- Implementar operaciones para crear, consultar, editar, completar y eliminar tareas.
- Incorporar filtros por estado y búsqueda por texto.
- Mantener sincronizados el listado de tareas y los indicadores del resumen.
- Implementar navegación entre las vistas Resumen, Tareas y Nueva tarea.
- Aplicar validaciones y mensajes para estados de carga, errores y listas vacías.
- Investigar y aplicar conceptos de estado derivado, actualización funcional e identificadores.
- Documentar el funcionamiento, las limitaciones y los procedimientos de ejecución del proyecto.

## 3. Funcionalidades implementadas

### 3.1. Gestión de tareas

- **Consultar tareas:** obtener las primeras diez tareas desde JSONPlaceholder.
- **Crear tareas:** mediante formulario controlado.
- **Cambiar estado:** entre pendiente y completada.
- **Editar tareas:** modificar el título directamente en el listado.
- **Eliminar tareas:** solicitar confirmación.
- **Validar títulos:** impedir títulos vacíos o compuestos únicamente por espacios en blanco.

### 3.2. Filtros y búsqueda

- Filtrar tareas por estado: Todas, Pendientes y Completadas.
- Buscar tareas mediante su título.
- Combinar la búsqueda por texto con el filtro seleccionado.
- Realizar búsquedas sin distinguir entre mayúsculas y minúsculas.

### 3.3. Resumen de tareas

- Mostrar el total de tareas.
- Mostrar las tareas completadas.
- Mostrar las tareas pendientes.
- Mostrar la cantidad de tareas visibles.
- Actualizar los contadores al crear, modificar, eliminar o filtrar tareas.

### 3.4. Componentes y experiencia de usuario

- **EmptyState.jsx:** componente reutilizable que muestra un mensaje, icono o emoji cuando no existen tareas o resultados. Recibe estos elementos mediante props.
- **Badge:** componente visual del estado que admite la prop `onClick` para alternar entre pendiente y completada.
- **Edición en línea:** permite editar el título mediante doble clic. La edición se guarda al presionar Enter o al perder el foco, siempre que el título sea válido.
- **Carga y errores:** muestra indicadores durante las operaciones y deshabilita los controles correspondientes mientras existe una operación pendiente.
- **Estilos:** se modificaron para mejorar la organización, la legibilidad y la presentación de los contadores.

## 4. Vistas de la aplicación

### Resumen

Presenta los contadores generales de tareas y la cantidad de tareas visibles según el filtro aplicado.

### Tareas

Muestra el listado de tareas, los filtros, la búsqueda y las acciones para cambiar el estado, editar o eliminar tareas.

### Nueva tarea

Contiene el formulario para crear tareas y muestra mensajes de validación y resultados de la operación.

La navegación entre las vistas se realiza sin recargar la página y conserva las tareas y los filtros durante la sesión.

## 5. Tecnologías utilizadas

- **React:** desarrollo de la interfaz mediante componentes.
- **JavaScript:** lógica de la aplicación y gestión de datos.
- **JSX:** definición de la estructura de los componentes.
- **Vite:** herramienta de desarrollo y compilación.
- **CSS:** estilos y presentación visual.
- **JSONPlaceholder:** API utilizada para practicar la carga y las operaciones HTTP.
- **Git y GitHub:** control de versiones y alojamiento del repositorio.

## 6. Requisitos previos y versiones

Para ejecutar el proyecto se requiere:

- Node.js compatible.
- npm, incluido con Node.js.
- Git, si se desea clonar el repositorio.
- Conexión a Internet para instalar las dependencias y acceder a JSONPlaceholder.

### Versiones del entorno

| Herramienta | Versión |
|---|---|
| Node.js | v24.16.0 |
| npm | 11.13.0 |
| React | 19.2.8 |
| React DOM | 19.2.8 |
| Vite | 8.3.0 |

Las versiones de Node.js y npm corresponden al entorno local utilizado.

## 7. Estructura del proyecto

La siguiente estructura es orientativa y debe ajustarse a la estructura real del repositorio.

```text
taskcampus/
├── public/
│   ├── favicon.svg
│   └── icons.svg
├── src/
│   ├── assets/
│   │   ├── hero.png
│   │   ├── react.svg
│   │   └── vite.svg
│   ├── components/
│   │   ├── Button.jsx
│   │   ├── Header.jsx
│   │   ├── Modal.jsx
│   │   ├── Navigation.jsx
│   │   ├── TaskForm.jsx
│   │   ├── TaskItem.jsx
│   │   ├── TaskList.jsx
│   │   └── TaskSummary.jsx
│   ├── hooks/
│   │   └── useTareas.js
│   ├── services/
│   │   └── tareasService.js
│   ├── views/
│   │   ├── NewTaskView.jsx
│   │   ├── SummaryView.jsx
│   │   └── TasksView.jsx
│   ├── App.css
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── .gitignore
├── README.md
├── eslint.config.js
├── index.html
├── package-lock.json
└── package.json
```

## 8. Instalación y ejecución

### 8.1. Clonar el repositorio

```bash
git clone URL_DEL_REPOSITORIO
cd NOMBRE_DE_LA_CARPETA
```

Reemplazar `URL_DEL_REPOSITORIO` y `NOMBRE_DE_LA_CARPETA` por la dirección real del repositorio y el nombre de la carpeta correspondiente.

### 8.2. Instalar dependencias

```bash
npm install
```

### 8.3. Ejecutar el proyecto

```bash
npm run dev
```

Vite mostrará la dirección local para acceder a la aplicación, comúnmente:

```text
http://localhost:5173
```

### 8.4. Compilar el proyecto

```bash
npm run build
```

### 8.5. Previsualizar la compilación

```bash
npm run preview
```

### 8.6. Verificar las versiones y dependencias

```bash
node -v
npm -v
npm ls vite react react-dom
```

Los dos primeros comandos muestran las versiones de Node.js y npm. El último muestra las dependencias instaladas.

## 9. Investigación aplicada

## 9. Investigación aplicada

### 9.1. Navegación por pestañas mediante renderizado condicional frente a React Router

En aplicaciones web de página única (SPA), la alternancia entre secciones puede resolverse mediante renderizado condicional con estado local o utilizando librerías de enrutamiento como React Router. Para este proyecto se aplicó renderizado condicional basado en una variable de estado en el componente principal (`vistaActiva`), evaluando qué vista mostrar en cada momento.

Esta solución ofrece la ventaja de mantener una estructura liviana, sin agregar dependencias externas ni sobrecarga innecesaria para una aplicación centrada en tres vistas principales. Además, permite que las tareas creadas o modificadas durante la sesión permanezcan en memoria al cambiar de vista, sin recargar la página.

Por su parte, librerías como React Router resultan más convenientes en proyectos de mayor escala donde se requiere navegación con historial del navegador, enlaces directos a URL específicas (*deep linking*) o carga diferida de rutas.

**Implementación en el proyecto:**
- `src/App.jsx`: gestión de `vistaActiva` y renderizado condicional.
- `src/components/Navigation.jsx`: botones para cambiar entre vistas.
- `src/views/`: componentes correspondientes a Resumen, Tareas y Nueva Tarea.

**Evidencias:**
- [Código de navegación](./evidencias/01-navegacion-codigo.png)
- [Navegación en la interfaz](./evidencias/02-navegacion-interfaz.png)

### 9.2. Estado derivado frente a variables de estado duplicadas

El estado derivado consiste en calcular valores a partir del estado ya existente durante la fase de renderizado, en lugar de almacenarlos en variables de estado adicionales con `useState`.

En la aplicación, los contadores de tareas totales, completadas y pendientes, así como la cantidad de tareas visibles según los filtros, corresponden a estado derivado calculado directamente desde el arreglo principal de tareas.

Guardar estos valores en estados independientes generaría redundancia y el riesgo de que queden desincronizados al crear, modificar o eliminar tareas. Calcularlos directamente en cada render asegura coherencia en los datos, simplifica la lógica de los componentes y evita actualizaciones de estado innecesarias.

**Implementación en el proyecto:**
- `src/App.jsx`: cálculo de contadores mediante `length` y `filter()`.
- `src/views/SummaryView.jsx`: visualización de los contadores.
- `src/views/TasksView.jsx`: cálculo de tareas visibles según filtros y búsqueda.

**Evidencias:**
- [Código del estado derivado](./evidencias/03-estado-derivado-codigo.png)
- [Contadores en la interfaz](./evidencias/04-estado-derivado-interfaz.png)

### 9.3. Actualización funcional del estado en React (`setEstado(prev => ...)`)

La actualización funcional consiste en pasar una función como argumento al actualizador del estado (`setTareas(prev => ...)`), recibiendo como parámetro el valor más reciente del estado anterior.

Este patrón es fundamental cuando el nuevo valor depende directamente del estado previo o cuando ocurren múltiples actualizaciones seguidas.

Debido a que React puede agrupar las actualizaciones de estado, utilizar directamente la referencia al estado del ámbito actual puede ocasionar lecturas de valores desactualizados. La forma funcional permite calcular cada actualización a partir del estado pendiente más reciente.

En TaskCampus, este mecanismo se combina con operaciones inmutables sobre arreglos, evitando modificar directamente el estado existente y reduciendo las inconsistencias al agregar, editar o eliminar tareas.

**Implementación en el proyecto:**
- `src/hooks/useTareas.js`: funciones `crearTarea`, `actualizarTarea` y `eliminarTarea`.
- Uso de `setTareas((prev) => ...)` junto con operaciones como `map()` y `filter()`.

**Evidencias:**
- [Actualización funcional al crear tareas](./evidencias/05-actualizacion-crear.png)
- [Actualización funcional al editar y eliminar tareas](./evidencias/06-actualizacion-editar-eliminar.png)

### 9.4. Uso del índice del arreglo frente a identificadores únicos como `key` en listas

La propiedad `key` ayuda a React a identificar qué elementos de una lista han cambiado, se han agregado o se han eliminado para actualizar la interfaz de manera eficiente.

Asignar el índice del arreglo (`key={index}`) puede generar errores visuales e inconsistencias de estado si la lista cambia de orden, se filtra o se eliminan elementos, ya que los índices se reasignan dinámicamente y React puede confundir la identidad de los componentes.

Por esta razón, se utilizan identificadores únicos para cada tarea (`key={tarea.id}`). Esto permite que cada elemento conserve su identidad mientras su identificador permanezca estable, facilitando la reconciliación de React y evitando problemas al interactuar con el listado.

En TaskCampus, las tareas obtenidas desde JSONPlaceholder conservan sus identificadores y las tareas creadas localmente reciben un identificador generado mediante `Date.now()`. Este último método resulta suficiente para una simulación básica, aunque no garantiza unicidad absoluta.

**Implementación en el proyecto:**
- `src/components/TaskList.jsx`: uso de `key={tarea.id}` al renderizar las tareas.
- `src/hooks/useTareas.js`: asignación de identificadores a tareas creadas localmente.
- `src/services/tareasService.js`: comunicación con JSONPlaceholder mediante operaciones HTTP.

**Evidencias:**
- [Operaciones GET y POST](./evidencias/07-api-get-post.png)
- [Operaciones PATCH y DELETE](./evidencias/08-api-patch-delete.png)
- [Generación de identificadores](./evidencias/09-identificadores.png)
- [Comunicación con la API desde DevTools](./evidencias/10-api-network.png)

### 9.5. Conclusión de la investigación

La investigación permitió aplicar conceptos fundamentales de React en el desarrollo de TaskCampus, relacionando los fundamentos teóricos con su implementación práctica.

Se utilizó renderizado condicional para gestionar las vistas sin incorporar una librería de enrutamiento, estado derivado para evitar información redundante, actualizaciones funcionales para gestionar de manera segura las tareas e identificadores para mantener la identidad de los elementos renderizados.

Las capturas almacenadas en la carpeta [`evidencias`](./evidencias/) permiten comprobar tanto la implementación en el código fuente como el funcionamiento de las características desarrolladas.

## 10. Fuentes consultadas

Fuentes oficiales. Incluir únicamente las que hayan sido consultadas.

1. React — Updating Arrays in State: https://react.dev/learn/updating-arrays-in-state
2. React — Managing State: https://react.dev/learn/managing-state
3. React — Sharing State Between Components: https://react.dev/learn/sharing-state-between-components
4. Vite — Getting Started: https://vite.dev/guide/
5. JSONPlaceholder — Guide: https://jsonplaceholder.typicode.com/guide/
6. MDN — Fetch API: https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API

## 11. Limitaciones conocidas

1. Falta de persistencia permanente: utiliza JSONPlaceholder, una API de prueba que no guarda permanentemente los cambios realizados en las tareas.
2. Manejo de errores limitado: ciertos errores pueden ocultar la lista de tareas y dificultar la continuidad del uso de la aplicación.
3. Validación inconsistente de formularios: las reglas para validar los títulos de las tareas son diferentes al crear y editar una tarea.
4. Edición poco intuitiva: para editar el título de una tarea es necesario hacer doble clic, sin un botón visible que indique esta opción.
5. Adaptabilidad móvil limitada: la interfaz podría presentar problemas de distribución en pantallas pequeñas, especialmente en las filas de tareas y sus botones.
6. Accesibilidad mejorable: faltan algunas etiquetas asociadas a los campos, y la edición y los diálogos de confirmación podrían facilitar más la navegación mediante teclado.
7. Uso de datos genéricos: las tareas iniciales provienen de una API de demostración y no representan necesariamente asignaturas o actividades académicas reales.
8. Código innecesario o sin utilizar: existen importaciones y constantes que no se utilizan, además de un intervalo que escribe mensajes periódicos en la consola sin aportar funcionalidad al usuario.
9. Componente incompleto: ActionButton.jsx utiliza un componente Button que no está importado, lo que debe corregirse antes de utilizarlo.
10. Posibles conflictos de estilos: algunos estilos globales se definen tanto en index.css como en App.css, lo que puede ocasionar diferencias en la presentación de la interfaz.

## 12. Comparación entre la base proporcionada y el desarrollo realizado

| Aspecto | Base entregada por el profesor | Mi proyecto actual | Diferencia |
|---|---|---|---|
| Interfaz principal | Muestra encabezado, resumen, listado y botón de acciones. | Organiza la interfaz con resumen, formulario, filtros, lista y modal. | Ampliación de la interfaz. |
| Componentes React | Utiliza `Header`, `TaskSummary`, `TaskList` y `ActionButton`. | Conserva los componentes principales y agrega `TaskForm`, `Card`, `Button`, `Badge`, `EmptyState` y `Modal`. | Mayor modularidad. |
| Props | Pasa título, descripción y un número fijo al resumen. | Pasa tareas, estados, filtros y funciones para modificar los datos. | Comunicación más completa entre componentes. |
| Listado de tareas | Presenta tres tareas escritas manualmente en un arreglo. | Obtiene tareas desde una API y las representa mediante `map()`. | Lista dinámica. |
| Creación de tareas | No dispone de un formulario para agregar tareas. | Permite crear tareas desde un formulario controlado. | Nueva funcionalidad. |
| Completar tareas | El botón «Seleccionar» muestra una alerta; no completa la tarea. | Permite marcar tareas como completadas y desmarcarlas. | Nueva funcionalidad. |
| Eliminación | No permite eliminar tareas. | Permite eliminar tareas mediante una ventana de confirmación. | Nueva funcionalidad. |
| Edición | No permite editar tareas. | Permite editar el título mediante doble clic. | Nueva funcionalidad. |
| Filtros | No dispone de filtros. | Permite ver todas las tareas, las pendientes o las completadas. | Nueva funcionalidad. |
| Búsqueda | No tiene buscador. | Permite buscar tareas por título. | Nueva funcionalidad. |
| Resumen | Muestra un número fijo de tres tareas pendientes. | Calcula el total, las completadas, las pendientes y las tareas mostradas según el filtro actual. | Información dinámica. |
| Formularios y validación | No incluye formularios. | Valida que el título tenga al menos tres caracteres al crear una tarea. | Nueva funcionalidad, aunque la edición aplica reglas diferentes. |
| Estado de React | No necesita estado para gestionar las tareas. | Utiliza `useState`, `useEffect` y `useRef`, además de un hook personalizado. | Gestión de estado más avanzada. |
| Comunicación HTTP | No consume ninguna API. | Utiliza `fetch` mediante un servicio independiente. | Nueva funcionalidad. |
| Carga y errores | No contempla estados de carga ni errores de red. | Muestra indicadores de carga y mensajes de error. | Mejora, aunque el manejo de errores necesita ajustes. |
| Estilos | Incluye estilos básicos para encabezado, tarjetas y botones. | Conserva parte de esos estilos y añade estilos para formularios, resumen, estados vacíos, botones y modal. | Interfaz más elaborada. |
| Organización del código | Mantiene una estructura pequeña, con pocos componentes. | Separa componentes, hook y servicio en archivos distintos. | Mejor separación de responsabilidades. |

## Diferencias técnicas adicionales

| Aspecto | Base del profesor | Mi proyecto | Observación |
|---|---|---|---|
| Hook personalizado | No incluye `useTareas`. | Incorpora `src/hooks/useTareas.js`. | Centraliza la lógica para consultar y modificar tareas. |
| Servicio de datos | No tiene una capa de servicios. | Incorpora `src/services/tareasService.js`. | Separa las solicitudes HTTP de los componentes. |
| React Compiler | Configura el compilador de React mediante el plugin de Babel. | Utiliza `@vitejs/plugin-react` sin esa configuración adicional. | Es un cambio en la configuración; no implica por sí solo que la aplicación esté mal. |
| Acciones de tareas | `ActionButton` ejecuta una alerta mediante `onReview`. | El componente no se utiliza desde `App.jsx` y su versión actual tiene un problema con el componente `Button`, que no importa. | Conviene corregirlo si se quiere reutilizar. |
| Estilos globales | Combina `App.css` con los estilos iniciales de Vite. | Mantiene esa combinación y agrega estilos para las nuevas funciones. | Se podrían unificar algunos estilos para evitar inconsistencias. |

## 13. Pruebas y evidencias

Para documentar el cumplimiento de los requisitos del laboratorio, se incorporó una carpeta denominada [`evidencias`](./evidencias/), ubicada en la raíz del repositorio.

Esta carpeta contiene capturas del código fuente y de la ejecución de TaskCampus, organizadas según los cuatro temas de investigación.

### 1. Navegación entre vistas

- [Código de navegación](./evidencias/01-navegacion-codigo.png)
- [Interfaz de navegación](./evidencias/02-navegacion-interfaz.png)

Estas capturas muestran la implementación de la navegación mediante `useState`, eventos y renderizado condicional, así como su funcionamiento en la interfaz.

### 2. Estado derivado

- [Cálculo del estado derivado](./evidencias/03-estado-derivado-codigo.png)
- [Contadores de tareas](./evidencias/04-estado-derivado-interfaz.png)

Se evidencia el cálculo de tareas totales, completadas y pendientes directamente desde el arreglo de tareas.

### 3. Actualizaciones funcionales del estado

- [Creación de tareas](./evidencias/05-actualizacion-crear.png)
- [Actualización y eliminación](./evidencias/06-actualizacion-editar-eliminar.png)

Se documenta el uso de actualizaciones funcionales con `setTareas((prev) => ...)`, evitando modificar directamente el estado anterior.

### 4. Identificadores y API simulada

- [Solicitudes GET y POST](./evidencias/07-api-get-post.png)
- [Solicitudes PATCH y DELETE](./evidencias/08-api-patch-delete.png)
- [Generación de identificadores](./evidencias/09-identificadores.png)
- [Comunicación HTTP en DevTools](./evidencias/10-api-network.png)

Estas evidencias muestran la integración con JSONPlaceholder, las operaciones HTTP implementadas y la asignación de identificadores a las tareas creadas localmente.
## 14. Alcance y mejoras futuras

El alcance actual incluye consultar, crear, editar títulos, cambiar el estado y eliminar tareas; utilizar filtros y búsqueda; y actualizar dinámicamente el resumen.

También incluye actualizaciones inmutables del estado mediante la creación de nuevos arreglos y objetos.

Como mejoras opcionales se consideran:

- Incorporar un backend propio para persistir los datos.
- Ampliar las validaciones y confirmaciones.
- Ordenar tareas por fecha o nombre.
- Ampliar las pruebas.

## 15. Integrantes

- Samuel López
- Benjamín Mardones
- Luis Nuñez
