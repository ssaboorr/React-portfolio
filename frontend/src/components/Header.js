import {
  Box,
  Flex,
  Heading,
  Icon,
  Link,
  useColorMode,
  Button,
} from "@chakra-ui/react";

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
const Header = () => {
  return (
    <>
      <Flex
        as="header"
        justifyContent="space-between"
        alignItems="center"
        p="4"
      >
        <Flex alignItems="center">
          <Heading>Abdussaboor</Heading>
        </Flex>
        <Flex alignItems="center" gap="6" justifyContent="space-evenly">
          <Link fontSize="xl" fontWeight="bold">
            About
          </Link>
          <Link fontSize="xl" fontWeight="bold">
            Projects
          </Link>
          <DarkMode />
        </Flex>
        <Flex alignItems="center" gap="4" justifyContent="space-evenly">
          <Icon mx="5" w="4" h="4" /> Github
          <Icon mx="5" w="4" h="4" /> LinkedIN
          <Icon mx="5" w="4" h="4" /> Mail
        </Flex>
      </Flex>
    </>
  );
};

export default Header;
