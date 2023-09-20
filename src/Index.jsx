import { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import backdrop from './assets/coding.jpg';
import logo from './assets/dbf-2000.png';

export const Index = () => {
  return (
    <main className='flex flex-col justify-center items-center w-screen h-screen text-white'>
      <div className='flex flex-col gap-4 items-center backdrop-blur bg-black/30 rounded-md shadow-md p-6'>
        <img src={ logo } alt='Our logo' className='w-32'/>
        <h1 className='text-4xl'>DobleFoco Web Services</h1>
        <div className='flex flex-row gap-4 justify-center items-center text-xs'>
          <p className=''><a className='p-4 font-bold' href='https://doblefoco.cl' target='_self'>Ir al sitio principal</a></p>|
          <p><NavLink to='/brand' className='p-4 font-bold'>Kit de marca</NavLink></p>
        </div>
      </div>
      <div className="text-xs text-gray-200 absolute bottom-0 py-6 flex flex-col text-center w-full backdrop-blur h-8" >
        <p>Imagen por <a className='font-bold' href="https://unsplash.com/@hishahadat?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Shahadat Rahman</a> en <a className='font-bold' href="https://unsplash.com/photos/BfrQnKBulYQ?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a></p>
      </div>
      <img className='absolute -z-10 object-cover h-screen w-screen opacity-50' src={backdrop} alt='Coding background image' />
      <div className='absolute bg-black -z-20 w-screen h-screen'></div>
    </main>
  )
}
