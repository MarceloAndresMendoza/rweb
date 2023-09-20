import { NavLink } from 'react-router-dom';
import backdrop from '../assets/coding.jpg';
import logo from '../assets/dbf-2000.png';
import logo800 from '../assets/dbf-800.png';
import logo400 from '../assets/dbf-400.png';
import logo240 from '../assets/dbf-240.png';
import logo200 from '../assets/dbf-200.png';
import logo160 from '../assets/dbf-160.png';
import logo80 from '../assets/dbf-80.png';
import logo48 from '../assets/dbf-48.png';
import back from '../assets/back.png';

export const Brand = () => {
    return (
        <>
            <main className='flex flex-col w-screen h-screen text-white'>
                    <div className='flex flex-row flex-wrap gap-4 bg-black/50 backdrop-blur fixed top-0 z-10 w-full justify-center py-4'>
                        <div id='backButton'>
                            <NavLink to='/' id='back-arrows'>
                                <img src={back} alt='Back arrow' title='Go back' className='rounded-full bg-gray-500 w-8' />
                            </NavLink>
                        </div>
                        <h1 className='text-3xl text-gray-500 text-center font-bold'>Branding Kit DobleFoco</h1>
                    </div>
                <div className='flex flex-col gap-4 items-center backdrop-blur bg-black/30 rounded-md shadow-md p-6'>
                    <div className='flex flex-col items-center h-full bg-black rounded-md shadow-md'>
                        <img src={logo} alt='Our logo' className='w-96' />
                        <p>Logo original</p>
                        <p>2000 x 2000 - 398 KB - PNG</p>
                    </div>
                    <hr className='border-white/10 border-t w-full'/>
                    <div className='flex flex-col items-center bg-black rounded-md shadow-md'>
                        <img src={logo800} alt='Our logo' className=' w-64' />
                        <p>800 x 800 - 135 KB - PNG</p>
                    </div>
                    <hr className='border-white/10 border-t w-full'/>
                    <p className='text-gray-500'>Desde aquí, a tamaño Real</p>
                    <div className='flex flex-col items-center bg-black rounded-md shadow-md'>
                        <img src={logo400} alt='Our logo' className='w-[400px]' />
                        <p>400 x 400 - 55 KB - PNG</p>
                    </div>
                    <hr className='border-white/10 border-t w-full'/>
                    <div className='flex flex-col items-center bg-black rounded-md shadow-md'>
                        <img src={logo240} alt='Our logo' className='w-[240px]' />
                        <p>240 x 240 - 28.2 KB - PNG</p>
                    </div>
                    <hr className='border-white/10 border-t w-full'/>
                    <div className='flex flex-col items-center bg-black rounded-md shadow-md'>
                        <img src={logo200} alt='Our logo' className='w-[200px]' />
                        <p>200 x 200 - 23.6 KB - PNG</p>
                    </div>
                    <hr className='border-white/10 border-t w-full'/>
                    <div className='flex flex-col items-center bg-black rounded-md shadow-md'>
                        <img src={logo160} alt='Our logo' className='w-[160px]' />
                        <p>160 x 160 - 17 KB - PNG</p>
                    </div>
                    <hr className='border-white/10 border-t w-full'/>
                    <div className='flex flex-col items-center bg-black rounded-md shadow-md'>
                        <img src={logo80} alt='Our logo' className='w-[80px]' />
                        <p>80 x 80 - 7.1 KB - PNG</p>
                    </div>
                    <hr className='border-white/10 border-t w-full'/>
                    <div className='flex flex-col items-center bg-black rounded-md shadow-md'>
                        <img src={logo48} alt='Our logo' className='w-[48px]' />
                        <p>48 x 48 - 4.1 KB - PNG</p>
                    </div>
                </div>
                <img className='fixed -z-10 object-cover h-screen w-screen opacity-50' src={backdrop} alt='Coding background image' />
                <div className='fixed bg-black -z-20 w-screen h-screen'></div>
            </main>
        </>
    )
}
