import { getSession } from 'next-auth/client'
import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'
import Login from '../components/Login'
import Sidebar from '../components/Sidebar'
import Feed from '../components/Feed'



export default function Home({ session }) {
  if(!session) return <Login/>
  return (
    
    <div >
      <Head>
        <title>Facebook</title>
      
      </Head>

     <Header/>
     <main>
       <Sidebar/>
        < Feed /> 
       {/*Widgets */ }
     </main>
    </div>
  )
}

export async function getServerSideProps(context){
  const session = await getSession(context);
  return{
    props:{
      session
    }
  }
}
