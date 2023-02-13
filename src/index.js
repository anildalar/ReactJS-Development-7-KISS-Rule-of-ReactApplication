//IMport Area
import React from 'react';
import ReactDOM from 'react-dom/client';

// 1 import { someNamedImport } form somelocation/somelibar
import { B } from './components/B';




// You can define a react compoent using 2 technique
//1. Functional Compoent
function A(props){ // We will recive a formal argument
  let name="Anil"; //Data is availbable withing compoent
  let surname2 = 'Thorecha';
   //every function return somehting
   return <span>A {name} {props.surname} - <B surname={surname2} /> </span>; //JSX
}



//ES6 2015  Fat Arrow function



const root = ReactDOM.createRoot(document.querySelector('.anil'));

let sn = 'DOLOLR';
root.render( <A surname={sn} /> );


//3. Export 