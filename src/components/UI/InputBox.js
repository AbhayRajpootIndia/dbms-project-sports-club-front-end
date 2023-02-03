
import '../../styles/inputBox.css'

export default function InputBox(props) {

    function handleChange(event) {
       if (props.maxLength && event.target.value.length <= props.maxLength) {
            props.onChange(event);
       }

       if (!props.maxLength) {
            props.onChange(event);
       }
    }

    return (
        <div className="input-box-container">

            {props.title && 
            <p className='input-box-title'>
                {props.title}
            </p>}

            <input
                className="input-box" 
                value={props.value}
                onChange={handleChange}
                />
        </div>
    )
}