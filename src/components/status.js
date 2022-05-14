function ValidParenthesis(){
    let stackArr = [];
    var bol = true;
    for (let i = 0; i < data.length; i++) {
        var x = data.charAt[i];
        if (x === '(' || x === '{' || x === '[') {
            stackArr.push(x);
            continue;
        }
        if (stackArr.length === 0) return bol = false;

        var check;
        switch (x) {
            case ')':
                check = stackArr.pop();
                if (check === '{' || check === '[') bol = false;
                break;
            case '}':
                check = stackArr.pop();
                if (check === '(' || check === '[') bol = false;
                break;
            case ']':
                if (check === '(' || check === '{') bol = false;
                break;
        }
    }

    console.log(bol);

    const error = (
        <h5 style={{ color: "red" }}>There is a Parenthesis</h5>
    )
    const fine = (
        <h5 style={{ color: "green" }}>GOOD!</h5>
    )

    const statusCheck = ReactDOM.createRoot(document.getElementById('status'));

    if (bol === true) {
        statusCheck.render(
            fine
        )
    }
    else if(bol === true) {
        statusCheck.render(
            error
        )
    }
}