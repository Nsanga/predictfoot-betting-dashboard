import React, { useState } from "react";
import {
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  useColorModeValue,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import { url } from "urlLoader";
import moment from "moment";

export function SearchBar(props) {
  // Pass the computed styles into the `__css` prop
  const { variant, background, children, placeholder, borderRadius, debut, fin, ...rest } =props;

  const [input, setInput] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  // const [searchResults, setSearchResults] = useState([]);
  const dateFrom = moment().subtract(1, 'days').format('YYYY-MM-DD');
  const dateTo = moment().subtract(1, 'days').format('YYYY-MM-DD');
  const fetchData = (value) => {
    const link = `${url}/predict/get?dateFrom=${dateFrom}&dateTo=${dateTo}&search=${input}`;
    fetch(link)
    .then((response) => response.json())
    .then((json) => {
      console.log(json)
      setSearchResults(json); // Mise à jour de l'état avec les résultats filtrés
    })
    .catch((error) => {
      console.error('Error fetching data:', error);
      setSearchResults([]); // En cas d'erreur, définir les résultats de recherche sur une liste vide
    });
    console.log(link)
  }

  // Function to handle the search query change
  const handleSearchQueryChange = (value) => {
    setInput(value);
    fetchData(value);
  };

  // Chakra Color Mode
  const searchIconColor = useColorModeValue("gray.700", "white");
  const inputBg = useColorModeValue("secondaryGray.300", "navy.900");
  const inputText = useColorModeValue("gray.700", "gray.100");
  return (
    <InputGroup w={{ base: "100%", md: "200px" }} {...rest}>
      <InputLeftElement
        children={
          <IconButton
            bg='inherit'
            borderRadius='inherit'
            _hover='none'
            _active={{
              bg: "inherit",
              transform: "none",
              borderColor: "transparent",
            }}
            _focus={{
              boxShadow: "none",
            }}
            icon={
              <SearchIcon color={searchIconColor} w='15px' h='15px' />
            }></IconButton>
        }
      />
      <Input
        variant="search"
        fontSize="sm"
        bg={background ? background : inputBg}
        color={inputText}
        fontWeight="500"
        _placeholder={{ color: "gray.400", fontSize: "14px" }}
        borderRadius={borderRadius ? borderRadius : "30px"}
        placeholder={placeholder ? placeholder : "Search..."}
        value={input}
        onChange={(e) => handleSearchQueryChange(e.target.value)}
      />
    </InputGroup>
  );
}
