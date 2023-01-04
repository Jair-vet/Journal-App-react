import { Link as RouterLink } from 'react-router-dom';
import { Button, Grid, Link, TextField, Typography } from "@mui/material"
import { AuthLayout } from '../layout/AuthLayout';
import { useForm } from '../../hooks/useForm';

const formData = {
  email:    'correo@correo.com',
  password:  '123456',
  displayName: 'Carlos Jair'
}

const formValidations = {
  email: [ (value) => value.includes('@'), 'El correo debe de tener una @'],
  password: [ (value) => value.length >= 6, 'El password debe de tener más de 6 letras.'],
  displayName: [ (value) => value.length >= 1, 'El nombre es obligatorio.'],
}

export const RegisterPage = () => {

  const { 
    formState, displayName, email, password, onInputChange,
    isFormValid, displayNameValid, emailValid, passwordValid, 
  } = useForm( formData, formValidations );

  const onSubmit = ( event ) => {
    event.preventDefault();
    console.log(formData);
  }

  return (
    <AuthLayout title='Register' >
      <form onSubmit={ onSubmit }>
        <Grid container>
          {/* Nombre Completo */}
          <Grid item xs={ 12 } sx={{ mt: 2 }}>
            <TextField 
              label="Nombre Completo" 
              type="text" 
              placeholder="Pablo escobar"
              fullWidth
              name="displayName"
              value={ displayName }
              onChange={ onInputChange }
              error={ !!displayNameValid /* && formSubmitted  */}
              helperText={ displayNameValid }
            />
          </Grid>

          {/* Correo */}
          <Grid item xs={ 12 } sx={{ mt: 2 }}>
            <TextField 
              label="Correo" 
              type="email" 
              placeholder="correo@correo.com"
              fullWidth
              name="email"
              value={ email }
              onChange={ onInputChange }
              error={ !!emailValid && formSubmitted }
              helperText={ emailValid }
            />
          </Grid>

          {/* Contraseña */}
          <Grid item xs={ 12 } sx={{ mt: 2 }}>
            <TextField 
              label="Contraseña" 
              type="password" 
              placeholder="contraseña"
              fullWidth
              name="password"
              value={ password }
              onChange={ onInputChange }
              error={ !!passwordValid && formSubmitted  }
              helperText={ passwordValid }
            />
          </Grid>

          {/* Botones */}
          <Grid container spacing={ 2 } sx={{ mb: 2, mt: 1 }}>
            <Grid item xs={ 12 }>
              <Button
                type='submit'
                variant="contained" 
                fullWidth >
                Crear Cuenta
              </Button>
            </Grid>
          </Grid>

          {/* Cuenta/ Registro */}
          <Grid container direction='row' justifyContent='end'>
            <Typography sx={{ mr: 1, textDecoration: 'none' }}>¿Ya tienes Cuenta?</Typography>
            <Link 
              component={ RouterLink }
              color='inherit' 
              to="/auth/login"
            >
              Ingresar
            </Link>

          </Grid>

        </Grid>
      </form>
    </AuthLayout>

  )
}

