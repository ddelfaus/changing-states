function Person(props) {
    console.log(props, "props");
    console.log(props.fam.name, "props.fam");
    return(
        <div>
            <h2>Person: {props.name}</h2>
            <p>Parent: {props.fam[0].name}</p>
            <p>Child {props.fam[0].childern[0].name}</p>
        </div>
        
    )

}



export default Person;