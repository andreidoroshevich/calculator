import React, {EventHandler, MouseEventHandler, useState, MouseEvent} from 'react';
import './App.css';

function App() {
    const [result, setResult] = useState('')
    const onClickHandler: MouseEventHandler<HTMLButtonElement> = (e: MouseEvent<HTMLButtonElement>) => {
        setResult(result.concat(e.currentTarget.name))
    }

    const onClickClearHandler = () => {
        setResult('')
    }

    const onClickBackSpaceHandler = () => {
        setResult(result.slice(0, -1))
    }

    const onClickResultHandler = () => {
        try {
            setResult(eval(result).toString())
        } catch (err) {
            setResult('Error')
        }
    }

    return (
        <>
            <div className={'container'}>
                    <input autoFocus type={"text"} value={result}/>
                <div className={'keypad'}>
                    <button className={'clear'} name={'clear'} onClick={onClickClearHandler}>Clear</button>
                    <button name={'C'} onClick={onClickBackSpaceHandler}>C</button>
                    <button name={'+'} onClick={onClickHandler}>+</button>
                    <button name={'9'} onClick={onClickHandler}>9</button>
                    <button name={'8'} onClick={onClickHandler}>8</button>
                    <button name={'7'} onClick={onClickHandler}>7</button>
                    <button name={'/'} onClick={onClickHandler}>&divide;</button>
                    <button name={'6'} onClick={onClickHandler}>6</button>
                    <button name={'5'} onClick={onClickHandler}>5</button>
                    <button name={'4'} onClick={onClickHandler}>4</button>
                    <button name={'*'} onClick={onClickHandler}>&times;</button>
                    <button name={'3'} onClick={onClickHandler}>3</button>
                    <button name={'2'} onClick={onClickHandler}>2</button>
                    <button name={'1'} onClick={onClickHandler}>1</button>
                    <button name={'-'} onClick={onClickHandler}>-</button>
                    <button name={'0'} onClick={onClickHandler}>0</button>
                    <button name={'.'} onClick={onClickHandler}>.</button>
                    <button className={'result'} name={'='} onClick={onClickResultHandler}>=</button>
                    <button name={'**'} onClick={onClickHandler}>X<sup>2</sup></button>
c                </div>
            </div>
        </>
    );
}

export default App;
