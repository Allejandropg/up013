import * as Yup from 'yup';
// import { startOfHour, parseISO, isBefore, format, subHours } from 'date-fns';
import Product from '../models/Product';

class ProductController {
  // Retorna todos os produtos
  async read(req, res) {
    return res
      .status(200)
      .json(await Product.findAll({ where: { is_active: true } }));
  }

  // Adiciona um novo usuário
  async store(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      description: Yup.string().required(),
      stock: Yup.number()
        .integer()
        .min(0)
        .required(),
      validity: Yup.date().required(),
      price: Yup.number()
        .min(2.5)
        .required(),
      is_active: Yup.boolean().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    try {
      const product = await Product.create({ ...req.body });

      return res.status(200).json(product);
    } catch (error) {
      return res.status(400).json({ error });
    }
  }

  // Altera um Produto
  async update(req, res) {
    const product = await Product.findByPk(req.params.id);
    if (!product) {
      return res.status(404).json({
        error: 'Product not found.',
      });
    }
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      description: Yup.string().required(),
      stock: Yup.number()
        .integer()
        .min(0)
        .required(),
      validity: Yup.date().required(),
      price: Yup.number()
        .min(2.5)
        .required(),
      is_active: Yup.boolean().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    try {
      await product.update({ ...req.body });

      return res.status(200).json(product);
    } catch (error) {
      return res.status(400).json({ error });
    }
  }

  // Desabilita um produto um Produto
  async delete(req, res) {
    const product = await Product.findByPk(req.params.id);
    if (!product) {
      return res.status(404).json({
        error: 'Product not found.',
      });
    }

    try {
      await product.update({ is_active: false });
      return res.status(200).json(product);
    } catch (error) {
      return res.status(400).json({ error });
    }
  }
}
export default new ProductController();
