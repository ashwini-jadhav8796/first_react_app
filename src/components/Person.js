const Person = (props) =>{
    return (
    <>
    <h1>Name : {props.name}</h1>
    <h2>Last Name : {props.lastName}</h2>
    <h3>Age: {props.age}</h3>
    </>
    );
}

export default Person;
