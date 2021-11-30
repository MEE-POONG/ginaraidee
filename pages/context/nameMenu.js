import { atom } from 'recoil';

import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist();

const nameMenuState = atom({
    key: 'nameMenuState',
    default: { nameMenu : false, name: "" },
    effects_UNSTABLE: [persistAtom]
  });
  export { nameMenuState };