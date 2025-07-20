import { useState } from "react";

export default function App(){
    const [displayValues, setDisplayValues] = useState("");

    const calculatorTopBtn = "123+";
    const calculatorTopNumbersOp = "456-";
    const calculatorMidNumbersOp = "789*";
    const calculatorLowNumbersOp = ".0=/";

    const arrOfOperators = ["+","-","*","/"];

    let [currentVal, setCurrentVal]= useState("");
    let [previousVal, setPreviousVal ]= useState("");
    let [operator, setOperator]=useState("");

    const topRow = calculatorTopBtn.split("").map((btnChar, ind)=>{
       return <button key={ind} value={btnChar} onClick={handleBtnClick}>{btnChar}</button>
    })

    const topNumberOp = calculatorTopNumbersOp.split("").map(btnChar=>(
        <button key={btnChar} value={btnChar} onClick={handleBtnClick}>{btnChar}</button>
    ))

    const middleNumberOp = calculatorMidNumbersOp.split("").map(btnChar=>(
        <button key={btnChar} value={btnChar} onClick={handleBtnClick}>{btnChar}</button>
    ))


    const lowNumberOp = calculatorLowNumbersOp.split("").map(btnChar=>(
        <button key={btnChar} value={btnChar} onClick={handleBtnClick}>{btnChar}</button>
    ))


    function handleBtnClick(event:any){
        const val = event.target.value
        
        if(!arrOfOperators.includes(val)){
            setCurrentVal(prevCurrentVal=>prevCurrentVal+val)
        }

        if(arrOfOperators.includes(val)){

            if(operator!==""){
                let previousNumber = parseFloat(previousVal);
                let currentNumber = parseFloat(currentVal);
                switch(operator){
                    case "+":
                    setPreviousVal(`${previousNumber + currentNumber}`);
                    setCurrentVal("");
                    break;
                    case "*":
                    setPreviousVal(`${previousNumber * currentNumber}`);
                    setCurrentVal("");
                    break;
                    case "-":
                    setPreviousVal(`${previousNumber - currentNumber}`);
                    setCurrentVal("");
                    break;
                    case "/":
                    setPreviousVal(`${previousNumber / currentNumber}`);
                    setCurrentVal("");
                    break;
                    default:
                        throw new Error("no operator found")

                }
                setOperator(val)
            }else{
                setPreviousVal(currentVal);
                setCurrentVal("");
                setOperator(val)
            }
        }

        setDisplayValues(prevDisplayValue=>prevDisplayValue+val)

        if(val==="="){

            let previousNumber = parseFloat(previousVal);
            let currentNumber = parseFloat(currentVal);

            switch(operator){
                case "+":
                  setDisplayValues(`${previousNumber + currentNumber}`);
                  setCurrentVal(`${previousNumber + currentNumber}`);
                  setOperator("")
                  break;

                case "*":
                  setDisplayValues(`${previousNumber * currentNumber}`);
                  setCurrentVal(`${previousNumber * currentNumber}`);
                  setOperator("")
                  break;

                case "/":
                  setDisplayValues(`${previousNumber / currentNumber}`);
                  setCurrentVal(`${previousNumber / currentNumber}`);
                  setOperator("")
                  break;

                case "-":
                  setDisplayValues(`${previousNumber - currentNumber}`);
                  setCurrentVal(`${previousNumber - currentNumber}`);
                  setOperator("")
                  break;

                default:
                  throw new Error("no operator found")
            }
        }

        if(val==="d"){

        }
    }


    return(
        <main>
          <div className="btnContainer">
                <input type="text" readOnly value={displayValues}/>
                <div>
                    {topRow}
                </div>
                <div>
                    {topNumberOp}
                </div>
                <div>
                    {middleNumberOp}
                </div>
                <div>
                    {lowNumberOp}
                </div>
                {/* <button value={"="} onClick={handleBtnClick}>=</button> */}
          </div>
        </main>
    )
}