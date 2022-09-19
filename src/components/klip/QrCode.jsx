import styled from "styled-components";
import QRCode from "qrcode.react";
import { useEffect } from "react";
import axios from "axios";
import { useSetRecoilState } from "recoil";
import walletState from "../../recoil/wallet";

const QrCode = ({ qrcode, reqKey }) => {
  const setWallet = useSetRecoilState(walletState);

  useEffect(() => {
    let reqId;

    reqId = setInterval(() => {
      axios
        .get(
          `https://a2a-api.klipwallet.com/v2/a2a/result?request_key=${reqKey}`
        )
        .then((res) => {
          if (res.data.result) {
            clearInterval(reqId);
            const address = res.data.result.klaytn_address;
            setWallet({ walletType: "KLIP", address, isLogin: true });
            window.location.reload();
          }
        });
    }, 3000);

    return () => {
      clearInterval(reqId);
    };
  }, [reqKey, setWallet]);

  return (
    <>
      <StyledQRCode value={qrcode} />
      <StyledDesc>카메라 스캔을 통해 Klip 인증해주세요.</StyledDesc>
    </>
  );
};

const StyledDesc = styled.h5`
  text-align: center;
  margin: 10px 0;
`;

const StyledQRCode = styled(QRCode)`
  display: block;
  margin: 0 auto;
`;

export default QrCode;
