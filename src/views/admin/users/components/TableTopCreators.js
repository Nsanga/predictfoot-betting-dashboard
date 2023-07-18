import {
  Avatar,
  Box,
  Flex,
  Icon,
  Progress,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  useColorModeValue,
} from "@chakra-ui/react";
import React, { useMemo, useState } from "react";
import {
  useGlobalFilter,
  usePagination,
  useSortBy,
  useTable,
} from "react-table";
import SearchBars from './searchBar';
import UserDetails from "./UserDetails";
import { DeleteIcon } from "@chakra-ui/icons";
import ModalAlert from "./ModalAlert";
import { MdCancel, MdCheckCircle, MdOutlineError } from "react-icons/md";

function TopCreatorTable(props) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalDeleteOpen, setIsModalDeleteOpen] = useState(false);
  const [selectedUserId, setSelectedUserId] = useState(null);
  const [userId, setUserId] = useState(null);


  const { columnsData, tableData } = props;

  const columns = useMemo(() => columnsData, [columnsData]);
  const data = useMemo(() => tableData, [tableData]);

  const tableInstance = useTable(
    {
      columns,
      data,
    },
    useGlobalFilter,
    useSortBy,
    usePagination
  );

  const { getTableProps, getTableBodyProps, headerGroups, page, prepareRow } =
    tableInstance;

  const textColor = useColorModeValue("navy.700", "white");
  const textColorSecondary = useColorModeValue("secondaryGray.600", "white");
  const borderColor = useColorModeValue("gray.200", "whiteAlpha.100");
  const iconColor = useColorModeValue("brand.500", "white");
  return (
    <>
      <Flex
        direction='column'
        w='100%'
        overflowX={{ sm: "scroll", lg: "hidden" }}>
        <Flex
          align={{ sm: "flex-start", lg: "center" }}
          justify='space-between'
          w='100%'
          px='22px'
          pb='20px'
          mb='10px'
          boxShadow='0px 40px 58px -20px rgba(112, 144, 176, 0.26)'>
          <SearchBars />
        </Flex>
        <TableContainer px='25px'>
          <Table size='md' variant='simple' color='gray.500' mb='24px'>
            <Thead>
              <Tr>
                <Th pe='10px' borderColor={borderColor}>
                  <Flex
                    justify='space-between'
                    align='center'
                    fontSize={{ sm: "10px", lg: "12px" }}
                    color='gray.400'>
                    Téléphone
                  </Flex>
                </Th>
                <Th pe='10px' borderColor={borderColor}>
                  <Flex
                    justify='space-between'
                    align='center'
                    fontSize={{ sm: "10px", lg: "12px" }}
                    color='gray.400'>
                    E-mail
                  </Flex>

                </Th>
                <Th pe='10px' borderColor={borderColor}>
                  <Flex
                    justify='space-between'
                    align='center'
                    fontSize={{ sm: "10px", lg: "12px" }}
                    color='gray.400'>
                    Statut
                  </Flex>
                </Th>
                <Th pe='10px' borderColor={borderColor}>
                  <Flex
                    justify='space-between'
                    align='center'
                    fontSize={{ sm: "10px", lg: "12px" }}
                    color='gray.400'>
                    Dernière connexion
                  </Flex>
                </Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr onClick={() => setIsModalOpen(true)} cursor="pointer">
                <Td Text color={textColor} fontSize='sm' fontWeight='700'>
                  Téléphone
                </Td>
                <Td Text color={textColor} fontSize='sm' fontWeight='700'>
                  E-mail
                </Td>
                <Td Text color={textColor} fontSize='sm' fontWeight='700'>
                  Statut
                </Td>
                <Td Text color={textColor} fontSize='sm' fontWeight='700'>
                  Dernière connexion
                </Td>
                {/* <Flex align='center'>
                          <Icon
                            w='24px'
                            h='24px'
                            me='5px'
                            color={
                              cell.value === "Approved"
                                ? "green.500"
                                : cell.value === "Disable"
                                ? "red.500"
                                : cell.value === "Error"
                                ? "orange.500"
                                : null
                            }
                            as={
                              cell.value === "Approved"
                                ? MdCheckCircle
                                : cell.value === "Disable"
                                ? MdCancel
                                : cell.value === "Error"
                                ? MdOutlineError
                                : null
                            }
                          />
                          <Text color={textColor} fontSize='sm' fontWeight='700'>
                            {cell.value}
                          </Text>
                        </Flex> */}

              </Tr>
              <Tr onClick={() => setIsModalOpen(true)} cursor="pointer">
                <Td Text color={textColor} fontSize='sm' fontWeight='700'>
                  Téléphone
                </Td>
                <Td Text color={textColor} fontSize='sm' fontWeight='700'>
                  E-mail
                </Td>
                <Td Text color={textColor} fontSize='sm' fontWeight='700'>
                  Statut
                </Td>
                <Td Text color={textColor} fontSize='sm' fontWeight='700'>
                  Dernière connexion
                </Td>
              </Tr>

              <Tr onClick={() => setIsModalOpen(true)} cursor="pointer">
                <Td Text color={textColor} fontSize='sm' fontWeight='700'>
                  Téléphone
                </Td>
                <Td Text color={textColor} fontSize='sm' fontWeight='700'>
                  E-mail
                </Td>
                <Td Text color={textColor} fontSize='sm' fontWeight='700'>
                  Statut
                </Td>
                <Td Text color={textColor} fontSize='sm' fontWeight='700'>
                  Dernière connexion
                </Td>
              </Tr>
            </Tbody>
          </Table>
        </TableContainer>
        <UserDetails isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      </Flex>
    </>
  );
}

export default TopCreatorTable;
