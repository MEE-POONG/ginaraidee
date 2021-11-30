
import { atom } from 'recoil';

import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist();

const addindState = atom({
    key: 'addindState',
    default: { addind: false, name: "" },
    effects_UNSTABLE: [persistAtom]
  });
  export { addindState };