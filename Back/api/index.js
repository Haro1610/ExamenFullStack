const Express = require("express");
const cors = require("cors");
const Product = require("./db"); // Importa el modelo de datos

const app = Express();
app.use(cors());

// Ruta para obtener todos los productos
app.get("/Ropa_Hombre", (req, res) => {
    console.log('Recibida solicitud para /Ropa_Hombre');
    Product.find({}).then(function (ropa) {
        console.log('Datos de ropa:', ropa);
        res.json(ropa);
    }).catch(function (err) {
        console.error('Error al consultar datos de ropa:', err);
        res.status(500).json({ error: 'Error al obtener datos de ropa' });
    });
});
// Puerto en el que escucha el servidor Express
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Servidor Express en funcionamiento en el puerto ${PORT}`);
});