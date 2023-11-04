import axios from "axios"
import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import { connect } from "../../../../../server/index.js"
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
          await connect();
            const newGoogleUser = await GoogleUser.create({
              username:name,
              email
            })
            // const res = await axios.post('http://localhost:8000/user/googleUser', data)
          
          return true
          // if(res.ok){
          // }
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
