import {Link} from 'react-router-dom'


function Error() {
    return (
        <div className="memerator">
            <div className="errorPage">
                There has been an error uploading your image, please try again.
                <Link to="/"><button>Go Back</button></Link>
            </div> 
        </div>
    )
}

export default Error
