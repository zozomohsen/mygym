import './App.css';
import Hero from './compononents/Hero';
import Programs from './compononents/Programs/Programs';
import Reasons from './compononents/Reasons/Reasons'
import  Plans from './compononents/Plans/Plans'
import  Testimoials from './compononents/Testimonials/Testimoials';
import  Join from './compononents/Join/Join';
import Footer from './compononents/Footer/Footer';
function App() {
  return (
    <div className="App">
      <Hero/>
   <Programs/>
   <Reasons/>
   <Plans/>
   <Testimoials/>
   <Join/>
   <Footer/>


   
    </div>
  );
}

export default App;
