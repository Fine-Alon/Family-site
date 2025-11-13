import { useState } from "react"
import { Form, Input, Button } from "@heroui/react"


interface IProps {
  onFormClose: () => void
}

export const FormRegistration = ({onFormClose}:IProps) => {

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

    const data = e.currentTarget
    onFormClose()
  }

  const validateEmail = (email: string) => {
    if (typeof email !== 'string' || email.trim() === '') return false

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email.trim())
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
          if (value.length < 2) return "Email must be field"
          if (!validateEmail(value)) return "Email not correct"
          return value === "admin" ? "Nice try!" : null
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
      />
      <Button type="submit" variant="bordered">
        Confirm and sent
      </Button>
      {submitted && (
        <div className="text-small text-default-500">
          You sent data as: <code>{JSON.stringify(submitted)}</code>
        </div>
      )}
    </Form>
  )
}

