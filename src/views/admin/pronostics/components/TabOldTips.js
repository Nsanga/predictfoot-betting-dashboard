import React from 'react'
import { Box, Flex, Tab, TabList, TabPanel, TabPanels, Tabs, Text, useColorModeValue } from "@chakra-ui/react/dist/chakra-ui-react.cjs";
import SearchBars from './searchBar';
import { IconButton } from '@chakra-ui/react'
import FixtureOldTips from './FixtureOldTips';
import Card from "components/card/Card.js";
import DataPreview from './DataPreview';
import moment from 'moment';
import { BiChevronLeft, BiChevronRight, BiExport } from 'react-icons/bi'
import ReactPaginate from 'react-paginate';
import "../style.css";

const TabpaneOldTips = ({ oldPredicts, totalOldCoast, handleTabChange, loadingOld, totalOldPages, handleOldPageChange, oldpage }) => {
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

    const dateFrom = moment().subtract(1, 'days').format('YYYY-MM-DD');
    const dateTo = moment().subtract(1, 'days').format('YYYY-MM-DD')

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
                        {loadingOld ? (
                            <DataPreview />
                        ) : (
                            <>
                                {!oldPredicts || oldPredicts.length === 0 ? (
                                    <Text
                                        color={bgColorPrimary}
                                        fontSize='16px'
                                        align='center'
                                        p={4}
                                    >
                                        Aucune prédiction pour la journée précedente.
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
                                                match={match}
                                            />
                                        ))}
                                        <ReactPaginate
                                            previousLabel={<IconButton background='transparent' icon={<BiChevronLeft size='2rem'/>}  rounded='full' color="gray.400"/>}
                                            nextLabel={<IconButton background='transparent' icon={<BiChevronRight size='2rem'/>} rounded='full' color="gray.400"/>}
                                            pageCount={totalOldPages}
                                            onPageChange={(selectedPage) => handleOldPageChange(selectedPage.selected)} 
                                            forcePage={oldpage - 1}
                                            containerClassName={"pagination"}
                                            activeClassName={"active"}
                                            pageClassName={"page"}
                                        />
                                    </>
                                )}
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
                        {loadingOld ? (
                            <DataPreview />
                        ) : (
                            <>
                                {!oldPredicts || oldPredicts.length === 0 ? (
                                    <Text
                                        color={bgColorPrimary}
                                        fontSize='16px'
                                        align='center'
                                        p={4}
                                    >
                                        Aucune prédiction pour la journée précedente.
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
                                                match={match}
                                            />
                                        ))}
                                        <ReactPaginate
                                            previousLabel={<IconButton background='transparent' icon={<BiChevronLeft size='2rem'/>}  rounded='full' color="gray.400"/>}
                                            nextLabel={<IconButton background='transparent' icon={<BiChevronRight size='2rem'/>} rounded='full' color="gray.400"/>}
                                            pageCount={totalOldPages}
                                            onPageChange={(selectedPage) => handleOldPageChange(selectedPage.selected)} 
                                            forcePage={oldpage - 1}
                                            containerClassName={"pagination"}
                                            activeClassName={"active"}
                                            pageClassName={"page"}
                                        />
                                    </>
                                    
                                )}
                            </>
                        )}

                    </TabPanel>
                </TabPanels>
            </Tabs>
        </div>
    )
}

export default TabpaneOldTips
