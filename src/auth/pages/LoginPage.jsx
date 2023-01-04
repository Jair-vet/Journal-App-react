import { useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link as RouterLink } from 'react-router-dom';
import { Alert, Button, Grid, Link, TextField, Typography } from '@mui/material';
import { Google } from "@mui/icons-material"

import { AuthLayout } from '../layout/AuthLayout';

import { useForm } from '../../hooks/useForm';
import { checkingAuthentication, startGoogleSignIn } from '../../store/auth';


const formData = {
  email:    'correo@correo.com',
  password:  '123456',
}

export const LoginPage = () => {

  const { status } = useSelector( state => state.auth );

  const dispatch = useDispatch();
  const { email, password, onInputChange } = useForm( formData );

  const isAuthenticating = useMemo( () => status === 'checking', [status])

  const onSubmit = ( event ) => {
    event.preventDefault();

    console.log({ email, password });
    dispatch( checkingAuthentication() );
  }

  const onGoogleSignIn = () => {
    console.log('onGoogleSignIn');
    dispatch( startGoogleSignIn() );
  }

  return (
    <AuthLayout title='Login' >
      <form onSubmit={ onSubmit }>
        <Grid container>
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
            />
          </Grid>

          {/* Botones */}
          <Grid container spacing={ 2 } sx={{ mb: 2, mt: 1 }}>
            <Grid item xs={ 12 } sm={ 6 }>
              <Button 
                disabled={ isAuthenticating }
                type="submit" 
                variant="contained" 
                fullWidth >
                Ingresar
              </Button>
            </Grid>
            <Grid item xs={ 12 } sm={ 6 }>
              <Button 
                disabled={ isAuthenticating }
                variant="contained" 
                fullWidth
                onClick={ onGoogleSignIn }>
                <Google />
                <Typography sx={{ ml: 1 }}>Google</Typography>
              </Button>
            </Grid>
          </Grid>

          <Grid container direction='row' justifyContent='center'>
            <Link 
              component={ RouterLink }
              color='inherit' 
              sx={{ textDecoration: 'none' }}
              to="/auth/register"
            >
              Crear Cuenta
            </Link>

          </Grid>

        </Grid>
      </form>
    </AuthLayout>

  )
}

