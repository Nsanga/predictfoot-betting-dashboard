import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalFooter, ModalCloseButton, Button, Text, Flex, Avatar } from '@chakra-ui/react';
import React from 'react';

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
                            <Text>
                                Nom d'utilisateur:
                            </Text>
                            <Text>
                                username
                            </Text>
                        </Flex>
                        <Flex justify='space-between'>
                            <Text>
                                Email:
                            </Text>
                            <Text>
                                username
                            </Text>
                        </Flex>
                        <Flex justify='space-between'>
                            <Text>
                                Téléphone:
                            </Text>
                            <Text>
                                Téléphone
                            </Text>
                        </Flex>
                        <Flex justify='space-between'>
                            <Text>
                                Pays:
                            </Text>
                            <Text>
                                Pays
                            </Text>
                        </Flex>
                        <Flex justify='space-between'>
                            <Text>
                                Statut:
                            </Text>
                            <Text>
                                Statut
                            </Text>
                        </Flex>
                        <Flex justify='space-between'>
                            <Text>
                                Type de prédiction:
                            </Text>
                            <Text>
                                Type_de_prédiction
                            </Text>
                        </Flex>
                        <Flex justify='space-between'>
                            <Text>
                                Abonnement:
                            </Text>
                            <Text>
                                Abonnement
                            </Text>
                        </Flex>
                        <Flex justify='space-between'>
                            <Text>
                                Montant abonnement:
                            </Text>
                            <Text>
                                Montant_abonnement
                            </Text>
                        </Flex>
                        <Flex justify='space-between'>
                            <Text>
                                Mode de paiement:
                            </Text>
                            <Text>
                                Mode_de_paiement
                            </Text>
                        </Flex>
                        <Flex justify='space-between'>
                            <Text>
                                Date de souscription:
                            </Text>
                            <Text>
                                Date_de_souscription
                            </Text>
                        </Flex>
                        <Flex justify='space-between'>
                            <Text>
                                Dernière connexion:
                            </Text>
                            <Text>
                                Dernière_connexion
                            </Text>
                        </Flex>
                    </Flex>
                </ModalBody>

                <ModalFooter>
                    <Button colorScheme='blue' mr={3}>
                        Supprimer
                    </Button>
                    <Button onClick={onClose}>Fermer</Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    );
};

export default UserDetails;
