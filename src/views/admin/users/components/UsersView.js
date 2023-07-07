import React, { useEffect, useState } from 'react'
import { Box, Flex, Tab, TabList, TabPanel, TabPanels, Tabs, Text, useColorModeValue } from "@chakra-ui/react/dist/chakra-ui-react.cjs";

import TableTopCreators from "./TableTopCreators";
import tableDataTopCreators from "views/admin/marketplace/variables/tableDataTopCreators.json";
import { tableColumnsTopCreators } from "views/admin/marketplace/variables/tableColumnsTopCreators";

const UserOverview = (
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

    const filterTips = (array = [], type) => {
        return array.filter((ele) => ele.type_prediction === type)
    }

    return (
        <div>
            <Tabs variant='soft-rounded' colorScheme={'blue'}>
                <TabList m={4}>
                    <Tab >Users</Tab>
                    <Tab>VIP users</Tab>
                </TabList>
                <TabPanels>
                    <TabPanel>
                        <TableTopCreators
                            tableData={tableDataTopCreators}
                            columnsData={tableColumnsTopCreators}
                        />
                    </TabPanel>
                    <TabPanel>
                        <TableTopCreators
                            tableData={tableDataTopCreators}
                            columnsData={tableColumnsTopCreators}
                        />
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </div>
    )
}

export default UserOverview;
