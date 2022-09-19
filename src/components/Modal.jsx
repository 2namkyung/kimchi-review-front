import React, { useState } from "react";
import { createPortal } from "react-dom";
import styled from "styled-components";

const Modal = ({ activator, content }) => {
  const [show, setShow] = useState(false);
  const onOpen = () => setShow(true);
  const onClose = () => setShow(false);
  return (
    <>
      {activator(onOpen)}
      {createPortal(
        show && (
          <>
            <Backdrop onClick={onClose} />
            <Container>{content(onClose)}</Container>
          </>
        ),
        document.body
      )}
    </>
  );
};

const Backdrop = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.7);
  z-index: 12;
`;
const Container = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-width: 560px;
  z-index: 12;
`;

export default Modal;
