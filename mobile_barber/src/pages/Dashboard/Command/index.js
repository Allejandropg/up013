import React, { useEffect, useState } from 'react';
import { Alert } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { withNavigationFocus } from 'react-navigation';
import api from '~/services/api';

import BackgroundInternal from '~/components/BackgroundInternal';
import ModalC from '~/components/ModalC';
import {
  Container,
  Title,
  SubTitle,
  Btn,
  BtnText,
  AddBtn,
  AddBtnText,
  Resumo,
  AreaResumo,
  ResumoTitle,
  DotLine,
  ResumoLine,
  ResumoText,
  AreaTotal,
  TotalLine,
  TotalText,
  TotalPrice,
  SubmitButton,
  ModalList,
  ModalTouch,
  ModalText,
} from './styles';

const INITA_PRODUCT = { id: 0, name: '', price: 0 };

function Command({ navigation }) {
  /**
   * TODO fluxo de adicionar produto
   */
  const [service, setService] = useState({});
  const [serviceModal, setServiceModal] = useState(false);
  const [product, setProduct] = useState([INITA_PRODUCT]);
  const [productModal, setProductModal] = useState(false);
  const [qtdModalModal, setQtdModal] = useState(false);
  const [total, setTotal] = useState(0);

  const [services, setServices] = useState();
  const [products, setProducts] = useState();

  useEffect(() => {
    async function loadServices() {
      const response = api.get('/services');
      setServices(response.data);
    }
    async function loadProducts() {
      const response = await api.get('/products');
      setProducts(response.data);
    }
    loadServices();
    loadProducts();
  }, []);

  useEffect(() => {
    let totalAux = 0;
    if (service) {
      totalAux = service.price;
    }
    product.map(prod => {
      console.tron.log(prod);
      if (prod.price > 0) {
        totalAux += prod.price;
      }
    });
    setTotal(totalAux);
  }, [service, product]);

  return (
    <BackgroundInternal navigation={navigation}>
      <Container>
        <Title>COMANDA</Title>
        {services && (
          <>
            <SubTitle>Selecione o serviço</SubTitle>
            <Btn onPress={() => setServiceModal(true)}>
              <BtnText>Selecione o serviço</BtnText>
            </Btn>
            <ModalC visible={serviceModal} setVisible={setServiceModal}>
              <ModalList
                data={services}
                keyExtractor={item => String(item.id)}
                renderItem={({ item }) => (
                  <ModalTouch onPress={() => setService(item)}>
                    <ModalText key={item.id}>{item.name}</ModalText>
                  </ModalTouch>
                )}
              />
            </ModalC>
          </>
        )}
        <SubTitle>Adicionar Consumo</SubTitle>
        <ModalList
          data={product}
          keyExtractor={item => String(item.id)}
          renderItem={({ item: prod }) => (
            <TotalLine key={prod.id}>
              <Btn onPress={() => setProductModal(true)}>
                <BtnText>Selecione o produto</BtnText>
              </Btn>
              <Btn>
                <BtnText>Qtd</BtnText>
              </Btn>
              <ModalC visible={productModal} setVisible={setProductModal}>
                {products && (
                  <ModalList
                    data={products}
                    keyExtractor={item => String(item.id)}
                    renderItem={({ item }) => (
                      <ModalTouch onPress={() => Alert.alert(item.name)}>
                        <ModalText key={item.id}>{item.name}</ModalText>
                      </ModalTouch>
                    )}
                  />
                )}
              </ModalC>
            </TotalLine>
          )}
        />
        <AddBtn>
          <AddBtnText>+Adicionar outro produto</AddBtnText>
        </AddBtn>
        <Resumo>Resumo:</Resumo>
        <AreaResumo>
          <ResumoTitle>Produtos e Serviços</ResumoTitle>
          <ResumoLine>
            <DotLine color="#707070" />
            <ResumoText>Corte de cabelo e barba</ResumoText>
            <ResumoText>R$ 5,00</ResumoText>
          </ResumoLine>
          <ResumoLine>
            <DotLine color="#707070" />
            <ResumoText>Corte de cabelo e barba</ResumoText>
            <ResumoText>R$ 5,00</ResumoText>
          </ResumoLine>
        </AreaResumo>
        <AreaTotal>
          <TotalLine>
            <DotLine color="#FFFFFF" />
            <TotalText>Total</TotalText>
            <TotalPrice>R$ {total}</TotalPrice>
          </TotalLine>
        </AreaTotal>
        <SubmitButton onPress={() => Alert.alert('confirmar')}>
          CONFIRMAR COMANDA
        </SubmitButton>
      </Container>
    </BackgroundInternal>
  );
}

Command.navigationOptions = {
  title: '',
  headerLeft: () => null,
  // eslint-disable-next-line react/prop-types
  tabBarIcon: ({ tintColor }) => (
    <Icon name="restore" size={20} color={tintColor} />
  ),
};

Command.propTypes = {};

export default withNavigationFocus(Command);
