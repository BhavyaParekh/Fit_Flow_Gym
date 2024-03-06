
import Navbar from './Components/navbar';
import Header from './Components/Header';
import Feature from './Components/Feature';
import ThisSummer from './Components/ThisSummer';
import About from './Components/About';
import Login from './Components/Login';
import History from './Components/History';
import Signup from './Components/Signup';
import Form1 from './Components/form';
import { BrowserRouter as Router, Route , Routes} from 'react-router-dom';



// 
import './App.css';


// import Form1 from './Components/form';

// function App() {
//   return (
//     <div className="container">

//       <Header/> 
       
//         {/* <Navbar/> */}
//       {/* <Header/>
//       <Feature/>
//       <ThisSummer/>
//       <About/>   */}
      
//       <Router>
//         <Routes>
//         <Route path="/main" element={<Navbar/>} />
   
//         <Route path="/features" element={<Feature/>} />
//         <Route path="/summer" element={<ThisSummer/>} />
//         <Route path="/about" element={<About/>} />
//         <Route path="/login" element={<Login/>} />
      
      
//         </Routes>
        
//       </Router>
  
//     </div>
//   );
// }
function App() {
  return (
    <div className="container">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Header />} />
          <Route path="/features" element={<Feature />} />
          <Route path="/summer" element={<ThisSummer />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/history" element={<History />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/form" element={<Form1/>}/>
        </Routes>
      </Router>
    </div>
  );
}



export default App;
