import { useReducer } from 'react';
import Step1 from './components/Step1';
import Step2 from './components/Step2';
import Step3 from './components/Step3';
import Step4 from './components/Step4';
import Step5 from './components/Step5';

const allExtras = [
  {
    id: 1,
    name: 'Online service',
    description: 'Access to multiplayer games',
    monPrice: 1,
    yearPrice: 10,
  },
  {
    id: 2,
    name: 'Larger storage',
    description: 'Extra 1TB of cloud save',
    monPrice: 2,
    yearPrice: 20,
  },
  {
    id: 3,
    name: 'Customizable profile',
    description: 'Custom theme on your profile',
    monPrice: 2,
    yearPrice: 20,
  },
];

const allPlans = [
  {
    id: 1,
    name: 'Arcade',
    img: '/images/icon-arcade.svg',
    monPrice: 9,
    yearPrice: 90,
  },
  {
    id: 2,
    name: 'Advanced',
    img: '/images/icon-advanced.svg',
    monPrice: 12,
    yearPrice: 120,
  },
  {
    id: 3,
    name: 'Pro',
    img: '/images/icon-pro.svg',
    monPrice: 15,
    yearPrice: 150,
  },
];

function reducer(state, action) {
  switch (action.type) {
    case 'name/set': {
      return { ...state, name: { ...state.name, value: action.payload } };
    }
    case 'name/setError': {
      return { ...state, name: { ...state.name, error: action.payload } };
    }
    case 'email/set': {
      return { ...state, email: { ...state.email, value: action.payload } };
    }
    case 'email/setError': {
      return { ...state, email: { ...state.email, error: action.payload } };
    }
    case 'phone/set': {
      return { ...state, phone: { ...state.phone, value: action.payload } };
    }
    case 'phone/setError': {
      return { ...state, phone: { ...state.phone, error: action.payload } };
    }
    case 'steps/set': {
      return { ...state, step: action.payload };
    }
    case 'steps/next': {
      return {
        ...state,
        step: state.step + 1,
        showErrors: false,
        isValid: false,
      };
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

    case 'extra/add': {
      return { ...state, extras: [...state.extras, action.payload] };
    }

    case 'extra/remove': {
      return {
        ...state,
        extras: state.extras.filter((item) => item.id !== action.payload),
      };
    }

    case 'valid/set': {
      return { ...state, isValid: action.payload };
    }

    case 'showErrors/set': {
      return { ...state, showErrors: action.payload };
    }

    default: {
      throw new Error(`${action.type} not defined`);
    }
  }
}

const initalState = {
  step: 1,
  planType: 'monthly',
  plan: allPlans.at(0),
  isValid: null,
  showErrors: false,
  name: { value: '', error: '' },
  email: { value: '', error: '' },
  phone: { value: '', error: '' },
  extras: [],
};

function App() {
  const [state, dispatch] = useReducer(reducer, initalState);
  const { step, isValid } = state;
  console.log('valid ', isValid);
  function handleNextStep(e) {
    e.preventDefault();

    if (isValid) {
      dispatch({ type: 'steps/next' });
    } else {
      // show errors
      dispatch({ type: 'showErrors/set', payload: true });
    }
  }

  function handleSubmit(e) {
    e.preventDefault();

    // submit data to database
    //

    // next step
    dispatch({ type: 'steps/next' });
  }

  function handlePrevStep(e) {
    e.preventDefault();

    dispatch({ type: 'steps/prev' });
  }
  return (
    <div className='grid h-screen place-items-center'>
      <div className='mx-auto flex w-full flex-col rounded-lg md:flex-row md:bg-white md:p-4 lg:w-[1000px]'>
        <div className='flex h-44 justify-center gap-4 self-stretch rounded-lg  bg-[url(/images/bg-sidebar-mobile.svg)] bg-cover bg-no-repeat  md:h-auto md:basis-1/3  md:flex-col md:justify-start md:gap-9 md:bg-[url(/images/bg-sidebar-desktop.svg)]  md:px-8 md:pt-12'>
          <div className='flex gap-4 pt-10 md:items-center md:pt-0'>
            <div
              className={`grid h-10 w-10 place-items-center  rounded-full border text-xl ${
                step === 1 ? 'border-lightBlue bg-lightBlue text-black' : 'border-white text-white'
              }`}
            >
              1
            </div>
            <div className='hidden text-sm uppercase md:block'>
              <p className='text-coolGray'>Step 1</p>
              <p className={`text-lg transition-colors duration-300 ${step === 1 ? 'text-white' : 'text-stone-300'}`}>
                Your info
              </p>
            </div>
          </div>
          <div className='flex gap-4 pt-10 md:items-center md:pt-0'>
            <div
              className={`grid h-10 w-10 place-items-center  rounded-full border text-xl ${
                step === 2 ? 'border-lightBlue bg-lightBlue text-black' : 'border-white text-white'
              }`}
            >
              2
            </div>
            <div className='hidden text-sm uppercase md:block'>
              <p className='text-coolGray'>Step 2</p>
              <p className={`text-lg transition-colors duration-300 ${step === 2 ? 'text-white' : 'text-stone-300'}`}>
                Select plan
              </p>
            </div>
          </div>

          <div className='flex gap-4 pt-10 md:items-center md:pt-0'>
            <div
              className={`grid h-10 w-10 place-items-center  rounded-full border text-xl ${
                step === 3 ? 'border-lightBlue bg-lightBlue text-black' : 'border-white text-white'
              }`}
            >
              3
            </div>
            <div className='hidden text-sm uppercase md:block'>
              <p className='text-coolGray'>Step 3</p>
              <p className={`text-lg transition-colors duration-300 ${step === 3 ? 'text-white' : 'text-stone-300'}`}>
                Add-ons
              </p>
            </div>
          </div>
          <div className='flex gap-4 pt-10 md:items-center md:pt-0'>
            <div
              className={`grid h-10 w-10 place-items-center  rounded-full border text-xl ${
                step === 4 || step === 5 ? 'border-lightBlue bg-lightBlue text-black' : 'border-white text-white'
              }`}
            >
              4
            </div>
            <div className='hidden text-sm uppercase md:block'>
              <p className='text-coolGray'>Step 4</p>
              <p
                className={`text-lg transition-colors duration-300 ${
                  step === 4 || step === 5 ? 'text-white' : 'text-stone-300'
                }`}
              >
                Summary
              </p>
            </div>
          </div>
        </div>
        <form className='relative mx-auto -mt-16 mb-24 h-[620px] w-[90%]  grow overflow-y-auto md:mb-0 md:mt-0 md:w-full md:bg-white md:p-10'>
          <div className='mx-auto h-full rounded-xl bg-white px-5 py-10 md:px-10 md:pb-32 md:pt-0'>
            {step === 1 && <Step1 dispatch={dispatch} state={state} />}
            {step === 2 && <Step2 dispatch={dispatch} state={state} allPlans={allPlans} />}
            {step === 3 && <Step3 dispatch={dispatch} state={state} allExtras={allExtras} />}
            {step === 4 && <Step4 dispatch={dispatch} state={state} />}
            {step === 5 && <Step5 />}
          </div>

          <div
            className={`fixed bottom-0  left-0 flex border-t bg-alabaster md:absolute md:border-none md:bg-transparent ${
              step > 0 ? 'justify-between' : 'justify-end'
            } w-full px-20 py-6 `}
          >
            {step > 1 && step < 5 && (
              <button
                onClick={handlePrevStep}
                className='flex items-center gap-1 rounded border border-transparent px-3 py-2 text-coolGray transition-colors duration-300 hover:border-marineBlue hover:text-marineBlue'
              >
                <span className='text-xs'>&larr;</span> <span>Go Back</span>
              </button>
            )}
            {step < 4 && (
              <button
                className='ml-auto flex items-center gap-1 rounded bg-marineBlue px-3 py-2 text-white'
                onClick={handleNextStep}
              >
                <span> Next Step</span> <span className='text-xs'>&rarr;</span>
              </button>
            )}

            {step === 4 && (
              <button
                className='ml-auto flex items-center gap-1 rounded bg-purplishBlue px-3 py-2 text-white'
                onClick={handleSubmit}
              >
                Confirm
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
