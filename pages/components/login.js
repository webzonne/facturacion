import React from 'react'
import { useState } from 'react'
import axios from "axios";
import { useRouter } from 'next/router';


export default function Login({usuario, password}) {
    const [data, setData] = useState(
        {
          user:'',
          pass:''
        }
      )
    const [loader, setLoader] = useState(false)
    const [mError, setMError] = useState(false)
    const [session, setSeccion] = useState(false)

      const {push } = useRouter()
    
      const handleSubmit = (e)=>{
        e.preventDefault()
        handleSession(e, usuario, password)
      }
    
      const handleSession = (e, usuario, password)=>{
        const {user, pass} = data
        if(usuario===user && password ==pass){
          setLoader(true)
          setMError(false)
          setTimeout(() => {
            push('/home');
            setSeccion(true);

        }, 3000);
        }else{
          console.log('usuario o contrasena invalido')
          setMError(true)
        }
        
      }

      const handleClick = ()=>{
        setMError(false)
      }
    
      const handleChange = (e)=>{
        const {name, value} = e.target
        setData({...data, [name]:value})
      }
  return (
    
    <>
     <div className="max-w-md mx-auto mt-10 p-5 rounded shadow-lg">
      <h2 className="text-center text-2xl font-bold mb-4 mt-2">SISTEMA DE FACTURACIÓN</h2>
      <h3 className='text-center text-gray-700 font-medium mb-2 text-xl mt-10'>INICIO DE SESION</h3>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="nombre" className="block text-sm font-medium text-gray-700">Usuario:</label>
          <input onClick={handleClick} onChange={handleChange} type="text" name="user" className="outline-none mt-1 block w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
        <div>
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">Contraseña:</label>
          <input onClick={handleClick} onChange={handleChange} type="password" name="pass" className="outline-none mt-1 block w-full p-2 border border-gray-300 rounded-md"/>
        </div>
            <div className={`${loader ? 'hidden': 'null'}`}>
                <button type="submit" className="w-full bg-blue-500 text-white p-2 px-6 rounded-md hover:bg-black hover:text-withe">ENVIAR</button>
            </div>
            <div className={`loader-spinner text-center mx-auto w-full ${loader ? 'null' : 'hidden'}`}></div>
            <div className={`${mError ? 'null': 'hidden'}`}>
              <p className='text-red-600'>Contraseña o usuario invalido!</p>
            </div>
            {/* <div className=''>
                <Link href='/register' className='text-blue-700 underline'>No te has registrado?</Link>
            </div> */}
       
      </form>
    </div>
    </>
  )
}
