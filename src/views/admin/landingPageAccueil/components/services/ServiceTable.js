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
import React, { useState } from "react";
import ModalAlert from "./ModalAlert";
import ModalEditService from "./ModalEditService";

export default function ServiceTable(props) {
  const { number, name, description, ranking, link, image, ...rest } = props;
  const { itemId, service } = props;
  // Chakra Color Mode
  const textColorPrimary = useColorModeValue("secondaryGray.900", "white");
  const textColorSecondary = "gray.400";
  const brandColor = useColorModeValue("brand.500", "white");
  const bg = useColorModeValue("white", "navy.700");

  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  const handleEditModalOpen = () => {
    setIsEditModalOpen(true);
  };

  return (
    <Card bg={bg} {...rest} p='14px'>
      <Flex align='center' justify='space-between' direction={{ base: "column", md: "row" }}>
        <Box mt={{ base: "10px", md: "0" }}>
          <Text
            color={textColorPrimary}
            fontWeight='500'
            fontSize='md'
            mb='4px'
            mr={4}>
            {number}
          </Text>
        </Box>

        <Box mt={{ base: "10px", md: "0" }}>
          <Text
            color={textColorPrimary}
            fontWeight='500'
            fontSize='md'
            mb='4px'
            mr={4}>
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
        <Flex align='center' justify='center' mt={{ base: "10px", md: "0" }}>
          <Link
            href={link}
            variant='no-hover'
            me='16px'
            ms='auto'
            p='0px !important'>
            <ModalAlert itemId={itemId} />
          </Link>
          <Link
            href={link}
            variant='no-hover'
            me='16px'
            ms='auto'
            p='0px !important'
            onClick={handleEditModalOpen}>
            <ModalEditService
              isOpen={isEditModalOpen}
              onClose={() => setIsEditModalOpen(false)}
              number={number}
              title={name}
              description={description}
              itemId={service._id}
              service={service}
            />
            {/* <Icon as={MdEdit} color='secondaryGray.500' h='18px' w='18px' /> */}
          </Link>
        </Flex>
      </Flex>
    </Card>
  );
}
