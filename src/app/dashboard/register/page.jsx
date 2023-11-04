"use client"
import React, { useEffect, useRef, useState} from "react";
import styles from './page.module.css';
import axios from "axios";
import { CircularProgress } from "@mui/material";
import { Icon } from '@iconify/react';
import { useRouter } from 'next/navigation'
import toast from "react-hot-toast";

function Register() {

  const userRef = useRef();
  const [formValues, setFormValues] = useState({username:'',email:'',password:''});
  const [, setUserFocus] = useState(false);
  const[passwordType, setPasswordType] = useState(true); 
  const[loading, setLoading] = useState(false); 
  const router = useRouter()

  useEffect(()=>{
    userRef.current.focus();
  },[]);

  function handleChange(e){
    setFormValues({...formValues, [e.target.name]:e.target.value})
  }
  function showPassword(e){
    e.preventDefault()
    setPasswordType((prev)=>!prev)
  }
  async function handleRegister(e){
    e.preventDefault();
    setLoading(true)
    const data = {username:formValues.username, email:formValues.email, password:formValues.password};
    await axios.post('http://localhost:8000/auth/register', data)
    .then(() => {
      setFormValues({username:'', email:'',password:''})
      // window.location.href = "/"
      router.push('/dashboard/login?success=Account has been created')
    }).catch(() => {
        toast.error('Registration failed. Try again!', {
          id: 'error',
      })
    }) 
    .finally(() => {
      setLoading(false);
    });
  }
  return (
      <div className={styles.registerPage}>
      <div className={styles.form}>    
                  <h2 className={styles.title}>Create a Blogy account</h2>
                  <form onSubmit={handleRegister}>
                    <div className={styles.inputBox}>
                      <label htmlFor="username" className={styles.label}>Username</label>
                      <input 
                        className={styles.input}
                        id="username"
                        type="text" 
                        value={formValues.username} 
                        ref={userRef} 
                        name="username"
                        autoComplete="off" 
                        onFocus={()=>setUserFocus(true)}
                        required 
                        onChange={handleChange}
                      />
                    </div>
                    <div className={styles.inputBox}>
                      <label htmlFor="email" className={styles.label}>Email</label>
                      <input 
                        className={styles.input}
                        id="email"
                        type="email" 
                        value={formValues.email} 
                        name="email"
                        autoComplete="off" 
                        onFocus={()=>setUserFocus(true)}
                        required 
                        onChange={handleChange}
                      />
                    </div>
                      <div className={styles.inputBox}>
                        <div className={styles.passIcon}>
                        <label htmlFor="password" className={styles.label}>Password</label>
                        {passwordType ?
                        <Icon icon="basil:eye-closed-outline" width="28" color="rgb(109, 109, 109)" onClick={showPassword}/>
                        : <Icon icon="basil:eye-outline" width="28" color="rgb(109, 109, 109)" onClick={showPassword}/>}
                        </div>
                        <input 
                          className={styles.input}
                          id="password"
                          type={passwordType ? 'password' : 'text'} 
                          value={formValues.password}
                          name="password" 
                          required 
                          onChange={handleChange}
                        />
                      </div>
                    {loading ? 
                    <button className={styles.signIn}><CircularProgress size="14px" className={styles.progress}/>Creating account...</button>
                    :
                    <button className={styles.signIn}>Create account</button>}
                  </form> 
              </div>
    </div>
  )
}

export default Register