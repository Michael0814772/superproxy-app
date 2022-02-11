import { useState } from 'react';
import './signup.css';
import logo from '../../assets/logo2.png'
import mobileLogo from '../../assets/Superproxy.png'
import { Link } from 'react-router-dom';
import Terms from '../terms/Terms';

function Signup() {

    const [toggleSelect, setToggleSelect] = useState("false");

    const opacity = () => {
        setToggleSelect(!toggleSelect);
    }

  return (
    <div className="background">
      <div className="h-screen relative">
        <div className="lg:flex justify-evenly h-screen w-screen items-center p-10 px-4 sm:p-10 lg:p-20">
          <div className="flex justify-center mt-20">
            <img src={logo} alt="logo" className="lg:block hidden lg:desktop" />
            <img src={mobileLogo} alt="logo" className="lg:hidden" />
          </div>
          <div>
            <form action="" className={`bg-white pt-16 sm:p-22 md:p-28 lg:p-16 text-center overflow-hidden ${toggleSelect ? 'opacity-100' : 'opacity-60'}`}>

              <div>
                <p className="text-pmobile mb-2">What are you looking for?</p>
                <select name="artisan" id="artisan" className={`font-bold border-2 border-btncolor rounded-md focus:border-btncolor p-1 focus:outline-none opacity-100`} onClick={opacity}>
                  <option value="needArtisian">I’m need an Artisan</option>
                  <option value="amArtisian">I’m an Artisan</option>
                </select>
              </div>

              <div className="text-left mt-3 mb-3">
                <h1 className='text-hmobile mb-1 font-bold'>Create an account</h1>
                <p className='text-pmobile mb-2'>Already have an account? <Link to="/signin" className='text-btncolor ml-1 font-medium'>Sign in</Link></p>
              </div>

              <div className="text-left mb-7">

                <div>
                  <input type="text" placeholder="Email address" className='input  w-full' />
                </div>

                <div className='flex justify-between w-full'>
                  <div className='w-full'>
                    <input type="text" name="" placeholder="First name" className='input w-mfull mr-2' />
                  </div>
                  <div className='w-full'>
                    <input type="text" name=""  placeholder="Last name" className='input w-full' />
                  </div>
                </div>

                <div className='relative'>
                  <input type="password" placeholder="Enter your password" className='input  w-full' />

                  <svg className="w-6 h-6 absolute top-3 right-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round"  strokeWidth="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"></path></svg>
                </div>

                <div>
                  <input type="text" name="" placeholder="State/Province" className='input  w-full' />
                </div>

              </div>

              <div className="text-left mb-12">
                <p className='text-pmobile'>By clicking Create account, I agree that</p>
                <p className='text-pmobile w-9/12 sm:w-5/12 md:w-full'>I have read and accepted the <Link to="#" className='text-btncolor ml-1'>Terms of Use</Link> and <Link to="#" className='text-btncolor ml-1'>Provacy Policy</Link></p>
              </div>

              <div>
                <button className='text-btnmobile border border-btncolor py-3 px-7 rounded-3xl text-white bg-btncolor'>Create an account</button>
              </div>

            </form>
          </div>
        </div>

        <div className='absolute bottom-8 left-24 hidden lg:block'>
            <Terms />
        </div>
      </div>
    </div>
  );
}

export default Signup;
