import * as Yup from 'yup';
// import { startOfHour, parseISO, isBefore, format, subHours } from 'date-fns';
import Product from '../models/Product';

class ProductController {
  // Retorna todos os produtos
  async read(req, res) {
    const schema = Yup.object().shape({
      id: Yup.number().integer(),
    });

    if (!(await schema.isValid(req.params))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    try {
      const product = await Product.findByPk(req.params.id);
      return res.status(200).json(product);
    } catch (error) {
      return res.status(400).json({ error: 'Product not found' });
    }
  }
}
export default new ProductController();
