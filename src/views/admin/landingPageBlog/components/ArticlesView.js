import React, { useEffect, useState } from 'react'
import { Box, Flex, Tab, TabList, TabPanel, TabPanels, Tabs, Text, useColorModeValue } from "@chakra-ui/react/dist/chakra-ui-react.cjs";
import { IconButton } from '@chakra-ui/react'
import { BsPlusCircleFill } from 'react-icons/bs'
import Card from "components/card/Card.js";
import ArticlesTable from './ArticlesTable';
import Add from './Add';

const ArticlesView = () => {
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
                <ArticlesTable
                    boxShadow={cardShadow}
                    mb='20px'
                    name=  'auteur'
                    datePublication= 'datePublication'
                    title= 'title'
                    description='description'
                />

                <ArticlesTable
                    boxShadow={cardShadow}
                    mb='20px'
                    name=  'auteur'
                    datePublication= 'datePublication'
                    title= 'title'
                    description='description'
                />

                <ArticlesTable
                    boxShadow={cardShadow}
                    mb='20px'
                    name=  'auteur'
                    datePublication= 'datePublication'
                    title= 'title'
                    description='description'
                />

            </Card>

        </div>
    )
}

export default ArticlesView;
