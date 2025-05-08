function Step4({ dispatch, state }) {
  const { plan, planType, extras } = state;
  const totalPrice =
    planType === 'monthly'
      ? plan.monPrice + extras.reduce((acc, cur) => acc + cur.monPrice, 0)
      : plan.yearPrice + extras.reduce((acc, cur) => acc + cur.yearPrice, 0);
  console.log(totalPrice);
  function handleTypeChange(e) {
    e.preventDefault();

    dispatch({ type: 'steps/set', payload: 2 });
  }
  return (
    <>
      <h2 className="mb-4 text-2xl font-bold text-marineBlue md:text-4xl">
        Finishing up
      </h2>
      <p className="mb-6 text-coolGray">
        Double-check everything looks OK before confirming.
      </p>

      <div className="divide-y rounded-md bg-magnolia px-6 py-4">
        <div className="mb-4 flex items-center justify-between">
          <div className="flex flex-col gap-0">
            <span className="text-lg font-semibold text-marineBlue">
              {plan.name}({planType})
            </span>
            <a
              href="#"
              className="text-coolGray underline"
              onClick={handleTypeChange}
            >
              Change
            </a>
          </div>
          <span className="font-semibold text-marineBlue">
            {planType === 'monthly'
              ? `$${plan.monPrice}/mo`
              : `$${plan.yearPrice}/yr`}
          </span>
        </div>
        {/* list of add-ons */}
        <ul className="space-y-2 pt-4">
          {extras.map((item) => (
            <li key={item.id} className="flex items-center justify-between">
              <span className="text-coolGray">{item.name}</span>
              <span className="text-sm text-marineBlue">
                +$
                {planType === 'monthly'
                  ? `${item.monPrice}/mo`
                  : `${item.yearPrice}/yr`}
              </span>
            </li>
          ))}
        </ul>
      </div>

      <div className=" flex items-center justify-between px-6 py-4">
        <span className="text-coolGray">
          Total(per {planType === 'monthly' ? 'Month' : 'Year'})
        </span>
        <span className="text-xl font-semibold text-purplishBlue">
          ${totalPrice}/{planType === 'monthly' ? `mo` : `yr`}
        </span>
      </div>
    </>
  );
}

export default Step4;
