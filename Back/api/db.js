const { Binary } = require('mongodb');
const mongoose = require('mongoose');

// URL de conexión a MongoDB
const MONGODB_URI = 'mongodb+srv://aaronro9921:4f3PRt2Ze3SxCSMS@cluster0.ixxacrl.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';


// Conexión a MongoDB
mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });

// Manejadores de eventos para la conexión a la base de datos
mongoose.connection.on('connected', () => {
    console.log('Conexión establecida a MongoDB');
});


// Esquema del modelo de datos
const ropaHombreSchema = new mongoose.Schema({ 
    Nombre: String,
    Precio: Number,
    Colores: Array,
    Imagen: String

});

// Crear el modelo de Mongoose para la colección "Ropa_Hombre"
const ropaHombreModel = mongoose.model('Ropa_Hombre', ropaHombreSchema);
  
  module.exports = ropaHombreModel;
