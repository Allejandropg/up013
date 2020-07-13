import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { MdModeEdit, MdAddToPhotos } from 'react-icons/md';

import { HeaderArea, Container, Command } from './styles';

import api from '~/services/api';

export default function List() {
  const [commands, setCommands] = useState([]);

  useEffect(() => {
    async function loadCommands() {
      const response = await api.get('/commands');
      setCommands(response.data);
    }
    loadCommands();
  }, []);

  return (
    <>
      <HeaderArea>
        <h1>Comandas</h1>
        <Link to="/command/cadastrar">
          Cadastrar
          <MdAddToPhotos size={18} color="#FFF" />
        </Link>
      </HeaderArea>
      <Container>
        <ul>
          {commands.map(command => (
            <Command>
              <strong>{command.type}</strong>
              <span>
                <Link to={`/commands/${command.id}`}>
                  <MdModeEdit size={18} color="#060c62" />
                </Link>
              </span>
            </Command>
          ))}
        </ul>
      </Container>
    </>
  );
}
