import { Grid, GridItem, useBreakpointValue } from "@chakra-ui/react";

const App = () => {
  return (
    <Grid templateAreas={{
      base: `"nav" "main"`,
      lg: `"nav nav" "aside main"`,

    }}>
      <GridItem area='nav' bg='coral'>Nav</GridItem>
      {useBreakpointValue({ base: null, lg: <GridItem area='aside' bg='lightblue'>Aside</GridItem> })}
      <GridItem area='main' bg='lightgreen'>Main</GridItem>
    </Grid>
  )
}

export default App;