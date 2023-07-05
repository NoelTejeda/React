import React from "react"
import { Container, Form, Button } from "semantic-ui-react"
import logo from '../src/img/movilnetlogo.1daef6ee.png'
import { useFormik } from "formik"
import * as Yup from "yup";
import './App.css';



function App() {

  const formik = useFormik({
    initialValues:{
     name:"",
     password:""

    },
    validationSchema:Yup.object({
      name:Yup.string().required("El Nombre es Obligatorio"),
      password:Yup.string().required("La Contraseña es Obligatorio"),
    }),

    onSubmit: (formData) => {
      console.log(formData);
    },
  });


  return (
    <div className='App'>
      
    
    <Container 
    style={{
      textAlign: 'center',
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'column',
      justifyContent: 'center',
      height:'100vh',
  }}
    >
      <img
      className='imagenes'
      src={logo}
      alt='logo'
    />
      <h3>Ingresa al Sistema</h3>
      <Form style={{width:'25%'}} onSubmit={formik.handleSubmit} >
        <Form.Input type="text" 
          placeholder="Usuario"
          name="name" 
          onChange={formik.handleChange} 
          error = {formik.errors.name  }
          />
        <Form.Input type="password" 
          placeholder="Contraseña" 
          name="password" 
          onChange={formik.handleChange} 
          error = {formik.errors.password }
        />
        <Button type="submit">
          Iniciar Sesion
        </Button>
      </Form>

    </Container>
    </div>    
  );
}

export default App;
