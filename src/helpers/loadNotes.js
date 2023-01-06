import { collection, getDocs } from 'firebase/firestore/lite';
import { FirebaseDB } from '../firebase/config';


export const loadNotes = async( uid = '') => {
    if ( !uid ) throw new Error('El UID del usuario no existe');

    const collectionRef = collection( FirebaseDB, `${ uid }/journal/notes` );
    const docs = await getDocs(collectionRef);

    const notes = [];
    docs.forEach( doc => {
        notes.push({ id: doc.id, ...doc.data() });  // Extraemos en un arreglo todas las notas que coincida con el id
    });
    
    return notes;
}