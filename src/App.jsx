import React from "react";
import { Card, Container, Grid, Text } from "@nextui-org/react";

const App = () => {
  return (
    <div>
      <Card css={{ h: "100vh", $$cardColor: "none", dflex:"center" }} >
        <Text h1 size="$6xl" css={{ fontFamily:"Ibarra", fontWeight:"900", color:"#ffafaf", lineHeight:"1.5rem"}}>{`< >`}</Text>
        <Text h1 size="$5xl" css={{ fontFamily:"Ibarra", fontWeight:"100" }}>Axolotlj-dev</Text>
      </Card>

      <Container>
        <Grid.Container gap={2} justify="center">
          <Grid sm={6}>s</Grid>
          <Grid sm={6}>s</Grid>
        </Grid.Container>
      </Container>
    </div>
  );
};

export default App;
