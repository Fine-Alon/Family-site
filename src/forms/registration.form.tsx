import { useState } from "react"
import { Form, Input, Button } from "@heroui/react"


interface IProps {
  onFormClose: () => void
}

export const FormRegistration = ({ onFormClose }: IProps) => {

  const [formData, setFormData] = useState({
    email: '',
    name: '',
    password: '',
    confirmPassword: '',
    phone: '',
    // agreeToTerms: false, // if you have a checkbox
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted successfully', formData)
    onFormClose()
  }

  const validateEmail = (email: string) => {
    if (typeof email !== 'string' || email.trim() === '') return false
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email.trim())
  }

  const validateName = (name: string) => {
    if (typeof name !== 'string' || name.trim() === '') return false
    const nameRegex = /^[\p{L}\s\-']+$/u
    return nameRegex.test(name.trim())
  }
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
        validate={(value) => {
          if (!value) return "Email must be field"
          if (!validateEmail(value)) return "Email not correct"
          return null
        }}
      />
      <Input
        isRequired
        errorMessage="Please enter a valid name"
        label="name"
        labelPlacement="outside"
        name="name"
        placeholder="Enter your name"
        type="text"
        classNames={{
          inputWrapper: "bg-default-100",
          input: 'text-sm focus:out-none'
        }}
        onChange={(e) => { setFormData({ ...formData, name: e.target.value }) }}
        validate={(value) => {
          if (value.length < 2) return "It's too short to be name"
          if (!validateName(value)) return "Name is not correct!"
          return null
        }}
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
        validate={(value) => {
          if (value.length < 6) return "It's too short to be password! At least 6 symbols"
          if (!validatePassword(value)) return "Password is not correct!"
          return null
        }}
      />
      <Input
        isRequired
        errorMessage="passwords are NOT the same"
        name="confirmPassword"
        label="confirm password"
        labelPlacement="outside"
        type="password"
        placeholder="Repeat password"
        classNames={{
          inputWrapper: 'bg-default-100',
          input: 'text-sm focus:outline-none'
        }}
        onChange={(e) => { setFormData({ ...formData, confirmPassword: e.target.value }) }}
        validate={(value) => {
          if (value !== formData.password) return 'passwords are NOT the same'
          return null
        }}
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

export default FormRegistration