import { useEffect, useState } from "react";
import { Box, Container, Input, Button, VStack, HStack, Text } from "@chakra-ui/react";
import io from "socket.io-client";

const socket = io("http://localhost:3000");

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    socket.on("message", (message) => {
      console.log("Received message:", message); // Debug log
      setMessages((prevMessages) => [...prevMessages, message]);
    });

    return () => {
      socket.off("message");
    };
  }, []);

  const sendMessage = () => {
    if (input.trim()) {
      console.log("Sending message:", input); // Debug log
      socket.emit("message", input);
      setInput("");
    }
  };

  return (
    <Container centerContent maxW="container.md" py={10}>
      <VStack spacing={4} w="100%">
        <Box w="100%" h="400px" bg="gray.100" p={4} overflowY="scroll">
          {messages.map((msg, index) => (
            <HStack key={index} spacing={4} mb={2}>
              <Text>{msg}</Text>
            </HStack>
          ))}
        </Box>
        <HStack w="100%">
          <Input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type your message..."
          />
          <Button onClick={sendMessage} colorScheme="blue">
            Send
          </Button>
        </HStack>
      </VStack>
    </Container>
  );
};

export default Chat;