import Incidents from "./components/Incidents"

import { BrowserRouter,Routes, Route } from "react-router-dom"

import Describe from "./components/describe"
import Just3card from"./components/Just3card"
import Navbar from "./components/navbar3"
import IncidentTitle from "./components/incidenttitle"
import Dashboard from "./components/dashboard"
import Map from "./components/map"
import Largestpart from "./components/Largestpart"



 function App()
 {

  return (
    <>


 
     
    
     
    
     

<BrowserRouter>

<Navbar></Navbar>

<Routes>

<Route path="/" element={<Dashboard></Dashboard>}/>

<Route path="/Incidents" element={<Incidents></Incidents>}/>

<Route path="/NewIncident" element={<Just3card></Just3card>}/>

<Route path="/Describe" element={<Describe></Describe>}/>

<Route path="/IncidentTitle" element={<IncidentTitle></IncidentTitle>}/>

<Route path="/Map" element={<Map></Map>}/>

<Route path="/Largestpart" element={<Largestpart></Largestpart>}/>

</Routes>

</BrowserRouter>

      
      {/*<Chat></Chat>
      
  


  
*/}

      </>
  )
}

export default App
