// Chakra imports
import {
  Avatar,
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
// Assets
import { MdDelete, MdEdit } from "react-icons/md";
import ModalAlert from "./ModalAlert";
import ArticleDetails from "./ArticleDetails";

export default function ArticlesTable(props) {
  const { name, datePublication, title, description, ranking, link, image, profile, preambule, profession, statut, ...rest } = props;
  const { itemId, articles } = props
  // Chakra Color Mode
  const textColorPrimary = useColorModeValue("secondaryGray.900", "white");
  const textColorSecondary = "gray.400";
  const brandColor = useColorModeValue("brand.500", "white");
  const bg = useColorModeValue("white", "navy.700");

  const [isModalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };
  return (
    <Card bg={bg} {...rest} p='14px'>
      <Flex>
        <Flex align='center' justify='space-between' direction={{ base: "column", md: "row" }} onClick={handleOpenModal} cursor="pointer">
          <Flex align='center' mr={2}>
            <Box mt={{ base: "10px", md: "0" }}>
              <Avatar
                src={profile}
                w='30px'
                h='30px'
                me='8px'
                mr={4}
              />
            </Box>

            <Box mt={{ base: "10px", md: "0" }}>
              <Text
                color={textColorPrimary}
                fontWeight='500'
                fontSize='md'
                mb='4px'
              >
                {name}
              </Text>
            </Box>
          </Flex>
          <Flex justify='center' mr={2}>
            <Box mt={{ base: "10px", md: "0" }} >
              <Text
                color={textColorPrimary}
                fontWeight='500'
                fontSize='md'
                mb='4px'>
                {datePublication}
              </Text>
            </Box>
          </Flex>
          <Flex justify='center' w="30%" mr={2}>
            <Box mt={{ base: "10px", md: "0" }} >
              <Text
                color={textColorPrimary}
                fontWeight='500'
                fontSize='md'
                mb='4px'
                style={{
                  display: "-webkit-box",
                  WebkitLineClamp: 2, // Change this number to adjust the number of lines (e.g., 1, 3, etc.)
                  WebkitBoxOrient: "vertical",
                  overflow: "hidden",
                }}>
                {title}
              </Text>
            </Box>
          </Flex>
          <Flex justify='center' w="30%">
            <Box mt={{ base: "10px", md: "0" }}>
              <Text
                color={textColorSecondary}
                fontWeight='500'
                fontSize='md'
                mb='4px'
                style={{
                  display: "-webkit-box",
                  WebkitLineClamp: 2, // Change this number to adjust the number of lines (e.g., 1, 2, etc.)
                  WebkitBoxOrient: "vertical",
                  overflow: "hidden",
                }}
              >
                {description}
              </Text>
            </Box>
          </Flex>
        </Flex>
        {isModalOpen && (
        <ArticleDetails
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          // Pass the relevant article information here
          name={name}
          datePublication={datePublication}
          title={title}
          description={description}
          profile={profile}
          preambule={preambule}
          profession={profession}
          image={image}
          statut={statut}
          // Add other article-related props as needed
          itemId={itemId}
          articles={articles}
        />
      )}
        <Flex mt={{ base: "10px", md: "0" }} align='center'>
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
            p='0px !important'>
            <Icon as={MdEdit} color='secondaryGray.500' h='18px' w='18px' />
          </Link>
        </Flex>
      </Flex>
    </Card>
  );
}
