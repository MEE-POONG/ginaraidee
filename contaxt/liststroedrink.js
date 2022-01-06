import { atom } from "recoil";

import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

const listStoredrinkState = atom({
  key: "listStoredrink",
  default: {
    id: "",
    nameStore: "",
    nameMenu:"",
    price:""
    
  },
  effects_UNSTABLE: [persistAtom],
});
export { listStoredrink };
