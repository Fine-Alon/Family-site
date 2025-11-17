import FormRegistration from "@/forms/registration.form"
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@heroui/react"


const SignUpBtn = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure()

  return (
    <>

      <Button color="primary" onPress={onOpen}>Sign Up</Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Sign Up</ModalHeader>
              <ModalBody>
                <FormRegistration onFormClose={onClose} />
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button color="primary" onPress={onClose}>
                  Start
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>


    </>
    )
}

export default SignUpBtn