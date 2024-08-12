import MainImage from "@/components/MainImage";
import Navbar from "@/components/Navbar";
import OurServices from "@/components/OurServices";
import WeHave from "@/components/WeHave";

function Home() {
  return (
    <main>
      <Navbar />
      <MainImage />
      <OurServices />
      <WeHave />
    </main>
  );
}

export default Home;