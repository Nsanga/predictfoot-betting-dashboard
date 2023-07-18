import React from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
} from '@chakra-ui/react';
import AddForm from './AddForm';

const ModalArticle = ({ isOpen, onClose }) => {
    const overlay = (
        <ModalOverlay
          bg='blackAlpha.300'
          backdropFilter='blur(10px) hue-rotate(90deg)'
        />
      );
    return (
        <Modal isCentered isOpen={isOpen} onClose={onClose} size='2xl'>
      {overlay}
      <ModalContent>
        <ModalHeader>Ajouter un article</ModalHeader>
        <ModalBody>
          <AddForm />
        </ModalBody>
        <ModalFooter mt={-24}>
          <Button onClick={onClose} colorScheme='blue' variant='solid'>
            Ajouter
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
    )
}

export default ModalArticle
