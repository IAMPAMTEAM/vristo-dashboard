import { useState } from 'react';
import EntryLogin from './_partials/EntryLogin';
import EntryMenu from './_partials/EntryMenu';

const EntryContainer = () => {
  const [loginStatus, setLoginStatus] = useState<boolean>(false);

  return (
    <div>
      <div className='absolute inset-0 bg-gradient-to-r from-[#6667AB] to-[#ED8C00]'>{/* <img src="/assets/images/auth/bg-gradient.png" alt="image" className="h-full w-full object-fill" /> */}</div>
      <div className='absolute p-4 text-3xl font-bold font-mono'>
        {/* logo */}
        IAMPAM
      </div>

      <div className='relative flex min-h-screen items-center justify-center  sm:px-16 pt-12'>{loginStatus ? <EntryMenu /> : <EntryLogin setLoginStatus={setLoginStatus} />}</div>
    </div>
  );
};

export default EntryContainer;
