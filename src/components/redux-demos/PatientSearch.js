import {useRef, useState} from 'react';

const PatientSearch = (props) => {

    let textRef = useRef();

    let [state, setState] = useState({search:" "});

    


    const listofPatients = () =>
    {
        console.log("1. Inside Patient List Presentation Components");
        props.listPatients();
    }

    const handleChange = (event) =>
    {

        setState
        (
            {
                ...state,
                [event.target.name]: event.target.value 



            }
        );

        props.searchPatient(event.target.value);
    
    }

    

    return (
        
        <div style={{ border: '#B8860B' ,backgroundColor:'	#556B2F'}}>
        <br />
        <center>
        <table border="5" width="10" height="10">
        Patient List:

        {props.patients && props.patients.map( (item,key) => 
        <tr>
            <td> {key} </td> 
            <td> {item.name} </td> 
            <td> {item.email} </td>
        </tr> )}
        
        </table>
        </center>

        <center>
        <table border="2" width="10" height="10" style={{ border: '2px solid black'}}>
        
        {props.searchedPatients && props.searchedPatients.map( (item,key) => 
        <tr>
            <td>{key} </td> 
            <td> {item.name} </td> 
            <td> {item.email} </td>
        </tr>)}
        
        </table>

        </center>
        <br/><br/>
        <center>
         
        <input type="text" ref={textRef} name="search" value={state.search}
        onChange = {event => handleChange(event)} />
        </center>

      
        <br/><br/>
        <center>
        Current value of search:{state.search}
        </center>
        </div>
    )
}

export default PatientSearch;