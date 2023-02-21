import React, {useState} from 'react'


function ContactCard(props) {
    const [showAge,setShowAge]= useState(false);

    return (
        <>
        <div className="contact-card">
            <img src={props.avatarUrl}
                alt="profile picture"
            />
            <div className="user-details">
                <p>Name: {props.name}</p>
                <p>Email: {props.email}</p>
                <button onClick={()=>setShowAge(!showAge)}>Show Age</button>
                {showAge ? <p>{props.age}</p> : null}
            </div>
        </div>
        </>
    )
}

export default ContactCard