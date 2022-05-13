import React from "react";
import { useState } from "react";
import * as ReactDOM from 'react-dom/client';



const Home = () => {
    const [file, setFile] = useState(null);
    const [data, setData] = useState("");

    const OnChangeHandle = (e) => {

        setFile(e.target.files[0])
        e.preventDefault();
        const reader = new FileReader();
        reader.onload = (e) => {
            const text = e.target.result;
            console.log(text);
            
            setData(data + text);
        };
        reader.readAsText(e.target.files[0]);
    };


    const [ifCounter, setIfCounter] = useState(null);
    const [elseCounter, setelseCounter] = useState(null);
    const [classCounter, setclassCounter] = useState(null);
    const [dataTypesCounter, setDataTypesCounter] = useState(null);


    const myElement = (
        
        <div className="code-display-container" style={{ marginBottom: "2rem", backgroundColor: "#212529", overflowY: "scroll", height: "300px" }}>
            <pre><code style={{ color: "lightgreen" }}>{data}</code></pre>
        </div>
    )
    // #0096FF

    const OnClickHandle = async () => {
        
        

        const root = ReactDOM.createRoot(document.getElementById('display'));

        root.render(
            myElement
        )

        const shrink = data.replace(/(\r\n|\n|\r)/gm, " ");
        const shrinkLower = shrink.toLowerCase();



        const cleanspaceArr = shrinkLower.split(" ");
        var i = 0;
        while (i < cleanspaceArr.length) {
            if (cleanspaceArr[i] === '') {
                cleanspaceArr.splice(i, 1);
            } else {
                ++i;
            }
        }
        console.log(cleanspaceArr)


        // console.log(cleanspaceArr)
        var ifCount = null;
        var elseCount = null;
        var classCount = null;
        var dataTypeCount = null;

        for (let i = 0; i < cleanspaceArr.length; i++) {
            if (cleanspaceArr[i].includes("if")) {
                ifCount++;
            }
            if (cleanspaceArr[i].includes("else")) {
                elseCount++;
            }
            if (cleanspaceArr[i].includes("class")) {
                classCount++;
            }
            if (cleanspaceArr[i] === "string[]" ||
                cleanspaceArr[i] === "short" ||
                cleanspaceArr[i] === "byte" ||
                cleanspaceArr[i] === "int" ||
                cleanspaceArr[i] === "long" ||
                cleanspaceArr[i] === "float" ||
                cleanspaceArr[i] === "double" ||
                cleanspaceArr[i] === "boolean" ||
                cleanspaceArr[i] === "char") {
                dataTypeCount++;
            }


        }
        setIfCounter(ifCount);
        setelseCounter(elseCount);
        setclassCounter(classCount);
        setDataTypesCounter(dataTypeCount);

    }



    return (
        <div className="container code-display-container" style={{ marginTop: "5rem", textAlign: "center" }}>
            <div className="container">
                <h1 className="heading">Smart Code Analizer</h1>
                <p className="description">Identify all if statements, else statements, Classes and data types in<br></br>Java Source Code</p>

                <input name="fileInput" onChange={OnChangeHandle} className="form-control" type='file' />
                <button className="btn btn-success" onClick={OnClickHandle}>Diplay Data</button>

            </div><br></br>
            <div className="container" style={{ textAlign: "left" }}>
                <h5>If statements:  {ifCounter}</h5>
                <h5>else statements:  {elseCounter}</h5>
                <h5>Classes:  {classCounter}</h5>
                <h5>Data Types:  {dataTypesCounter}</h5>
                <hr></hr>


                {/* <div className="" style={{ marginBottom: "2rem", backgroundColor: "#212529", overflowY: "scroll", height: "300px" }}>
                    <pre><code style={{ color: "green" }}>{data}</code></pre>
                </div> */}

                <div id="display"></div>

            </div>
        </div>
    );
}

export default Home;