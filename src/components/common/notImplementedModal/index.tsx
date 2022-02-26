//@mui components
import Modal from "@mui/material/Modal";

//stylesheets and icons
import { Container } from "./styles";
import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";

type BookModalProps = {
  isOpen: boolean;
  onRequestClose: () => void;
};

function NotImplementedModal({ isOpen, onRequestClose }: BookModalProps) {
  return (
    <div>
      <Modal
        open={isOpen}
        onClose={onRequestClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Container>
          <div className="content">
            <span>Recurso ainda não implementado</span>
            <SentimentVeryDissatisfiedIcon />
          </div>
        </Container>
      </Modal>
    </div>
  );
}

export default NotImplementedModal;
