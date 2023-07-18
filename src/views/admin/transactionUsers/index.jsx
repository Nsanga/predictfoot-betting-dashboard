import React from "react";
import CardView from "./components/CardView";
import { Box, Flex, SimpleGrid } from "@chakra-ui/react";
import AllTransactions from "./components/AllTransactions";

const Users = () => {
  return (
    <div>
      <Box pt={{ base: "130px", md: "80px", xl: "80px" }}>
        <Flex direction={{base: 'column', lg:'row'}}
        //   columns={{ base: 1, md: 2, lg: 3, "2xl": 6 }}
        //   gap="20px"
          mb="20px"
        >
          <CardView />
        </Flex>
        <Flex direction={{base: 'column', lg:'row'}}
        //   columns={{ base: 1, md: 2, lg: 3, "2xl": 6 }}
        //   gap="20px"
        //   mb="20px"
        >
            <AllTransactions />
        </Flex>
      </Box>
    </div>
  );
};

export default Users;
