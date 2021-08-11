import './App.css';
import {useState} from "react";

function App()
{  
  const[number, setNumber] = useState(0);
  const[month, setMonth] = useState(0);
  const[date, setDate] = useState(0);
  const[year, setYear] = useState(0);
  const[verdict, setVerdict] = useState(false);
  const[messageToBeShownToTheUser, setMessageToBeShownToTheUser] = useState("");

  function handleDateChange(e)
  {
    let date1 = new Date(e.target.value);
    setMonth(date1.getMonth() + 1);
    setDate(date1.getDate());
    setYear(date1.getFullYear());
  }
  function handleNumberChange(e)
  {
    setNumber(e.target.value);
  }
  function handleSubmit(e)
  {
    e.preventDefault();//This is to prevent the default behaviour of reloding the page
    setVerdict(true);//This is to show the message container to the user
    let totalSumOfDigits = 0;
    let tempMonth = month;
    let tempDate = date;
    let tempYear = year;
    while(tempMonth > 0)
    {
      totalSumOfDigits = totalSumOfDigits + (tempMonth % 10);
      tempMonth = Math.floor(tempMonth / 10);
    }
    while(tempDate > 0)
    {
      totalSumOfDigits = totalSumOfDigits + (tempDate % 10);
      tempDate = Math.floor(tempDate / 10);
    }
    while(tempYear > 0)
    {
      totalSumOfDigits = totalSumOfDigits + (tempYear % 10);
      tempYear = Math.floor(tempYear / 10);
    }
    console.log("Total Sum is: " + totalSumOfDigits);
    if(totalSumOfDigits % number === 0)
    {
      //console.log("Lucky number");
      setMessageToBeShownToTheUser("Lucky Number");
    }
    else{
      //console.log("unlucky number");
      setMessageToBeShownToTheUser("Unlucky Number");
    }
    e.target.reset();
  }
  return (
    <div className="App">
      <div className = "container">
        <header class = "header">Is Your Birthday Lucky?(Mark-11)</header>

        <div className = "alert">
          <strong>Privacy Notice!</strong> We are not storing your data..
        </div>

        <label for = "description" className = "label label-description">Enter your birthdate and 
        lucky number to continue...</label>

        <form onSubmit = {(e) => handleSubmit(e)}>
          <label for = "birth-date" className = "label">Select your birth date: </label>
          <input type = "date" className = "input" onChange = {(e) => handleDateChange(e)} required></input>
          <label for = "lucky-number" className = "label">Enter your lucky number: </label>
          <input type = "number" className = "input" onChange = {(e) => handleNumberChange(e)} required></input>
          <button type = "submit" className = "button">Check</button>
        </form>

        {verdict && 
          <div className = "message">
            {messageToBeShownToTheUser}
          </div>
        }

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
