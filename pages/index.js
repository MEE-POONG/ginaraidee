import Navbar from "../components/Navbar";
import Yourmenu from "../components/yourmenu";
import Footer from "../components/footer"
import Testrandom from "./testrandom";
import Popular from "../components/Popular";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Yourmenu />
      <Footer />
    </div>
  );
}
