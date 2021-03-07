import { React} from "react"
import NavBar from './NavBar'
import Header from './Header'
import AboutMe from './AboutMe'
import Projects from './Projects'

const Body = () =>
(
    <div>
      <NavBar/>
      <Header  />
      <AboutMe />
      <Projects/>  
    </div>
);

export default Body;