import { Button, Grid, GridItem, useBreakpointValue } from "@chakra-ui/react";
import NavBar from "./component/NavBar";
import { useColorMode } from "./components/ui/color-mode";
import GameGrid from "./component/GameGrid";
import GenreList from "./component/GenreList";

const App = () => {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
    >
      <GridItem area="nav">
        <NavBar />
      </GridItem>
      {useBreakpointValue({
        base: null,
        lg: <GridItem area="aside"><GenreList/></GridItem>,
      })}
      <GridItem area="main">
        <GameGrid />
      </GridItem>
    </Grid>
  );
};

export default App;
