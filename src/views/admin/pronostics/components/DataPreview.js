import { Flex, Skeleton, SkeletonCircle } from '@chakra-ui/react'
import Card from 'components/card/Card'
import React from 'react'

const DataPreview = () => {
    return (
        <>
        <Flex direction='column' gap={2} >
            <Skeleton height='40px' borderRadius={12}/>
            <Skeleton height='20px' />
            <Skeleton height='80px' borderRadius={8} mb={4}/>

            <Skeleton height='20px' />
            <Skeleton height='80px' borderRadius={8} mb={4}/>

            <Skeleton height='20px' />
            <Skeleton height='80px' borderRadius={8}/>
        </Flex>
        </>
    )
}

export default DataPreview
