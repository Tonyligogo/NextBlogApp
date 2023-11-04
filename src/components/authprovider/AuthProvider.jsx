"use client"
import { SessionProvider } from 'next-auth/react'
import React from 'react'
import { Toaster } from 'react-hot-toast'

function AuthProvider({children}) {
  return (
    <SessionProvider>
      {children}
      <Toaster position='top-right'/>
    </SessionProvider>
  )
}

export default AuthProvider