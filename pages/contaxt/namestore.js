import { atom } from 'recoil';

import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist();

const namestore = atom({
    key: 'namestore',
    default: { addnamestore: false, name: "" },
    effects_UNSTABLE: [persistAtom]
  });
  export { namestore };