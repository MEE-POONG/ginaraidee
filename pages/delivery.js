import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import { Store } from "../components/store";

const initialState = {
	namestore: '',
}

const defaultStoreState = []
export default function Delivery() {
	const [storeList, setStoreList] = useState(defaultStoreState)

	useEffect(() => {
		getStoreData()
	}, [])

	const getStoreData = async () => {
		try {
			const { data } = await axios.get('/api/stores')
			setStoreList(data?.data)
			console.log(data);
		} catch (error) {
			console.log(error);
		}
	}

	return (
		<div>
			<Navbar />
			<div className="container mx-auto max-w-lg">
				<div className="px-4 flex-auto">
					<Store data={storeList} />
				</div>
			</div>
		</div>
	);
}