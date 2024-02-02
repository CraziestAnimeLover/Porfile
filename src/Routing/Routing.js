import { About, Contact, Home, Project, Service} from "../components";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import { Footer, Header } from "../components/Structure";

const Routing = ({PROJECT}) => {

  return (
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/service" element={<Service/>}/>
      <Route path="/project" heading={PROJECT} text='some of project' element={<Project/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
    
  )
}

export default Routing