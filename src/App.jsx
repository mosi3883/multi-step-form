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
  }
}

const initalState = {
  step: 1,
};

function App() {
  const [{ step }, dispatch] = useReducer(reducer, initalState);

  function handleNextStep(e) {
    e.preventDefault();

    dispatch({ type: 'steps/next' });
  }

  function handlePrevStep(e) {
    e.preventDefault();

    dispatch({ type: 'steps/prev' });
  }
  return (
    <div className='h-screen grid place-items-center'>
      <div className='w-full lg:w-[1000px] md:bg-white md:p-4 rounded-lg mx-auto flex flex-col md:flex-row'>
        <div className='bg-sidebarMobile self-stretch  md:bg-sidebarDesktop bg-no-repeat bg-cover  flex h-44 md:h-auto  justify-center gap-4  md:basis-1/3 md:flex-col md:gap-9 md:justify-start  md:px-8 md:pt-12'>
          <div className='flex gap-4 pt-10 md:items-center md:pt-0'>
            <div
              className={`w-10 h-10 text-xl  rounded-full grid place-items-center border   ${
                step === 1 ? ' bg-lightBlue border-lightBlue text-black' : 'text-white border-white'
              }`}
            >
              1
            </div>
            <div className='hidden md:block uppercase text-sm'>
              <p className='text-coolGray'>Step 1</p>
              <p className='text-white text-lg'>Your info</p>
            </div>
          </div>
          <div className='flex gap-4 pt-10 md:items-center md:pt-0'>
            <div
              className={`w-10 h-10 text-xl  rounded-full grid place-items-center border text-white border-white ${
                step === 2 ? ' bg-lightBlue text-black' : ''
              }`}
            >
              2
            </div>
            <div className='hidden md:block uppercase text-sm'>
              <p className='text-coolGray'>Step 2</p>
              <p className='text-white text-lg'>Select plan</p>
            </div>
          </div>

          <div className='flex gap-4 pt-10 md:items-center md:pt-0'>
            <div
              className={`w-10 h-10 text-xl  rounded-full grid place-items-center border text-white border-white ${
                step === 3 ? ' bg-lightBlue text-black' : ''
              }`}
            >
              3
            </div>
            <div className='hidden md:block uppercase text-sm'>
              <p className='text-coolGray'>Step 3</p>
              <p className='text-white text-lg'>Add-ons</p>
            </div>
          </div>
          <div className='flex gap-4 pt-10 md:items-center md:pt-0'>
            <div
              className={`w-10 h-10 text-xl  rounded-full grid place-items-center border text-white border-white ${
                step === 4 ? ' bg-lightBlue text-black' : ''
              }`}
            >
              4
            </div>
            <div className='hidden md:block uppercase text-sm'>
              <p className='text-coolGray'>Step 4</p>
              <p className='text-white text-lg'>Summary</p>
            </div>
          </div>
        </div>
        <form className='-mt-16 md:mt-0 h-[620px] mb-24 md:mb-0 relative  overflow-y-auto grow md:bg-white md:p-10 w-[90%] md:w-full mx-auto'>
          <div className='bg-white  mx-auto py-10 md:pt-0 md:pb-32 px-5 md:px-10 rounded-xl'>
            {step === 1 && <Step1 />}
            {step === 2 && <Step2 />}
            {step === 3 && <Step3 />}
            {step === 4 && <Step4 />}
          </div>

          <div
            className={`fixed left-0  bottom-0 md:absolute md:border-none border-t bg-alabaster md:bg-transparent flex ${
              step > 0 ? 'justify-between' : 'justify-end'
            } w-full py-6 px-20 `}
          >
            {step > 1 && (
              <button
                onClick={handlePrevStep}
                className='text-coolGray transition-colors duration-300 border border-transparent px-3 py-2 rounded hover:border-marineBlue hover:text-marineBlue flex items-center gap-1'
              >
                <span className='text-xs'>&larr;</span> <span>Go Back</span>
              </button>
            )}
            {step < 4 && (
              <button
                className='bg-marineBlue px-3 py-2 ml-auto text-white rounded flex items-center gap-1'
                onClick={handleNextStep}
              >
                <span> Next Step</span> <span className='text-xs'>&rarr;</span>
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
