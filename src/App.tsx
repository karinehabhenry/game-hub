import { Button, Grid, GridItem, useBreakpointValue } from "@chakra-ui/react";
import NavBar from "./component/NavBar";
import { useColorMode } from "./components/ui/color-mode";

const App = () => {
  return (
    <Grid templateAreas={{
      base: `"nav" "main"`,
      lg: `"nav nav" "aside main"`,

    }}>
      <GridItem area='nav'>
        <NavBar />
      </GridItem>
      {useBreakpointValue({ base: null, lg: <GridItem area='aside' bg='lightblue'>Aside</GridItem> })}
      <GridItem area='main' bg='lightgreen'>Main</GridItem>
    </Grid>
  )
}

export default App;