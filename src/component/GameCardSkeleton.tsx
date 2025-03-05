import { Card, CardBody, Skeleton,  } from '@chakra-ui/react'
import React from 'react'

const GameCardSkeleton = () => {
  return (
    <Card.Root width={'250px'} borderRadius={10} overflow={'hidden'} boxShadow={'md'}>
        <Skeleton height={'200px'} />
        <CardBody>
            <Skeleton/>
        </CardBody>
    </Card.Root>  
    )
}

export default GameCardSkeleton