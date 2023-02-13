//IMport Area
import React from 'react';
import ReactDOM from 'react-dom/client';



// You can define a react compoent using 2 technique
//1. Functional Compoent
function A(props){ // We will recive a formal argument
  let name="Anil"; //Data is availbable withing compoent
  let surname2 = 'Thorecha';
   //every function return somehting
   return <h1>A {name} {props.surname} - <B surname={surname2} /> </h1>; //JSX
}

//2.class compoent
//class Child extends Parent{ }
class B extends React.Component{ //OOPs
    //1. Properties/Variable
    name='Pushpendra';


    //2. Constructor

    //3. methods
    render(){
      //Every function/method should return something
      // In order to access any member of a class you have to use this.member
      //this.member
        return <span>B - {this.name} {this.props.surname} <C>Sharma</C></span>
    }
}

//ES6 2015  Fat Arrow function

let C =(props)=>{
  let name="Vishnu";
  console.log('Hi',props);
  return <span>C - {name} {props.children} </span>
}

const root = ReactDOM.createRoot(document.getElementById('root'));

let sn = 'DOLOLR';
root.render( <A surname={sn} /> );


//3. Export 