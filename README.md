# Plata del Mes

Tu app de presupuesto. Es una sola carpeta de archivos estáticos: no hay que
instalar nada, no hay que compilar nada.

---

## PARTE 1 · Subirla a internet (15 min)

### 1. Guarda tu copia actual
Antes de nada, en la app que ya usas: **Ajustes → Copiar copia** y pega el texto
en una nota del teléfono. Es lo que vas a restaurar al final.

### 2. Crea tu cuenta de GitHub
Entra a **github.com** y regístrate con `joaquin.valverde1001@gmail.com`.

> Si tu navegador ya está logueado con otra cuenta, hazlo en una ventana de
> incógnito. Es el error más fácil de cometer.

### 3. Crea el repositorio
- Botón **New** (o el `+` arriba a la derecha → *New repository*).
- Nombre: **`plata`**
- Marca **Public**. (Los repos privados no pueden publicar página gratis.)
- **No marques** nada más. Crea.

### 4. Sube los archivos
En la pantalla del repo vacío: **uploading an existing file**.
Arrastra **todos** los archivos de esta carpeta (no la carpeta: los archivos
sueltos). Abajo, botón verde **Commit changes**.

### 5. Enciende la página
- Pestaña **Settings** (arriba del repo) → menú izquierdo **Pages**.
- En *Source* elige **Deploy from a branch**.
- Branch: **main** · carpeta: **/ (root)** · **Save**.
- Espera 1–2 minutos y recarga esa pantalla: te va a mostrar tu dirección.

Tu app queda en:

```
https://TUUSUARIO.github.io/plata/
```

### 6. Póntela en el teléfono
Abre esa dirección en el celular → **Compartir** → **Añadir a pantalla de inicio**.

Ahora sí: ícono propio, pantalla completa sin barra del navegador, y abre aunque
no tengas señal.

### 7. Restaura tu copia
Dentro de la app: **Ajustes → pega la copia → Restaurar copia**.

**Hasta aquí ya funciona todo.** La app guarda en ese teléfono. Si solo la vas a
usar tú y en un equipo, puedes parar acá.

---

## PARTE 2 · Tu cuenta — YA ESTÁ HECHA

No tienes que crear nada en Supabase: el proyecto, la tabla y las reglas de
seguridad ya están montados, y `config.js` ya viene con tus datos.

- Proyecto: **plata** (organización *Hype*, plan gratis, región São Paulo)
- Tabla: `presupuestos` con seguridad por fila activada
- Regla: **cada cuenta solo puede leer y escribir su propia fila**

### Lo único que falta: un switch (30 segundos)

En **supabase.com** → proyecto **plata**:

1. Menú izquierdo → **Authentication**
2. **Sign In / Providers** → **Email**
3. Desactiva **Confirm email** → **Save**

Sin eso, cada cuenta nueva tiene que abrir un correo para activarse. Para una app
personal es fricción sin sentido. Si algún día la abres al público, lo reactivas.

### Después
Abre tu app, te pide correo y contraseña → **No tengo cuenta, crear una**.
Entra con ese mismo correo desde la laptop y vas a encontrar todo.

> ⚠️ En Supabase, en *Project Settings → API*, hay una llave llamada
> **`service_role`**. Esa **nunca** se pega en el código ni se comparte con nadie:
> abre toda tu base saltándose las reglas. La que está en `config.js` es la `anon`,
> que es pública por diseño.

---

## Cosas que conviene saber

**Cómo actualizo la app.** Reemplazas `index.html` en GitHub y ya. La página se
actualiza sola en un par de minutos; si no, cierra y abre la app.

**Si algún día quiero desconectar la cuenta.** Vacía los dos valores de
`config.js` y la app vuelve a guardar solo en el navegador de cada equipo.

**Puedo usarla sin cuenta aunque esté configurada.** Sí, hay un botón *Usar sin
cuenta en este equipo* en la pantalla de entrada.

**Cómo la usa otra persona.** Le pasas la dirección, crea su cuenta con su correo,
y tiene su presupuesto propio. No ve el tuyo ni tú el suyo.

**Se me borraron los datos.** Si estabas sin cuenta y limpiaste el navegador, se
fueron. Por eso existe **Ajustes → Copiar copia**. Con cuenta, entras de nuevo y
vuelven solos.

**El código es público, tus gastos no.** En GitHub solo está la app. Tus números
viven en tu teléfono y, si configuraste cuenta, en tu fila privada de Supabase.

---

## Qué hay en esta carpeta

| Archivo | Qué es |
|---|---|
| `index.html` | La app entera |
| `config.js` | **El único que editas.** Tus dos datos de Supabase |
| `manifest.json` | Hace que se instale como app |
| `sw.js` | Hace que funcione sin internet |
| `supabase.sql` | El SQL que pegas una sola vez |
| `icon-*.png`, `apple-touch-icon.png`, `favicon.png` | Íconos |
