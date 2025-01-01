import {
  Flex,
  Box,
  Text,
  Heading,
  Link,
  Icon,
  Image,
  List,
  OrderedList,
  ListItem,
} from "@chakra-ui/react";
import {
  DiJavascript1,
  DiNodejs,
  DiHtml5,
  DiCss3,
  DiReact,
  DiMongodb,
} from "react-icons/di";
import {
  SiRedux,
  SiChakraui,
  SiVisualstudiocode,
  SiPostman,
  SiFigma,
} from "react-icons/si";
import { AiFillGithub } from "react-icons/ai";
import { Card } from "../components/Card";
import GitHubCalendar from "react-github-calendar";
import Particle from "../components/Particles";

const AboutScreen = () => {
  const skill = [
    { skill: "JavaScript", ic: DiJavascript1 },
    { skill: "Node js", ic: DiNodejs },
    { skill: "React js", ic: DiReact },
    { skill: "Mongo DB", ic: DiMongodb },
    { skill: "Redux", ic: SiRedux },
    { skill: "HTML", ic: DiHtml5 },
    { skill: "CSS", ic: DiCss3 },
    // { skill: "Chakra UI", ic: SiChakraui },
  ];

  const tools = [
    { skill: "VsCode", ic: SiVisualstudiocode },
    { skill: "PostMan", ic: SiPostman },
    { skill: "Figma", ic: SiFigma },
    { skill: "Git", ic: AiFillGithub },
  ];
  return (
    <>
      <Particle />

      <Flex
        w="full"
        mt="85px"
        justifyContent="center"
        alignItems="center"
        py="10"
        wrap="wrap"
        direction="column"
        zIndex="100"
      >
        <Flex
          justifyContent="center"
          alignItems="center"
          wrap="wrap"
          gap="10"
          borderBottom="2px"
          borderColor="purple.800"
          shadow="lg"
          mt="10"
          backdropFilter="saturate(180%) blur(10px)"
        >
          <Flex mx="10" direction="column" width={"50%"}>
            <List>
              <ListItem
                fontSize={{ lg: "2xl", base: "xl" }}
                fontWeight="medium"
                mt="3"
                mb="2"
              >
                With 4 years of experience building scalable and
                high-performance web and mobile applications, I am confident in
                my ability to contribute effectively to any product
              </ListItem>
              <ListItem
                fontSize={{ lg: "2xl", base: "xl" }}
                fontWeight="medium"
                mt="3"
                mb="2"
              >
                In my previous roles, I have developed front-end and back-end
                solutions using technologies like React.js, React Native,
                Node.js, and MongoDB.
              </ListItem>
              <ListItem
                fontSize={{ lg: "2xl", base: "xl" }}
                fontWeight="medium"
                mt="3"
                mb="2"
              >
                My work at SARG Global Digital included designing and
                implementing features for web and mobile platforms, ensuring
                optimal performance and user experience.{" "}
              </ListItem>
              <ListItem
                fontSize={{ lg: "2xl", base: "xl" }}
                fontWeight="medium"
                mt="3"
                mb="2"
              >
                I also have hands-on experience with Agile methodologies and
                REST API integration{" "}
              </ListItem>
            </List>
          </Flex>
          <Image mx="10" src="about.svg" w="300px" h="300px" />
        </Flex>

        <Flex
          mt="10"
          direction="column"
          justifyContent="center"
          alignItems="center"
        >
          <Heading as="h2" fontSize="5xl" fontWeight="bold">
            Professional{" "}
            <span
              style={{
                color: "purple",
                fontWeight: "bold",
                marginLeft: "4px",
                marginRight: "4px",
              }}
            >
              {" "}
              Skillset
            </span>
          </Heading>
          <Flex
            p="10"
            direction="row"
            justifyContent="center"
            wrap="wrap"
            gap="20"
          >
            {skill.map((item) => (
              <Card ic={item.ic}>{item.skill}</Card>
            ))}
          </Flex>
        </Flex>

        <Flex
          mt="10"
          direction="column"
          justifyContent="center"
          alignItems="center"
        >
          <Heading as="h2" fontSize="5xl" fontWeight="bold">
            Tools{" "}
            <span
              style={{
                color: "purple",
                fontWeight: "bold",
                marginLeft: "4px",
                marginRight: "4px",
              }}
            >
              {" "}
              I Use
            </span>
          </Heading>
          <Flex
            p="10"
            direction="row"
            justifyContent="center"
            wrap="wrap"
            gap="20"
          >
            {tools.map((item) => (
              <Card ic={item.ic}>{item.skill}</Card>
            ))}
          </Flex>
        </Flex>

        {/* <Flex
          mt="10"
          direction="column"
          justifyContent="center"
          alignItems="center"
        >
          <Heading as="h2" fontSize="5xl" fontWeight="bold">
            Days{" "}
            <span
              style={{
                color: "purple",
                fontWeight: "bold",
                marginLeft: "4px",
                marginRight: "4px",
              }}
            >
              {" "}
              I code
            </span>
          </Heading>
          <Flex
            p="10"
            direction="row"
            justifyContent="center"
            wrap="wrap"
            gap="20"
            backdropFilter="saturate(180%) blur(10px)"
          >
            <GitHubCalendar
              username="sabooransari"
              blockSize={15}
              blockMargin={5}
              fontSize={16}
            />
          </Flex>
        </Flex> */}
      </Flex>
    </>
  );
};

export default AboutScreen;
