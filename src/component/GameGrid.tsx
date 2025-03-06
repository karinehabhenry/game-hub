import useGames from "@/hooks/useGames";
import { SimpleGrid, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";
import { Genre } from "@/hooks/useGenres";

interface Props {
    selectedGenre: Genre | null;
}

const GameGrid = ({selectedGenre}:Props) => {
  const { data, error, loading } = useGames(selectedGenre)
  const skeletons = [1,2,3,4,5,6]

  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid columns={{sm:1, md:2, lg:3, xl:5}} padding={'10px'}  spaceX={4} spaceY={4}>

        {loading && skeletons.map((skeleton) => (
            <GameCardContainer key={skeleton} >
                <GameCardSkeleton />
            </GameCardContainer>))}
        {data.map((game) => (
            // <GameCardContainer>
            <GameCard key={game.id} game={game} />
            // </GameCardContainer>
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
