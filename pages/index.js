import Navbar from "../components/Navbar";
import Yourmenu from "../components/yourmenu";
import Footer from "../components/footer"
import Testrandom from "./testrandom";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Yourmenu />
      {/* <Testrandom/> */}
      <div className="">
        <Footer/>
      </div>
    </div>
  );
}
