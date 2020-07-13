import * as Yup from 'yup';
import User from '../models/User';

class LoadUserController {
  // Retorna todos os produtos
  async read(req, res) {
    const schema = Yup.object().shape({
      id: Yup.number().integer(),
    });

    if (!(await schema.isValid(req.params))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    try {
      const user = await User.findOne({
        where: { id: req.params.id, master: false, is_active: true },
      });
      const { id, name, email, phone, birthday, provider } = user;
      return res
        .status(200)
        .json({ id, name, email, phone, birthday, provider });
    } catch (error) {
      return res.status(400).json({ error: 'User not found' });
    }
  }
}
export default new LoadUserController();
