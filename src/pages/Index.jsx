import { Box, Container, Heading, Text, Image, SimpleGrid, VStack } from "@chakra-ui/react";
import { FaBrain } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" py={10}>
      <VStack spacing={5}>
        <FaBrain size="3em" />
        <Heading as="h1" size="2xl" textAlign="center">
          Explore Stable Diffusion
        </Heading>
        <Text fontSize="xl" textAlign="center">
          Discover the capabilities of one of the most advanced AI-driven image synthesis models.
        </Text>
      </VStack>
      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10} py={10}>
        <Box boxShadow="md" p="6" rounded="md" bg="white">
          <Image src="https://images.unsplash.com/photo-1695426093310-b7255c8797cd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxBSSUyMGdlbmVyYXRlZCUyMGFydHxlbnwwfHx8fDE3MTM3Nzk4ODd8MA&ixlib=rb-4.0.3&q=80&w=1080" />
          <Text mt={4} fontSize="lg" fontWeight="semibold" textAlign="center">
            AI Generated Art
          </Text>
        </Box>
        <Box boxShadow="md" p="6" rounded="md" bg="white">
          <Image src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxBSSUyMHBob3RvJTIwcmVzdG9yYXRpb258ZW58MHx8fHwxNzEzNzc5ODg4fDA&ixlib=rb-4.0.3&q=80&w=1080" />
          <Text mt={4} fontSize="lg" fontWeight="semibold" textAlign="center">
            Photo Restoration
          </Text>
        </Box>
        <Box boxShadow="md" p="6" rounded="md" bg="white">
          <Image src="https://images.unsplash.com/photo-1492707892479-7bc8d5a4ee93?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxBSSUyMHN0eWxlJTIwdHJhbnNmZXJ8ZW58MHx8fHwxNzEzNzc5ODg4fDA&ixlib=rb-4.0.3&q=80&w=1080" />
          <Text mt={4} fontSize="lg" fontWeight="semibold" textAlign="center">
            Style Transfer
          </Text>
        </Box>
      </SimpleGrid>
    </Container>
  );
};

export default Index;
