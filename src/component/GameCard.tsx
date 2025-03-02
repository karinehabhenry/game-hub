import { Game } from '@/hooks/useGames'
import { Card, CardBody, Heading, Image } from "@chakra-ui/react";
import React from 'react'

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
        </CardBody>
    </Card.Root>
  )
}

export default GameCard