import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    useDisclosure,
    Button,
    Text,
    Flex,
    Icon,
    Box,
    ButtonGroup,
} from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { MdDelete } from 'react-icons/md'
import { GiCrossedBones } from 'react-icons/gi'
import { useDispatch } from 'react-redux';
import { deleteCustomerRequest } from 'redux/landingPage/actions';

const ModalAlert = ({ itemId }) => {
    const OverlayOne = () => (
        <ModalOverlay
            bg='blackAlpha.300'
            backdropFilter='blur(10px) hue-rotate(90deg)'
        />
    )

    const { isOpen, onOpen, onClose } = useDisclosure()
    const [overlay, setOverlay] = useState(<OverlayOne />)

    const dispatch = useDispatch();

    const handleConfirmDelete = () => {
        console.log(itemId, 'ggggggg')
        dispatch(deleteCustomerRequest(itemId));
        onClose();
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
                    <Icon as={MdDelete} color='secondaryGray.500' h='18px' w='18px' />
                </Flex>
            </Box>

            <Modal isCentered isOpen={isOpen} onClose={onClose}>
                {overlay}
                <ModalContent>
                    <ModalHeader>Confirmation de suppression</ModalHeader>
                    {/* <ModalCloseButton /> */}
                    <ModalBody>
                        <Text>Voulez-vous vraiment supprimer ce client?</Text>
                    </ModalBody>
                    <ModalFooter>
                        <ButtonGroup gap='2'>
                            <Button leftIcon={<GiCrossedBones />} colorScheme='red' variant='solid' onClick={onClose}>Annuler</Button>
                            <Button leftIcon={<MdDelete />} colorScheme='blue' variant='solid' onClick={handleConfirmDelete}>Supprimer</Button>
                        </ButtonGroup>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}
export default ModalAlert