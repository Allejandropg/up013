import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { MdModeEdit, MdAddToPhotos } from 'react-icons/md';

import { HeaderArea, Container, Product } from './styles';

import api from '~/services/api';

export default function List() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function loadProducts() {
      const response = await api.get('/products');
      setProducts(response.data);
    }
    loadProducts();
  }, []);

  return (
    <>
      <HeaderArea>
        <h1>Produtos</h1>{' '}
        <Link to="/products/cadastrar">
          Cadastrar
          <MdAddToPhotos size={18} color="#FFF" />
        </Link>
      </HeaderArea>
      <Container>
        <ul>
          {products.map(product => (
            <Product>
              <strong>{product.name}</strong>
              <span>
                <Link to={`/products/${product.id}`}>
                  <MdModeEdit size={18} color="#060c62" />
                </Link>
              </span>
            </Product>
          ))}
        </ul>
      </Container>
    </>
  );
}
