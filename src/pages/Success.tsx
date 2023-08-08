import { useAuth } from "../hooks/useAuth";
import PrivateRoute from "../components/PrivateRoute";
import { useState } from "react";
import {
  Box,
  Button,
  Text,
  VStack,
  FormLabel,
  Input,
  Spacer,
  Stack,
} from "@chakra-ui/react";

export function SuccessPage() {
  const auth = useAuth();
  const [first, setFirst] = useState("");
  const [last, setLast] = useState("");

  if (auth.isLoading) {
    return <Box />;
  }
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
   event.preventDefault()
    let formData = {
      first: first,
      last: last,
    };
    fetch('/send-form-to-decision-api', {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body:JSON.stringify(formData)
    });
    console.log('clicked');
  };

  return (
    <PrivateRoute>
      <VStack h={500} justify="center" spacing={8}>
        <Text fontSize="5xl">Welcome {auth.username}!!</Text>
        <Text fontSize="4xl">Login Succeed🎉</Text>
        <form onSubmit={handleSubmit}>
          <Box>
            <FormLabel htmlFor="first">First Name</FormLabel>
            <Spacer height="10px" />
            <Input
              type="text"
              placeholder="First name"
              value={first}
              onChange={(e) => setFirst(e.target.value)}
              size="lg"
              required
            />
          </Box>
          <Spacer height="20px" />
          <FormLabel htmlFor="last">Last Name</FormLabel>
          <Input
            type="text"
            placeholder="Last Name"
            value={last}
            onChange={(e) => setLast(e.target.value)}
            size="lg"
            required
          />
          <Spacer height="35px" />
          <Stack align="center">
            <Button type="submit" colorScheme="teal" size="lg">
              Submit
            </Button>
          </Stack>
        </form>
        <Button colorScheme="teal" size="lg" onClick={() => auth.signOut()}>
          Log out
        </Button>
      </VStack>
    </PrivateRoute>
  );
}
