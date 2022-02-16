import {
  Box,
  Flex,
  Heading,
  Icon,
  Link,
  useColorMode,
  Button,
} from "@chakra-ui/react";

import { Link as RouterLink } from "react-router-dom";

import { BsFillMoonFill, BsFillSunFill } from "react-icons/bs";
function DarkMode() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <>
      {colorMode === "light" ? (
        <Icon onClick={toggleColorMode} as={BsFillMoonFill} w="4" h="4" />
      ) : (
        <Icon onClick={toggleColorMode} as={BsFillSunFill} w="4" h="4" />
      )}
    </>
  );
}
const Navbar = () => {
  return (
    <>
      <Flex
        shadow="md"
        position="fixed"
        zIndex="sticky"
        w="full"
        borderBottom="2px"
        borderColor="purple"
        as="header"
        justifyContent="space-between"
        alignItems="center"
        p="4"
        direction={{ lg: "row", md: "column", base: "column" }}
        backdropFilter="saturate(180%) blur(10px)"
      >
        <Flex alignItems="center">
          <Link as={RouterLink} to="/" _hover={{ textDecor: "none" }}>
            <Heading
              ml={{ lg: "226px", md: "200px", base: "0" }}
              as="h2"
              fontSize="3xl"
              textShadow="1px 1px purple"
            >
              Abdussaboor
            </Heading>
          </Link>
        </Flex>

        <Flex mt="3" alignItems="center" gap="6" justifyContent="space-evenly">
          <Link as={RouterLink} to="/about" fontSize="xl" fontWeight="bold">
            About
          </Link>
          <Link as={RouterLink} to="/projects" fontSize="xl" fontWeight="bold">
            Projects
          </Link>
          <DarkMode />
        </Flex>
        <Box
          mr={{ lg: "163px", md: "140px", base: "0" }}
          display={{ lg: "block", md: "none", base: "none" }}
        >
          <Flex
            alignItems="center"
            gap="1"
            justifyContent="space-evenly"
            direction="row"
          >
            <Icon mx="2" w="4" h="4" />
            <Icon mx="2" w="4" h="4" />
            <Icon mx="2" w="4" h="4" />
          </Flex>
        </Box>
      </Flex>
    </>
  );
};

export default Navbar;
