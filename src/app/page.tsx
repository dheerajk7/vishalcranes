import ContactUs from "@/components/ContactUs";
import Footer from "@/components/Footer/Footer";
import MainImage from "@/components/MainImage";
import Navbar from "@/components/Navbar/Navbar";
import OurServices from "@/components/OurServices";
import Testmonials from "@/components/Testmonials";
import WeHave from "@/components/WeHave";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Vishal Crane Services",
  description: "Good service provider in Indore, MP",
};

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
