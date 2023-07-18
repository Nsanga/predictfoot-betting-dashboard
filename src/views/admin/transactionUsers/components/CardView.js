import React from 'react'
import Cards from './Cards'
import IconBox from 'components/icons/IconBox'
import { Flex, Icon, useColorModeValue } from '@chakra-ui/react'
import { MdAttachMoney } from "react-icons/md";
import { GiTakeMyMoney } from 'react-icons/gi';

const CardView = () => {
    const boxBg = useColorModeValue("secondaryGray.300", "whiteAlpha.100");
    const brandColor = useColorModeValue("brand.500", "white");

    return (
        <div>
            <Flex direction={{ base: 'column', lg: 'row' }} justify='space-between' gap="30px">
                <Cards
                    startContent={
                        <IconBox
                            w='56px'
                            h='56px'
                            bg={boxBg}
                            icon={
                                <Icon w='32px' h='32px' as={GiTakeMyMoney} color={brandColor} />
                            }
                        />
                    }
                    name='Montant transactions réussites'
                    value='$642.39'
                />
                <Cards
                    startContent={
                        <IconBox
                            w='56px'
                            h='56px'
                            bg={boxBg}
                            icon={
                                <Icon w='32px' h='32px' as={GiTakeMyMoney} color={brandColor} />
                            }
                        />
                    }
                    name='Montant transactions échouées'
                    value='$642.39'
                />
                <Cards
                    startContent={
                        <IconBox
                            w='56px'
                            h='56px'
                            bg={boxBg}
                            icon={
                                <Icon w='32px' h='32px' as={GiTakeMyMoney} color={brandColor} />
                            }
                        />
                    }
                    name='Montant transactions en attentes'
                    value='$642.39'
                />
            </Flex>
        </div>
    )
}

export default CardView
