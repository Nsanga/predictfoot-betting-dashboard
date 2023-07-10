import React, { useEffect, useState } from 'react'
import { Box, Flex, Tab, TabList, TabPanel, TabPanels, Tabs, Text, useColorModeValue } from "@chakra-ui/react/dist/chakra-ui-react.cjs";
import { IconButton } from '@chakra-ui/react'
import { BsPlusCircleFill } from 'react-icons/bs'
import Card from "components/card/Card.js";
import NotificationsTable from './NotificationsTable';
import Add from './Add';

const Tabpane = () => {
    const iconColor = useColorModeValue("brand.500", "white");
    const cardShadow = useColorModeValue(
        "0px 18px 40px rgba(112, 144, 176, 0.12)",
        "unset"
    )
    const bgColorPrimary = useColorModeValue("brand.500", "white");
    const textColorSecondary = "gray.400";
    const textColorCoast = useColorModeValue("white.100", "#0f5784");
    const bg = useColorModeValue("white", "navy.700");

    return (
        <div>
            <Tabs isFitted  >
                <TabList mb='1em'>
                    <Tab fontWeight='700' >Manuelles</Tab>
                    <Tab fontWeight='700' >Automatiques</Tab>
                </TabList>
                <TabPanels>
                    <TabPanel>
                        <Card mb={{ base: "0px", "2xl": "20px" }}>
                            <Flex direction='row' justify='flex-end' mb={2}>
                                <Add />
                            </Flex>
                            <NotificationsTable
                                boxShadow={cardShadow}
                                mb='20px'
                                name='Name'
                                description='Description'
                            />

                            <NotificationsTable
                                boxShadow={cardShadow}
                                mb='20px'
                                name='Name'
                                description='Description'
                            />

                            <NotificationsTable
                                boxShadow={cardShadow}
                                mb='20px'
                                name='Name'
                                description='Description'
                            />

                        </Card>
                    </TabPanel>
                    <TabPanel>
                    <Card mb={{ base: "0px", "2xl": "20px" }}>
                            <Flex direction='row' justify='flex-end' mb={2}>
                                <Add />
                            </Flex>
                            <NotificationsTable
                                boxShadow={cardShadow}
                                mb='20px'
                                name='Nom'
                                description='Description'
                            />

                            <NotificationsTable
                                boxShadow={cardShadow}
                                mb='20px'
                                name='Nom'
                                description='Description'
                            />

                            <NotificationsTable
                                boxShadow={cardShadow}
                                mb='20px'
                                name='Nom'
                                description='Description'
                            />

                        </Card>
                    </TabPanel>
                    
                </TabPanels>
            </Tabs>
        </div>
    )
}

export default Tabpane;
