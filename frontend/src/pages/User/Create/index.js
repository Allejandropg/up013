import React, { useState, useMemo, useEffect } from 'react';
import { format, parseISO, isDate } from 'date-fns';
import pt from 'date-fns/locale/pt';
import { useDispatch } from 'react-redux';
import { Form, Input, Check } from '@rocketseat/unform';
import { FiScissors, FiUser } from 'react-icons/fi';
import * as Yup from 'yup';

import api from '~/services/api';

import { Container, Provider } from './styles';
import {
  storeUserResquest,
  updateUserResquest,
} from '~/store/modules/users/actions';

const schema = Yup.object().shape({
  name: Yup.string().required('O Nome é obrigatório'),
  email: Yup.string()
    .email()
    .required('O Nome é obrigatório'),
  phone: Yup.string(),
  birthday: Yup.date(),
  provider: Yup.bool(),
});

export default function Create({ match }) {
  const { id } = match.params;
  const [user, setUser] = useState();
  const [date, setDate] = useState(new Date());

  const dateFormatted = useMemo(
    () =>
      isDate(date) ? format(date, "yyyy'-'MM'-'dd", { locale: pt }) : date,
    [date]
  );

  useEffect(() => {
    async function loadUser() {
      const response = await api.get(`/usuarios/${id}`);
      // console.tron.log(response.data);
      setUser(response.data);
    }
    loadUser();
  }, [id]);

  useEffect(() => {
    if (user && isDate(user.birthday)) {
      setDate(parseISO(user.birthday));
      console.log(user);
    }
  }, [user]);

  const dispatch = useDispatch();

  function handleSubmite(data) {
    if (id !== 'cadastrar') {
      console.tron.log('updateProfile', user, id);
      dispatch(updateUserResquest({ id, ...data }));
    } else {
      dispatch(storeUserResquest(data));
    }
  }
  return (
    <Container>
      <Form schema={schema} initialData={user} onSubmit={handleSubmite}>
        <Input name="name" placeholder="Nome do usuário" />
        <Input name="email" placeholder="E-mail" />
        <Input name="phone" placeholder="Telefone" />
        <Input
          name="birthday"
          placeholder="Aniversário"
          value={dateFormatted}
          type="date"
          onChange={e => setDate(e.target.value)}
        />
        {/* <Input name="provide" placeholder="Barbeiro" /> */}
        <Provider>
          <Check
            name="provider"
            label={<FiScissors size={18} color="#060c62" />}
          />
        </Provider>
        <hr />

        <button type="submit">
          {id === 'cadastrar' ? 'Cadastrar Usuário' : 'Atualizar Usuário'}
        </button>
      </Form>
    </Container>
  );
}
