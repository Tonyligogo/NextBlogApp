'use client'
import React, { useEffect, useRef, useState } from 'react'
import styles from './page.module.css'
import { CircularProgress } from "@mui/material";
import { Icon } from '@iconify/react';
import Image from 'next/image';
import ContactUs from '../../../public/contactUs.jpg'

function Contact() {

  const [formValues, setFormValues] = useState({email:'',text:''});
  const [loading, setLoading] = useState(false);
  const emailRef = useRef();
  const [, setUserFocus] = useState(false);

  useEffect(()=>{
    emailRef.current.focus();
  },[]);

  function handleChange(e){
    setFormValues({...formValues, [e.target.name]:e.target.value})
  }

  return (
    <div className={styles.contactWrapper}>

      <form className={styles.form}>
        <h2 className={styles.title}>Contact Us</h2>
        <p className={styles.description}>Let&apos;s connect:We&apos;re here to help, and we&apos;d love to hear from you!</p>
                    <div className={styles.inputBox}>
                      <label htmlFor="email" className={styles.label}>Email</label>
                      <input 
                        className={styles.input}
                        id="email"
                        type="text" 
                        value={formValues.email} 
                        ref={emailRef} 
                        name="email"
                        autoComplete="off" 
                        onFocus={()=>setUserFocus(true)}
                        required 
                        onChange={handleChange}
                      />
                    </div>
                      <div className={styles.inputBox}>
                        <div className={styles.passIcon}>
                        <label htmlFor="text" className={styles.label}>Text</label>
                        </div>
                        <textarea id="text" name="text" rows="5"  className={styles.textarea}>

                        </textarea>
                      </div>
                    {loading ? 
                    <button className={styles.submit}><CircularProgress size="14px" className={styles.progress}/>Sending...</button>
                    :
                    <button className={styles.submit}>Send</button>}
                    <span className={styles.number}>
                    Call or Message
                     - +254709852417
                    </span>
                  </form>
                  {/* <Image src={ContactUs} alt='contactUs image' className={styles.contactUsImage} width={300} height={auto}/> */}
    </div>
  )
}

export default Contact