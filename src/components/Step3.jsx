import { useEffect } from 'react';

function Step3({ state, dispatch, allExtras }) {
  const { planType, extras } = state;
  useEffect(
    function () {
      dispatch({ type: 'valid/set', payload: true });
    },
    [dispatch],
  );
  return (
    <>
      <h2 className="mb-4 text-2xl font-bold text-marineBlue md:text-4xl">
        Pick add-ons
      </h2>
      <p className="mb-6 text-coolGray">
        Add-ons help enhance your gaming experience
      </p>

      <div className="flex flex-col items-stretch gap-4">
        {allExtras.map((item) => (
          <label
            key={item.id}
            className="flex select-none items-center gap-2 rounded-md border border-marineBlue p-4 shadow-sm"
          >
            <input
              type="checkbox"
              className="mr-3 accent-purplishBlue"
              checked={extras.find((ex) => ex.id === item.id) ?? false}
              onChange={function (e) {
                if (e.target.checked) {
                  dispatch({
                    type: 'extra/add',
                    payload: item,
                  });
                } else {
                  dispatch({ type: 'extra/remove', payload: item.id });
                }
              }}
            />
            <div>
              <h4 className="text-marineBlue">{item.name}</h4>
              <p className="text-sm text-coolGray">{item.description}</p>
            </div>
            <div className="ml-auto text-purplishBlue">
              {planType === 'monthly'
                ? `+${item.monPrice}/mo`
                : `+${item.yearPrice}/yr`}
            </div>
          </label>
        ))}
      </div>
    </>
  );
}

export default Step3;
