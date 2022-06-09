import React , {useState} from "react";

function PigTile( { name , image , specialty , greased , weight , medal }) {
    const [text , setText] = useState('')

    function onLi() {
        if (text==="") {
            setText(`Specialty: ${specialty}; Greased: ${greased}; Weight: ${weight}; Highest Medal Archieved: ${medal}`)
        } else (
            setText('')
        )
    }

    return (
        <li onClick={onLi}>
            <h3>{name}</h3>
            <h3>{text}</h3>
            <img src={image} alt={name}></img>
        </li>
    )
}

export default PigTile