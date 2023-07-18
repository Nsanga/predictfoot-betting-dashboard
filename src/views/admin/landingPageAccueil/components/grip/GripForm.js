import React from 'react'
import { Flex, Input, Text, useColorModeValue } from '@chakra-ui/react'
import Upload from '../Upload';

const ServiceForm = ({
    number,
    title,
    description,
    image,
    handleNumberChange,
    handleTitleChange,
    handleDescriptionChange,
    handleImageChange
}) => {
    const iconColor = useColorModeValue("brand.500", "white");

    return (
        <Flex direction='column' gap={4} p={4}>
            <Flex gap={8}>
            <Flex direction='column'>
                <Text mb='8px'>Numéro:</Text>
                <Input
                    variant='flushed'
                    value={number}
                    onChange={handleNumberChange}
                    placeholder='Entrer un numéro'
                    size='sm'
                />
            </Flex>
            <Flex direction='column'>
                <Text mb='8px'>Titre:</Text>
                <Input
                    variant='flushed'
                    value={title}
                    onChange={handleTitleChange}
                    placeholder='Entrer un titre'
                    size='sm'
                />
            </Flex>
            </Flex>
            <Flex direction='column'>
                <Text mb='8px'>Description:</Text>
                <Input
                    variant='flushed'
                    value={description}
                    onChange={handleDescriptionChange}
                    placeholder='Entrer un nom'
                    size='sm'
                />
            </Flex>
            <Flex direction='column' mb='2px' align='flex-start' >
                <Upload  handleImageChange={handleImageChange}/>
            </Flex>
              
        </Flex>
    )
}

export default ServiceForm
