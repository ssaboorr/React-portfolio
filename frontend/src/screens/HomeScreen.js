import { Flex, Box, Text, Heading, Image } from "@chakra-ui/react";
import HeroOne from "../components/HeroOne";
import HeroThree from "../components/HeroThree";
import HeroTwo from "../components/HeroTwo";
import Type from "../components/Type";
const HomeScreen = () => {
  return (
    <Flex direction="column" mt="85px" w="full" p="8">
      {/* Section 1 Hero */}
      <HeroOne />
      {/* Section 2 Hero */}
      <HeroTwo />
      {/* Section 3 Hero */}

      <HeroThree />
    </Flex>
  );
};
export default HomeScreen;
