// import * as Yup from 'yup';
// import { startOfHour, parseISO, isBefore, format, subHours } from 'date-fns';
// import pt from 'date-fns/locale/pt';
import Command from '../models/Command';
import CommandProduct from '../models/CommandProduct';
import Product from '../models/Product';
import CommandService from '../models/CommandService';
import Service from '../models/Service';
import User from '../models/User';
import File from '../models/File';

class LoadCommandController {
  async index(req, res) {
    const { id } = req.params;

    const command = await Command.findOne({
      where: { id },
      attributes: ['id', 'date', 'past', 'canceled_at', 'cancelable'],
      include: [
        {
          model: User,
          as: 'provider',
          attributes: ['id', 'name', 'provider'],
          include: [
            {
              model: File,
              as: 'avatar',
              attributes: ['id', 'path', 'url'],
            },
          ],
        },
        {
          model: User,
          as: 'user',
          attributes: ['id', 'name'],
        },
        {
          model: CommandProduct,
          as: 'commandProduct',
          attributes: ['command_id', 'product_id', 'quantity', 'price'],
          include: [
            {
              model: Product,
              as: 'product',
              attributes: ['name'],
            },
          ],
        },
        {
          model: CommandService,
          as: 'commandService',
          attributes: ['command_id', 'service_id', 'quantity', 'price'],
          include: [
            {
              model: Service,
              as: 'service',
              attributes: ['type'],
            },
          ],
        },
      ],
    });
    return res.json(command);
  }
}

export default new LoadCommandController();
