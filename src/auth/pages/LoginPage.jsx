import { Link as RouterLink } from 'react-router-dom';
import { Google } from "@mui/icons-material"
import { Button, Grid, Link, TextField, Typography } from "@mui/material"
import { AuthLayout } from '../layout/AuthLayout';

export const LoginPage = () => {
  return (
    <AuthLayout title='Login' >
      <form>
        <Grid container>
          {/* Correo */}
          <Grid item xs={ 12 } sx={{ mt: 2 }}>
            <TextField 
              label="Correo" 
              type="email" 
              placeholder="correo@correo.com"
              fullWidth
            />
          </Grid>
          {/* Contraseña */}
          <Grid item xs={ 12 } sx={{ mt: 2 }}>
            <TextField 
              label="Contraseña" 
              type="password" 
              placeholder="contraseña"
              fullWidth
            />
          </Grid>
          {/* Botones */}
          <Grid container spacing={ 2 } sx={{ mb: 2, mt: 1 }}>
            <Grid item xs={ 12 } sm={ 6 }>
              <Button variant="contained" fullWidth >
                Ingresar
              </Button>
            </Grid>
            <Grid item xs={ 12 } sm={ 6 }>
              <Button variant="contained" fullWidth>
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

