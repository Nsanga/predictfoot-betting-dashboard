import React, { useEffect, useState } from 'react'
import { Box, Flex, Tab, TabList, TabPanel, TabPanels, Tabs, Text, useColorModeValue } from "@chakra-ui/react/dist/chakra-ui-react.cjs";
import Card from "components/card/Card.js";
import Add from './Service';
import ServiceTable from './ServiceTable';
import {Spinner} from '@chakra-ui/react';

const ServiceAddForm = ({ service, loading }) => {
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

            <Card mb={{ base: "0px", "2xl": "20px" }}>
                <Flex direction='row' justify='flex-end' mb={2}>
                    <Add />
                </Flex>
                {loading ? (
                    <Flex align='center' justify='center'>
                        <Spinner size='xl' />
                    </Flex>
                ) : (
                    <>
                        {service.map((services, index) => (
                            <ServiceTable
                                key={index}
                                boxShadow={cardShadow}
                                mb='20px'
                                number={services.number}
                                name={services.title}
                                description={services.description}
                                itemId={services._id}
                                service={service}
                            />
                        ))}
                    </>
                )}


            </Card>

        </div>
    )
}

export default ServiceAddForm;
