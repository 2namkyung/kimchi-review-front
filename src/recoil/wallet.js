import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const initialWalletState = {
  walletType: "",
  address: "",
  isLogin: false,
};

const { persistAtom } = recoilPersist();

const walletState = atom({
  key: "walletState",
  default: initialWalletState,
  effects_UNSTABLE: [persistAtom],
});

export default walletState;
