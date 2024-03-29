import { Navbar } from "./components/navbar";
import { TrustedBy } from "./components/TrustedBy";
import { Services } from "./components/Services";
import { Areas } from "./components/Areas";
import { Whats } from "./components/Whats";
import { Testimonials } from "./components/Testimonials";
import { Try } from "./components/try";
import { Footer } from "./components/footer";
import { Checkout } from "./components/checkout";
import { Hero } from "./components/hero";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero/>
      <TrustedBy />
      <Checkout />
      <Services />
      <Areas />
      <Whats />
      <Testimonials />
      <Footer />
    </>
  );
};

export default App;
