// Code: Todo App with Chakra UI
import {
  Container,
  Box,
  Fieldset,
} from "@chakra-ui/react";

// component
import AddTask from "./components/addTask";
import TakeTask from "./components/takeTask";

function App() {
  return (
    <Box
      width="100%"
      height="100vh"
      display="flex"
      justifyContent="center"
      alignItems="center"
      px={4}
    >
      <Container
        maxW={"md"}
        mx={"auto"}
        display={"flex"}
        justifyContent={"center"}
      >
        <Fieldset.Root>
          <AddTask />
          <TakeTask />
        </Fieldset.Root>
      </Container>
    </Box>
  );
}

export default App;
