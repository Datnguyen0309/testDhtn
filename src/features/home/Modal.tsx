import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay
} from "@chakra-ui/react";
import { ReactNode } from "react";
interface IModalBase {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
  form: ReactNode;
}
export const ModalBase = (props: IModalBase) => {
  const { onClose, isOpen, form } = props;
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent bg={"white"} height={{ lg: "430px", base: "420px" }} >
          <ModalCloseButton />
          <ModalBody py={6}>
            {form}
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};