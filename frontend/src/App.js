import { Route, Routes } from "react-router-dom";
import { Flex } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import HomeScreen from "./screens/HomeScreen";
import Footer from "./components/Footer";
import AboutScreen from "./screens/AboutScreen";
import ProjectsScreen from "./screens/ProjectsScreen";
const App = () => {
  return (
    <>
      <Navbar />
      <Flex>
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/about" element={<AboutScreen />} />
          <Route path="/projects" element={<ProjectsScreen />} />
        </Routes>
      </Flex>
      <Footer />
    </>
  );
};

export default App;
