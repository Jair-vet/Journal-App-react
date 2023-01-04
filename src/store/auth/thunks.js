import { /* loginWithEmailPassword */ registerUserWithEmailPassword, singInWithGoogle, /* logoutFirebase */ } from '../../firebase/providers';
// import { clearNotesLogout } from '../journal';
import { checkingCredentials, logout, login } from './';

export const checkingAuthentication = ( email, password ) => {
    return async( dispatch ) => {

        dispatch( checkingCredentials() );
        
    }
}

export const startGoogleSignIn = () => {
    return async( dispatch ) => {

        dispatch( checkingCredentials() );

        const result = await singInWithGoogle()
        if ( !result.ok ) return dispatch( logout( result.errorMessage ) );  // importar LOGOUT

        dispatch( login( result )) // importar LOGIN

    }
}


export const startCreatingUserWithEmailPassword = ({
        email,
        password,
        displayName,
    }) => {
    return async (dispatch) => {
        dispatch( checkingCredentials() );

        const { isSuccessful, uid, photoURL, errorMessage } =
        await  registerUserWithEmailPassword({
            email,
            password,
            displayName,
        });
        
        if (!isSuccessful) return dispatch(logout({ errorMessage }));
        dispatch(login({ uid, displayName, email, photoURL }));
    };
};