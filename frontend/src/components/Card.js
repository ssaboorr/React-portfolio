import { Flex, Heading, Icon } from "@chakra-ui/react";

const Card = ({ children, ic }) => {
  return (
    <>
      <Flex
        direction="column"
        justifyContent="center"
        alignItems="center"
        border="2px solid purple"
        borderColor="purple.900"
        p="9"
        shadow="3px 2px purple"
        _hover={{ shadow: "5px 5px purple" }}
        rounded="md"
      >
        <Icon as={ic} my="3" w="20" h="20" />
        <Heading my="3" as="h3" fontSize="3xl">
          {children}
        </Heading>
      </Flex>
    </>
  );
};

export default Card;
