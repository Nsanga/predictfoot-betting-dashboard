// Chakra imports
import {
    Box,
    Flex,
    Icon,
    Image,
    Text,
    useColorModeValue,
} from "@chakra-ui/react";
import { Button } from "@chakra-ui/react/dist/chakra-ui-react.cjs";
// Custom components
import Card from "components/card/Card.js";
import React from "react";
import Popup from "./Popover";
import moment from 'moment';
import 'moment/locale/fr';
import DataPreview from "./DataPreview";

moment.locale('fr');
export default function Fixture(props) {
    const {
        flag,
        country,
        championship,
        date,
        logoHomeTeam,
        homeTeamName,
        time,
        logoAwayTeam,
        awayTeamName,
        prediction,
        coast,
        predicts,
        loading,
        predictType,
        match, ...rest } = props;
    // Chakra Color Mode
    const textColorPrimary = useColorModeValue("brand.500", "white");
    const textColorSecondary = "gray.400";
    const brandColor = useColorModeValue("brand.500", "white");
    const bg = useColorModeValue("white", "navy.700");
    return (
        <Box>
            <Flex direction='row' align='center'>
                <Image h='15px' w='20px' src={flag} borderRadius='4px' m='10px' />
                <Text
                    color={textColorPrimary}
                    fontWeight='500'
                    fontSize='12px'
                // mb='4px'
                >
                    {country}, {championship}
                </Text>
            </Flex>

            <Card bg={bg} {...rest} p='12px'>
                {loading ? (
                    <DataPreview />
                ) : (
                    <>
                        <Flex align='center' direction={{ base: "row", md: "row" }} justify='space-around' mb='2' >
                            <Flex direction='column' align='center' >
                                <Image h='30px' w='30px' src={logoHomeTeam} borderRadius='8px' me='20px' m='4' />
                                <Text
                                    color={textColorPrimary}
                                    fontWeight='500'
                                    fontSize='12px'
                                // mb='4px'
                                >
                                    {homeTeamName}
                                </Text>
                            </Flex>

                            <Flex direction='column' align='center' mt={{ base: "10px" }} justify='center'>
                                <Text
                                    color={textColorPrimary}
                                    fontWeight='500'
                                    fontSize='lg'
                                    mb='4px'>
                                    VS
                                </Text>
                                <Text
                                    color={textColorPrimary}
                                    fontWeight='500'
                                    fontSize='12px'
                                // mb='4px'
                                >
                                    {time}
                                </Text>
                            </Flex>
                            <Flex direction='column' align='center' >
                                <Image h='30px' w='30px' src={logoAwayTeam} borderRadius='8px' me='20px' m='4' />
                                <Text
                                    color={textColorPrimary}
                                    fontWeight='500'
                                    fontSize='12px'
                                // mb='4px'
                                >
                                    {awayTeamName}
                                </Text>
                            </Flex>
                            {predicts && predicts.length > 0 && (
                                <React.Fragment>
                                    {predicts.reduce((ids, item) => [...ids, item._id], []).length > 0 && (
                                        <Popup
                                            itemId={predicts.map((item) => item._id)}
                                            predicts={predicts} match={match}
                                            fixtureId={predicts.map((item) => item.fixture.fixture_id)} 
                                        />
                                    )}
                                </React.Fragment>
                            )}

                        </Flex>
                        <Flex direction='row' align='center' justify='space-between'>
                            <Flex>
                                <Text
                                    color={textColorPrimary}
                                    fontWeight='700'
                                    fontSize='12px'
                                    // mb='4px'
                                    mr='8px'>
                                    Prédiction :
                                </Text>
                                <Text color={textColorSecondary}
                                    fontSize='12px'>
                                    {prediction}
                                </Text>
                            </Flex>
                            <Text
                                color={brandColor}
                                fontWeight='500'
                                fontSize='12px'
                            // mb='4px'
                            >
                                {coast}
                            </Text>
                        </Flex>
                    </>
                )}

            </Card >
        </Box >
    );
}
