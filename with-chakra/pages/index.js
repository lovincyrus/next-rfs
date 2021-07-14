import { Container, Flex, Text } from '@chakra-ui/react'

const Home = () => (
  <Container padding="var(--padding)">
    <Flex alignItems="center" justifyContent="center" minHeight="100vh">
      <Text textStyle="h1">Welcome to Chakra UI + RFS</Text>
    </Flex>
  </Container>
)

export default Home
