import * as Yup from 'yup';
// import { startOfHour, parseISO, isBefore, format, subHours } from 'date-fns';
import Service from '../models/Service';

class LoadServiceController {
  // Retorna todos os produtos
  async read(req, res) {
    const schema = Yup.object().shape({
      id: Yup.number().integer(),
    });

    if (!(await schema.isValid(req.params))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    try {
      const service = await Service.findByPk(req.params.id);
      return res.status(200).json(service);
    } catch (error) {
      return res.status(400).json({ error: 'Service not found' });
    }
  }
}
export default new LoadServiceController();
