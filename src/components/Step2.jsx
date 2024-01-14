function Step2() {
  return (
    <>
      <h2 className='text-2xl md:text-4xl font-bold mb-4 text-marineBlue'>Select your plan</h2>
      <p className='text-coolGray mb-6'>you have the option of monthly or yearly billing</p>

      <div className='flex flex-col gap-3 mb-8'>
        <div className='flex gap-4 items-center border py-2 px-4 rounded-md'>
          <img src='/images/icon-arcade.svg' alt='' />
          <div>
            <p className='text-2xl'>Arcade</p>
            <p className='text-coolGray'>$9/mo</p>
          </div>
        </div>
        <div className='flex gap-4 items-center border py-2 px-4 rounded-md'>
          <img src='/images/icon-advanced.svg' alt='' />
          <div>
            <p className='text-2xl'>Advanced</p>
            <p className='text-coolGray'>$12/mo</p>
          </div>
        </div>
        <div className='flex gap-4 items-center border py-2 px-4 rounded-md'>
          <img src='/images/icon-pro.svg' alt='' />
          <div>
            <p className='text-2xl'>Pro</p>
            <p className='text-coolGray'>$15/mo</p>
          </div>
        </div>
      </div>

      <div className='bg-alabaster flex gap-3  justify-center items-center'>
        <span className='text-marineBlue'>Montly</span>

        <label className='relative inline-flex items-center cursor-pointer'>
          <input type='checkbox' value='' className='sr-only peer' />
          <div className="w-11 h-6 bg-marineBlue peer-focus:outline-none  rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all"></div>
        </label>

        <span className='text-marineBlue'>Yearly</span>
      </div>
    </>
  );
}

export default Step2;
