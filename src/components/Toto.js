import React from 'react'

const Toto = (props) => {

    const btnReponseToto = props.leState.messageMaman !== null ? (<button onClick={props.reponseTotoProps}>Reponse Toto</button>) : (<button disabled>Reponse Toto</button>) 
        console.log(props.leState.messageToto)

    return (
        <div>
            <h2>{props.name}</h2>
            {btnReponseToto} 
            <p>{props.leState.messageToto}</p>
        </div>
    )
}
export default Toto