import { Container, Heading, Text, VStack } from "@chakra-ui/react";

const Contact = () => {
  return (
    <Container centerContent maxW="container.md" py={10}>
      <VStack spacing={4}>
        <Heading>Contact Us</Heading>
        <Text fontSize="lg">
          If you have any questions or feedback, feel free to reach out to us at contact@chatapp.com.
        </Text>
      </VStack>
    </Container>
  );
};

export default Contact;