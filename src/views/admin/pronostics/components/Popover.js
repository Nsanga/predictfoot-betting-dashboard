import React, { useState } from "react";

// Chakra imports
import {
    Icon,
    Flex,
    Text,
    Menu,
    MenuButton,
    MenuItem,
    MenuList,
    useDisclosure,
    useColorModeValue,
    Modal,
} from "@chakra-ui/react";
// Assets
import { MdDelete, MdEdit } from 'react-icons/md';
import { BiDotsVerticalRounded } from "react-icons/bi";
import ModalAlert from "./ModalAlert";
import ModalPredict from "./ModalPredict";

export default function Popup(props) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const { ...rest } = props;
    const { itemId, match, fixtureId } = props;

    const textColor = useColorModeValue("secondaryGray.500", "white");
    const textHover = useColorModeValue(
        { color: "secondaryGray.900", bg: "unset" },
        { color: "secondaryGray.500", bg: "unset" }
    );
    const iconColor = useColorModeValue("brand.500", "white");
    const bgList = useColorModeValue("white", "whiteAlpha.100");
    const bgShadow = useColorModeValue(
        "14px 17px 40px 4px rgba(112, 144, 176, 0.08)",
        "unset"
    );
    const bgButton = useColorModeValue("secondaryGray.300", "whiteAlpha.100");
    const bgHover = useColorModeValue(
        { bg: "secondaryGray.400" },
        { bg: "whiteAlpha.50" }
    );
    const bgFocus = useColorModeValue(
        { bg: "secondaryGray.300" },
        { bg: "whiteAlpha.100" }
    );

    // Ellipsis modals
    const {
        isOpen: isOpen1,
        onOpen: onOpen1,
        onClose: onClose1,
    } = useDisclosure();

    return (
        <Menu isOpen={isOpen1} onClose={onClose1} >
            <MenuButton
                align='center'
                justifyContent='center'
                // bg={bgButton}
                _hover={bgHover}
                _focus={bgFocus}
                _active={bgFocus}
                w='30px'
                h='30px'
                lineHeight='100%'
                onClick={onOpen1}
                borderRadius='10px'
                {...rest}
            // opacity={0}
            // _hover={{
            //     opacity: 1
            // }}
            >
                <Icon as={BiDotsVerticalRounded} color={iconColor} />
            </MenuButton>
            <MenuList
                w='150px'
                minW='unset'
                maxW='150px !important'
                border='transparent'
                backdropFilter='blur(63px)'
                bg={bgList}
                boxShadow={bgShadow}
                borderRadius='20px'
                p='15px'>
                <MenuItem
                    transition='0.2s linear'
                    color={textColor}
                    _hover={textHover}
                    p='0px'
                    borderRadius='8px'
                    _active={{
                        bg: "transparent",
                    }}
                    _focus={{
                        bg: "transparent",
                    }}
                    mb='10px'
                    onClick={() => setIsModalOpen(true)}>
                    <Flex align='center'>
                        <Icon as={MdEdit} h='16px' w='16px' me='8px' />
                        <Text fontSize='sm' fontWeight='400'>
                            Modifier
                        </Text>
                    </Flex>
                </MenuItem>
                <MenuItem
                    transition='0.2s linear'
                    p='0px'
                    borderRadius='8px'
                    color={textColor}
                    _hover={textHover}
                    _active={{
                        bg: "transparent",
                    }}
                    _focus={{
                        bg: "transparent",
                    }}
                    mb='10px'>
                    <ModalAlert itemId={itemId} fixtureId={fixtureId} match={match} />
                </MenuItem>

            </MenuList>
            {isModalOpen && (
                <ModalPredict isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}
                    itemId={itemId}
                    fixtureId={fixtureId}
                    match={match} 
                    />
            )}
        </Menu>
    );
}
