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
import ServiceForm from './ServiceForm';
import { useDispatch } from 'react-redux';
import { addServiceRequest } from 'redux/landingPage/actions';

const ModalService = ({ isOpen, onClose, loading }) => {
  const overlay = (
    <ModalOverlay
      bg='blackAlpha.300'
      backdropFilter='blur(10px) hue-rotate(90deg)'
    />
  );
  const dispatch = useDispatch();

  const [number, setNumber] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleNumberChange = (event) => {
    setNumber(event.target.value);
  };

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleAddService = () => {
    const formData = {
      number: number,
      title: title,
      description: description,
    };

    dispatch(addServiceRequest(formData));
    onClose();
  };

  return (
    <Modal isCentered isOpen={isOpen} onClose={onClose} size='2xl'>
      {overlay}
      <ModalContent>
        <ModalHeader>Ajouter un service</ModalHeader>
        <ModalBody>
          <ServiceForm
            number={number}
            title={title}
            description={description}
            handleNumberChange={handleNumberChange}
            handleTitleChange={handleTitleChange}
            handleDescriptionChange={handleDescriptionChange}
          />
        </ModalBody>
        <ModalFooter>
          <Button onClick={handleAddService} colorScheme='blue' variant='solid'>
            Ajouter
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}

export default ModalService
