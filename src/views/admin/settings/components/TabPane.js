import React, { useEffect, useState } from 'react'
import { Box, Flex, Tab, TabList, TabPanel, TabPanels, Tabs, Text, useColorModeValue } from "@chakra-ui/react/dist/chakra-ui-react.cjs";
import { IconButton } from '@chakra-ui/react'
import { BsPlusCircleFill } from 'react-icons/bs'
import { BiExport } from 'react-icons/bi'
import Card from "components/card/Card.js";
import moment from 'moment';
import 'moment/locale/fr';
import banner from "../../../../assets/img/auth/banner.png";
import avatar from "../../../../assets/img/avatars/avatar4.png";
import PronosticsTable from './SettingsTable';
import Add from './Add';
import PackagesTable from './PackagesTable';
import TabpaneNotification from './TabPaneNotification';

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

    return (
        <div>
            <Tabs isFitted orientation="vertical">
                <TabList alignItems='flex-start' w='35%' style={{ height: "100%", display: "flex", flexDirection: "column" }}>
                    <Tab fontWeight='700'fontSize={{base:"12px", lg:'md'}} >Pronostics</Tab>
                    <Tab fontWeight='700' fontSize={{base:"12px", lg:'md'}} >Paiements</Tab>
                    <Tab fontWeight='700' fontSize={{base:"12px", lg:'md'}} >Packages</Tab>
                    <Tab fontWeight='700' fontSize={{base:"12px", lg:'md'}} >Notifications automatiques</Tab>
                </TabList>
                <TabPanels>
                    <TabPanel>
                        <Card mb={{ base: "0px", "2xl": "20px" }}>
                            <Flex direction='row' justify='flex-end' mb={2}>
                                <Add />
                            </Flex>
                            <PronosticsTable
                                boxShadow={cardShadow}
                                mb='20px'
                                name='Name'
                                description='Description'
                            />

                            <PronosticsTable
                                boxShadow={cardShadow}
                                mb='20px'
                                name='Name'
                                description='Description'
                            />

                            <PronosticsTable
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
                            <PronosticsTable
                                boxShadow={cardShadow}
                                mb='20px'
                                name='Nom'
                                description='Description'
                            />

                            <PronosticsTable
                                boxShadow={cardShadow}
                                mb='20px'
                                name='Nom'
                                description='Description'
                            />

                            <PronosticsTable
                                boxShadow={cardShadow}
                                mb='20px'
                                name='Nom'
                                description='Description'
                            />

                        </Card>
                    </TabPanel>
                    <TabPanel>
                    <Card mb={{ base: "0px", "2xl": "20px" }}>
                            <Flex direction='row' justify='flex-end' mb={2}>
                                <Add />
                            </Flex>
                            <PackagesTable
                                boxShadow={cardShadow}
                                mb='20px'
                                duree='Duree'
                                price='Price'
                            />

                            <PackagesTable
                                boxShadow={cardShadow}
                                mb='20px'
                                duree='Duree'
                                price='Price'
                            />

                            <PackagesTable
                                boxShadow={cardShadow}
                                mb='20px'
                                duree='Duree'
                                price='Price'
                            />

                        </Card>
                    </TabPanel>
                    <TabPanel>
                        <TabpaneNotification />
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </div>
    )
}

export default Tabpane;
