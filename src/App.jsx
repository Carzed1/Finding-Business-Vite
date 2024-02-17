import {
  Navbar,
  Home,
  About,
  Teacher,
  Contact,
  Courses,
  Consult,
  Community,
  Faq,
  MeetTeam,
  Footer,
} from "./components/index";

function App() {
  return (
    <div className="font-Poppins bg-Solitude">
      <Navbar />
      <Home />
      <About />
      <Teacher/>
      <Courses />
      <Consult />
      <Community />

      <Faq />
      <MeetTeam />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
