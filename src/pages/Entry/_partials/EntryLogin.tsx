import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { setPageTitle, toggleRTL } from '@/store/themeConfigSlice';
import { login } from '@/store/auth';
import IconMail from '@/components/Icon/IconMail';
import IconLockDots from '@/components/Icon/IconLockDots';
import IconInstagram from '@/components/Icon/IconInstagram';
import IconFacebookCircle from '@/components/Icon/IconFacebookCircle';
import IconTwitter from '@/components/Icon/IconTwitter';
import IconGoogle from '@/components/Icon/IconGoogle';

const EntryLogin = (props: any) => {
  const dispatch = useDispatch();
  useEffect(() => {
    // dispatch(setPageTitle(''));
  });
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const user = useSelector((state: any) => state['userReducer']['value']);

  // const [isLogin, setIsLogin] = useState<boolean>(false);

  const submitForm = () => {
    dispatch(login({ email: email, password: password }));
    props.setLoginStatus(true);
  };

  return (
    <div className='relative w-full max-w-[870px] rounded-md bg-[linear-gradient(45deg,#fff9f9_0%,rgba(255,255,255,0)_25%,rgba(255,255,255,0)_75%,_#fff9f9_100%)] p-2 dark:bg-[linear-gradient(52.22deg,#0E1726_0%,rgba(14,23,38,0)_18.66%,rgba(14,23,38,0)_51.04%,rgba(14,23,38,0)_80.07%,#0E1726_100%)]'>
      <div className='relative flex flex-col justify-center rounded-md bg-white/60 backdrop-blur-lg dark:bg-black/50 px-6 lg:min-h-[758px] py-20'>
        <div className='mx-auto w-full max-w-[440px]'>
          <div className='mb-10'>
            <h1 className='text-3xl font-extrabold uppercase !leading-snug text-[#6667AB] md:text-4xl'>Sign in</h1>
            <p className='text-base font-bold leading-normal text-white-dark'>Enter your email and password to login</p>
          </div>
          <form className='space-y-5 dark:text-white' onSubmit={submitForm}>
            <div>
              {/* <label htmlFor='Email'>{email}</label> */}
              <div className='relative text-white-dark'>
                <input id='Email' type='email' placeholder='Enter Email' className='form-input ps-10 placeholder:text-white-dark' onChange={(e) => setEmail(e.target.value)} />
                <span className='absolute start-4 top-1/2 -translate-y-1/2'>
                  <IconMail fill={true} />
                </span>
              </div>
            </div>
            <div>
              {/* <label htmlFor='Password'>{password}</label> */}
              <div className='relative text-white-dark'>
                <input id='Password' type='password' placeholder='Enter Password' className='form-input ps-10 placeholder:text-white-dark' onChange={(e) => setPassword(e.target.value)} />
                <span className='absolute start-4 top-1/2 -translate-y-1/2'>
                  <IconLockDots fill={true} />
                </span>
              </div>
            </div>
            <div>
              <label className='flex cursor-pointer items-center'>
                <input type='checkbox' className='form-checkbox bg-white dark:bg-black' />
                <span className='text-white-dark'>Subscribe to weekly newsletter</span>
              </label>
            </div>
            <button type='submit' className='btn btn-gradient !mt-6 w-full border-0 uppercase shadow-none bg-[#6667AB] text-[#fff]'>
              Sign in
            </button>
          </form>
          <div className='text-center dark:text-white mt-6'>
            Don't have an account ?&nbsp;
            <Link to='/auth/boxed-signup' className='uppercase text-primary underline transition hover:text-black dark:hover:text-white'>
              SIGN UP
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EntryLogin;
