
import '../../styles/primaryButton.css'

export default function PrimaryButton(props) {

    return (

            <button 
                className='primaryButtonContainer'
                onClick={props.handlePress}>

                <p className='primaryButtonText'>
                    {props.buttonText.toUpperCase()}
                </p>
            
            </button>

    )
}