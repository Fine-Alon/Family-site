'use client'


import { Modal, ModalBody, ModalContent, ModalFooter, ModalHeader } from "@heroui/react"
import { ReactNode } from "react"

interface IProps {
  isFormOpen: boolean
  onFormClose: () => void
  title: string
  children: ReactNode
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
}

const CustomModal = ({ isFormOpen, onFormClose, title, children }: IProps) => {
  return <>
    <Modal isOpen={isFormOpen} onClose={onFormClose}>
      <ModalContent >
        <ModalHeader className="flex flex-col gap-1">
          <h3 className="text-xl text-background font-semibold">{title}</h3></ModalHeader>
        <ModalBody className="space-y-4 py-6"> {children} </ModalBody>
      </ModalContent>
    </Modal>
  </>
}

export default CustomModal