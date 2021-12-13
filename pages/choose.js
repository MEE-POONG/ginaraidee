import Navbar from "../components/Navbar";
import { Channel } from "../components/channel";
import Footer from "../components/footer";
import { useRecoilValue } from "recoil";
import {listMenuState} from "../contaxt/listmenu"

export default function Choose() {
	const listMenu = useRecoilValue(listMenuState);

	return (
		<div>
			<Navbar />
			<Channel listMenu={listMenu} />
			<Footer />
		</div>
	
		
	
	);
}