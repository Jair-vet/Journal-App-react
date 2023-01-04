import { useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link as RouterLink } from 'react-router-dom';
import { Alert, Button, Grid, Link, TextField, Typography } from "@mui/material"
import { AuthLayout } from '../layout/AuthLayout';
import { useForm } from '../../hooks/useForm';

import { startCreatingUserWithEmailPassword } from '../../store/auth';

const formData = {
  // email:    'correo@correo.com',
  // password:  '123456',
  // displayName: 'Carlos Jair',
  email:    '',
  password:  '',
  displayName: ''
}

const formValidations = {
  email: [ (value) => value.includes('@'), 'El correo debe de tener una @'],
  password: [ (value) => value.length >= 6, 'El password debe de tener más de 6 letras.'],
  displayName: [ (value) => value.length >= 1, 'El nombre es obligatorio.'],
}

export const RegisterPage = () => {

  const dispatch = useDispatch();
  const [formSubmitted, setFormSubmitted] = useState(false);

  const { status, errorMessage } = useSelector( state => state.auth );
  const isCheckingAuthentication = useMemo( () => status === 'checking', [status]);

  const { 
    formState, displayName, email, password, onInputChange,
    isFormValid, displayNameValid, emailValid, passwordValid, 
  } = useForm( formData, formValidations );

  const onSubmit = ( event ) => {
    event.preventDefault();
    setFormSubmitted(true);

    if ( !isFormValid ) return;

    dispatch( startCreatingUserWithEmailPassword( formState ))
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
              error={ !!displayNameValid && formSubmitted }
              helperText={ displayNameValid }
              required
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
              required
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
              required
            />
          </Grid>

          {/* Botones */}
          <Grid container spacing={ 2 } sx={{ mb: 2, mt: 1 }}> 
            <Grid 
              item 
              xs={ 12 }
              display={ !!errorMessage ? '': 'none' }
            >
              <Alert severity='error'>{ errorMessage }</Alert>
            </Grid>

            <Grid item xs={ 12 }>
              <Button 
                disabled={ isCheckingAuthentication }
                type="submit"
                variant='contained' 
                fullWidth>
                Crear cuenta
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

