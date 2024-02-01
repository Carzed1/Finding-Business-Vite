import {
  Navbar,
  Home,
  About,
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
