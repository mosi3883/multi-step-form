function App() {
  return (
    <div className='h-screen grid place-items-center'>
      <div className='w-[1000px] bg-white p-4 rounded-lg mx-auto flex flex-col md:flex-row'>
        <div className='bg-sidebarMobile self-stretch  md:bg-sidebarDesktop bg-no-repeat bg-cover  flex h-44 md:h-auto  justify-center gap-4 pt-8 md:basis-1/3 md:flex-col md:gap-9 md:justify-start  md:px-8 md:pt-12'>
          <div className='flex gap-4 items-center'>
            <div className='w-10 h-10 text-xl  rounded-full grid place-items-center border border-white bg-lightBlue text-black'>
              1
            </div>
            <div className='uppercase text-sm'>
              <p className='text-coolGray'>Step 1</p>
              <p className='text-white text-lg'>Your info</p>
            </div>
          </div>
          <div className='flex gap-4 items-center'>
            <div className='w-10 h-10 text-xl text-white rounded-full grid place-items-center border border-white'>
              2
            </div>
            <div className='uppercase text-sm'>
              <p className='text-coolGray'>Step 2</p>
              <p className='text-white text-lg'>Select plan</p>
            </div>
          </div>

          <div className='flex gap-4 items-center'>
            <div className='w-10 h-10 text-xl text-white rounded-full grid place-items-center border border-white'>
              3
            </div>
            <div className='uppercase text-sm'>
              <p className='text-coolGray'>Step 3</p>
              <p className='text-white text-lg'>Add-ons</p>
            </div>
          </div>
          <div className='flex gap-4 items-center'>
            <div className='w-10 h-10 text-xl text-white rounded-full grid place-items-center border border-white'>
              4
            </div>
            <div className='uppercase text-sm'>
              <p className='text-coolGray'>Step 4</p>
              <p className='text-white text-lg'>Summary</p>
            </div>
          </div>
        </div>
        <form className='-mt-16 md:mt-0 mb-24 md:mb-0 relative  overflow-y-auto grow md:bg-white md:p-10'>
          <div className='bg-white  mx-auto py-10 md:pt-0 md:pb-32 px-5 md:px-10 rounded-xl'>
            <h2 className='text-2xl md:text-4xl font-bold mb-4 text-marineBlue'>Personal info</h2>
            <p className='text-coolGray mb-6'>Please provide your name, email,addess, and phone number.</p>
            <div className='mb-4 md:mb-6'>
              <label htmlFor='name' className='text-marineBlue mb-1  block'>
                Name
              </label>
              <input
                type='text'
                id='name'
                placeholder='e.g. Stephen King'
                className='w-full md:py-3 md:px-6 border py-2 px-4 rounded focus:outline-none focus:ring-1 ring-marineBlue '
              />
            </div>

            <div className='mb-4 md:mb-6'>
              <label htmlFor='email' className='text-marineBlue mb-1  block'>
                Email Address
              </label>
              <input
                type='email'
                id='email'
                placeholder='e.g stephenking@lorem.com'
                className='w-full md:py-3 md:px-6 border py-2 px-4 rounded focus:outline-none focus:ring-1 ring-marineBlue '
              />
            </div>

            <div className='mb-4 md:mb-6'>
              <label htmlFor='phone' className='text-marineBlue mb-1  block'>
                Phone Number
              </label>
              <input
                id='phone'
                type='text'
                placeholder='e.g. +1 234 567 890'
                className='w-full md:py-3 md:px-6 border py-2 px-4 rounded focus:outline-none focus:ring-1 ring-marineBlue '
              />
            </div>
          </div>
          <div className='fixed left-0  bottom-0 md:absolute md:border-none border-t bg-alabaster md:bg-transparent flex justify-end w-full py-6 px-8 '>
            {/* <button>Go Back</button> */}
            <button className='bg-marineBlue px-3 py-2 md:mr-8 text-white rounded'>Next Step</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
