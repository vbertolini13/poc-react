import fb from './../firebase';
import { USUARIOS } from '../constants'

export const apiGetProfile = correo =>
    fb.firestore()
        .collection(USUARIOS)
        .doc(correo)
        .get()
        .then(function(doc) {
            return doc.data();
        });

export const apiUpdateProfile = (nombre, apellido, correo, fecha_modificacion) => {
    fb.firestore()
        .collection(USUARIOS)
        .doc(correo)
        .set({ nombre, apellido, correo, fecha_modificacion }, { merge: true })
        .catch(function(err) {
            console.log(err);
            alert(JSON.stringify(err));
        });
}

export const apiGetFecha = date => {
    const fecha = date;
    return fecha;
}