import { atom } from 'recoil';

import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist();

const staple = atom({
    key: 'staple',
    default: { addstaple: false, name: "" },
    effects_UNSTABLE: [persistAtom]
  });
  export { staple };