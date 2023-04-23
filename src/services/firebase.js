import firebase from '../Firebase'
import { getFirestore, getDoc, doc, setDoc } from 'firebase/firestore/lite'
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from 'firebase/auth'

//https://firebase.google.com/docs/web/setup?hl=pt&authuser=0

export function loadUserById(userId) {
    const db = getFirestore(firebase)
    const docRef = doc(db, 'users', userId)
    return getDoc(docRef)
}

export async function createUser(data, uid) {
    const db = getFirestore(firebase)
    const docRef = doc(db, 'users', uid)
    await setDoc(docRef, data)
}

export function createAuth(email, password) {
    const auth = getAuth(firebase)
    return createUserWithEmailAndPassword(auth, email, password)
}

export function login(email, password) {
    const auth = getAuth(firebase)
    return signInWithEmailAndPassword(auth, email, password)
}