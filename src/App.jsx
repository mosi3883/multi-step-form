import { useReducer } from 'react';
import Step1 from './components/Step1';
import Step2 from './components/Step2';
import Step3 from './components/Step3';
import Step4 from './components/Step4';

function reducer(state, action) {
  switch (action.type) {
    case 'steps/next': {
      return { ...state, step: state.step + 1 };
    }

    case 'steps/prev': {
      return { ...state, step: state.step - 1 };
    }

    case 'plan/set': {
      return { ...state, plan: action.payload };
    }

    case 'plans/setType': {
      console.log(action.payload);
      return { ...state, planType: action.payload };
    }
  }
}

const initalState = {
  step: 1,
  planType: 'monthly',
  plan: '',
};

function App() {
  const [{ step, plan, planType }, dispatch] = useReducer(reducer, initalState);

  function handleNextStep(e) {
    e.preventDefault();

    dispatch({ type: 'steps/next' });
  }

  function handlePrevStep(e) {
    e.preventDefault();

    dispatch({ type: 'steps/prev' });
  }
  return (
    <div className="grid h-screen place-items-center">
      <div className="mx-auto flex w-full flex-col rounded-lg md:flex-row md:bg-white md:p-4 lg:w-[1000px]">
        <div className="flex h-44 justify-center gap-4 self-stretch rounded-lg  bg-sidebarMobile bg-cover bg-no-repeat  md:h-auto md:basis-1/3  md:flex-col md:justify-start md:gap-9 md:bg-sidebarDesktop  md:px-8 md:pt-12">
          <div className="flex gap-4 pt-10 md:items-center md:pt-0">
            <div
              className={`grid h-10 w-10 place-items-center  rounded-full border text-xl ${
                step === 1
                  ? 'border-lightBlue bg-lightBlue text-black'
                  : 'border-white text-white'
              }`}
            >
              1
            </div>
            <div className="hidden text-sm uppercase md:block">
              <p className="text-coolGray">Step 1</p>
              <p
                className={`text-lg transition-colors duration-300 ${step === 1 ? 'text-white' : 'text-stone-300'}`}
              >
                Your info
              </p>
            </div>
          </div>
          <div className="flex gap-4 pt-10 md:items-center md:pt-0">
            <div
              className={`grid h-10 w-10 place-items-center  rounded-full border text-xl ${
                step === 2
                  ? 'border-lightBlue bg-lightBlue text-black'
                  : 'border-white text-white'
              }`}
            >
              2
            </div>
            <div className="hidden text-sm uppercase md:block">
              <p className="text-coolGray">Step 2</p>
              <p
                className={`text-lg transition-colors duration-300 ${step === 2 ? 'text-white' : 'text-stone-300'}`}
              >
                Select plan
              </p>
            </div>
          </div>

          <div className="flex gap-4 pt-10 md:items-center md:pt-0">
            <div
              className={`grid h-10 w-10 place-items-center  rounded-full border text-xl ${
                step === 3
                  ? 'border-lightBlue bg-lightBlue text-black'
                  : 'border-white text-white'
              }`}
            >
              3
            </div>
            <div className="hidden text-sm uppercase md:block">
              <p className="text-coolGray">Step 3</p>
              <p
                className={`text-lg transition-colors duration-300 ${step === 3 ? 'text-white' : 'text-stone-300'}`}
              >
                Add-ons
              </p>
            </div>
          </div>
          <div className="flex gap-4 pt-10 md:items-center md:pt-0">
            <div
              className={`grid h-10 w-10 place-items-center  rounded-full border text-xl ${
                step === 4
                  ? 'border-lightBlue bg-lightBlue text-black'
                  : 'border-white text-white'
              }`}
            >
              4
            </div>
            <div className="hidden text-sm uppercase md:block">
              <p className="text-coolGray">Step 4</p>
              <p
                className={`text-lg transition-colors duration-300 ${step === 4 ? 'text-white' : 'text-stone-300'}`}
              >
                Summary
              </p>
            </div>
          </div>
        </div>
        <form className="relative mx-auto -mt-16 mb-24 h-[620px] w-[90%]  grow overflow-y-auto md:mb-0 md:mt-0 md:w-full md:bg-white md:p-10">
          <div className="mx-auto  rounded-xl bg-white px-5 py-10 md:px-10 md:pb-32 md:pt-0">
            {step === 1 && <Step1 dispatch={dispatch} />}
            {step === 2 && (
              <Step2 dispatch={dispatch} plan={plan} planType={planType} />
            )}
            {step === 3 && <Step3 dispatch={dispatch} />}
            {step === 4 && <Step4 dispatch={dispatch} />}
          </div>

          <div
            className={`fixed bottom-0  left-0 flex border-t bg-alabaster md:absolute md:border-none md:bg-transparent ${
              step > 0 ? 'justify-between' : 'justify-end'
            } w-full px-20 py-6 `}
          >
            {step > 1 && (
              <button
                onClick={handlePrevStep}
                className="flex items-center gap-1 rounded border border-transparent px-3 py-2 text-coolGray transition-colors duration-300 hover:border-marineBlue hover:text-marineBlue"
              >
                <span className="text-xs">&larr;</span> <span>Go Back</span>
              </button>
            )}
            {step < 4 && (
              <button
                className="ml-auto flex items-center gap-1 rounded bg-marineBlue px-3 py-2 text-white"
                onClick={handleNextStep}
              >
                <span> Next Step</span> <span className="text-xs">&rarr;</span>
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
