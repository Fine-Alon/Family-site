'use client'

import CustomModal from "../common/modal"
import FormLogin from "@/forms/login.form"

 interface IProps {
  isFormOpen: boolean
  onFormClose: () => void
}


const LoginBtn = ({isFormOpen,onFormClose}:IProps) => {
  return (
    <>
      <CustomModal  isFormOpen={isFormOpen} onFormClose={onFormClose} title="Login">
        <FormLogin onFormClose={onFormClose} />
      </CustomModal>
    </>
  )
}

export default LoginBtn