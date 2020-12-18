// Three simple steps to create a React Page

// 1. Import 'react' and 'reacr-dom'
import React from 'react'
import ReactDOM from 'react-dom'

// 2. Create a React Component
// Cretae Component as class

// Shows - How to refer JavaScripts Variable from JSX?
var myLabenName = "Enter your name: ";
class MyComponent extends React.Component {

    render() {

        return (
            <div>
                <label className="label" htmlFor="name">
                    {myLabenName}
                </label>
                <input id="name" type="text" />
                <button style={{ backgroundColor: 'blue', color: 'white' }}>
                    {getButtonText()}
                </button>
            </div>
        );
    }
}
/*
// Create component as function
const MyComponent = function(){

    return(<div><h1>Hi There!</h1></div>);
}
//Or
const MyComponent = () => {

    return(<div><h1>Hi There!</h1></div>);
}
*/


// 3. Render the component
ReactDOM.render(
    <MyComponent />,
    document.getElementById('root')
);

// Shows - How to refer JavaScripts Functions from JSX?
function getButtonText() {
    return "Click On Me!";
}