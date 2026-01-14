# Test Views

Esta carpeta contiene vistas de demostración para componentes de la aplicación.

## Estructura

```
test/
└── views/
    └── button-demo/
        ├── button-demo.ts
        ├── button-demo.html
        └── button-demo.css
```

## Vistas Disponibles

### Button Demo

- **Ruta:** `/test/button-demo`
- **Descripción:** Demostración completa del componente Button con todos sus variants y estados
- **URL:** `http://localhost:4200/test/button-demo`

## Agregar Nuevas Vistas de Test

Para agregar una nueva vista de demostración:

1. Crear carpeta en `test/views/[nombre-componente]-demo`
2. Crear los archivos del componente (`.ts`, `.html`, `.css`)
3. Agregar la ruta en `app.routes.ts`
4. Actualizar este README

## Notas

- Estas vistas son solo para desarrollo y testing
- No forman parte de la aplicación principal
- Se acceden mediante rutas específicas `/test/*`
