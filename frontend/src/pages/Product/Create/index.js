import React, { useState, useMemo, useEffect } from 'react';
import { format, parseISO, isDate } from 'date-fns';
import pt from 'date-fns/locale/pt';
import { useDispatch } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import api from '~/services/api';

import { Container } from './styles';
import {
  storeProductResquest,
  updateProductResquest,
} from '~/store/modules/product/actions';

const schema = Yup.object().shape({
  name: Yup.string().required('O Nome é obrigatório'),
  description: Yup.string().required('A Descrição é obrigatória'),
  stock: Yup.number('O Número precisa ser inteiro')
    .integer('O Número precisa ser inteiro')
    .required('A Estoque é obrigatória'),
  validity: Yup.date('O Número precisa ser inteiro').required(
    'A Estoque é obrigatória'
  ),
  price: Yup.number('O Número precisa ser inteiro').required(
    'A Estoque é obrigatória'
  ),
});

export default function Profile({ match }) {
  const { id } = match.params;
  const [product, setProduct] = useState([]);
  const [date, setDate] = useState(new Date());

  const dateFormatted = useMemo(
    () =>
      isDate(date) ? format(date, "yyyy'-'MM'-'dd", { locale: pt }) : date,
    [date]
  );

  useEffect(() => {
    async function loadProduct() {
      const response = await api.get(`/products/${id}`);
      console.tron.log(response.data);
      setProduct(response.data);
    }
    loadProduct();
    console.log(id);
  }, [id]);

  useEffect(() => {
    if (product.validity) {
      setDate(parseISO(product.validity));
    }
  }, [product]);

  const dispatch = useDispatch();

  function handleSubmite(data) {
    console.tron.log('updateProfile', data, id);
    if (id === 'cadastrar') {
      dispatch(storeProductResquest(data));
    } else {
      dispatch(updateProductResquest({ id, ...data }));
    }
  }
  return (
    <Container>
      <Form schema={schema} initialData={product} onSubmit={handleSubmite}>
        <Input name="name" placeholder="Nome do produto" />
        <Input name="description" placeholder="Descrição" />
        <hr />
        <Input name="stock" type="number" placeholder="Estoque" />
        <Input
          name="validity"
          placeholder="Validade"
          value={dateFormatted}
          type="date"
          onChange={e => setDate(e.target.value)}
        />
        <Input name="price" placeholder="Preço" />
        <hr />

        <button type="submit">
          {id === 'cadastrar' ? 'Cadastrar Produto' : 'Atualizar Produto'}
        </button>
      </Form>
    </Container>
  );
}
