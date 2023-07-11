import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalBody,
    ModalFooter,
    Button,
    Text,
    Flex,
    Avatar
} from '@chakra-ui/react';
import React from 'react';
import ModalAlert from './ModalAlert';

const UserDetails = ({ isOpen, onClose }) => {
    return (
        <Modal
            closeOnOverlayClick={false}
            isOpen={isOpen}
            onClose={onClose}
            isCentered
        >
            <ModalOverlay />
            <ModalContent>
                <ModalBody pb={6}>
                    <Flex direction='column' gap={3}>
                        <Flex justify='center'>
                            <Avatar
                                // src={cell.value[1]}
                                w='80px'
                                h='80px'
                                me='8px'
                            />
                        </Flex>
                        <Flex justify='space-between'>
                            <Text fontSize={{ base: "12px", lg: 'md' }}>
                                Nom d'utilisateur:
                            </Text>
                            <Text fontSize={{ base: "12px", lg: 'md' }}>
                                username
                            </Text>
                        </Flex>
                        <Flex justify='space-between'>
                            <Text fontSize={{ base: "12px", lg: 'md' }}>
                                Email:
                            </Text>
                            <Text fontSize={{ base: "12px", lg: 'md' }}>
                                username
                            </Text>
                        </Flex>
                        <Flex justify='space-between'>
                            <Text fontSize={{ base: "12px", lg: 'md' }}>
                                Téléphone:
                            </Text>
                            <Text fontSize={{ base: "12px", lg: 'md' }}>
                                Téléphone
                            </Text>
                        </Flex>
                        <Flex justify='space-between'>
                            <Text fontSize={{ base: "12px", lg: 'md' }}>
                                Pays:
                            </Text>
                            <Text fontSize={{ base: "12px", lg: 'md' }}>
                                Pays
                            </Text>
                        </Flex>
                        <Flex justify='space-between'>
                            <Text fontSize={{ base: "12px", lg: 'md' }}>
                                Statut:
                            </Text>
                            <Text fontSize={{ base: "12px", lg: 'md' }}>
                                Statut
                            </Text>
                        </Flex>
                        <Flex justify='space-between'>
                            <Text fontSize={{ base: "12px", lg: 'md' }}>
                                Type de prédiction:
                            </Text>
                            <Text fontSize={{ base: "12px", lg: 'md' }}>
                                Type_de_prédiction
                            </Text>
                        </Flex>
                        <Flex justify='space-between'>
                            <Text fontSize={{ base: "12px", lg: 'md' }}>
                                Abonnement:
                            </Text>
                            <Text fontSize={{ base: "12px", lg: 'md' }}>
                                Abonnement
                            </Text>
                        </Flex>
                        <Flex justify='space-between'>
                            <Text fontSize={{ base: "12px", lg: 'md' }}>
                                Montant abonnement:
                            </Text>
                            <Text fontSize={{ base: "12px", lg: 'md' }}>
                                Montant_abonnement
                            </Text>
                        </Flex>
                        <Flex justify='space-between'>
                            <Text fontSize={{ base: "12px", lg: 'md' }}>
                                Mode de paiement:
                            </Text>
                            <Text fontSize={{ base: "12px", lg: 'md' }}>
                                Mode_de_paiement
                            </Text>
                        </Flex>
                        <Flex justify='space-between'>
                            <Text fontSize={{ base: "12px", lg: 'md' }}>
                                Date de souscription:
                            </Text>
                            <Text fontSize={{ base: "12px", lg: 'md' }}>
                                Date_de_souscription
                            </Text>
                        </Flex>
                        <Flex justify='space-between'>
                            <Text fontSize={{ base: "12px", lg: 'md' }}>
                                Dernière connexion:
                            </Text>
                            <Text fontSize={{ base: "12px", lg: 'md' }}>
                                Dernière_connexion
                            </Text>
                        </Flex>
                    </Flex>
                </ModalBody>

                <ModalFooter>
                    <Button colorScheme='blue' mr={3}>
                        <ModalAlert />
                    </Button>
                    <Button onClick={onClose} colorScheme='red' variant='solid'>Fermer</Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    );
};

export default UserDetails;
