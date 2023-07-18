import React, { useEffect } from 'react'
import { Flex, Input, Spinner, Text, useColorModeValue } from '@chakra-ui/react'
import Upload from './Upload';
import { Button, ButtonGroup } from '@chakra-ui/react'
import { connect, useDispatch } from "react-redux";
import { fetchAboutRequest } from 'redux/landingPage/actions';
import { updateAboutRequest } from 'redux/landingPage/actions';

const AboutForm = (
    {
        about,
        loading
    }
) => {
    const iconColor = useColorModeValue("brand.500", "white");
    const [title, setTitle] = React.useState('')
    const [description, setDescription] = React.useState('')
const [image, setImage] = React.useState('')
    const handleTitleChange = (event) => setTitle(event.target.value)
    const handletDescriptionChange = (event) => setDescription(event.target.value)
    const handleImageChange = (imageURL) => {
        setImage(imageURL);
    };

    const [isEditMode, setIsEditMode] = React.useState(false);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchAboutRequest());
        // console.log("Dispatched fetchPredictRequest");
    }, [dispatch]);
    useEffect(() => {
        if (about) {
            setTitle(about.title || '');
            setDescription(about.description || '');
            setImage(about.image || '');
            setIsEditMode(true);
        }
    }, [about]);

    const handleButtonClick = () => {
        const formData = {
            title: title,
            description: description,
image: image
        };

        if (isEditMode) {
            // Call the update action with the ID and updated form data
            dispatch(updateAboutRequest(about._id, formData));
        } else {
            // Appel de l'action pour l'ajout
            //   dispatch(addHeaderRequest(formData)); // Remplacez `formData` par la valeur appropriée
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
                            onChange={handletDescriptionChange}
                            placeholder='Entrer votre description'
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
    about: LandingReducer.about,
    loading: LandingReducer.loading,
    error: LandingReducer.error,
});

export default connect(mapStateToProps)(AboutForm);
