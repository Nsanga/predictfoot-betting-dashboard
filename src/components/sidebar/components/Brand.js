import React from "react";
import PredictFootLogo from "../../../assets/img/PredictFoot_logo.png"

// Chakra imports
import { Flex, useColorModeValue } from "@chakra-ui/react";

// Custom components
import { HorizonLogo } from "components/icons/Icons";
import { HSeparator } from "components/separator/Separator";

export function SidebarBrand() {
  //   Chakra color mode
  let logoColor = useColorModeValue("navy.700", "white");

  return (
    <Flex align='center' direction='column'>
      <HorizonLogo imageSrc={PredictFootLogo} width={200} height={60} my='32px' color={logoColor} />
      <HSeparator mb='20px' />
    </Flex>
  );
}

export default SidebarBrand;
