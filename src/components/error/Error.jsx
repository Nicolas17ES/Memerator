import './NotFound.css'
import {Link} from 'react-router-dom'
import {TbFaceIdError} from 'react-icons/tb'


function Error() {
    return (
        <div className="memerator">
            <div className="errorPage">
                <TbFaceIdError className="error-icon"/>
                <p className="text-error">
                    There has been an error uploading your image, please try again.
                </p>
                <Link to="/"><button className="button-error">Go Back</button></Link>
            </div> 
        </div>
    )
}

export default Error
