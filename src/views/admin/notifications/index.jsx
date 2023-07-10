import { Box, Image, SimpleGrid } from "@chakra-ui/react";

import React from "react";
import Tabpane from "./components/TabPane";
import phoneNotification from "../../../assets/img/Phone_Notification.png";

export default function Overview() {
  return (
    <Box pt={{ base: "130px", md: "80px", xl: "80px" }}>
      <SimpleGrid
        columns={{ base: 1, md: 2, lg: 2, "2xl": 6 }}
        gap="20px"
        spacingX='18rem'
      >
        <Box boxSize={{ base: 'none', lg: "2xl"}}>
          <Tabpane />
        </Box>
        
        <Box boxSize={{ base: 'none', lg: "sm"}} display={{base:'none', lg: 'block'}}>
          <Image src={phoneNotification} alt="notifications" />
        </Box>
      </SimpleGrid>
    </Box>
  );
}
