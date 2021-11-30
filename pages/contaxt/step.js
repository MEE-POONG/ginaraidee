
import { atom } from 'recoil';

import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist();

const step = atom({
    key: 'step',
    default: { addstep: false, name: "" },
    effects_UNSTABLE: [persistAtom]
  });
  export { step };