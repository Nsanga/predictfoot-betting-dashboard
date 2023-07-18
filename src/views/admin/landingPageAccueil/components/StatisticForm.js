import React, { useEffect } from 'react'
import { Flex, Input, Spinner, Text, useColorModeValue } from '@chakra-ui/react'
import Upload from './Upload';
import { Button, ButtonGroup } from '@chakra-ui/react'
import { connect, useDispatch } from "react-redux";
import { fetchStatisticRequest } from 'redux/landingPage/actions';
import { updateStatisticRequest } from 'redux/landingPage/actions';

const StatisticForm = (
    {
        statistic,
        loading
    }
) => {
    const iconColor = useColorModeValue("brand.500", "white");
    const [title, setTitle] = React.useState('')
    const [subtitle, setSubtitle] = React.useState('')
    const [description, setDescription] = React.useState('')
    const [statType, setStatType] = React.useState('')
    const [pourcentage, setPourcentage] = React.useState('')
    const [image, setImage] = React.useState('')

    const handleTitleChange = (event) => setTitle(event.target.value)
    const handleSubtitleChange = (event) => setSubtitle(event.target.value)
    const handletDescriptionChange = (event) => setDescription(event.target.value)
    const handleStatTypeChange = (event) => setStatType(event.target.value)
    const handlePourcentageChange = (event) => setPourcentage(event.target.value)
    const handleImageChange = (imageURL) => {
        setImage(imageURL);
    };

    const [isEditMode, setIsEditMode] = React.useState(false);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchStatisticRequest());
        // console.log("Dispatched fetchPredictRequest");
    }, [dispatch]);

    useEffect(() => {
        if (statistic) {
            setTitle(statistic.title || '');
            setSubtitle(statistic.subtitle || '');
            setDescription(statistic.description || '');
            setStatType(statistic.statType || '');
            setPourcentage(statistic.pourcentage || '');
            setImage(statistic.image || '');
            setIsEditMode(true);
        }
    }, [statistic]);
    const handleButtonClick = () => {
        const formData = {
            title: title,
            subtitle: subtitle,
            description: description,
            titleStat: statType,
            pourcentage: pourcentage,
            image: image
        };

        if (isEditMode) {
            // Call the update action with the ID and updated form data
            dispatch(updateStatisticRequest(statistic._id, formData));
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
                        <Text mb='8px'>Sous-titre:</Text>
                        <Input
                            variant='flushed'
                            value={subtitle}
                            onChange={handleSubtitleChange}
                            placeholder='Entrer votre sous-titre'
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
                    <Flex direction='column'>
                        <Text mb='8px'>Type de statistique:</Text>
                        <Input
                            variant='flushed'
                            value={statType}
                            onChange={handleStatTypeChange}
                            placeholder='Entrer le type de statistique'
                            size='sm'
                        />
                    </Flex>
                    <Flex direction='column'>
                        <Text mb='8px'>Pourcentage:</Text>
                        <Input
                            variant='flushed'
                            value={pourcentage}
                            onChange={handlePourcentageChange}
                            placeholder='Entrer le taux des predictions'
                            size='sm'
                        />
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
    statistic: LandingReducer.statistic,
    loading: LandingReducer.loading,
    error: LandingReducer.error,
});

export default connect(mapStateToProps)(StatisticForm);
