import {
  Navbar,
  Home,
  About,
  Teacher,
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
      <Teacher />
      <Community />
      <Faq/>
      <Contact />
      <Footer />
      
    </div>
  );
}

export default App;
