import "./App.css";

import { ThemeProvider, createTheme } from "@mui/material/styles";

import About from "./components/About/About";
import { Contact } from "./components/Contact/Contact";
import CssBaseline from "@mui/material/CssBaseline";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { Projects } from "./components/Projects/Projects";
import { ScrollToTop } from "./components/ScrollToTop/ScrollToTop";
import { Skills } from "./components/Skills/Skills";
import { SlideContainer } from "./components/spring/slideComponent";

// import { SpringContainer } from "./components/spring/springContainer";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

function App() {
  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <div id="top">
          <Header />
          <main>
            {/* <SpringContainer /> */}
            <SlideContainer />
            <About />
            <Projects />
            <Skills />
            <Contact />
          </main>
          <ScrollToTop />
          <Footer />
        </div>
      </ThemeProvider>
    </>
  );
}

export default App;
