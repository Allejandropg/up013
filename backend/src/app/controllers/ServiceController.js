import * as Yup from 'yup';
// import { startOfHour, parseISO, isBefore, format, subHours } from 'date-fns';
import Service from '../models/Service';

class ServiceController {
  // Retorna todos os produtos
  async read(req, res) {
    return res
      .status(200)
      .json(await Service.findAll({ where: { is_active: true } }));
  }

  // Adiciona um novo usuário
  async store(req, res) {
    const schema = Yup.object().shape({
      type: Yup.string().required(),
      price: Yup.number()
        .min(2.5)
        .required(),
      is_active: Yup.boolean().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    try {
      const service = await Service.create({ ...req.body });

      return res.status(200).json(service);
    } catch (error) {
      return res.status(400).json({ error });
    }
  }

  // Altera um Produto
  async update(req, res) {
    const service = await Service.findByPk(req.params.id);
    if (!service) {
      return res.status(404).json({
        error: 'Service not found.',
      });
    }
    const schema = Yup.object().shape({
      type: Yup.string().required(),
      price: Yup.number()
        .min(2.5)
        .required(),
      is_active: Yup.boolean().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    try {
      await service.update({ ...req.body });

      return res.status(200).json(service);
    } catch (error) {
      return res.status(400).json({ error });
    }
  }

  // Desabilita um produto um Produto
  async delete(req, res) {
    const service = await Service.findByPk(req.params.id);
    if (!service) {
      return res.status(404).json({
        error: 'Service not found.',
      });
    }

    try {
      await service.update({ is_active: false });
      return res.status(200).json(service);
    } catch (error) {
      return res.status(400).json({ error });
    }
  }
}
export default new ServiceController();
