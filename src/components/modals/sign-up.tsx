'use client'

import FormRegistration from "@/forms/registration.form"
import CustomModal from "../common/modal"

 interface IProps {
  isFormOpen: boolean
  onFormClose: () => void
}


const SignUpBtn = ({isFormOpen,onFormClose}:IProps) => {
  return (
    <>
      <CustomModal  isFormOpen={isFormOpen} onFormClose={onFormClose} title="Sign Up">
        <FormRegistration onFormClose={onFormClose} />
      </CustomModal>
    </>
  )
}

export default SignUpBtn