function Step1({ state, dispatch }) {
  const { name, email, phone } = state;
  function nameChangeHandler(e) {
    dispatch({ type: 'name/set', payload: e.target.value });
  }
  function emailChangeHandler(e) {
    dispatch({ type: 'email/set', payload: e.target.value });
  }
  function phoneChangeHandler(e) {
    dispatch({ type: 'phone/set', payload: e.target.value });
  }
  return (
    <>
      <h2 className="mb-4 text-2xl font-bold text-marineBlue md:text-4xl">
        Personal info
      </h2>
      <p className="mb-6 text-coolGray">
        Please provide your name, email,addess, and phone number.
      </p>
      <div className="mb-4 md:mb-6">
        <label htmlFor="name" className="mb-1 block  text-marineBlue">
          Name
        </label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={nameChangeHandler}
          placeholder="e.g. Stephen King"
          className="w-full rounded border px-4 py-2 ring-marineBlue focus:outline-none focus:ring-1 md:px-6 md:py-3 "
          required
        />
      </div>

      <div className="mb-4 md:mb-6">
        <label htmlFor="email" className="mb-1 block  text-marineBlue">
          Email Address
        </label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={emailChangeHandler}
          placeholder="e.g stephenking@lorem.com"
          className="w-full rounded border px-4 py-2 ring-marineBlue focus:outline-none focus:ring-1 md:px-6 md:py-3 "
          required
        />
      </div>

      <div className="mb-4 md:mb-6">
        <label htmlFor="phone" className="mb-1 block  text-marineBlue">
          Phone Number
        </label>
        <input
          id="phone"
          type="text"
          value={phone}
          onChange={phoneChangeHandler}
          placeholder="e.g. +1 234 567 890"
          className="w-full rounded border px-4 py-2 ring-marineBlue focus:outline-none focus:ring-1 md:px-6 md:py-3 "
          required
        />
      </div>
    </>
  );
}

export default Step1;
