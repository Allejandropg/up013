import React from 'react';

import { Modal, ModalArea, ModalAreaClose } from './styles';

const ModalC = ({ visible, setVisible, children }) => {
  return (
    <Modal visible={visible} transparent>
      <ModalArea>{children}</ModalArea>
      <ModalAreaClose onPress={() => setVisible(false)} />
    </Modal>
  );
};

export default ModalC;
