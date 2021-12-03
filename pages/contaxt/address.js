import { atom } from 'recoil';

import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist();

const address = atom({
    key: 'address',
    default: { addaddress: false, name: "" },
    effects_UNSTABLE: [persistAtom]
  });
  export { address };