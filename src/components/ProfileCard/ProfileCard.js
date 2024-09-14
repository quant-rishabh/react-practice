import {useState} from "react";

const ProfileCard = (p) => {
    const [showAge, setShowAge] = useState(false);

    const toggleShowAge = () => {
        setShowAge(!showAge);
    }

    return (
        <div className="profile-card">
            <div> Name : {p.name}</div>
            <div >Age : {showAge ? p.age : "hidden"}</div>
            <div>Location : {p.location}</div>
            <button onClick={toggleShowAge}>{showAge ? 'Hide Age' : 'Show Age'}</button>
        </div>
    )
}

export default ProfileCard;