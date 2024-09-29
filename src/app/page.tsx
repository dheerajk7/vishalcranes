import ContactUs from "@/components/ContactUs";
import Footer from "@/components/Footer/Footer";
import MainImage from "@/components/MainImage";
import Navbar from "@/components/Navbar";
import OurServices from "@/components/OurServices";
import Testmonials from "@/components/Testmonials";
import WeHave from "@/components/WeHave";

function Home() {
  return (
    <main className="pt-10">
      <Navbar />
      <MainImage />
      <OurServices />
      <WeHave />
      <Testmonials />
      <ContactUs />
      <Footer />
    </main>
  );
}

export default Home;