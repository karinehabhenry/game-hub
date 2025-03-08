import { Button, Grid, GridItem, useBreakpointValue } from "@chakra-ui/react";
import NavBar from "./component/NavBar";
import GameGrid from "./component/GameGrid";
import GenreList from "./component/GenreList";
import { useState } from "react";
import { Genre } from "./hooks/useGenres";
import PlatfromSelector from "./component/PlatfromSelector";
import { Platform } from "./hooks/useGames";

const App = () => {
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);
  const [selectedPlatform, setSelectedPlatform] = useState<Platform | null>(null);
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
        lg: <GridItem area="aside" paddingX={5}><GenreList selectedGenre={selectedGenre} onSelectGenre={setSelectedGenre} /></GridItem>,
      })}
      <GridItem area="main">
        <PlatfromSelector selectedPlatform={selectedPlatform} onSelectPlatform={setSelectedPlatform} />
        <GameGrid selectedPlatform={selectedPlatform} selectedGenre={selectedGenre}/>
      </GridItem>
    </Grid>
  );
};

export default App;
