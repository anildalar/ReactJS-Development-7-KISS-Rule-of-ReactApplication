

//1. Import area
//2. import someDefaultImport form somelocation/some
import C from './C';
import { Component }  from 'react';


//2. Class Defination Area
//2.class compoent
//class Child extends Parent{ }
export class B extends Component{ //OOPs
    //1. Properties/Variable
    name='Pushpendra';

    //2. Constructor
    constructor(){
        super();
        this.address = 'Neemuch';
    }

    //3. methods
    render(){
      //Every function/method should return something
      // In order to access any member of a class you have to use this.member
      //this.member
        return <span>B - {this.name} {this.props.surname} from {this.address} <C>Sharma</C></span>
    }
}



//3. Export area