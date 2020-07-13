import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

// import Notifications from '../Notifications';

import logo from '~/assets/logo.png';

import { Container, Content, Profile } from './styles';

export default function Header() {
  const profile = useSelector(state => state.user.profile);
  return (
    <Container>
      <Content>
        <nav>
          <img src={logo} alt="GoBarber" />
          <Link to="/users">Usuários</Link>
          <Link to="/products">Produtos</Link>
          <Link to="/services">Serviços</Link>
          <Link to="/command">comandas</Link>
        </nav>
        <aside>
          {/* <Notifications /> */}
          <Profile>
            <div>
              <strong>{profile.name}</strong>
              <Link to="/profile">Meu Perfil</Link>
            </div>
            <img
              src={
                (profile.avatar && profile.avatar.url) ||
                'https://api.adorable.io/avatars/70/abott@adorable.png'
              }
              alt={profile.name}
            />
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}
