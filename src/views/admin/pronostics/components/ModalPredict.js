import React, { useEffect, useState } from 'react';
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    Button,
    Text,
    Flex,
} from '@chakra-ui/react';
import AddPredictForm from './AddPredictForm';
import { addPredictRequest } from 'redux/predict/actions';
import { useDispatch } from 'react-redux';
import { url } from 'urlLoader';
import moment from 'moment';

const ModalPredict = ({ isOpen, onClose, predictType, countries, championships, matchs, loading, itemId, fixtureId, match }) => {
    const [selectedDate, setSelectedDate] = useState(null);
    const [selectedCountry, setSelectedCountry] = useState(null);
    const [selectedChampionship, setSelectedChampionship] = useState(null);
    const [selectedMatch, setSelectedMatch] = useState(null);
    const [selectedPrediction, setSelectedPrediction] = useState(null);
    const [selectedCote, setSelectedCote] = useState("");
    const [isAdding, setIsAdding] = useState(false);
    const [isUpdating, setIsUpdating] = useState(false);
    const dispatch = useDispatch();

    // Function to get the date for today, tomorrow, and the day after tomorrow
    const getDates = () => {
        const today = moment();
        const tomorrow = moment().add(1, 'day');
        const dayAfterTomorrow = moment().add(2, 'day');

        return [
            { value: formatDate(today), label: "Aujourd'hui" },
            { value: formatDate(tomorrow), label: 'Demain' },
            { value: formatDate(dayAfterTomorrow), label: 'Après-demain' },
        ];
    };

    // Function to format the date as 'YYYY-MM-DD'
    const formatDate = (date) => date.format('YYYY-MM-DD');

    // Set date options with today, tomorrow, and the day after tomorrow
    const [dateOptions, setDateOptions] = useState(getDates(selectedDate)); // Initialize dateOptions with the initial values

    useEffect(() => {
        if (isOpen && match) {
            console.log(selectedDate)
            // Si un match est sélectionné, pré-remplir les champs avec les valeurs du match
            const selectedOption = dateOptions.find((option) => option.value === match.date);
            // setSelectedDate(selectedOption || { value: match.date, label: match.date });

            if (match.country) {
                setSelectedCountry({ value: match.country.name, label: match.country.name, flag: match.country.flag });
            }

            if (match.championship) {
                setSelectedChampionship({ value: match.championship.name, label: match.championship.name, logo: match.championship.logo });
            }

            if (match.fixture) {
                const selectedMatchOption = {
                    value: match.fixture,
                    label: (
                        <Flex direction="row" justify="space-between">
                            {/* Ajoutez le contenu que vous souhaitez afficher pour le match ici */}
                            {/* Assurez-vous que les propriétés homeTeam et awayTeam existent avant d'y accéder */}
                            {match.fixture.homeTeam && (
                                <Flex>
                                    <img src={match.fixture.homeTeam.logo} alt={match.fixture.homeTeam.team_name} height="30px" width="30px" />
                                    <Text ml={2}>{match.fixture.homeTeam.team_name}</Text>
                                </Flex>
                            )}
                            {/* Assurez-vous que la propriété event_date existe avant d'y accéder */}
                            {match.fixture.event_date && (
                                <Flex alignItems="center" align="center" justify="center">
                                    <Text fontSize="sm">
                                        <b>
                                            <u>{moment(match.fixture.event_date).format('HH:mm')} GMT</u>
                                        </b>
                                    </Text>
                                </Flex>
                            )}
                            {/* Assurez-vous que les propriétés homeTeam et awayTeam existent avant d'y accéder */}
                            {match.fixture.awayTeam && (
                                <Flex>
                                    <img src={match.fixture.awayTeam.logo} alt={match.fixture.awayTeam.team_name} height="30px" width="30px" />
                                    <Text ml={2}>{match.fixture.awayTeam.team_name}</Text>
                                </Flex>
                            )}
                        </Flex>
                    ),
                };
                setSelectedMatch(selectedMatchOption);
            }

            if (match.prediction) {
                setSelectedPrediction({ value: match.prediction, label: match.prediction });
            }

            if (match.coast) {
                setSelectedCote(match.coast.toString());
            }
        } else {
            // Si le match est vide, réinitialiser les états du formulaire
            setSelectedDate(null);
            setSelectedCountry(null);
            setSelectedChampionship(null);
            setSelectedMatch(null);
            setSelectedPrediction(null);
            setSelectedCote("");
        }
    }, [match, selectedDate]);



    const handleAddPredict = async () => {
        setIsAdding(true);
        try {
            const formData = {
                date: selectedDate.value,
                country: {
                    flag: selectedCountry.flag,
                    name: selectedCountry.label
                },
                championship: {
                    logo: selectedChampionship.logo,
                    name: selectedChampionship.label
                },
                fixture: {
                    fixture_id: selectedMatch.value.fixture_id,
                    event_date: selectedMatch.value.event_date,
                    homeTeam: {
                        team_name: selectedMatch.value.homeTeam.team_name,
                        logo: selectedMatch.value.homeTeam.logo,
                    },
                    awayTeam: {
                        team_name: selectedMatch.value.awayTeam.team_name,
                        logo: selectedMatch.value.awayTeam.logo,
                    },
                    goalsHomeTeam: selectedMatch.value.goalsHomeTeam,
                    goalsAwayTeam: selectedMatch.value.goalsAwayTeam,
                    score: {
                        halftime: selectedMatch.value.score.halftime,
                        fulltime: selectedMatch.value.score.fulltime,
                        extratime: selectedMatch.value.score.Extratime,
                        penalty: selectedMatch.value.score.penalty
                    }
                },
                prediction: selectedPrediction.value,
                coast: parseFloat(selectedCote),
                type_prediction: predictType,
            };

            console.log(formData);

            // Dispatch the action to add the prediction with formData
            // dispatch(addPredictRequest(formData));
            const response = await fetch(`${url}/predict/create`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                const data = await response.json();
                console.log('Réponse de l\'API:', data);
            } else {
                console.error('Échec de l\'ajout de la prédiction');
            }
        } catch (error) {
            console.error('Erreur lors de la requête:', error);
        }
        finally {
            // Après la résolution de la requête (succès ou échec), définissez l'état isAdding sur false
            setIsAdding(false);
            // Fermez le modal, quelle que soit la réponse de la requête
            onClose();
        }
    };

    const handleUpdatePredict = async () => {
        setIsUpdating(true);
        try {
            const formData = {
                date: selectedDate.value,
                country: {
                    flag: selectedCountry.flag,
                    name: selectedCountry.label
                },
                championship: {
                    logo: selectedChampionship.logo,
                    name: selectedChampionship.label
                },
                fixture: {
                    fixture_id: selectedMatch.value.fixture_id,
                    event_date: selectedMatch.value.event_date,
                    homeTeam: {
                        team_name: selectedMatch.value.homeTeam.team_name,
                        logo: selectedMatch.value.homeTeam.logo,
                    },
                    awayTeam: {
                        team_name: selectedMatch.value.awayTeam.team_name,
                        logo: selectedMatch.value.awayTeam.logo,
                    },
                    goalsHomeTeam: selectedMatch.value.goalsHomeTeam,
                    goalsAwayTeam: selectedMatch.value.goalsAwayTeam,
                    score: {
                        halftime: selectedMatch.value.score.halftime,
                        fulltime: selectedMatch.value.score.fulltime,
                        extratime: selectedMatch.value.score.Extratime,
                        penalty: selectedMatch.value.score.penalty
                    }
                },
                prediction: selectedPrediction.value,
                coast: parseFloat(selectedCote),
                type_prediction: predictType,
            };

            console.log(formData);

            // Dispatch the action to add the prediction with formData
            // dispatch(addPredictRequest(formData));
            const response = await fetch(`${url}/predict/update?fixture_id=${fixtureId}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                const data = await response.json();
                console.log('Réponse de l\'API:', data);
            } else {
                console.error('Échec de la mise à jour de la prédiction');
            }
        } catch (error) {
            console.error('Erreur lors de la requête:', error);
        } finally {
            // Après la résolution de la requête (succès ou échec), définissez l'état isAdding sur false
            setIsUpdating(false);
            // Fermez le modal uniquement après le succès de la requête
            onClose();
        }
    };

    const overlay = (
        <ModalOverlay
            bg='blackAlpha.300'
            backdropFilter='blur(10px) hue-rotate(90deg)'
        />
    );
    return (
        <Modal isCentered isOpen={isOpen} onClose={onClose} size='3xl'>
            {overlay}
            <ModalContent>
                <ModalHeader>{itemId ? `Modifier cette prediction` : `Ajouter un ${predictType}`}</ModalHeader>
                {/* <ModalHeader>Ajouter un {predictType}</ModalHeader> */}
                <ModalBody>
                    <AddPredictForm
                        selectedDate={selectedDate}
                        setSelectedDate={setSelectedDate}
                        selectedCountry={selectedCountry}
                        setSelectedCountry={setSelectedCountry}
                        selectedChampionship={selectedChampionship}
                        setSelectedChampionship={setSelectedChampionship}
                        selectedMatch={selectedMatch}
                        setSelectedMatch={setSelectedMatch}
                        selectedPrediction={selectedPrediction}
                        setSelectedPrediction={setSelectedPrediction}
                        selectedCote={selectedCote}
                        setSelectedCote={setSelectedCote}
                        countries={countries}
                        championships={championships}
                        matchs={matchs}
                        loading={loading}
                        itemId={itemId}
                        match={match}
                    />
                </ModalBody>
                <ModalFooter>
                    <Button onClick={itemId ? handleUpdatePredict : handleAddPredict} colorScheme='blue' variant='solid' isLoading={isAdding || isUpdating}>
                        {itemId ? 'Modifier' : 'Ajouter'}
                    </Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    )
}

export default ModalPredict
