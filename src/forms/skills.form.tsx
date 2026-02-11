// TODO: skills get form

import { Button, Form, Input } from "@heroui/react"
import React from "react"

interface IProps {

}

export const SkillsForm = ({}:IProps) => {

  const [errors, setErrors] = React.useState({});

  const onSubmit = (e) => {
    e.preventDefault();

    const data = Object.fromEntries(new FormData(e.currentTarget));

    if (!data.skill) {
      setErrors({skill: "Skill is required"})

      return
    }

    const result = callServer(data);

    setErrors(result.errors);
  }

  return <>
     <Form
      className="w-full max-w-xs flex flex-col gap-3"
      validationErrors={errors}
      onSubmit={onSubmit}
    >
      <Input
        label="⚙️⚙️⚙️ SKILL:"
        labelPlacement="outside"
        name="skill"
        placeholder=" skill's name"
      />
      <Button type="submit" variant="flat">
        Add SKILL ⚙️
      </Button>
    </Form>
  </>
}

function callServer(data) {
  return {
    errors: {
      skill: "Sorry, this word is not real, please correct.",
    },
  };
}

export default SkillsForm