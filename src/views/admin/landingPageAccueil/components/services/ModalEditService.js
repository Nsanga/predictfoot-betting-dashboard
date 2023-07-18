import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    useDisclosure,
    Button,
    Flex,
    Icon,
    Box,
    ButtonGroup,
    Text,
    Input,
} from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { MdEdit } from 'react-icons/md'
import { useDispatch } from 'react-redux';
import { updateServiceRequest } from 'redux/landingPage/actions';

const ModalEditService = ({ service, serviceId }) => {
    const OverlayOne = () => (
        <ModalOverlay
            bg='blackAlpha.300'
            backdropFilter='blur(10px) hue-rotate(90deg)'
        />
    )

    const { isOpen, onOpen, onClose } = useDisclosure();
    const [overlay, setOverlay] = useState(<OverlayOne />);
    const dispatch = useDispatch();

    const [number, setNumber] = useState('');
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    useEffect(() => {
        if (service) {
            setNumber(service.number || '');
            setTitle(service.title || '');
            setDescription(service.description || '');
        }
    }, [service]);

    const handleNumberChange = (event) => {
        setNumber(event.target.value);
    };

    const handleTitleChange = (event) => {
        setTitle(event.target.value);
    };

    const handleDescriptionChange = (event) => {
        setDescription(event.target.value);
    };

    const handleUpdateService = () => {
        const formData = {
            number:number,
            title: title,
            description: description,
        };

        dispatch(updateServiceRequest(serviceId, formData));
        // onClose();
    };

    return (
        <>
            <Box
                onClick={() => {
                    setOverlay(<OverlayOne />)
                    onOpen()
                }}
            >
                <Flex align='center'>
                    <Icon as={MdEdit} color='secondaryGray.500' h='18px' w='18px' />
                </Flex>
            </Box>

            <Modal isCentered isOpen={isOpen} onClose={onClose} size='2xl'>
                {overlay}
                <ModalContent>
                    <ModalHeader>Modifier ce service</ModalHeader>
                    <ModalBody>
                        <Flex direction='column' gap={4} p={4}>
                            <Flex direction='column'>
                                <Text mb='8px'>Numero:</Text>
                                <Input
                                    variant='flushed'
                                    value={number}
                                    onChange={handleNumberChange}
                                    placeholder='Entrer le numero du service'
                                    size='sm'
                                />
                            </Flex>
                            <Flex direction='column'>
                                <Text mb='8px'>Titre:</Text>
                                <Input
                                    variant='flushed'
                                    value={title}
                                    onChange={handleTitleChange}
                                    placeholder='Entrer votre titre'
                                    size='sm'
                                />
                            </Flex>
                            <Flex direction='column'>
                                <Text mb='8px'>Description:</Text>
                                <Input
                                    variant='flushed'
                                    value={description}
                                    onChange={handleDescriptionChange}
                                    placeholder='Entrer votre description'
                                    size='sm'
                                />
                            </Flex>
                        </Flex>
                    </ModalBody>
                    <ModalFooter>
                        <ButtonGroup gap='2'>
                            <Button colorScheme='red' variant='solid' onClick={onClose}>Annuler</Button>
                            <Button onClick={handleUpdateService} colorScheme='blue' variant='solid'>
                                Modifier
                            </Button>
                        </ButtonGroup>

                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}
export default ModalEditService