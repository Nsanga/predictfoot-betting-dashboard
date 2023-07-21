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
import GripForm from './GripForm';
import { addGripRequest } from 'redux/landingPage/actions';
import { useDispatch } from 'react-redux';

const ModalGrip = ({ isOpen, onClose }) => {
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
  const [image, setImage] = useState('');

  const handleNumberChange = (event) => {
    setNumber(event.target.value);
  };
  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleImageChange = (imageURL, fileName) => {
    setImage(fileName);
  console.log('Image Name:', fileName);
  };

  const handleAddGrip = () => {
    const formData = {
      number: number,
      title: title,
      description: description,
      image: image
    };
    dispatch(addGripRequest(formData));
    // onClose();
  };
  return (
    <Modal isCentered isOpen={isOpen} onClose={onClose} size='2xl'>
      {overlay}
      <ModalContent>
        <ModalHeader>Ajouter une prise en main</ModalHeader>
        <ModalBody>
          <GripForm
            number={number}
            title={title}
            description={description}
            // image={image}
            handleNumberChange={handleNumberChange}
            handleTitleChange={handleTitleChange}
            handleDescriptionChange={handleDescriptionChange}
            handleImageChange={handleImageChange} 
            handleAddGrip={handleAddGrip}/>
        </ModalBody>
        <ModalFooter>
          <Button onClick={handleAddGrip} colorScheme='blue' variant='solid'>
            Ajouter
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}

export default ModalGrip
