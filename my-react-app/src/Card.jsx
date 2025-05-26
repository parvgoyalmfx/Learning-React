import profilePic from './assets/IMG_8689.JPG';

function Card(){

    return(
        <div className="card">
            <img className="card-image" src={profilePic} alt="Profile Picture"></img>
            <h2 className='card-title'>Parv Goyal</h2>
            <p className='card-text'>I am learning React.js</p>
        </div>    
    );
}

export default Card;