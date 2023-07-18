import React, { useEffect, useState } from 'react'
import { Box, Flex, Tab, TabList, TabPanel, TabPanels, Tabs, Text, useColorModeValue } from "@chakra-ui/react/dist/chakra-ui-react.cjs";
import { IconButton } from '@chakra-ui/react'
import { BsPlusCircleFill } from 'react-icons/bs'
import Card from "components/card/Card.js";
import PackageTable from './PackageTable';
import {Spinner} from '@chakra-ui/react';

const PackageAddForm = ({ plan, loading }) => {
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
                {loading ? (
                    <Flex align='center' justify='center'>
                        <Spinner size='xl' />
                    </Flex>
                ) : (
                    <>
                        {plan?.map((plans, index) => (
                            <PackageTable
                                key={index}
                                boxShadow={cardShadow}
                                mb='20px'
                                type={plans.type}
                                time={plans.duration}
                                price={plans.price}
                                itemId={plans._id}
                            />
                        ))}
                    </>
                )}

            </Card>

        </div>
    )
}

export default PackageAddForm;
