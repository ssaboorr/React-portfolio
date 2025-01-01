import { Flex, Heading, Box, Image, Text } from "@chakra-ui/react";

const HeroTwo = () => {
  return (
    <>
      <Flex
        direction="row"
        justifyContent="center"
        alignItems="center"
        mt="10"
        w="full"
        h="auto"
        gap="20"
        p="7"
        wrap="wrap"
        borderBottom="1px"
        shadow="lg"
        borderColor="purple.200"
        // p="10"
        backdropFilter="saturate(180%) blur(10px)"
      >
        <Flex p="10" direction="row" gap="20" wrap="wrap">
          <Flex direction="column" justifyContent="center">
            <Heading
              textShadow="1px 1px purple"
              mt="3"
              mb="5"
              as="h2"
              fontSize={{ lg: "5xl", base: "3xl" }}
              fontWeight="medium"
            >
              Let me Introduce Myself
            </Heading>

            <Text
              fontSize={{ lg: "3xl", base: "2xl" }}
              fontWeight="medium"
              mt="3"
              mb="5"
            >
              Driven by a passion for innovation, I specialize in crafting
              high-performance web and mobile applications that deliver seamless
              user experiences. With 4 years of hands-on expertise in{" "}
              <span style={{ color: "purple", fontWeight: "bold" }}>
                React.js
              </span>
              ,{" "}
              <span style={{ color: "purple", fontWeight: "bold" }}>
                React Native
              </span>
              ,{" "}
              <span style={{ color: "purple", fontWeight: "bold" }}>
                Node.js
              </span>
              , and{" "}
              <span style={{ color: "purple", fontWeight: "bold" }}>
                JavaScript
              </span>
              , I excel at building scalable solutions tailored for high-traffic
              environments.
            </Text>
            <Text
              fontSize={{ lg: "3xl", base: "2xl" }}
              fontWeight="medium"
              mt="3"
              mb="5"
            >
              An aspiring developer who loves to take on new projects that
              <br />
              challenges his analytical and technological capacities
            </Text>

            <Text
              fontSize={{ lg: "3xl", base: "2xl" }}
              fontWeight="medium"
              mt="3"
              mb="5"
            >
              Whether it's developing REST APIs, optimizing performance, or
              enhancing user experience, I am committed to delivering excellence
              and innovation at every step.
            </Text>
          </Flex>
          {/* <Box>
            <Image
              rounded="full"
              src="profile2.jpg"
              objectFit="cover"
              w={{ lg: "400px", md: "300px", base: "300px" }}
              // w={{ lg: "400px", md: "300px", base: "300px" }}
            />
          </Box> */}
        </Flex>
      </Flex>
    </>
  );
};

export default HeroTwo;
