import React , {useState} from "react";
import PigTile from './PigTile'

function PigTileList ( {hogs} ) {
    const [greasedFilterOn , setGreasedFilterOn] = useState(false)
    const [sortOn , setSortOn ] = useState([0 , 0])

    function nameSort() {
        setSortOn([1 - sortOn[0] , 0])
    }

    function weightSort() {
        setSortOn([0 , 1 - sortOn[1]])
    }

    function filterGreased() {
        setGreasedFilterOn(!greasedFilterOn)
    }
    
    return (
        <>
        <button onClick={filterGreased}>{greasedFilterOn ? 'Greased Filter Currently On':'Greased Filter Currently Off'}</button>
        <button onClick={nameSort}>{(sortOn[0]===1) ? 'Sort By Name Currently On' : 'Sort By Name Currently Off'}</button>
        <button onClick={weightSort}>{(sortOn[1]===1)? 'Sort By Weight Currently On' : 'Sort By Weight Currently Off'}</button>
        
        <ul>
            {hogs.filter((hog)=>{
                if (greasedFilterOn) {
                    return hog.greased === true
                } else {
                    return true
                }
            }).sort((a,b)=>{
                if (sortOn[1] === 1) {
                    if (a.weight > b.weight) {
                        return 1
                    } else {
                        return -1
                    }
                } else {
                    return 0
                }
            }).sort((a,b)=>{
                if (sortOn[0] === 1) {
                    if (a.name > b.name) {
                        return 1
                    } else {
                        return -1
                    }
                } else {
                    return 0
                }
            }).map( (hog) => {
                return <PigTile key={hog.name} name={hog.name} image={hog.image} specialty={hog.specialty} weight={hog.weight} greased={hog.greased} medal={hog["highest medal achieved"]}/>
            })}
        </ul>
        </>
    )
}

export default PigTileList