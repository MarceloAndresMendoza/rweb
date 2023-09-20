import { useEffect } from 'react';
import backdrop from './assets/coding.jpg';
import logo from './assets/dbf.png';

export const Index = () => {
  const redirect = () => {
    setTimeout(() => {
      window.location.href = 'https://doblefoco.cl';
    }, 3000);
  }
  useEffect(() => {
    redirect();
  }, [])

  return (
    <main className='flex flex-col justify-center items-center w-screen h-screen text-white'>
      <div className='flex flex-col gap-4 items-center'>
        <img src={ logo } alt='Our logo' className='w-32'/>
        <h1 className='text-4xl'>DobleFoco Web Services</h1>
        <h2 className='text-sm'>Espere un momento...</h2>
      </div>
      <p className="text-xs text-gray-200 absolute bottom-6">Imagen por <a className='font-bold' href="https://unsplash.com/@hishahadat?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Shahadat Rahman</a> en <a className='font-bold' href="https://unsplash.com/photos/BfrQnKBulYQ?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
      </p>
      <img className='absolute -z-10 object-cover h-screen w-screen opacity-50' src={backdrop} alt='Coding background image' />
      <div className='absolute bg-black -z-20 w-screen h-screen'></div>
    </main>
  )
}
