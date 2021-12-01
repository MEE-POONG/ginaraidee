import { atom } from 'recoil';

import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist();

const stepState = atom({
    key: 'stepState',
    default: { step: false, name: "" },
    effects_UNSTABLE: [persistAtom]
  });
  export { stepState };