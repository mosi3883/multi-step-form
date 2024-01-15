function Step3() {
  return (
    <>
      <h2 className="mb-4 text-2xl font-bold text-marineBlue md:text-4xl">
        Pick add-ons
      </h2>
      <p className="mb-6 text-coolGray">
        Add-ons help enhance your gaming experience
      </p>

      <div className="flex flex-col items-stretch gap-4">
        <label className="flex select-none items-center gap-2 rounded-md border border-marineBlue p-4 shadow-sm">
          <input type="checkbox" className="mr-3 accent-purplishBlue" />
          <div>
            <h4 className="text-marineBlue">Online service</h4>
            <p className="text-sm text-coolGray">Access to multiplayer games</p>
          </div>
          <div className="ml-auto text-purplishBlue">+$1/mo</div>
        </label>

        <label className="flex select-none items-center gap-2 rounded-md border border-marineBlue p-4 shadow-sm">
          <input type="checkbox" className="mr-3 accent-purplishBlue" />
          <div>
            <h4 className="text-marineBlue">Larger storage</h4>
            <p className="text-sm text-coolGray">Extra 1TB of cloud save</p>
          </div>
          <div className="ml-auto text-purplishBlue">+$2/mo</div>
        </label>

        <label className="flex select-none items-center gap-2 rounded-md border border-marineBlue p-4 shadow-sm">
          <input type="checkbox" className="mr-3 accent-purplishBlue" />
          <div>
            <h4 className="text-marineBlue">Customiable profile</h4>
            <p className="text-sm text-coolGray">
              Custom theme on your profile
            </p>
          </div>
          <div className="ml-auto text-purplishBlue">+$2/mo</div>
        </label>
      </div>
    </>
  );
}

export default Step3;
