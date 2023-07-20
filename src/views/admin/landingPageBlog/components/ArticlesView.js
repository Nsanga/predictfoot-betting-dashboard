import React, { useEffect, useState } from 'react'
import { Box, Flex, Spinner, Tab, TabList, TabPanel, TabPanels, Tabs, Text, useColorModeValue } from "@chakra-ui/react/dist/chakra-ui-react.cjs";
import { IconButton } from '@chakra-ui/react'
import { BsPlusCircleFill } from 'react-icons/bs'
import Card from "components/card/Card.js";
import ArticlesTable from './ArticlesTable';
import Add from './Add';
import moment from 'moment';
import 'moment/locale/fr';
import ArticleDetails from './ArticleDetails';

const ArticlesView = ({ articles, loading }) => {
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
                        {articles?.map((article, index) => (
                            <ArticlesTable
                                key={index}
                                boxShadow={cardShadow}
                                mb='20px'
                                name={article.author}
                                profession={article.profession}
                                datePublication={moment(article.datePublication).format('L')}
                                title={article.title}
                                preambule={article.preambule}
                                description={article.description}
                                profile={article.profile}
                                image={article.imageArticle}
                                statut={article.articleStatut}
                                itemId={article._id}
                            />
                        ))}
                    </>
                )}

            </Card>

        </div>
    )
}

export default ArticlesView;
