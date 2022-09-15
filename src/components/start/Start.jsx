import Title from '../shared/title/Title'
import ButtonOne from '../shared/buttonOne/ButtonOne'
 
function Start() {
    return (
        <div className="start">
            <Title text={'Memerator'}/>
            <ButtonOne text={'START'} status={'upload'}/>
        </div>
    )
}

export default Start
