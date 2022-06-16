import { useState } from 'react';
import './App.scss';
import star from './images/icon-star.svg';
import ilustration from './images/illustration-thank-you.svg';

function App() {

  const numbers = [1, 2, 3, 4, 5];
  const [ isSubmited, setIsSubmited ] = useState(false);
  const [ items, setItems ] = useState('');

  function handleSubmitClick(e) {
    e.preventDefault();
    setIsSubmited(true)
  }

  return (
    <>
    { !isSubmited && 
      <div className="wrapper">
        <img className='starIcon' src={ star } alt="Star" />
        <h2 className='headerTitle'>How did we do?</h2>
        <p className='callToActionText'>
          Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!
        </p>
        <ul className='ratingButtons'>
          {
            numbers.map((item, index) =>
            {
              return <li key={ index }><button onClick={() => setItems(item)}>{ item }</button></li>
            })
          }
        </ul>
        <div className='submitButtonParent'>
          <button onClick={ handleSubmitClick } className="submitButton">Submit</button>
        </div>
      </div> 
    }
    { isSubmited &&  <ThankYou items={ items } setIsSubmited={ setIsSubmited } /> }
  </>);
}

const ThankYou = ({ items, setIsSubmited }) =>
{
  return(
    <div className="wrapper">
      <div className="secondaryImage">
        <img src={ ilustration } alt="" />
      </div>
      <div className="selectedNumberMessageParent">
              <p className='selectedNumberMessage'>You selected { items } out of 5 </p>
      </div>

      <h2 className='headerTitle secondary'>Thank you!</h2>
      <p className='callToActionText secondary'>
        We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!
      </p>
      <div className='submitButtonParent'>
        <button onClick={() => setIsSubmited(false)} className="submitButton">Rate again</button>
      </div>
    </div>
  )
}

export default App;
