import {
  Navbar,
  Home,
  About,
  Teacher,
  Contact,
  Courses,
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

      <Community />

      <Faq />
      <MeetTeam />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
