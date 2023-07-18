import React, { useEffect, useState } from 'react'
import { Box, Flex, Tab, TabList, TabPanel, TabPanels, Tabs, Text, useColorModeValue } from "@chakra-ui/react/dist/chakra-ui-react.cjs";
import { IconButton } from '@chakra-ui/react'
import { BsPlusCircleFill } from 'react-icons/bs'
import { BiExport } from 'react-icons/bi'
import Card from "components/card/Card.js";
import HeaderForm from './HeaderForm';
import StatisticForm from './StatisticForm';
import AdvertisementForm from './AdvertisementForm';
import AboutForm from './AboutForm';
import Service from './services';
import Package from './packages';
import Customer from './customers';
import GripAddForm from './grip';

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
            <Tabs isFitted orientation="vertical" >
                <TabList alignItems='flex-start' w='30%' style={{ height: "100%", display: "flex", flexDirection: "column" }}> 
                    <Tab fontWeight='700' fontSize={{ base: "12px", lg: 'md' }} >Bandeau</Tab>
                    <Tab fontWeight='700' fontSize={{ base: "12px", lg: 'md' }} >service</Tab>
                    <Tab fontWeight='700' fontSize={{ base: "12px", lg: 'md' }} >Statistiques</Tab>
                    <Tab fontWeight='700' fontSize={{ base: "12px", lg: 'md' }} >Packages</Tab>
                    <Tab fontWeight='700' fontSize={{ base: "12px", lg: 'md' }} >Client</Tab>
                    <Tab fontWeight='700' fontSize={{ base: "12px", lg: 'md' }} >Publicité</Tab>
                    <Tab fontWeight='700' fontSize={{ base: "12px", lg: 'md' }} >A propos de nous</Tab>
                    <Tab fontWeight='700' fontSize={{ base: "12px", lg: 'md' }} >Prise en main</Tab>
                </TabList>
                <TabPanels>
                    <TabPanel>
                        <Card mb={{ base: "0px", "2xl": "20px" }}>
                            <HeaderForm />
                        </Card>
                    </TabPanel>
                    <TabPanel>
                        <Card mb={{ base: "0px", "2xl": "20px" }}>
                            <Service />
                        </Card>
                    </TabPanel>
                    <TabPanel>
                        <Card mb={{ base: "0px", "2xl": "20px" }}>
                            <StatisticForm />
                        </Card>
                    </TabPanel>
                    <TabPanel>
                        <Card mb={{ base: "0px", "2xl": "20px" }}>
                            <Package />
                        </Card>
                    </TabPanel>
                    <TabPanel>
                        <Card mb={{ base: "0px", "2xl": "20px" }}>
                            <Customer />
                        </Card>
                    </TabPanel>
                    <TabPanel>
                        <Card mb={{ base: "0px", "2xl": "20px" }}>
                        <AdvertisementForm />
                        </Card>
                    </TabPanel>
                    <TabPanel>
                        <Card mb={{ base: "0px", "2xl": "20px" }}>
                        <AboutForm />
                        </Card>
                    </TabPanel>
                    <TabPanel>
                        <Card mb={{ base: "0px", "2xl": "20px" }}>
                            <GripAddForm />
                        </Card>
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </div>
    )
}

export default Tabpane;
