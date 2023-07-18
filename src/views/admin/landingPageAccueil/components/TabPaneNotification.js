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
import Add from './HeaderForm';
import NotificationTable from './AdvertisementForm';

const TabpaneNotification = () => {
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
            <Tabs variant='soft-rounded' colorScheme='blue'>
                <TabList m={6}>
                    <Tab>Types de campagne</Tab>
                    <Tab>Chaines de communication</Tab>
                </TabList>
                <TabPanels>
                    <TabPanel>
                    <Card mb={{ base: "0px", "2xl": "20px" }}>
                            <Flex direction='row' justify='flex-end' mb={2}>
                                <Add />
                            </Flex>
                            <NotificationTable
                                boxShadow={cardShadow}
                                mb='20px'
                                name='Name'
                                description='Description'
                            />

                            <NotificationTable
                                boxShadow={cardShadow}
                                mb='20px'
                                name='Name'
                                description='Description'
                            />

                            <NotificationTable
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
                            <NotificationTable
                                boxShadow={cardShadow}
                                mb='20px'
                                name='Name'
                                // description='Description'
                            />

                            <NotificationTable
                                boxShadow={cardShadow}
                                mb='20px'
                                name='Name'
                                // description='Description'
                            />

                            <NotificationTable
                                boxShadow={cardShadow}
                                mb='20px'
                                name='Name'
                                // description='Description'
                            />

                        </Card>
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </div>
    )
}

export default TabpaneNotification;
