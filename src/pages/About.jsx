import { Container, Heading, Text, VStack } from "@chakra-ui/react";

const About = () => {
  return (
    <Container centerContent maxW="container.md" py={10}>
      <VStack spacing={4}>
        <Heading>About Us</Heading>
        <Text fontSize="lg">
          Welcome to ChatApp, a high-end, elegant platform for real-time multi-user conversations. Our mission is to provide a seamless and visually appealing chat experience.
        </Text>
      </VStack>
    </Container>
  );
};

export default About;