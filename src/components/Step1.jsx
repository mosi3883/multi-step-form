function Step1() {
  return (
    <>
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
          required
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
          required
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
          required
        />
      </div>
    </>
  );
}

export default Step1;
