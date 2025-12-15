'use client'

import { useState } from "react"
import { Form, Input, Button } from "@heroui/react"
import { authorizeUser } from "@/actions/prisma.login"


interface IProps {
  onFormClose: () => void
}

export const FormLogin = ({ onFormClose }: IProps) => {

  const [formData, setFormData] = useState({ email: '', password: '' })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    await authorizeUser(formData)
    console.log('\nAuthorize form submitted successfully', formData)
    onFormClose()
  }
  
  // TODO: correct validation
  const validatePassword = (password: string) => {
    if (typeof password !== 'string' || password.trim() === '') return false
    return true
  }

  return (
    <Form className="w-full max-w-xs" onSubmit={handleSubmit}>
      <Input
        isRequired
        errorMessage="Please enter a valid email"
        label="Email"
        labelPlacement="outside"
        value={formData.email}
        name="email"
        placeholder="Enter your email"
        type="email"
        classNames={{
          inputWrapper: 'bg-default-100',
          input: 'text-sm focus:out-none'
        }}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        validate={(value) => value ? null : "Email must be field"}
      />

      <Input
        isRequired
        errorMessage="Please enter a valid password"
        label="password"
        labelPlacement="outside"
        name="password"
        placeholder="Enter password"
        type="password"
        classNames={{
          inputWrapper: "bg-default-100",
          input: 'text-sm focus:out-none'
        }}
        onChange={(e) => { setFormData({ ...formData, password: e.target.value }) }}
        validate={(value) => value ? null : "It's too short to be password! At least 6 symbols"}
      />

      <div>
        <Button variant="light" onPress={onFormClose} >
          Cancel
        </Button>
        <Button color="primary" type="submit" variant="bordered">
          Confirm and sent
        </Button>
      </div>

      {formData && (
        <div className="text-small text-default-500">
          You sent data as: <code>{JSON.stringify(formData)}</code>
        </div>
      )}
    </Form>
  )
}

export default FormLogin