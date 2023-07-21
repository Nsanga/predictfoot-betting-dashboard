import React from 'react';
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    ButtonGroup,
    Flex,
    Image,
    useColorModeValue,
    Text,
    Avatar,
    Box,
} from '@chakra-ui/react';
import AddForm from './AddForm';
import { MdDelete, MdStars } from 'react-icons/md';
import { FaClock } from 'react-icons/fa';

const ArticleDetails = (
    {
        isOpen,
        onClose,
        name,
        datePublication,
        title,
        description,
        profile,
        preambule,
        profession,
        image,
        statut
    }) => {
    const overlay = (
        <ModalOverlay
            bg='blackAlpha.300'
            backdropFilter='blur(10px) hue-rotate(90deg)'
        />
    );
    const textColorPrimary = useColorModeValue("secondaryGray.900", "white");
    return (
        <Modal isCentered isOpen={isOpen} onClose={onClose} size='2xl'>
            {overlay}
            <ModalContent>
                <ModalBody p={8}>
                    <Flex direction="column">
                        <Flex gap={4} align="center" mb={6}>
                            <Box>
                                <Avatar src={profile} w="65px" h="65px" />
                            </Box>
                            <Flex direction="column">
                                <Flex
                                    color={textColorPrimary}
                                    fontWeight='700'
                                    fontSize='md'
                                    align='center'
                                >
                                    {name} 
                                    <Box ml={2}> 
                                    {statut === 'populaire' ? <MdStars color="gold" size={15} /> : null} 
                                    {statut === 'recent' ? <FaClock color="blue" size={15} /> : null}
                                    </Box> 
                                </Flex>
                                <Text
                                    color={textColorPrimary}
                                    fontWeight='500'
                                    fontSize='sm'
                                >
                                    {profession}
                                </Text>
                                <Text
                                    color={textColorPrimary}
                                    fontWeight='500'
                                    fontSize='sm'
                                >
                                    {datePublication}
                                </Text>
                            </Flex>
                        </Flex>
                        <Flex>
                            <Text
                                color={textColorPrimary}
                                fontWeight='700'
                                fontSize='md'
                                mb='4px'
                                mr={2}
                            >
                                Titre:
                            </Text>
                            <Text
                                color={textColorPrimary}
                                fontWeight='500'
                                fontSize='md'
                                mb='4px'
                                style={{
                                    display: "-webkit-box",
                                    WebkitLineClamp: 1, // Change this number to adjust the number of lines (e.g., 1, 3, etc.)
                                    WebkitBoxOrient: "vertical",
                                    overflow: "hidden",
                                }}
                            >
                                {title}
                            </Text>
                        </Flex>
                        <Flex mb='4px'>
                            <Text
                                color={textColorPrimary}
                                fontWeight='700'
                                fontSize='md'
                                mr={2}
                            >
                                Preambule:
                            </Text>
                            <Text
                                color={textColorPrimary}
                                fontWeight='500'
                                fontSize='md'
                                style={{
                                    display: "-webkit-box",
                                    WebkitLineClamp: 2, // Change this number to adjust the number of lines (e.g., 1, 3, etc.)
                                    WebkitBoxOrient: "vertical",
                                    overflow: "hidden",
                                }}
                            >
                                {preambule}
                            </Text>
                        </Flex>
                        <Flex  mb='4px'>
                            <Text
                                color={textColorPrimary}
                                fontWeight='700'
                                fontSize='md'
                                mr={2}
                            >
                                Description:
                            </Text>
                            <Text
                                color={textColorPrimary}
                                fontWeight='500'
                                fontSize='md'
                                style={{
                                    display: "-webkit-box",
                                    WebkitLineClamp: 3, // Change this number to adjust the number of lines (e.g., 1, 3, etc.)
                                    WebkitBoxOrient: "vertical",
                                    overflow: "hidden",
                                }}
                            >
                                {description}
                            </Text>
                        </Flex>
                        <Flex mb={-8}>
                            <Image src={image} w="100%" h="290px" objectFit='cover' borderRadius='8px' />
                        </Flex>

                    </Flex>
                </ModalBody>
                <ModalFooter mb={-2}>
                    <ButtonGroup gap='2'>
                        <Button colorScheme='red' variant='solid' onClick={onClose}>Fermer</Button>
                        <Button colorScheme='blue' variant='solid'>Supprimer</Button>
                    </ButtonGroup>
                </ModalFooter>
            </ModalContent>
        </Modal>
    )
}

export default ArticleDetails
