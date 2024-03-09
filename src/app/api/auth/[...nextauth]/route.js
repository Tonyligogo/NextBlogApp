import axios from "axios"
import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
// import { MongoDBAdapter } from "@auth/mongodb-adapter"
import {connect} from "../../../../../server/index.js"
import GoogleUser from "../../../../../server/models/googleUser.model.js"
import clientPromise from "../../../../../server/libs/mongoConnect.js"
import CredentialsProvider from "next-auth/providers/credentials"
import User from "../../../../../server/models/user.model.js"
import bcrypt from 'bcrypt';

const authOptions ={
  // adapter: MongoDBAdapter(clientPromise),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    CredentialsProvider({
      name: 'Credentials',
      id: 'credentials',
      credentials:{},
      async authorize(credentials) {
        await connect();
        const {username, password} = credentials;
          const user = await User.findOne({username})
          if(user){
            const isCorrect = await bcrypt.compareSync(password, user.password)
            if(isCorrect){
              return user;
            }else{
              throw new Error('Wrong credentials')
            }
          }else{
            throw new Error('User not found')
          } 
        
      }
    })
  ],
  session:{
    strategy: 'jwt'
  },
  secret:"vygcdrdre8798723cgfcdzty",
  pages:{
    signIn:'/dashboard/login'
  },
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
