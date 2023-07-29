import React, { useEffect } from 'react'
import { Flex, Input, Spinner, Text, useColorModeValue } from '@chakra-ui/react'
import Upload from './Upload';
import { Button, ButtonGroup } from '@chakra-ui/react'
import { connect, useDispatch } from "react-redux";
import { fetchHeaderRequest } from 'redux/landingPage/actions';
import { updateHeaderRequest } from 'redux/landingPage/actions';
import { addHeaderRequest } from 'redux/landingPage/actions';

const HeaderForm = (
    {
        headband,
        loading
    }
) => {
    const iconColor = useColorModeValue("brand.500", "white");
    const [title, setTitle] = React.useState('')
    const [description, setDescription] = React.useState('')
    const [linkAppS, setLinkAppS] = React.useState('')
    const [linkPlayS, setLinkPlayS] = React.useState('')
    const [image, setImage] = React.useState('')
    const [isEditMode, setIsEditMode] = React.useState(false);

    const handleTitleChange = (event) => {
        setTitle(event.target.value);
    }

    const handleDescriptionChange = (event) => {
        setDescription(event.target.value);
    }

    const handleLinkAppSChange = (event) => {
        setLinkAppS(event.target.value);
    }

    const handleLinkPlaySChange = (event) => {
        setLinkPlayS(event.target.value);
    }

    const handleImageChange = (imageURL) => {
        setImage(imageURL);
    };

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchHeaderRequest());
    }, [dispatch]);

    useEffect(() => {
        if (headband) {
            setTitle(headband.title || '');
            setDescription(headband.description || '');
            setLinkAppS(headband.linkAppStore || '');
            setLinkPlayS(headband.linkPlayStore || '');
            setImage(headband.image || '');
            setIsEditMode(true);
        }
    }, [headband]);

    const handleButtonClick = () => {
        const formData = {
            title: title,
            description: description,
            linkAppStore: linkAppS,
            linkPlayStore: linkPlayS,
            image: image
        };

        if (isEditMode) {
            // Call the update action with the ID and updated form data
            dispatch(updateHeaderRequest(headband._id, formData));
        } else {
            // Appel de l'action pour l'ajout
              dispatch(addHeaderRequest(formData)); // Remplacez `formData` par la valeur appropriée
        }
    };

    return (
        <>
            {loading ? (
                <Flex align='center' justify='center'>
                    <Spinner size='xl' />
                </Flex>
            ) : (
                <Flex direction='column' gap={4} p={4}>
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
                    <Flex direction='column'>
                        <Text mb='8px'>Lien AppStore:</Text>
                        <Input
                            variant='flushed'
                            value={linkAppS}
                            onChange={handleLinkAppSChange}
                            placeholder='Entrer le lien Apple Store'
                            size='sm'
                        />
                    </Flex>
                    <Flex direction='column'>
                        <Text mb='8px'>Lien PlayStore:</Text>
                        <Input
                            variant='flushed'
                            value={linkPlayS}
                            onChange={handleLinkPlaySChange}
                            placeholder='Entrer le lien Play Store'
                            size='sm'
                        />
                    </Flex>
                    <Flex direction='column' mb='2px' align='flex-start' >
                        <Upload imageUrl={image} handleImageChange={handleImageChange}/>
                    </Flex>
                    <Flex direction='row' justify='flex-end'>
                        <Button
                            colorScheme='blue'
                            onClick={handleButtonClick}
                            isLoading={loading} // Utilisation de la prop isLoading pour afficher le chargement du bouton d'action
                            loadingText={isEditMode ? 'Update' : 'Ajouter'}
                            spinnerPlacement='start'
                        >
                            {isEditMode ? 'Update' : 'Ajouter'}
                        </Button>
                    </Flex>

                </Flex>
            )}
        </>

    )
}
const mapStateToProps = ({ LandingReducer }) => ({
    headband: LandingReducer.headband,
    loading: LandingReducer.loading,
    error: LandingReducer.error,
});

export default connect(mapStateToProps)(HeaderForm);