import axios from "axios"
import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import {connect} from "../../../../../server/index.js"
import GoogleUser from "../../../../../server/models/googleUser.model.js"

const authOptions ={
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    async signIn({user, account}){
      const {email, name} = user;
      const data = {
        email,
        username:name
      }
      if(account.provider === 'google'){
        try {
          await connect()
          const emailExists = await GoogleUser.findOne({email})
          if(!emailExists){
            console.log('email exists')
            const res = await axios.post('http://localhost:8800/user/googleUser', data)
            if(res.ok) return user
          }
        } catch (error) {
          console.log(error)
        }
      }
      return user;
    }
  }
}
// const handler = NextAuth({
//   providers: [
//     GoogleProvider({
//       clientId: process.env.GOOGLE_CLIENT_ID,
//       clientSecret: process.env.GOOGLE_CLIENT_SECRET,
//     }),
//   ],
//   callbacks: {
//     async signIn({user, account})
//     return user;
//   }
// })
const handler = NextAuth(authOptions)

export {handler as GET, handler as POST};
