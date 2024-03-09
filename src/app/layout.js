import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/navbar/Navbar'
import Footer from '@/components/footer/Footer'
import AuthProvider from '@/components/authprovider/AuthProvider'
import UserProvider from './context/Userprovider'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Blogy',
  description: 'Blog site',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          <UserProvider>
            <div className='mainContainer'>
                <Navbar/>
                {children}
                <Footer/>
            </div>
          </UserProvider>
        </AuthProvider>
      </body>
    </html>
  )
}
