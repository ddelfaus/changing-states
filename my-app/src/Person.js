function Person(props) {
    console.log(props, "props");
    return(
        <h2>Person: {props.name}</h2>
    )

}



export default Person;