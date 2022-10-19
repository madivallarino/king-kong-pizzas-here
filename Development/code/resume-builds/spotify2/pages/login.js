import React from 'react'
import { getProviders, signIn } from "next-auth/react";




function login({ providers }) {
 
  return (
    <div className="flex flex-col items-center bg-black min-h-screen w-full justify-center">
        <img className="w-52 mb-5" src="https://seeklogo.com/images/S/spotify-2015-logo-560E071CB7-seeklogo.com.png?v=637903118310000000" alt=""/>

        {Object.values(providers).map((provider) => {
          return ( 
          <div key={provider.name}>
            <button className="bg-[#18D860] text-white bg-green p-5 rounded-full"
            onClick={() => signIn(provider.id, {callbackUrl: "/"})}
            > 
            Login with {provider.name}
            
            </button>
          </div>
       )})}
    </div>
  )
}

export default login

export async function getServerSideProps() {
  const providers = await getProviders()

  return {
    props: {
      providers,
    }
  }
}