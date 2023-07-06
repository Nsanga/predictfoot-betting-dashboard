import { Flex, Skeleton, SkeletonCircle } from '@chakra-ui/react'
import React from 'react'

const DataPreview = () => {
    return (
        <div>
            <Flex align='center' direction={{ base: "row", md: "row" }} justify='space-around' mb='2' >
                <Flex direction='column' align='center' >
                    <SkeletonCircle startColor='pink.500' endColor='orange.500' size='10' me='20px' m='4' />
                    <Skeleton />
                </Flex>

                <Flex direction='column' align='center' mt={{ base: "10px" }} justify='center'>
                    <Skeleton mb='4px' height="10px" width="50%"/>
                </Flex>
                <Flex direction='column' align='center' >
                    <SkeletonCircle size='10' me='20px' m='4' />
                    <Skeleton />
                </Flex>
            </Flex>

            <Flex direction='row' align='center' justify='space-between'>
                <Flex>
                    <Skeleton mr='8px' />
                    <Skeleton />
                </Flex>
                <Skeleton />
            </Flex>
        </div>
    )
}

export default DataPreview
