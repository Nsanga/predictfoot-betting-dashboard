import React from 'react'
import { Box, Flex, Tab, TabList, TabPanel, TabPanels, Tabs, Text, useColorModeValue } from "@chakra-ui/react/dist/chakra-ui-react.cjs";
import SearchBars from './searchBar';
import { IconButton } from '@chakra-ui/react'
import { BiExport } from 'react-icons/bi'
import FixtureOldTips from './FixtureOldTips';
import Card from "components/card/Card.js";

const TabpaneOldTips = ({ oldPredicts, totalOldCoast, handleTabChange }) => {
    const iconColor = useColorModeValue("brand.500", "white");
    const cardShadow = useColorModeValue(
        "0px 18px 40px rgba(112, 144, 176, 0.12)",
        "unset"
    );
    const bgColorPrimary = useColorModeValue("brand.500", "white");
    const textColorSecondary = "gray.400";
    const textColorCoast = useColorModeValue("white.100", "#0f5784");
    const textColorStat = useColorModeValue("brand.500", "white");
    const bg = useColorModeValue("white", "navy.700");

    const filterTips = (array = [], type) => {
        return array.filter((ele) => ele.type_prediction === type)
    }
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
                                <IconButton aria-label='update' mr='2' color={iconColor} icon={<BiExport size='24px' />} />
                            </Flex>
                        </Flex>
                        {oldPredicts.length === 0 ? (
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
                                    <Flex direction='column' >
                                        <Flex direction='row' align='center' justify='space-between'>
                                            <Text
                                                // align='center'
                                                color={textColorSecondary}
                                                fontWeight='500'
                                                fontSize='12px'
                                                mb='2'>
                                                Prédictions d'hier
                                            </Text>
                                            <Box bg={bgColorPrimary} borderRadius={4}>
                                                <Text
                                                    color={textColorCoast}
                                                    fontWeight='900'
                                                    fontSize='12px'
                                                    p='4px'
                                                >
                                                    {totalOldCoast}
                                                </Text>
                                            </Box>
                                        </Flex>

                                        <Flex direction='row' align='center' justify='space-between'>
                                            <Text
                                                color={textColorStat}
                                                fontWeight='500'
                                                fontSize='12px'
                                            // mb='4px'
                                            >
                                                Statistiques de la journée
                                            </Text>

                                        </Flex>

                                    </Flex>
                                </Card>
                                {filterTips(oldPredicts, "Week Tips")?.map((match, index) => (
                                    <FixtureOldTips
                                        key={index}
                                        boxShadow={cardShadow}
                                        mb='20px'
                                        flag={match.country.flag}
                                        country={match.country.name}
                                        championship={match.championship.name}
                                        score={match.fixture.score.fulltime}
                                        logoHomeTeam={match.fixture.homeTeam.logo}
                                        homeTeamName={match.fixture.homeTeam.team_name}
                                        logoAwayTeam={match.fixture.awayTeam.logo}
                                        awayTeamName={match.fixture.awayTeam.team_name}
                                        prediction={match.prediction}
                                        coast={match.coast}
                                        oldPredicts={oldPredicts}
                                    />
                                ))}
                            </>
                        )}

                    </TabPanel>
                    <TabPanel>
                        <Flex direction='row' justify='space-between' align='center' mb='4'>
                            <SearchBars />
                            <Flex>
                                <IconButton aria-label='update' mr='2' color={iconColor} icon={<BiExport size='24px' />} />
                            </Flex>
                        </Flex>
                        {oldPredicts.length === 0 ? (
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
                                    <Flex direction='column' >
                                        <Flex direction='row' align='center' justify='space-between'>
                                            <Text
                                                // align='center'
                                                color={textColorSecondary}
                                                fontWeight='500'
                                                fontSize='12px'
                                                mb='2'>
                                                Prédictions d'hier
                                            </Text>
                                            <Box bg={bgColorPrimary} borderRadius={4}>
                                                <Text
                                                    color={textColorCoast}
                                                    fontWeight='900'
                                                    fontSize='12px'
                                                    p='4px'
                                                >
                                                    {totalOldCoast}
                                                </Text>
                                            </Box>
                                        </Flex>
                                        <Flex direction='row' align='center' justify='space-between'>
                                            <Text
                                                color={textColorStat}
                                                fontWeight='500'
                                                fontSize='12px'
                                            // mb='4px'
                                            >
                                                Statistiques de la journée
                                            </Text>
                                        </Flex>

                                    </Flex>
                                </Card>
                                {filterTips(oldPredicts, "VIP Tips")?.map((match, index) => (
                                    <FixtureOldTips
                                        key={index}
                                        boxShadow={cardShadow}
                                        mb='20px'
                                        flag={match.country.flag}
                                        country={match.country.name}
                                        championship={match.championship.name}
                                        score={match.fixture.score.fulltime}
                                        logoHomeTeam={match.fixture.homeTeam.logo}
                                        homeTeamName={match.fixture.homeTeam.team_name}
                                        logoAwayTeam={match.fixture.awayTeam.logo}
                                        awayTeamName={match.fixture.awayTeam.team_name}
                                        prediction={match.prediction}
                                        coast={match.coast}
                                        oldPredicts={oldPredicts}
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

export default TabpaneOldTips
