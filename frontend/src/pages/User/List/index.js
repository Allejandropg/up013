import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { MdModeEdit, MdAddToPhotos } from 'react-icons/md';
import { FiScissors, FiUser } from 'react-icons/fi';

import { HeaderArea, Container, User } from './styles';

import api from '~/services/api';

export default function List() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function loadUsers() {
      const response = await api.get('/usuarios');
      setUsers(response.data);
    }
    loadUsers();
  }, []);

  return (
    <>
      <HeaderArea>
        <h1>Usuários</h1>{' '}
        <Link to="/users/cadastrar">
          Cadastrar
          <MdAddToPhotos size={18} color="#FFF" />
        </Link>
      </HeaderArea>
      <Container>
        <ul>
          {users.map(user => (
            <User>
              <strong>
                {user.name}
                {user.provider ? (
                  <FiScissors size={18} color="#060c62" />
                ) : (
                  <FiUser size={18} color="#060c62" />
                )}
              </strong>
              <span>
                <Link to={`/users/${user.id}`}>
                  <MdModeEdit size={18} color="#060c62" />
                </Link>
              </span>
            </User>
          ))}
        </ul>
      </Container>
    </>
  );
}
