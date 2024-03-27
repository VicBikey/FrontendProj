import { Navbar } from "./components/navbar";
import { Body } from "./components/Body";
import { TrustedBy } from "./components/TrustedBy";
import { Services } from "./components/Services";
import {Areas} from "./components/Areas";
import { Whats } from "./components/Whats";
import { Testimonials } from "./components/Testimonials";

const App = () => {
  return (
    <>
      <Navbar />
      <Body />
      <TrustedBy />
      <Services />
      <Areas />
      <Whats />
      <Testimonials/>
    </>
  );
};

export default App;
