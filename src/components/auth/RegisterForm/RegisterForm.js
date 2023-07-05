'use client';
import { Form } from "semantic-ui-react"
import { useFormik } from "formik"
import { initialValues, validationSchema } from "./RegisterForm.form"

export function RegisterForm() {

  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: validationSchema(),
    validateOnChange: false,
    onSubmit: () => { 
      console.log("formulario enviado");
    }
  })

  return (
    <Form onSubmit={formik.handleSubmit}>
      <Form.Group widths="equal">
        <Form.Input name="email" type="text" placeholder="Correo eletronico" value={formik.values.email} onChange={formik.handleChange} error={ formik.errors.email } />

        <Form.Input name="username" type="text" placeholder="Nombre de usuario" value={ formik.values.username } onChange={formik.handleChange} error={ formik.errors.username }/>
      </Form.Group>

      <Form.Group widths="equal">
        <Form.Input name="name" type="text" placeholder="Nombre y apellidos" value={ formik.values.name } onChange={formik.handleChange} error={ formik.errors.name }/>
        <Form.Input name="password" type="password" placeholder="Contraseña" value={ formik.values.password } onChange={formik.handleChange} error={ formik.errors.password }/>
      </Form.Group>

      <Form.Button type="submit" fluid >
        Registrarse
      </Form.Button>
    </Form>
  )
}
