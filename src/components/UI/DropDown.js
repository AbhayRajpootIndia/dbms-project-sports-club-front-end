
import '../../styles/inputBox.css'

import React from 'react';
import Select from 'react-select';

export default function DropdownMenu(props) {

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

            <Select
                styles={{
                    control: (baseStyles, state) => ({
                        ...baseStyles,
                        backgroundColor: state.isFocused ? 'goldenrod' : 'goldenrod',
                        borderColor: 'black',
                        borderRadius: 5,
                        width: 315,
                        fontSize: 20,
                        padding: 2
                    }),
                    }}
                defaultValue={props.value}
                onChange={props.setValue}
                options={props.options}
            />
        </div>
    )
}