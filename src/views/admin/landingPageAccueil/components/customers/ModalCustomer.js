import React, { useState } from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  Button,
} from '@chakra-ui/react';
import CustomerForm from './CustomerForm';
import { addCustomerRequest } from 'redux/landingPage/actions';
import { useDispatch } from 'react-redux';

const ModalCustomer = ({ isOpen, onClose }) => {
  const overlay = (
    <ModalOverlay
      bg='blackAlpha.300'
      backdropFilter='blur(10px) hue-rotate(90deg)'
    />
  );
  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handletDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleAddCustomer = () => {
    const formData = {
      name: name,
      description: description,
    };

    dispatch(addCustomerRequest(formData));
    onClose();
  };
  return (
    <Modal isCentered isOpen={isOpen} onClose={onClose} size='2xl'>
      {overlay}
      <ModalContent>
        <ModalHeader>Ajouter un client</ModalHeader>
        <ModalBody>
          <CustomerForm
            name={name}
            description={description}
            handleNameChange={handleNameChange}
            handletDescriptionChange={handletDescriptionChange} />
        </ModalBody>
        <ModalFooter>
          <Button onClick={handleAddCustomer} colorScheme='blue' variant='solid'>
            Ajouter
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}

export default ModalCustomer
