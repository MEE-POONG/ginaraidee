import { atom } from "recoil";

import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

const listStoreState = atom({
  key: "listStore",
  default: {
    id: "",
    nameStore: "",
    nameMenu:"",
    price:"",
    detail:""
    
  },
  effects_UNSTABLE: [persistAtom],
});
export { listStoreState };
