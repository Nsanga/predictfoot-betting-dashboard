import React from 'react'
import { Flex, Input, Text, useColorModeValue } from '@chakra-ui/react'
import Upload from './Upload';
import { Button, ButtonGroup } from '@chakra-ui/react'

const AddForm = () => {
    const iconColor = useColorModeValue("brand.500", "white");
    const [author, setAuthor] = React.useState('')
    const [title, setTitle] = React.useState('')
    const [resume, setResume] = React.useState('')
    const [description, setDescription] = React.useState('')
    const handleAuthorChange = (event) => setAuthor(event.target.value)
    const handleTitleChange = (event) => setTitle(event.target.value)
    const handleResumeChange = (event) => setResume(event.target.value)
    const handleDescriptionChange = (event) => setDescription(event.target.value)

    return (
        <Flex direction='column' gap={4} p={4}>
            <Flex direction='row' gap={8}>
                <Flex direction='column'>
                    <Text mb='8px'>Auteur:</Text>
                    <Input
                        variant='flushed'
                        value={author}
                        onChange={handleAuthorChange}
                        placeholder="Entrer le nom de l'auteur"
                        size='sm'
                    />
                </Flex>
                <Flex direction='column'>
                    <Text mb='8px'>Date de publication:</Text>
                    <Input
                        variant='flushed'
                        placeholder="Select Date"
                        size="sm"
                        type="datetime-local"
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
            </Flex>
            <Flex direction='column'>
                <Text mb='8px'>Preambule:</Text>
                <Input
                    variant='flushed'
                    value={resume}
                    onChange={handleResumeChange}
                    placeholder="Entrer un preambule de l'article"
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
            <Flex direction='row'>
                <Flex direction='column' align='flex-start' >
                    <Text mb='8px'>Profile:</Text>
                    <Upload />
                </Flex>
                <Flex direction='column' align='flex-start' >
                    <Text mb='8px'>Image:</Text>
                    <Upload />
                </Flex>
            </Flex>
        </Flex>
    )
}

export default AddForm
