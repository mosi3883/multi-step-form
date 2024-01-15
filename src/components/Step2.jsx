function Step2({ dispatch, plan, planType }) {
  return (
    <>
      <h2 className="mb-4 text-2xl font-bold text-marineBlue md:text-4xl">
        Select your plan
      </h2>
      <p className="mb-6 text-coolGray">
        you have the option of monthly or yearly billing
      </p>

      <div className="mb-8 flex select-none flex-col gap-3 md:flex-row">
        <div
          className={`flex flex-1 cursor-pointer items-center gap-4 rounded-md border px-4 py-2 hover:border-marineBlue md:flex-col md:items-start md:gap-7 ${plan === 'arcade' ? 'border-marineBlue bg-magnolia' : ''}`}
          onClick={() => dispatch({ type: 'plan/set', payload: 'arcade' })}
        >
          <img src="/images/icon-arcade.svg" alt="" />
          <div>
            <p className="text-2xl text-marineBlue">Arcade</p>
            <p className="text-coolGray">
              {planType === 'monthly' ? '$9/mo' : '$90/yr'}
            </p>
            <>
              {planType === 'yearly' ? (
                <p className="mt-2 text-sm text-marineBlue">two months free</p>
              ) : (
                ''
              )}
            </>
          </div>
        </div>
        <div
          className={`flex flex-1 cursor-pointer items-center gap-4 rounded-md border px-4 py-2 hover:border-marineBlue md:flex-col md:items-start md:gap-7 ${plan === 'advanced' ? 'border-marineBlue bg-magnolia' : ''}`}
          onClick={() => dispatch({ type: 'plan/set', payload: 'advanced' })}
        >
          <img src="/images/icon-advanced.svg" alt="" />
          <div>
            <p className="text-2xl text-marineBlue">Advanced</p>
            <p className="text-coolGray">
              {planType === 'monthly' ? '$12/mo' : '$120/yr'}
            </p>
            <>
              {planType === 'yearly' ? (
                <p className="mt-2 text-sm text-marineBlue">two months free</p>
              ) : (
                ''
              )}
            </>
          </div>
        </div>
        <div
          className={`flex flex-1 cursor-pointer items-center gap-4 rounded-md border px-4 py-2 hover:border-marineBlue md:flex-col md:items-start md:gap-7 ${plan === 'pro' ? 'border-marineBlue bg-magnolia' : ''}`}
          onClick={() => dispatch({ type: 'plan/set', payload: 'pro' })}
        >
          <img src="/images/icon-pro.svg" alt="" />
          <div>
            <p className="text-2xl text-marineBlue">Pro</p>
            <p className="text-coolGray">
              {planType === 'monthly' ? '$15/mo' : '$150/yr'}
            </p>
            <>
              {planType === 'yearly' ? (
                <p className="mt-2 text-sm text-marineBlue">two months free</p>
              ) : (
                ''
              )}
            </>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center  gap-3 bg-alabaster md:px-6 md:py-4">
        <span
          className={`text-lg font-semibold ${planType === 'monthly' ? 'text-marineBlue' : 'text-coolGray'}`}
        >
          Montly
        </span>

        <label className="relative inline-flex cursor-pointer items-center">
          <input
            type="checkbox"
            checked={planType === 'yearly'}
            className="peer sr-only"
            onChange={(e) =>
              dispatch({
                type: 'plans/setType',
                payload: e.target.checked ? 'yearly' : 'monthly',
              })
            }
          />
          <div className="peer h-6 w-11 rounded-full  bg-marineBlue after:absolute after:start-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none rtl:peer-checked:after:-translate-x-full"></div>
        </label>

        <span
          className={`text-lg font-semibold ${planType === 'yearly' ? 'text-marineBlue' : 'text-coolGray'}`}
        >
          Yearly
        </span>
      </div>
    </>
  );
}

export default Step2;
