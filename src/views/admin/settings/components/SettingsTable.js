// Chakra imports
import {
  Box,
  Flex,
  Icon,
  Link,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
// Custom components
import Card from "components/card/Card.js";
import React from "react";
// Assets
import { MdDelete, MdEdit } from "react-icons/md";

export default function PronosticsTable(props) {
  const { name, description, ranking, link, image, ...rest } = props;
  // Chakra Color Mode
  const textColorPrimary = useColorModeValue("secondaryGray.900", "white");
  const textColorSecondary = "gray.400";
  const brandColor = useColorModeValue("brand.500", "white");
  const bg = useColorModeValue("white", "navy.700");
  return (
    <Card bg={bg} {...rest} p='14px'>
      <Flex align='center' justify='space-between' direction={{ base: "column", md: "row" }}>
        <Box mt={{ base: "10px", md: "0" }}>
          <Text
            color={textColorPrimary}
            fontWeight='500'
            fontSize='md'
            mb='4px'>
            {name}
          </Text>
        </Box>

        <Box mt={{ base: "10px", md: "0" }}>
          <Text
            color={textColorSecondary}
            fontWeight='500'
            fontSize='md'
            mb='4px'
          >
            {description}
          </Text>
        </Box>
        <Box mt={{ base: "10px", md: "0" }}>
        <Link
            href={link}
            variant='no-hover'
            me='16px'
            ms='auto'
            p='0px !important'>
            <Icon as={MdDelete} color='secondaryGray.500' h='18px' w='18px' />
          </Link>
          <Link
            href={link}
            variant='no-hover'
            me='16px'
            ms='auto'
            p='0px !important'>
            <Icon as={MdEdit} color='secondaryGray.500' h='18px' w='18px' />
          </Link>
        </Box>
      </Flex>
    </Card>
  );
}
