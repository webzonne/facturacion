import connectDb from '../../lib/db';
import usuariosMaster from '@/models/usuariosMaster';

export default async function handler(req, res) {

try {
    await connectDb();
    res.status(200).json({ message: 'Conexión a la base de datos exitosa' });

} catch (error) {
    res.status(500).json({ message: 'Error conectando a la base de datos', error: error.message });
}



  // try {
  //   if (!req.body || Object.keys(req.body).length === 0) {
  //     res.status(400).json({ message: 'Datos vacíos' });
  //   } else {
  //     console.log(req.body);
  //     const { usuario, password } = req.body;
  //     res.status(200).json({ message: 'Datos recibidos correctamente', usuario, password });
  //   }
  // } catch (error) {
  //   res.status(500).json({ error: error.message });
  // }
}
