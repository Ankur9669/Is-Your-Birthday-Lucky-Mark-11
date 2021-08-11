
import './App.css';

function App()
{
  function handleSubmit(e)
  {
    e.preventDefault();
  }
  return (
    <div className="App">
      <div className = "container">
        <header>Is Your Birthday Lucky?(Mark-11)</header>

        <div className = "alert">
          We are not storing your data..
        </div>

        <label for = "description">Enter your birthdate and 
        lucky number to continue...</label>

        <form onSubmit = {(e) => handleSubmit(e)}>
          <label for = "birth-date">Select your birth date</label>
          <input type = "date" className = "input"></input>
          <label for = "lucky-number">Enter your lucky number</label>
          <input type = "number" className = "input"></input>
          <button type = "submit">Check</button>
        </form>
        <footer class = "footer">
        <div class = "footer-header">Connect with me on!</div>
        <ul class = "footer-list">
            <li class = "list-inline">
                <a href = "https://github.com/Ankur9669">
                    <img src = "/github-icon.svg" class = "icon"/>
                </a>
            </li>
            <li class = "list-inline">
                <a href = "https://www.linkedin.com/in/ankur-gupta-0805a11a7/">
                    <img src = "/linkedin-icon.svg" class = "icon"/>
                </a>
            </li>
            <li class = "list-inline">
                <a href = "/">
                    <img src = "/gmail-icon.svg" class = "icon"/>
                </a>
            </li>  
        </ul>
    </footer>
      </div>
    </div>
  );
}

export default App;
