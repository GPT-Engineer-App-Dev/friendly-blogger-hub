import { Container, Text, VStack, Heading, Box, Image, Link } from "@chakra-ui/react";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Heading as="h1" size="2xl">Welcome to My Personal Blog</Heading>
        <Image src="/images/blog-banner.jpg" alt="Blog Banner" borderRadius="md" />
        <Text fontSize="lg" textAlign="center">
          Hi there! I'm [Your Name], and this is my personal space where I share my thoughts, experiences, and stories. 
          Feel free to explore and connect with me through my posts.
        </Text>
        <Box>
          <Link href="/about" color="teal.500" fontSize="lg">Learn more about me</Link>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;