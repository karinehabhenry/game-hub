import { Game } from '@/hooks/useGames'
import { Card, CardBody, Heading, Image, Text } from "@chakra-ui/react";
import React from 'react'
import PlatfromIconList from './PlatfromIconList';

interface Props {
    game: Game
}

const GameCard = ({game} :Props) => {
  return (
    <Card.Root borderRadius={10} overflow={'hidden'} boxShadow={'md'}>
        <Image src={game.background_image} alt={game.name} />
        <CardBody>
            <Heading fontSize={'xl'}>
            {game.name}
            </Heading>
            {/* {game.parent_platforms.map((platform) => <Text key={platform.platform.id}>{platform.platform.name}</Text>)} */}
            {/* {game.parent_platforms.map(({platform}) => <Text>{platform.name}</Text>)} */}
            <PlatfromIconList platforms={game.parent_platforms.map(p => p.platform)} />
        </CardBody>
    </Card.Root>
  )
}

export default GameCard