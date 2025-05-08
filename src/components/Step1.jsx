import { useEffect } from 'react';
function isValidEmail(email) {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    );
}
function Step1({ state, dispatch }) {
  const { name, email, phone, showErrors } = state;
  function nameChangeHandler(e) {
    dispatch({ type: 'name/set', payload: e.target.value });
  }
  function emailChangeHandler(e) {
    dispatch({ type: 'email/set', payload: e.target.value });
  }
  function phoneChangeHandler(e) {
    dispatch({ type: 'phone/set', payload: e.target.value });
  }

  useEffect(
    function () {
      // check validation
      if (name.value.length === 0) {
        dispatch({ type: 'name/setError', payload: 'This field is required' });
      } else if (name.value.length < 3) {
        dispatch({ type: 'name/setError', payload: 'Name is too short' });
      } else if (name.value.length > 3) {
        dispatch({ type: 'name/setError', payload: false });
      }

      if (email.value.length === 0) {
        dispatch({ type: 'email/setError', payload: 'This field is required' });
      } else if (!isValidEmail(email.value)) {
        dispatch({ type: 'email/setError', payload: 'Email is not valid' });
      } else {
        dispatch({ type: 'email/setError', payload: false });
      }

      if (phone.value.length === 0) {
        dispatch({ type: 'phone/setError', payload: 'This field is required' });
      } else if (phone.value.length !== 11) {
        dispatch({
          type: 'phone/setError',
          payload: 'phone should be 11 numbers',
        });
      } else {
        dispatch({
          type: 'phone/setError',
          payload: false,
        });
      }
      // if ok change isValid to true
      if (
        name.error === false &&
        email.error === false &&
        phone.error === false
      ) {
        dispatch({ type: 'valid/set', payload: true });
      } else {
        dispatch({ type: 'valid/set', payload: false });
      }
    },
    [
      name.value,
      name.error,
      email.value,
      email.error,
      phone.value,
      phone.error,
      dispatch,
    ],
  );

  return (
    <>
      <h2 className="mb-4 text-2xl font-bold text-marineBlue md:text-4xl">
        Personal info
      </h2>
      <p className="mb-6 text-coolGray">
        Please provide your name, email,addess, and phone number.
      </p>
      <div className="mb-4 md:mb-6">
        <label
          htmlFor="name"
          className="mb-1 flex items-center justify-between text-marineBlue"
        >
          <span>Name</span>
          <span className="text-base font-bold text-strawberryRed">
            {showErrors ? name.error : ''}
          </span>
        </label>
        <input
          type="text"
          id="name"
          value={name.value}
          onChange={nameChangeHandler}
          placeholder="e.g. Stephen King"
          className={`w-full rounded border px-4 py-2 ring-marineBlue focus:outline-none focus:ring-1 md:px-6 md:py-3 ${showErrors && name.error ? 'border-strawberryRed' : ''}`}
          required
        />
      </div>

      <div className="mb-4 md:mb-6">
        <label
          htmlFor="email"
          className="mb-1 flex items-center justify-between text-marineBlue"
        >
          <span> Email Address</span>
          <span className="text-base font-bold text-strawberryRed">
            {showErrors ? email.error : ''}
          </span>
        </label>
        <input
          type="email"
          id="email"
          value={email.value}
          onChange={emailChangeHandler}
          placeholder="e.g stephenking@lorem.com"
          className={`w-full rounded border px-4 py-2 ring-marineBlue focus:outline-none focus:ring-1 md:px-6 md:py-3 ${showErrors && email.error ? 'border-strawberryRed' : ''}`}
          required
        />
      </div>

      <div className="mb-4 md:mb-6">
        <label
          htmlFor="phone"
          className="mb-1 flex items-center justify-between text-marineBlue"
        >
          <span> Phone Number</span>
          <span className="text-base font-bold text-strawberryRed">
            {showErrors ? phone.error : ''}
          </span>
        </label>

        <input
          id="phone"
          type="text"
          value={phone.value}
          onChange={phoneChangeHandler}
          placeholder="e.g. +1 234 567 890"
          className={`w-full rounded border px-4 py-2 ring-marineBlue focus:outline-none focus:ring-1 md:px-6 md:py-3 ${showErrors && phone.error ? 'border-strawberryRed' : ''}`}
          required
        />
      </div>
    </>
  );
}

export default Step1;
