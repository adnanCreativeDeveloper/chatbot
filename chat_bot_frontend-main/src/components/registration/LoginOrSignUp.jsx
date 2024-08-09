import { useState } from "react";
import { Link } from "react-router-dom";

function LoginOrSignUp() {
  const [toggleModal, setToggleModal] = useState(true);
  return (
    <>
      {/* ******************* LoginOrSignUp modal ********************** */}
      {toggleModal && (
        <div className='fixed top-0 left-0 z-50 h-screen w-full flex sm:items-center items-end pb-6 bg-black/50'>
          <div className='sm:scale-105 w-fit mx-auto'>
            <div
              className='p-8 bg-zinc-800 mx-auto
          h-fit rounded-2xl sm:scale-110 sm:w-96 w-11/12'>
              <div>
                <div className='log-in-modal sm:h-72 text-center'>
                  <div>
                    <h1 className='text-white text-2xl mb-1 font-medium'>
                      Welcome back
                    </h1>
                    <p className='text-neutral-200 text-lg mb-6 '>
                      Log in or sign up to get smarter responses, upload files
                      and images, and more.
                    </p>
                  </div>
                  <div className='buttons'>
                    <Link
                      to='/login'
                      onClick={() => setToggleModal(!toggleModal)}>
                      <button
                        className='text-black font-medium bg-stone-50 
            w-full rounded-full text-sm mb-3 py-3 px-4 hover:bg-gray-200'>
                        Log in
                      </button>
                    </Link>
                    <Link to='/sign-up'>
                      <button
                        onClick={() => setToggleModal(!toggleModal)}
                        className='text-neutral-200 font-medium bg-zinc-800
            w-full rounded-full border border-zinc-700 text-sm
            mb-5 py-3 px-4 hover:bg-zinc-700'>
                        Sign up
                      </button>
                    </Link>
                    <p
                      className='text-slate-100 text-sm font-medium underline cursor-pointer'
                      onClick={() => setToggleModal(!toggleModal)}>
                      Stay logged out
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default LoginOrSignUp;
