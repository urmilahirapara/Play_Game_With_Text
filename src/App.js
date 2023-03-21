
import './App.css';
import Navbar from './components/Navbar';
// import About from './About';
import Textform from './components/Textform';


function App() {
  return (
   
    <>
    <Navbar title="TextUtils" />
    <div className="container">
    <Textform heading="Enetr The Text To analyze" />
    {/* <About/> */}
      </div>

     
      </>
  );
}

export default App;
