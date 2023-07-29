import React, { useEffect, useState } from 'react';
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    Button,
} from '@chakra-ui/react';
import AddPredictForm from './AddPredictForm';
import { addPredictRequest } from 'redux/predict/actions';
import { useDispatch } from 'react-redux';
import { url } from 'urlLoader';

const ModalPredict = ({ isOpen, onClose, predictType, countries, championships, matchs, loading, itemId, predicts, match }) => {
    const [selectedDate, setSelectedDate] = useState(null);
    const [selectedCountry, setSelectedCountry] = useState(null);
    const [selectedChampionship, setSelectedChampionship] = useState(null);
    const [selectedMatch, setSelectedMatch] = useState(null);
    const [selectedPrediction, setSelectedPrediction] = useState(null);
    const [selectedCote, setSelectedCote] = useState("");
    const [isAdding, setIsAdding] = useState(false);
    const [isUpdating, setIsUpdating] = useState(false);
    const dispatch = useDispatch();

    useEffect(() => {
        // Vérifier si un match est disponible
        if (match) {
            console.log(':::',setSelectedDate)
        //   setSelectedDate(match.date);
        setSelectedCountry(match.country);
        setSelectedChampionship(match.championship);
          setSelectedMatch(match.fixture);
          setSelectedPrediction(match.prediction);
          setSelectedCote(match.coast.toString()); // Convertir en chaîne de caractères, si nécessaire
        } else {
          // Si le match est vide, réinitialiser les états du formulaire
          setSelectedDate(null);
          setSelectedCountry(null);
          setSelectedChampionship(null);
          setSelectedMatch(null);
          setSelectedPrediction(null);
          setSelectedCote('');
        }
      }, [match]);
    

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
                    event_date: selectedMatch.value.event_date,
                    homeTeam: {
                        team_name: selectedMatch.value.homeTeam.team_name,
                        logo: selectedMatch.value.homeTeam.logo,
                    },
                    awayTeam: {
                        team_name: selectedMatch.value.awayTeam.team_name,
                        logo: selectedMatch.value.awayTeam.logo,
                    },
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
        onClose()
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
                    event_date: selectedMatch.value.event_date,
                    homeTeam: {
                        team_name: selectedMatch.value.homeTeam.team_name,
                        logo: selectedMatch.value.homeTeam.logo,
                    },
                    awayTeam: {
                        team_name: selectedMatch.value.awayTeam.team_name,
                        logo: selectedMatch.value.awayTeam.logo,
                    },
                },
                prediction: selectedPrediction.value,
                coast: parseFloat(selectedCote),
                type_prediction: predictType,
            };

            console.log(formData);

            // Dispatch the action to add the prediction with formData
            // dispatch(addPredictRequest(formData));
            const response = await fetch(`${url}/predict/update?Id=${itemId}`, {
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
        }
        finally {
            // Après la résolution de la requête (succès ou échec), définissez l'état isAdding sur false
            setIsUpdating(false);
            // Fermez le modal, quelle que soit la réponse de la requête
            onClose();
        }
        onClose()
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
                <ModalHeader>{itemId ? `Modifier cette ${predictType}` : `Ajouter un ${predictType}`}</ModalHeader>
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
                {/* <ModalFooter>
                    <Button onClick={handleAddPredict} colorScheme='blue' variant='solid' isLoading={isAdding}>
                        Ajouter
                    </Button>
                </ModalFooter> */}
            </ModalContent>
        </Modal>
    )
}

export default ModalPredict
