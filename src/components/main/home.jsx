import React from "react";
import { useState } from "react";
import * as ReactDOM from 'react-dom/client';
import ValidParenthesis from './validation'

const Home = () => {

    const [file, setFile] = useState(null);
    const [data, setData] = useState("");

    var cleandata = '';

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
    const [depend, setDepend] = useState(null);
    const [forloop, setForLoop] = useState(null);
    const [whileLoopCounter, setWhileLoopCounter] = useState(null);
    const [doLoopCounter, setdoLoopCounter] = useState(null);
    const [exteneds, setExtends] = useState(null);
    const [inter, setInter] = useState(null);
    const [imple, setImple] = useState(null);



    const myElement = (

        <div className="code-display-container" style={{ marginBottom: "2rem", backgroundColor: "#212529", overflowY: "scroll", height: "300px" }}>
            <pre><code style={{ color: "#53e3a6" }}>{data}</code></pre>
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
        console.log(cleanspaceArr);

        // CLEANING DATA FOR VALID 

        const joinBracketsArr = cleanspaceArr.join('');
        cleandata = joinBracketsArr.toString();
        console.log("Bracket String: " + cleandata)
        const bol = ValidParenthesis(cleandata);


        const error = (
            <h6>Status: <span style={{ color: "red" }}>Invalid Parenthesis</span></h6>
        )
        const fine = (
            <h6>Status: <span className="greenerror">Good!</span></h6>
        )

        const statusCheck = ReactDOM.createRoot(document.getElementById('status'));

        if (bol === true) {
            statusCheck.render(
                fine
            )
        }
        if (bol === false) {
            statusCheck.render(
                error
            )
        }




        // console.log(cleanspaceArr)
        var ifCount = null;
        var elseCount = null;
        var classCount = null;
        var dataTypeCount = null;
        var dependCount = null;
        var forloopCount = null;
        var whileLoopCount = null;
        var doLoopCount = null;
        var extendsCount = null;
        var interCount = null;
        var impleCount = null;

        for (let i = 0; i < cleanspaceArr.length; i++) {
            if (cleanspaceArr[i].includes("if")) {
                ifCount++;
            }
            if (ifCount === null) ifCount = 0;

            if (cleanspaceArr[i].includes("else")) {
                elseCount++;
            }
            if (elseCount === null) elseCount = 0;

            if (cleanspaceArr[i] === ("class")) {
                classCount++;
            }
            if (classCount === null) classCount = 0;

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
            if (dataTypeCount === null) dataTypeCount = 0;

            if (cleanspaceArr[i] === ("import")) {
                dependCount++;
            }
            if (dependCount === null) dependCount = "No Dependencies";

            if (cleanspaceArr[i].includes("for")) {
                forloopCount++;
            }
            if (forloopCount === null) forloopCount = 0;

            if (cleanspaceArr[i].includes("while")) {
                whileLoopCount++
            }
            if (whileLoopCount === null) whileLoopCount = 0;

            if (cleanspaceArr[i] === "do{" || cleanspaceArr[i] === "do") {
                doLoopCount++
            }
            if (doLoopCount === null) doLoopCount = 0;


            if(cleandata[i] === "extends"){
                extendsCount++;
            }
            if (extendsCount === null) extendsCount = 0;

            if(cleandata[i] === "interface"){
                interCount++;
            }
            if (interCount === null) interCount = 0;

            if(cleandata[i] === "implements"){
                impleCount++;
            }
            if (impleCount === null) impleCount = 0;



        }
        setIfCounter(ifCount);
        setelseCounter(elseCount);
        setclassCounter(classCount);
        setDataTypesCounter(dataTypeCount);
        setDepend(dependCount);
        setForLoop(forloopCount);
        setWhileLoopCounter(whileLoopCount);
        setdoLoopCounter(doLoopCount);
        setExtends(extendsCount);
        setInter(interCount);
        setImple(impleCount);



    }

    const ClearDisplay = () => {

        setData("");
    }

    return (
        <>
            <main className="container code-display-container" id="main" style={{ paddingTop: "5rem", textAlign: "center" }}>
                <ul class="bg-bubbles">
                    <li></li><li></li><li></li><li></li><li></li>
                </ul>
                <div className="container">
                    <h1 className="heading">Smart Code Analizer</h1>
                    <p className="description">Identify all if statements, else statements, Classes and data types in<br></br>Java Source Code</p>

                    <input name="fileInput" onClick={ClearDisplay} onChange={OnChangeHandle} className="form-control" type='file' />
                    <button className="btn btn-outline-light" onClick={OnClickHandle}>Diplay Data</button>

                </div><br></br>
                <div className="container" style={{ textAlign: "left" }}>
                    <h6>If statements:  {ifCounter}</h6>
                    <h6>else statements:  {elseCounter}</h6>
                    <h6>Classes:  {classCounter}</h6>
                    <h6>Interfaces:  {inter}</h6>
                    <h6>Data Types:  {dataTypesCounter}</h6>
                    <h6>Class Dependencies:  {depend}</h6>
                    <h6>Interface Dependencies:  {imple}</h6>
                    <h6>For loops:  {forloop}</h6>
                    <h6>while loops:  {whileLoopCounter}</h6>
                    <h6>do-while loops:  {doLoopCounter}</h6>
                    <h6>Inheritance:  {exteneds}</h6>


                    <div id="status"></div>
                    <hr style={{color: "white"}}></hr>
                    <div id="display"></div>
                    {/* INSTRUCTIONS  */}
                        <div class="float-container container">

                            <div class="float-child git-desc-con">
                                <h1>What is it?</h1>
                                <p>Good question!</p>
                                <p>Here by uploading you source code file above you can analize your large code and can find how many Dependencies, Classes and conditions and loops you are using...</p>
                                <h6>Not enough?</h6>
                                <p>Don't worry to read more about this tool in details vist our github repository by clciking on button below...</p>

                                <a href="https://github.com/uxairishere/Code-Analizer"><button className="btn btn-outline-light btn-profile">Repository</button></a>
                            </div>

                            <div class="float-child git-second">
                                <div className="about-code-img"></div>
                            </div>

                        </div>
                    

                </div>
            </main>
        </>
    );
}

export default Home;