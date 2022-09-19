import React from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import walletState from "../../recoil/wallet";

const KlipButton = ({ onOpen }) => {
  const { isLogin } = useRecoilValue(walletState);
  const setWallet = useSetRecoilState(walletState);
  const logout = () => {
    setWallet({ walletType: "", address: "", isLogin: false });
  };
  return (
    <>
      {!isLogin && (
        <button className="btn-main" onClick={onOpen}>
          Connect Wallet
        </button>
      )}
      {isLogin && (
        <button className="btn-main" onClick={logout}>
          Logout
        </button>
      )}
    </>
  );
};

export default KlipButton;
