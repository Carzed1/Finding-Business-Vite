import {
  Navbar,
  Home,
  About,
  
  Contact,
  Courses,
  Community,
  Faq,
  Footer,
} from "./components/index";

function App() {
  return (
    <div className="font-Poppins bg-Solitude">
      <Navbar />
      <Home />
      <About />
      <Courses />
   
      <Community />
      <Faq/>
      <Contact />
      <Footer />
     
      
    </div>
  );
}

export default App;
