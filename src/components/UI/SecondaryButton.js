
import '../../styles/secondaryButton.css'

export default function SecondaryButton(props) {

    return (

            <button 
                className='secondaryButtonContainer'
                onClick={props.handlePress}>

                <p className='secondaryButtonText'>
                    {props.buttonText.toUpperCase()}
                </p>
            
            </button>

    )
}