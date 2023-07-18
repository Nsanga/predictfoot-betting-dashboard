import React from 'react'
import {
    ModalOverlay,
    useDisclosure,
    IconButton,
    useColorModeValue,
} from '@chakra-ui/react'
import { BsPlusCircleFill } from 'react-icons/bs'
import ModalCustomer from './ModalCustomer'

const Service = () => {
    const OverlayOne = () => (
        <ModalOverlay
            bg='blackAlpha.300'
            backdropFilter='blur(10px) hue-rotate(90deg)'
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

            <ModalCustomer isOpen={isOpen} onClose={onClose} />
        </>
    )
}

export default Service
