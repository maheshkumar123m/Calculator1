import './Calculator.css';
import React, { useState } from "react";

const Calculator = () => {
    // const [num1, setNUm1]=useState("");
    // const [num2, setNum2]=useState('');
    const [value, setValue] = useState("");
    console.log("value",value)

        
    
       
   
    const AllDelete=()=>{
          setValue("")  
          }
    const onClick = (value) => {
          setValue((prevDisplay) => prevDisplay + value);
          };
        

    
    const Calculates = () => {
        try {
          const result = eval(value);
          setValue(result.toString());
        } catch (error) {
          setValue();
        }
      };



    const Delete=()=>{
       setValue((prevInput)=>prevInput.slice(0,-1));
    }
   



    console.log("value", value)
    return (
        <div class="main">
            <div>
                <input type="text" class="input" placeholder='0' id='Answer' onChange={(e)=> setValue(String(e.target.value))} value={value} />
            </div>
            <div class="calculator">
                <center>
                    <th>
                        <tr>
                            <td colSpan={2}><button class="AA" onClick={AllDelete}>AC</button></td>
                            <td><button class="DEL" onClick={Delete}>DEL</button></td>
                            <td><button onClick={() => onClick("/")}>/</button></td>
                        </tr>
                        <tr>
                            <td><button onClick={() => onClick("1")}>1</button></td>
                            <td> <button onClick={() => onClick('2')}>2</button></td>
                            <td> <button onClick={() => onClick('3')}>3</button></td>
                            <td> <button onClick={() => onClick("*")}>*</button></td>
                        </tr>
                        <tr>
                            <td> <button onClick={() => onClick('4')}>4</button></td>
                            <td> <button onClick={() => onClick('5')}>5</button></td>
                            <td> <button onClick={() => onClick('6')}>6</button></td>
                            <td> <button onClick={() => onClick("+")}>+</button></td>
                        </tr>
                        <tr>
                            <td> <button onClick={() => onClick('7')}>7</button></td>
                            <td> <button onClick={() => onClick('8')}>8</button></td>
                            <td> <button onClick={() => onClick('9')}>9</button></td>
                            <td> <button onClick={() => onClick("-")}>-</button></td>
                        </tr>
                        <tr>
                            <td> <button onClick={() => onClick(".")}>.</button></td>
                            <td><button onClick={() => onClick('0')}>0</button></td>
                            <td colSpan={2}><button class="AC" onClick={Calculates}>=</button></td>

                        </tr>
                    </th>
                    



                </center>
            </div>

        </div>
    );
}
export default Calculator;
