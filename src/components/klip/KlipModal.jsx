import React, { useState, useRef, useEffect } from "react";

import styled from "styled-components";

import {
  checkDevice,
  klipMobileAuth,
  klipQrCode,
} from "../../utils/mobileKlip";
import QrCode from "./QrCode";

const KlipModal = ({ onClose }) => {
  const [min, setMin] = useState(3);
  const [sec, setSec] = useState(0);
  const time = useRef(180);
  const timerId = useRef(null);

  const [qrcode, setQrcode] = useState("");
  const [reqKey, setReqKey] = useState("");

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    timerId.current = setInterval(() => {
      setMin(parseInt(time.current / 60, 10));
      setSec(time.current % 60);
      time.current -= 1;

      if (time.current < 0) {
        window.location.reload();
      }
    }, 1000);

    return () => {
      clearInterval(timerId);
    };
  }, []);

  useEffect(() => {
    async function klipLogin() {
      const device = checkDevice();

      if (device === "pc") {
        const { qrcode, requestKey } = await klipQrCode();

        setQrcode(qrcode);
        setReqKey(requestKey);
      } else {
        const requestKey = await klipMobileAuth();
        setQrcode("");
        setReqKey(requestKey);
      }
    }

    if (loading) {
      klipLogin();
    }

    return () => {
      setLoading(false);
    };
  }, [loading]);

  return (
    <Container>
      <Header onClick={onClose}>
        <Title>클립 지갑 연결하기</Title>
      </Header>
      <StyledTimer>
        <span style={{ color: "black" }}>남은 시간</span> {min} : {sec}
        <QrCode qrcode={qrcode} reqKey={reqKey} />
      </StyledTimer>
    </Container>
  );
};

const Container = styled.div`
  background: #ffffff;
  border-radius: 12px;
  padding: 40px 28px;

  @media (min-width: 1001px) {
    width: 560px;
    height: 100%;
  }
  @media (max-width: 415px) {
    padding: 20px;
  }
`;
const Header = styled.div`
  display: flex;
  align-items: center;
  position: relative;

  svg {
    cursor: pointer;
    position: absolute;
    right: 0;
  }
`;
const Title = styled.p`
  font-weight: 700;
  font-size: 20px;
  flex: 1;
  text-align: center;

  @media (max-width: 415px) {
    font-size: 16px;
    line-height: 16px;
  }
`;

const StyledTimer = styled.div`
  font-weight: 800;
  color: red;
  margin: 10px auto;
  text-align: center;
`;

export default KlipModal;
