import React, { useEffect, useState } from 'react'
import { Box, Flex, Tab, TabList, TabPanel, TabPanels, Tabs, Text, useColorModeValue } from "@chakra-ui/react/dist/chakra-ui-react.cjs";
import SearchBars from './searchBar';
import Fixture from './Fixtures';
import { IconButton } from '@chakra-ui/react'
import { BsPlusCircleFill } from 'react-icons/bs'
import { BiExport } from 'react-icons/bi'
import Card from "components/card/Card.js";
import moment from 'moment';
import 'moment/locale/fr';
import AddPredict from './AddPredict';

moment.locale('fr');

const Tabpane = (
    { predicts, totalCoast, handleTabChange }
) => {
    const iconColor = useColorModeValue("brand.500", "white");
    const cardShadow = useColorModeValue(
        "0px 18px 40px rgba(112, 144, 176, 0.12)",
        "unset"
    )
    const bgColorPrimary = useColorModeValue("brand.500", "white");
    const textColorSecondary = "gray.400";
    const textColorCoast = useColorModeValue("white.100", "#0f5784");
    const bg = useColorModeValue("white", "navy.700");

    const filterTips = (array = [], type) => {
        return array.filter((ele) => ele.type_prediction === type)
    }
    const [activeTab, setActiveTab] = useState('Week Tips');

    const handleTabChanges = (type) => {
        setActiveTab(type);
    };

    return (
        <div>
            <Tabs isFitted  >
                <TabList mb='1em'>
                    <Tab fontWeight='700' onClick={() => handleTabChange('Week Tips')}>Week Tips</Tab>
                    <Tab fontWeight='700' onClick={() => handleTabChange('VIP Tips')}>VIP Tips</Tab>
                </TabList>
                <TabPanels>
                    <TabPanel>
                        <Flex direction='row' justify='space-between' align='center' mb='4'>
                            <SearchBars />
                            <Flex>
                                <IconButton aria-label='update' color={iconColor} mr='4' icon={<BiExport size='24px' />} />
                                <AddPredict predictType='Week Tips' />
                            </Flex>
                        </Flex>
                        {!predicts || predicts.length === 0  ? (
                            <Text
                                color={bgColorPrimary}
                                fontSize='20px'
                                align='center'
                                p={4}
                            >
                                Aucune prédiction pour la journée en cours.
                            </Text>
                        ) : (
                            <>
                                <Card bg={bg} p='12px'>
                                    <Flex direction='row' align='center' justify='space-between'>
                                        <Text
                                            // align='center'
                                            color={textColorSecondary}
                                            fontWeight='500'
                                            fontSize='12px'
                                        >
                                            Prédictions d'aujourd'hui
                                        </Text>
                                        <Box bg={bgColorPrimary} borderRadius={4}>
                                            <Text
                                                color={textColorCoast}
                                                fontWeight='900'
                                                fontSize='12px'
                                                p='4px'
                                            >
                                                {totalCoast}
                                            </Text>
                                        </Box>

                                    </Flex>
                                </Card>
                                {filterTips(predicts, "Week Tips")?.map((match, index) => (
                                    <Fixture
                                        key={index}
                                        boxShadow={cardShadow}
                                        mb='20px'
                                        flag={match.country.flag}
                                        country={match.country.name}
                                        championship={match.championship.name}
                                        time={moment(match.fixture.event_date).format('HH:mm')}
                                        logoHomeTeam={match.fixture.homeTeam.logo}
                                        homeTeamName={match.fixture.homeTeam.team_name}
                                        logoAwayTeam={match.fixture.awayTeam.logo}
                                        awayTeamName={match.fixture.awayTeam.team_name}
                                        prediction={match.prediction}
                                        coast={match.coast}
                                        predicts={predicts}
                                    />
                                ))}
                            </>
                        )}


                    </TabPanel>
                    <TabPanel>
                        <Flex direction='row' justify='space-between' align='center' mb='4'>
                            <SearchBars />
                            <Flex>
                                <IconButton aria-label='update' color={iconColor} mr='4' icon={<BiExport size='24px' />} />
                                <AddPredict predictType='VIP Tips' />
                            </Flex>
                        </Flex>
                        {!predicts || predicts.length === 0  ? (
                            <Text
                                color={bgColorPrimary}
                                fontSize='20px'
                                align='center'
                                p={4}
                            >
                                Aucune prédiction pour la journée en cours.
                            </Text>
                        ) : (
                            <>
                                <Card bg={bg} p='12px'>
                                    <Flex direction='row' align='center' justify='space-between'>
                                        <Text
                                            // align='center'
                                            color={textColorSecondary}
                                            fontWeight='500'
                                            fontSize='12px'
                                        >
                                            Prédictions d'aujourd'hui
                                        </Text>
                                        <Box bg={bgColorPrimary} borderRadius={4}
                                        >
                                            <Text
                                                color={textColorCoast}
                                                fontWeight='900'
                                                fontSize='12px'
                                                p='4px'
                                            >
                                                {totalCoast}
                                            </Text>
                                        </Box>

                                    </Flex>
                                </Card>
                                {filterTips(predicts, "VIP Tips")?.map((match, index) => (
                                    <Fixture
                                        key={index}
                                        boxShadow={cardShadow}
                                        mb='20px'
                                        flag={match.country.flag}
                                        country={match.country.name}
                                        championship={match.championship.name}
                                        time={moment(match.fixture.event_date).format('HH:mm')}
                                        logoHomeTeam={match.fixture.homeTeam.logo}
                                        homeTeamName={match.fixture.homeTeam.team_name}
                                        logoAwayTeam={match.fixture.awayTeam.logo}
                                        awayTeamName={match.fixture.awayTeam.team_name}
                                        prediction={match.prediction}
                                        coast={match.coast}
                                        predicts={predicts}
                                    />
                                ))}
                            </>
                        )}

                    </TabPanel>
                </TabPanels>
            </Tabs>
        </div>
    )
}

export default Tabpane;
