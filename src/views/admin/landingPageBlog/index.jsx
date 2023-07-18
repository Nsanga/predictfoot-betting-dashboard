import { Box, Image, SimpleGrid } from "@chakra-ui/react";

import React from "react";
import ArticlesView from "./components/ArticlesView";

export default function Blog() {
  return (
    <Box pt={{ base: "130px", md: "80px", xl: "80px" }}>
        {/* <Box boxSize={{ base: 'none', lg: "2xl"}}> */}
          <ArticlesView />
        {/* </Box> */}
    </Box>
  );
}
