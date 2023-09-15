import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../Firebase/firebase.config';

export const AuthContext = createContext()
const auth = getAuth(app)
const AuthProvider = ({children}) => {
    const [loading,setLoading] = useState(true)
    const [user,setUser] = useState(null)

    // create user by  email  and password 
    const createUser = (email,password) => {
        setLoading(true)
     return createUserWithEmailAndPassword(auth,email,password)
    }
    
    // update user for find the user name 
    const UpdateUser = (userInfo) => {
        setLoading(true)
        return updateProfile(auth.currentUser,userInfo)
    }
    // login user with email and password 
    const LoginUser = (email,password) => {
        setLoading(true)
       return signInWithEmailAndPassword(auth,email,password)
    }

    // signIn with google 
    const GoogleLogin = (provider) => {
        setLoading(true)
       return signInWithPopup(auth,provider)
    } 

    // signOut user 
    const LogOutUser  = () => {
        setLoading(true)
        return signOut(auth)
    }


// onAuthStateChange 
useEffect(()=> {
    const unsubscribe = onAuthStateChanged(auth, currentUser=>{
        setLoading(false)
        setUser( currentUser)
        
        
    
    })
    return ()=> unsubscribe()

},[])

//   Tournament , Group, Match  
const [selectedTournamentId,setSelectedTournamentid] = useState(null)
const [selectedStageId,setSelectedStageId] = useState(null)
const [selectedMatchId,setSelectedMatchId] = useState(null)
const [selectedMatchData,setSelectedMatchData] = useState({})
const [deadname,setDeadname]=useState('')
console.log(selectedMatchId,"deadname")


    
        const authInfo = {
            selectedTournamentId,
            setSelectedTournamentid,
            selectedStageId,
            setSelectedStageId,
            selectedMatchId,
            setSelectedMatchId,
            selectedMatchData,
            setSelectedMatchData,
            loading,
            user,
            createUser,
            LoginUser,
            GoogleLogin,
            LogOutUser,
            UpdateUser,
            deadname,
            setDeadname
        }

    return (
      <AuthContext.Provider value={authInfo} > 
        {children}
      </AuthContext.Provider>
    ); 
    
};

export default AuthProvider;