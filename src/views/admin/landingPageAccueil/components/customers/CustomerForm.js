import React from 'react'
import { Flex, Input, Text, useColorModeValue } from '@chakra-ui/react'
import Upload from '../Upload';

const ServiceForm = (
    {
        name,
        description,
        handleNameChange,
        handletDescriptionChange
    }
) => {
    const iconColor = useColorModeValue("brand.500", "white");

    return (
        <Flex direction='column' gap={4} p={4}>
            <Flex direction='column'>
                <Text mb='8px'>Titre:</Text>
                <Input
                    variant='flushed'
                    value={name}
                    onChange={handleNameChange}
                    placeholder='Entrer un nom'
                    size='sm'
                />
            </Flex>
            <Flex direction='column'>
                <Text mb='8px'>Description:</Text>
                <Input
                    variant='flushed'
                    value={description}
                    onChange={handletDescriptionChange}
                    placeholder='Entrer une description'
                    size='sm'
                />
            </Flex>
            <Flex direction='column' mb='2px' align='flex-start' >
                <Upload />
            </Flex>
        </Flex>
    )
}

export default ServiceForm
