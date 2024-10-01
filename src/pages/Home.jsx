// import SideBar from "../components/sidebar/SideBar"
import HomeBody from "../components/Body/HomeBody";
import Skills from "../components/Skills/Skills";
import Projects from "../components/project/Projects";
import Nav from "../components/Nav/Nav";
// import About from "../components/Body/about/About";
const Home = () => {
  return (
    <>
      <HomeBody />
      <Nav />
      <Projects />
      <Skills />
    </>
  );
};

export default Home;
