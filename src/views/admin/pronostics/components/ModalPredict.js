import React from 'react';
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    Button,
} from '@chakra-ui/react';
import AddPredictForm from './AddPredictForm';

const ModalPredict = ({ isOpen, onClose, predictType }) => {
    const overlay = (
        <ModalOverlay
            bg='blackAlpha.300'
            backdropFilter='blur(10px) hue-rotate(90deg)'
        />
    );
    return (
        <Modal isCentered isOpen={isOpen} onClose={onClose} size='3xl'>
            {overlay}
            <ModalContent>
                <ModalHeader>Ajouter un {predictType}</ModalHeader>
                <ModalBody>
                    <AddPredictForm />
                </ModalBody>
                <ModalFooter>
                    <Button onClick={onClose} colorScheme='blue' variant='solid'>
                        Ajouter
                    </Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    )
}

export default ModalPredict
