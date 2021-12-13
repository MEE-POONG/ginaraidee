import { atom } from 'recoil';

import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist();

const listMenuState = atom({
    key: 'listMenu',
    default: { 
      id: "",
      name: "",
      image: "",
      rawmaterial: "",
      stepfood: "",
    } ,
    effects_UNSTABLE: [persistAtom]
  });
  export { listMenuState };