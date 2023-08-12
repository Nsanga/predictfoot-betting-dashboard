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
import { deletePredictRequest } from 'redux/predict/actions'
import { useDispatch } from 'react-redux';

const ModalAlert = ({ itemId, match }) => {
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
        console.log(match, 'ggggggg')
        dispatch(deletePredictRequest(match));
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
                    <Icon as={MdDelete} h='16px' w='16px' me='8px' />
                    <Text fontSize='sm' fontWeight='400'>
                        Supprimer
                    </Text>
                </Flex>
            </Box>

            <Modal isCentered isOpen={isOpen} onClose={onClose}>
                {overlay}
                <ModalContent>
                    <ModalHeader>Confirmation de suppression</ModalHeader>
                    {/* <ModalCloseButton /> */}
                    <ModalBody>
                        <Text>Voulez-vous vraiment supprimer ce pronostic ?</Text>
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