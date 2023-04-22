import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Navbar from './Common/Navbar';
import API2 from './Pages/API2';
import API3 from './Pages/API3';
import API4 from './Pages/API4';
import Api1 from './Pages/Api1';
import Api1data from './Pages/Api1data';
// import FetchDataAxios from './Axios/FetchDataAxios';


function App() {
  return (
    <>
       <Router>
        <Navbar/>
        <Routes>
          <Route exact path='/' element={<Api1/>}/>
          <Route exact path = "/:id" element={<Api1data/>}/>
          <Route exact path='/api2' element={<API2/>}/>
          <Route exact path='/api3' element={<API3/>}/>
          <Route exact path='/api4' element={<API4/>}/>
        </Routes>
      </Router> 

      {/* <User/> */}
      {/* <FetchDataAxios/>  */}
    </>
  );
}

export default App;
