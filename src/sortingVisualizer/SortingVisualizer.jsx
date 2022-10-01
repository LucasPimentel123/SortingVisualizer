import React, { useEffect, useState } from "react";
import './sortingVisualizer.css'
import * as sortingAlgoritms from './sortingAlgoritms'
import ReactSlider from "react-slider";

export default function SortingVisualizer() {
    const [numbers, setNumbers] = useState([]);

    function generateNewArray() {
        const array = []
        for (let i = 0; i < 10; i++) {
            array.push(randomIntFromInterval(1, 1000))
        }
        setNumbers(array)
    }

    function bubbleSort() {

        for (let i = 0; i < numbers.length; i++) {
            for (let j = i + 1; j < numbers.length; j++) {
                let aux;
                if (numbers[j] <= numbers[i]) {
                    aux = numbers[j];
                    numbers[j] = numbers[i];
                    numbers[i] = aux;
                }
            }
        }

        const array = []

        for (let i = 0; i < numbers.length; i++) {
            array.push(numbers[i])
        }
        setNumbers(numbers)
    }

    function mergeSort() {
        const array = []

        setNumbers(array)
    }


    return (
        <>
            <div className="geral">
                {numbers.map((value, idx) => {
                    return (<div key={idx}>{value}</div>)
                })}
            </div>
            <div className="geral">
                <button className="botaoOrdena" onClick={() => generateNewArray()}>Novo Array</button>
                <button className="botaoOrdena" onClick={() => bubbleSort()}>BubbleSort</button>
                <button className="botaoOrdena" onClick={() => mergeSort()}>MergeSort</button>
                <ReactSlider
                    className="horizontal-slider"
                    thumbClassName="example-thumb"
                    trackClassName="example-track"
                    min={5}
                    max={100}
                    renderThumb={(props, state) => { return (<div {...props}>{state.valueNow}</div>) }}
                />
            </div>
        </>
    );

}

function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

