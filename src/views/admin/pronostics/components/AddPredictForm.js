import { Box, Flex, Input,Text } from '@chakra-ui/react';
import React, { useState, useEffect } from 'react';
import Select from 'react-select';
import moment from 'moment';
import { connect, useDispatch } from "react-redux";
import {fetchCountryByDate} from '../../../../redux/predict/actions'

const AddPredictForm = ({countries,loading}) => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [selectedChampionship, setSelectedChampionship] = useState(null);
  const [selectedMatch, setSelectedMatch] = useState(null);
  const [dateOptions, setDateOptions] = useState([]);
  const [countryOptions, setCountryOptions] = useState([]);
  const [championshipOptions, setChampionshipOptions] = useState([]);
  const [matchOptions, setMatchOptions] = useState([]);
  const [predictionOptions,setPredictionOptions] = useState([]);
  const [selectedPrediction, setSelectedPrediction] = useState(null);
  const [selectedCote, setSelectedCote] = useState('');
  const dispatch = useDispatch();

  
  // Function to get the date for today, tomorrow, and the day after tomorrow
  const getDates = () => {
    const today = moment();
    const tomorrow = moment().add(1, 'day');
    const dayAfterTomorrow = moment().add(2, 'day');

    return [
      { value: formatDate(today), label: 'Aujourd\'hui' },
      { value: formatDate(tomorrow), label: 'Demain' },
      { value: formatDate(dayAfterTomorrow), label: 'Après-demain' },
    ];
  };

  // Function to format the date as 'YYYY-MM-DD'
  const formatDate = (date) => date.format('YYYY-MM-DD');

  // Set date options with today, tomorrow, and the day after tomorrow
  useEffect(() => {
    setDateOptions(getDates());
  }, []);

  // Fetch countries based on the selected date and populate countryOptions state
  useEffect(() => {
    const fetchCountries = async () => {
      if (!selectedDate) return; // Skip if no date is selected yet
      try {
        await dispatch( fetchCountryByDate({date:selectedDate.value})); 
        if (countries.length > 0 && countries) {
          const countryOptions = countries.map((country) => ({
            value: country.name,
            label: country.name,
            flag: country.flag,
          }));
          setCountryOptions(countryOptions);
          setSelectedCountry(null); // Reset the selected country when the date changes
          setChampionshipOptions([]); // Reset the selected championship options when the date changes
          setMatchOptions([]); // Reset the selected match options when the date changes
        }
      } catch (error) {
        console.error('Error fetching countries:', error);
        setCountryOptions([]); // Set empty options in case of an error
      }
    };
    fetchCountries();
  }, [dispatch,selectedDate]);

  // Fetch championships based on the selected country and populate championshipOptions state
  useEffect(() => {
    const fetchChampionships = async () => {
      if (!selectedCountry) return; // Skip if no country is selected yet
      try {
        const response = await fetch(`http://localhost:5000/api/v1/fixture/getChampionships?date=${selectedDate.value}&country=${selectedCountry.value}`);
        const data = await response.json();
        if (data.success) {
          const championshipOptions = data.data.championship.map((championship) => ({
            value: championship.name,
            label: championship.name,
            logo: championship.logo,
          }));
          setChampionshipOptions(championshipOptions);
          setSelectedChampionship(null); // Reset the selected championship when the country changes
          setMatchOptions([]); // Reset the selected match options when the country changes
        }
      } catch (error) {
        console.error('Error fetching championships:', error);
        setChampionshipOptions([]); // Set empty options in case of an error
      }
    };
    fetchChampionships();
  }, [selectedCountry, selectedDate]);

  // Fetch matches based on the selected date and championship and populate matchOptions state
  useEffect(() => {
    const fetchMatches = async () => {
      if (!selectedDate || !selectedChampionship) return; // Skip if date or championship is not selected yet
      try {
        const response = await fetch(`http://localhost:5000/api/v1/fixture/getMatches?date=${selectedDate.value}&championship=${selectedChampionship.value}`);
        const data = await response.json();
        if (data.success) {
          const matchOptions = data.data.map((match) => ({
            value: match.fixture_id,
            label:
            <Flex direction="row" justify="space-between">
              <Flex >
                <img src={match.homeTeam.logo} alt={match.homeTeam.team_name} height="30px" width="30px" />
                <Text ml={2}>{match.homeTeam.team_name}</Text>
              </Flex>
              <Flex alignItems="center" align="center" justify="center">
                <Text fontSize="sm">
                  <b>
                    <u>{moment(match.event_date).format('HH:mm')} GMT</u>
                  </b>
                </Text>
              </Flex>
              <Flex >
                <img src={match.awayTeam.logo} alt={match.awayTeam.team_name} height="30px" width="30px" />
                <Text ml={2}>{match.awayTeam.team_name}</Text>
              </Flex>
            </Flex>
          }));
          setMatchOptions(matchOptions);
          setSelectedMatch(null); // Reset the selected match when the date or championship changes
        }
      } catch (error) {
        console.error('Error fetching matches:', error);
        setMatchOptions([]); // Set empty options in case of an error
      }
    };
    fetchMatches();
  }, [selectedDate, selectedChampionship]);

  const handlePredictionChange = (prediction) => {
    setSelectedPrediction(prediction);
    console.log("prediction",prediction);
  };

    // Set prediction option
    useEffect(() => {
      setPredictionOptions([
        { value: 'Home Win', label: 'Home Win' },
        { value: 'Away Win', label: 'Away Win' },
        { value: 'Draw', label: 'Draw' },
        { value: 'Double Chance Home', label: 'Double Chance Home' },
        { value: 'Double Chance Away', label: 'Double Chance Away' },
        { value: 'Two Teams Goals', label: 'Two Teams Goals' },
        { value: 'Two Teams Don\'t Goals', label: 'Two Teams Don\'t Goals' },
        { value: 'Over 0.5', label: 'Over 0.5' },
        { value: 'Under 0.5', label: 'Under 0.5' },
        { value: 'Over 1.5', label: 'Over 1.5' },
        { value: 'Under 1.5', label: 'Under 1.5' },
        { value: 'Over 2.5', label: 'Over 2.5' },
        { value: 'Under 2.5', label: 'Under 2.5' },
        { value: 'Over 3.5', label: 'Over 3.5' },
        { value: 'Under 3.5', label: 'Under 3.5' },
      ]);
    }, []);

  // Function to format the label of each option with the flag or default image
  const formatOptionLabel = ({ value, label, flag, logo }) => (
    <Flex alignItems="center">
      <img
        src={flag ? flag : logo}
        alt={label}
        style={{ width: '24px', marginRight: '8px' }}
        loading='lazy'
      />
      <span>{label}</span>
    </Flex>
  );

  return (
    <Flex direction="column" gap={8}>
      <Flex justify="space-between">
        <Box>
          <Text>Date</Text>
          <Select
            value={selectedDate}
            options={dateOptions}
            onChange={(e) =>setSelectedDate(e)}
            name="date"
            isSearchable={true}
            isClearable={true}
            placeholder="Choisir Date"
          />
        </Box>
        <Box>
          <Text>Pays</Text>
          <Select
            value={selectedCountry}
            options={countryOptions}
            onChange={setSelectedCountry}
            name="country"
            isSearchable={true}
            isClearable={true}
            placeholder="Choisir Pays"
            formatOptionLabel={formatOptionLabel} // Apply the custom label format
            isLoading={loading}
          />
        </Box>
        <Box>
          <Text>Championnat</Text>
          <Select
            value={selectedChampionship}
            options={championshipOptions}
            onChange={setSelectedChampionship}
            name="championship"
            isSearchable={true}
            isClearable={true}
            placeholder="Choisir Championnat"
            formatOptionLabel={formatOptionLabel} // Apply the custom label format
          />
        </Box>
      </Flex>
      <Box>
        <Text>Rencontre</Text>
        <Select
          value={selectedMatch}
          options={matchOptions}
          onChange={setSelectedMatch}
          name="match"
          isSearchable={true}
          isClearable={true}
          placeholder="Choisir Rencontre"
        />
      </Box>
      <Flex justify="space-between">
        <Box>
          <Text>Prédiction</Text>
          <Select
            value={selectedPrediction}
            options={predictionOptions}
            onChange={handlePredictionChange}
            name="prediction"
            isSearchable={true}
            isClearable={true}
            placeholder="Choisir Prédiction"
          />
        </Box>
        <Box>
          <Text>Cote</Text>
          <Input
            type="text"
            value={selectedCote}
            onChange={(e) => setSelectedCote(e.target.value)}
            placeholder="Entrez la cote"
          />
        </Box>
      </Flex>
    </Flex>
  );
};


const mapStateToProps = ({ PredictReducer }) => ({
  countries: PredictReducer.countries,
  loading: PredictReducer.loading,
  error: PredictReducer.error,
});

export default connect(mapStateToProps)(AddPredictForm);
