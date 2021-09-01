import { GlobalStyle } from "./globalStyles";
import { lazy, Suspense } from "react";
import { Route } from "react-router";
import Aboutus from "./Pages/Aboutus";
const Home = lazy(() => import("./Pages/Home"));
const ScrollToTop = lazy(() => import("./components/ScrollToTop/index"));

function App() {
  return (
    <>
      <Suspense fallback={null}>
        <GlobalStyle />
        <ScrollToTop />
        <Route exact path="/" component={Home} />
        <Route exact path="/Aboutus" component={Aboutus} />
      </Suspense>
    </>
  );
}

export default App;
