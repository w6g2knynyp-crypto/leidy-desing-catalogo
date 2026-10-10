/* ESTE ES EL ARCHIVO QUE EDITARÁS NORMALMENTE.
true = talla disponible | false = talla agotada
foto: "fotos/nombre.jpg" cuando subas una imagen.
Copia un bloque completo para agregar otra prenda. */

const COLORES = [
  { nombre: "Verde petróleo", hex: "#20594F" },
  { nombre: "Negro", hex: "#252525" },
  { nombre: "Lila", hex: "#BFA0D5" },
  { nombre: "Café", hex: "#75483B" },
  { nombre: "Rojo", hex: "#C80929" },
  { nombre: "Vino tinto", hex: "#651E35" },
  { nombre: "Azul oscuro", hex: "#293952" },
  { nombre: "Rosa", hex: "#DCA0B5" },
  { nombre: "Verde oliva", hex: "#647C4D" }
];
const COLORES_JOHANA = [
  { nombre: "Azul rey", hex: "#2452A0" },
  { nombre: "Verde oliva", hex: "#667C39" },
  { nombre: "Beige", hex: "#BE9775" },
  { nombre: "Rojo", hex: "#C80929" },
  { nombre: "Vino tinto", hex: "#651E35" },
  { nombre: "Lila", hex: "#BFA0D5" }
 ]; 
const COLORES_TOPS = [
  { nombre: "Blanco perla", hex: "#F5F0E8" },
  { nombre: "Café", hex: "#75483B" },
  { nombre: "Negro", hex: "#252525" },
  { nombre: "Rosado", hex: "#E8A9C0" }
];

const PRODUCTOS = [
  {
    nombre: "Short Sofía",
    precio: "$80.000",
    categoria: "Shorts",
    foto: "",
    nuevo: true,
    colores: COLORES,
    tallas: {}
  },
  {
    nombre: "Short Adara",
    precio: "$80.000",
    categoria: "Shorts",
    foto: "",
    nuevo: true,
    colores: COLORES,
    tallas: {}
  },
  {
    nombre: "Short Mariana",
    precio: "$80.000",
    categoria: "Shorts",
    foto: "",
    nuevo: true,
    colores: COLORES,
    tallas: {}
  },
  {
  nombre: "Short Johana",
  precio: "$70.000",
  categoria: "Shorts",
  foto: "",
  nuevo: true,
  colores: COLORES_JOHANA,
  tallas: {}
},
{
  nombre: "Top Dalia",
  precio: "$50.000",
  categoria: "Blusas",
  foto: "dalia-blanco-perla.jpg",
  nuevo: true,
  colores: COLORES_TOPS,
  tallas: { "Única": true }
},
{
  nombre: "Top Margarita",
  precio: "$55.000",
  categoria: "Blusas",
  foto: "margarita-negro.jpg",
  nuevo: true,
  colores: [COLORES_TOPS[2], COLORES_TOPS[0], COLORES_TOPS[1], COLORES_TOPS[3]],
  tallas: { "Única": true }
},
{
  nombre: "Top Jazmín",
  precio: "$50.000",
  categoria: "Blusas",
  foto: "jazmin-rosado.jpg",
  nuevo: true,
  colores: [COLORES_TOPS[3], COLORES_TOPS[0], COLORES_TOPS[1], COLORES_TOPS[2]],
  tallas: { "Única": true }
}
  
];
