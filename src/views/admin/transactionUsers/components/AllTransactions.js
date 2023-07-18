import {
    Flex,
    Table,
    Icon,
    Tbody,
    Td,
    Text,
    Th,
    Thead,
    Tr,
    useColorModeValue,
    TableContainer,
    IconButton,
} from "@chakra-ui/react";
import React, { useMemo } from "react";
import {
    useGlobalFilter,
    usePagination,
    useSortBy,
    useTable,
} from "react-table";
import SearchBars from './searchBar';
import { BiExport } from 'react-icons/bi'

// Custom components
import Card from "components/card/Card";

// Assets
import { MdCheckCircle, MdCancel, MdOutlineError } from "react-icons/md";

export default function AllTransactions(props) {

    const textColor = useColorModeValue("secondaryGray.900", "white");
    const borderColor = useColorModeValue("gray.200", "whiteAlpha.100");
    const iconColor = useColorModeValue("brand.500", "white");

    return (
        <Card
            direction='column'
            w='100%'
            px='0px'
            overflowX={{ sm: "scroll", lg: "hidden" }}>
            <Flex px='25px' justify='space-between' mb='40px' align='center'>
                <Text
                    color={textColor}
                    fontSize='22px'
                    fontWeight='700'
                    lineHeight='100%'>
                    Toutes les transactions
                </Text>
            </Flex>
            <Flex direction='row' px='25px' justify='space-between' align='center' mb='4'>
                <SearchBars />
                <IconButton aria-label='update' color={iconColor} mr='4' icon={<BiExport siz
                    e='24px' />} />
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
                                    Nom
                                </Flex>
                            </Th>
                            <Th pe='10px' borderColor={borderColor}>
                                <Flex
                                    justify='space-between'
                                    align='center'
                                    fontSize={{ sm: "10px", lg: "12px" }}
                                    color='gray.400'>
                                    Telephone
                                </Flex>

                            </Th>
                            <Th pe='10px' borderColor={borderColor}>
                                <Flex
                                    justify='space-between'
                                    align='center'
                                    fontSize={{ sm: "10px", lg: "12px" }}
                                    color='gray.400'>
                                    Date
                                </Flex>
                            </Th>
                            <Th pe='10px' borderColor={borderColor}>
                                <Flex
                                    justify='space-between'
                                    align='center'
                                    fontSize={{ sm: "10px", lg: "12px" }}
                                    color='gray.400'>
                                    Montant
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
                        </Tr>
                    </Thead>
                    <Tbody>
                        <Tr>
                            <Td Text color={textColor} fontSize='sm' fontWeight='700'>
                                Nom
                            </Td>
                            <Td Text color={textColor} fontSize='sm' fontWeight='700'>
                                Telephone
                            </Td>
                            <Td Text color={textColor} fontSize='sm' fontWeight='700'>
                                Date
                            </Td>
                            <Td Text color={textColor} fontSize='sm' fontWeight='700'>
                                Montant
                            </Td>
                            <Td Text color={textColor} fontSize='sm' fontWeight='700'>
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
                                <Flex align='center'>
                                    <Icon
                                        w='24px'
                                        h='24px'
                                        me='5px'
                                        color="green.500"
                                        as={MdCheckCircle}
                                    />
                                    <Text color={textColor} fontSize='sm' fontWeight='700'>
                                        Approuvé
                                    </Text>
                                </Flex>
                            </Td>

                        </Tr>
                        <Tr>
                            <Td Text color={textColor} fontSize='sm' fontWeight='700'>
                                Nom
                            </Td>
                            <Td Text color={textColor} fontSize='sm' fontWeight='700'>
                                Telephone
                            </Td>
                            <Td Text color={textColor} fontSize='sm' fontWeight='700'>
                                Date
                            </Td>
                            <Td Text color={textColor} fontSize='sm' fontWeight='700'>
                                Montant
                            </Td>
                            <Td Text color={textColor} fontSize='sm' fontWeight='700'>
                                <Flex align='center'>
                                    <Icon
                                        w='24px'
                                        h='24px'
                                        me='5px'
                                        color="red.500"
                                        as={MdCancel}
                                    />
                                    <Text color={textColor} fontSize='sm' fontWeight='700'>
                                        Echoué
                                    </Text>
                                </Flex>
                            </Td>

                        </Tr>

                        <Tr>
                            <Td Text color={textColor} fontSize='sm' fontWeight='700'>
                                Nom
                            </Td>
                            <Td Text color={textColor} fontSize='sm' fontWeight='700'>
                                Telephone
                            </Td>
                            <Td Text color={textColor} fontSize='sm' fontWeight='700'>
                                Date
                            </Td>
                            <Td Text color={textColor} fontSize='sm' fontWeight='700'>
                                Montant
                            </Td>
                            <Td Text color={textColor} fontSize='sm' fontWeight='700'>
                                <Flex align='center'>
                                    <Icon
                                        w='24px'
                                        h='24px'
                                        me='5px'
                                        color="orange.500"
                                        as={MdOutlineError}
                                    />
                                    <Text color={textColor} fontSize='sm' fontWeight='700'>
                                        En attente
                                    </Text>
                                </Flex>
                            </Td>

                        </Tr>
                    </Tbody>
                </Table>
            </TableContainer>
        </Card>
    );
}
