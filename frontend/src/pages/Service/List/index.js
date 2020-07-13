import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { MdModeEdit, MdAddToPhotos } from 'react-icons/md';

import { HeaderArea, Container, Service } from './styles';

import api from '~/services/api';

export default function List() {
  const [services, setServices] = useState([]);

  useEffect(() => {
    async function loadServices() {
      const response = await api.get('/services');
      setServices(response.data);
    }
    loadServices();
  }, []);

  return (
    <>
      <HeaderArea>
        <h1>Serviços</h1>{' '}
        <Link to="/services/cadastrar">
          Cadastrar
          <MdAddToPhotos size={18} color="#FFF" />
        </Link>
      </HeaderArea>
      <Container>
        <ul>
          {services.map(service => (
            <Service>
              <strong>{service.type}</strong>
              <span>
                <Link to={`/services/${service.id}`}>
                  <MdModeEdit size={18} color="#060c62" />
                </Link>
              </span>
            </Service>
          ))}
        </ul>
      </Container>
    </>
  );
}
