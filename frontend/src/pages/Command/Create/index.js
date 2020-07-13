import React, { useState, useRef, useEffect } from 'react';
import { format, parseISO, isDate } from 'date-fns';
import pt from 'date-fns/locale/pt';
import { Form, Input, Select } from '@rocketseat/unform';
import * as Yup from 'yup';
import { MdAdd } from 'react-icons/md';

import api from '~/services/api';

import { Container, SelectArea } from './styles';

// import { useDispatch } from 'react-redux';
// import {
//   storeServiceResquest,
//   updateServiceResquest,
// } from '~/store/modules/service/actions';

const schema = Yup.object().shape({
  type: Yup.string().required('O Nome é obrigatório'),
  price: Yup.number('O Número precisa ser inteiro').required(
    'A Estoque é obrigatória'
  ),
});

export default function Profile({ match }) {
  const { id } = match.params;
  const [users, setUsers] = useState([]);
  const [providers, setProviders] = useState([]);
  const [services, setServices] = useState([]);
  const [products, setProducts] = useState([]);
  const [cartService, setCartService] = useState([]);
  const [cartProduct, setCartProduct] = useState([]);

  const [service, setService] = useState();
  const [product, setProduct] = useState();

  useEffect(() => {
    async function loadServices() {
      const response = await api.get(`/services`);
      const options = response.data.map(s => ({
        id: s.id,
        title: `${s.type} R$ ${s.price} `,
        ...s,
      }));
      setServices(options);
    }
    async function loadProducts() {
      const response = await api.get(`/products`);
      const options = response.data.map(p => ({
        id: p.id,
        title: `${p.name} R$ ${p.price} `,
        ...p,
      }));
      setProducts(options);
    }
    async function loadUsers() {
      const response = await api.get(`/users`);
      const barbeiros = response.data
        .map(u => u.provider && { id: u.id, title: u.name, ...u })
        .filter(u => u);
      const usuarios = response.data
        .map(u => !u.provider && { id: u.id, title: u.name, ...u })
        .filter(u => u);
      setProviders(barbeiros);
      setUsers(usuarios);
    }
    loadUsers();
    loadServices();
    loadProducts();
  }, []);

  // const dispatch = useDispatch();

  function handleSubmite(data) {
    console.tron.log('updateProfile', data, id);
    if (id === 'cadastrar') {
      // dispatch(storeServiceResquest(data));
    } else {
      // dispatch(updateServiceResquest({ id, ...data }));
    }
  }
  return (
    <Container>
      <Form schema={schema} onSubmit={handleSubmite}>
        <Input name="date" placeholder="Dia" type="date" />
        <Input
          name="time"
          placeholder="Horário"
          type="time"
          min="08:00"
          max="20:00"
        />
        <hr />
        <Select name="users" options={users} placeholder="Clientes" />
        <hr />
        <Select name="providers" options={providers} placeholder="Barbeiros" />
        <hr />
        <SelectArea>
          <Select
            name="services"
            options={services}
            placeholder="Serviços"
            onChange={e => {
              return setService(e.target.value);
            }}
          />
          <button
            type="button"
            onClick={() => {
              console.tron.log(services[service]);
              // setCartService{{}}
            }}
          >
            <MdAdd size={18} color="#FFF" />
          </button>
        </SelectArea>
        <hr />
        <SelectArea>
          <Select name="product" options={products} placeholder="Produtos" />
          <button type="button">
            <MdAdd size={18} color="#FFF" />
          </button>
        </SelectArea>
        <button type="submit">
          {id === 'cadastrar' ? 'Cadastrar Comanda' : 'Atualizar Produto'}
        </button>
      </Form>
    </Container>
  );
}
