import { Button, Grid, GridItem, useBreakpointValue } from "@chakra-ui/react";
import NavBar from "./component/NavBar";
import GameGrid from "./component/GameGrid";
import GenreList from "./component/GenreList";
import { useState } from "react";
import { Genre } from "./hooks/useGenres";
import PlatfromSelector from "./component/PlatfromSelector";
import { Platform } from "./hooks/useGames";

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
}

const App = () => {
  // const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);
  // const [selectedPlatform, setSelectedPlatform] = useState<Platform | null>(null);

  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{ base: "1fr", lg: "250px 1fr" }}
    >
      <GridItem area="nav">
        <NavBar />
      </GridItem>
      {useBreakpointValue({
        base: null,
        lg: <GridItem area="aside" paddingX={5}><GenreList selectedGenre={gameQuery.genre} onSelectGenre={(genre) => setGameQuery({...gameQuery,genre})} /></GridItem>,
      })}
      <GridItem area="main">
        <PlatfromSelector selectedPlatform={gameQuery.platform} onSelectPlatform={(platform)=> setGameQuery({...gameQuery,platform})} />
        <GameGrid gameQuery={gameQuery}/>
      </GridItem>
    </Grid>
  );
};

export default App;
