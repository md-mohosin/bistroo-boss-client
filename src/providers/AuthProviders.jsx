import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { app } from "../firebase/firebase.config";

export const AuthContext = createContext(null)



const AuthProviders = ({ children }) => {

    const auth = getAuth(app)

    const googleProvider = new GoogleAuthProvider()

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)


    const googleLogin = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }


    const createUser = (email, passwoard) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, passwoard)
    }


    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }


    const loginUser = (email, passwoard) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, passwoard)
    }

    const updetUser = (name, photo) => {
       return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
        });
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
            setLoading(false)
        })

        return () => unSubscribe
    }, [])



    const authInfo = {
        user,
        loading,
        googleLogin,
        createUser,
        loginUser,
        logOut,
        updetUser
    }


    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;