import { React} from "react"
import NavBar from './NavBar'
import Header from './Header'
import AboutMe from './AboutMe'
import Projects from './Projects'
import Skills from './Skills'
import Contacts from './Contacts'

const Body = () =>
(
    <div>
      <NavBar/>
      <Header  />
      <AboutMe />
      <Projects/>
      <Skills/>
      <Contacts/>
    </div>
);

export default Body;