import React, { useEffect } from 'react'
import { Flex, Input, Text, useColorModeValue } from '@chakra-ui/react'
import Upload from '../Upload';
import { Button, ButtonGroup } from '@chakra-ui/react'

const ServiceForm = (
    {
        number,
        title,
        description,
        handleNumberChange,
        handleTitleChange,
        handleDescriptionChange,
    }
) => {
    const iconColor = useColorModeValue("brand.500", "white");

    return (
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
    )
}

export default ServiceForm
