import React, { useState, useMemo, useEffect } from 'react';
import { format, parseISO, isDate } from 'date-fns';
import pt from 'date-fns/locale/pt';
import { useDispatch } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import api from '~/services/api';

import { Container } from './styles';
import {
  storeServiceResquest,
  updateServiceResquest,
} from '~/store/modules/service/actions';

const schema = Yup.object().shape({
  type: Yup.string().required('O Nome é obrigatório'),
  price: Yup.number('O Número precisa ser inteiro').required(
    'A Estoque é obrigatória'
  ),
});

export default function Profile({ match }) {
  const { id } = match.params;
  const [service, setService] = useState([]);

  useEffect(() => {
    async function loadService() {
      const response = await api.get(`/services/${id}`);
      console.tron.log(response.data);
      setService(response.data);
    }
    loadService();
  }, [id]);

  const dispatch = useDispatch();

  function handleSubmite(data) {
    console.tron.log('updateProfile', data, id);
    if (id === 'cadastrar') {
      dispatch(storeServiceResquest(data));
    } else {
      dispatch(updateServiceResquest({ id, ...data }));
    }
  }
  return (
    <Container>
      <Form schema={schema} initialData={service} onSubmit={handleSubmite}>
        <Input name="type" placeholder="Tipo de serviço" />
        <Input name="price" placeholder="Preço" />
        <hr />

        <button type="submit">
          {id === 'cadastrar' ? 'Cadastrar Produto' : 'Atualizar Produto'}
        </button>
      </Form>
    </Container>
  );
}
