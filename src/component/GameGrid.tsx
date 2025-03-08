import useGames from "@/hooks/useGames";
import { SimpleGrid, Text } from "@chakra-ui/react";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";
import { GameQuery } from "@/App";

// interface Props {
//     selectedGenre: Genre | null;
//     selectedPlatform: Platform | null;
// }

interface Props {
  gameQuery: GameQuery
}

const GameGrid = ({gameQuery}:Props) => {
  const { data, error, loading } = useGames(gameQuery);
  const skeletons = [1,2,3,4,5,6,7,8,9,10];

  if (error) return <Text>Error</Text>;

  return (
      <SimpleGrid columns={{sm:1, md:2, lg:3, xl:4}} padding={'10px'}  spaceX={4} spaceY={4}>

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
  );
};

export default GameGrid;
