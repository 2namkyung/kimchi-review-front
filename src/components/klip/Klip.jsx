import React from "react";
import Modal from "../Modal";
import KlipButton from "./KlipButton";
import KlipModal from "./KlipModal";

const Klip = () => {
  return (
    <Modal
      activator={(onOpen) => <KlipButton onOpen={onOpen} />}
      content={(onClose) => <KlipModal onClose={onClose} />}
    />
  );
};

export default Klip;
