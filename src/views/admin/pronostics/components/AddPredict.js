import React from 'react'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    IconButton,
    useColorModeValue,
    Text,
    Button,
} from '@chakra-ui/react'
import { BsPlusCircleFill } from 'react-icons/bs'
import AddPredictForm from './AddPredictForm'
import ModalPredict from './ModalPredict'

const AddPredict = () => {
    const OverlayOne = () => (
        <ModalOverlay
            bg='blackAlpha.300'
            backdropFilter='blur(10px) hue-rotate(90deg)'
        />
    )

    const OverlayTwo = () => (
        <ModalOverlay
            bg='none'
            backdropFilter='auto'
            backdropInvert='80%'
            backdropBlur='2px'
        />
    )

    const { isOpen, onOpen, onClose } = useDisclosure()
    const [overlay, setOverlay] = React.useState(<OverlayOne />)
    const iconColor = useColorModeValue("brand.500", "white");

    return (
        <>

            <IconButton
                aria-label='add'
                color={iconColor}
                icon={<BsPlusCircleFill size='24px' />}
                onClick={() => {
                    setOverlay(<OverlayOne />)
                    onOpen()
                }} />

            <ModalPredict isOpen={isOpen} onClose={onClose} />
        </>
    )
}

export default AddPredict
