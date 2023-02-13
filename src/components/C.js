//1. Import Area


//2. Function defination area
let C =(props)=>{
    let name="Vishnu";
    console.log('Hi',props);
    return <span>C - {name} {props.children} </span>
}


//3. Export area

//3.1 default
export default C;
//3.2 named export