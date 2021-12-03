import { atom } from 'recoil';

import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist();

const tel = atom({
    key: 'tel',
    default: { addtel: false, name: "" },
    effects_UNSTABLE: [persistAtom]
  });
  export { tel };