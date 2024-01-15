function Step4({ dispatch }) {
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
              Arcade(Monthly)
            </span>
            <a
              href="#"
              className="text-coolGray underline"
              onClick={handleTypeChange}
            >
              Change
            </a>
          </div>
          <span className="font-semibold text-marineBlue">$9/mo</span>
        </div>
        {/* list of add-ons */}
        <ul className="space-y-2 pt-4">
          <li className="flex items-center justify-between">
            <span className="text-coolGray">Online service</span>
            <span className="text-sm text-marineBlue">+$1/mo</span>
          </li>
          <li className="flex items-center justify-between">
            <span className="text-coolGray">Larger storage</span>
            <span className="text-sm text-marineBlue">+$2/mo</span>
          </li>
        </ul>
      </div>

      <div className=" flex items-center justify-between px-6 py-4">
        <span className="text-coolGray">Total(per month)</span>
        <span className="text-xl font-semibold text-purplishBlue">$12/mo</span>
      </div>
    </>
  );
}

export default Step4;
