import './App.css';
import Logo from './icon-star.svg';
import ThankYou from './illustration-thank-you.svg'
import {useState} from 'react';

function App() {
  
  const [value, setValue] = useState({})
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:4000/", {
      mode: "cors",
      method: 'POST',
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(value)
    })
    .then(res => res.json())
    .then(data => {
      if (data.status === 'success') {
        setSubmitted(true)
      }
    })
  }

  const handleChange = (event) => {
    setValue({[event.target.name]: event.target.value})
  }
  var ratingMarkup = (
    <header className="App-header">
        <div className="App-container">
          <div className="icon-container">
            <img src={Logo} alt="Star"/>
          </div>
          <h1>How did we do?</h1>
          <p>Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!</p>
          <form onSubmit={handleSubmit}>
            <div className="rating">
              <label className="rating__radio-container">
                <input type="radio" name="rating" onChange={handleChange} value="1"/>
                <span className="rating__radio-button"><div>1</div></span>
              </label>
              <label className="rating__radio-container">
                <input  type="radio" name="rating" onChange={handleChange} value="2"/>
                <span className="rating__radio-button"><div>2</div></span>
              </label>
              <label className="rating__radio-container">
                <input  type="radio" name="rating" onChange={handleChange} value="3"/>
                <span className="rating__radio-button"><div>3</div></span>
              </label>
              <label className="rating__radio-container"> 
                <input  type="radio" name="rating" onChange={handleChange} value="4"/>
                <span className="rating__radio-button"><div>4</div></span>
              </label>
              <label className="rating__radio-container">
                <input  type="radio" name="rating" onChange={handleChange} value="5"/>
                <span className="rating__radio-button"><div>5</div></span>
              </label>
            </div>
            <button type="submit" className="btn-submit">Submit</button>
          </form>

        </div>
      </header>
  )
  var thankYouMarkup  = (
    <header className='App-header'>
      <div className='App-container'>
        <div className='thank-you-wrapper'>
          <img src={ThankYou} alt="Payment"/>
          <div className='thank-you-rating-box'>
            <div className='thank-you-rating'>You selected {value.rating} out of 5</div>
          </div>
          <h1>Thank you!</h1>
          <p>
            We appreciate you taking the time to give a rating. If you ever need more support, 
            don’t hesitate to get in touch!
          </p>
        </div>
      </div>
    </header>
  )
  var markup;
  if (submitted) {
    markup = thankYouMarkup
  }
  else markup = ratingMarkup

  return (
    <div>
      {markup}
    </div>
  );
}

export default App;
