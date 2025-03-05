import useGames from "@/hooks/useGames";
import { SimpleGrid, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";

const GameGrid = () => {
  const { games, error, loading } = useGames();
  const skeletons = [1,2,3,4,5,6]

  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid columns={{sm:1, md:2, lg:3, xl:5}} padding={'10px'} spaceX={4} spaceY={4}>

        {loading && skeletons.map((skeleton) => (
            <GameCardSkeleton key={skeleton}/>
        ))}
        {games.map((game) => (
            <GameCard key={game.id} game={game} />
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
