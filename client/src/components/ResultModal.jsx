import React from "react";
import Modal from "react-modal";
import { useResultModalStyles } from "../styles";
import CloseIcon from "@mui/icons-material/Close";

const ResultModal = ({ showModal, handleCloseModal, selectedImg }) => {
  const classes = useResultModalStyles();
  return (
    <>
      <Modal
        isOpen={showModal}
        ariaHideApp={false}
        overlayClassName="overlay"
        style={{
          content: {
            position: "fixed",
            display: "flex",
            alignItems: "center",
            maxWidth: 500,
            width: "100%",
            top: "50%",
            left: "50%",
            right: "auto",
            bottom: "auto",
            transform: "translate(-50%, -50%)",
            margin: 0,
            padding: 0,
            overflow: "none",
            WebkitOverflowScrolling: "touch",
          },
        }}
      >
        <img
          src={selectedImg.src}
          className={classes.img}
          alt={selectedImg.alt}
        />
        <CloseIcon onClick={handleCloseModal} className={classes.btnWrapper} />
      </Modal>
    </>
  );
};

export default ResultModal;
