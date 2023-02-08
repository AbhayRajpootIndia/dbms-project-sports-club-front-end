
import useWindowDimensions from "../customHooks/useWindowDimensions";



import { useNavigate } from "react-router-dom";

import '../styles/page.css'
import '../styles/registerPage.css'

import InputBox from "../components/UI/InputBox";
import SecondaryButton from "../components/UI/SecondaryButton";
import DropdownMenu from "../components/UI/DropDown";

import { useState, useEffect } from "react";
import axios from "axios";

function dateToText(date) {
    const yyyy = date.getFullYear();
    let mm = date.getMonth() + 1; // Months start at 0!
    let dd = date.getDate();

    if (dd < 10) dd = '0' + dd;
    if (mm < 10) mm = '0' + mm;

    const formattedToday = yyyy + '/' + mm + '/' + dd;

    return formattedToday;
}




function isNumeric(str) {
    if (typeof str != "string") return false // we only process strings!  
    return !isNaN(str) && // use type coercion to parse the _entirety_ of the string (`parseFloat` alone does not do this)...
           !isNaN(parseFloat(str)) // ...and ensure strings of whitespace fail
}


export default function ReturnPage(props) {

    const navigate = useNavigate();

    const { height, width } = useWindowDimensions();

    const [playerId, setPlayerId] = useState('');
    const [eId, setEId] = useState('');
      


    function handleProceed() {

        var date = new Date(); // Now
        date.setDate(date.getDate() + 30); // Set now + 30 days as the new date
        console.log(dateToText(date));

        const newPlayer = {
            "E_id": eId,
        }

        console.log(newPlayer)


        const response = fetch(`http://localhost:3001/removeBorrow`, {
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            mode: 'cors', // no-cors, *cors, same-origin
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            credentials: 'same-origin', // include, *same-origin, omit
            headers: {
              'Content-Type': 'application/json'
              // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            redirect: 'follow', // manual, *follow, error
            referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
            body: JSON.stringify(newPlayer) // body data type must match "Content-Type" header
          });

        console.log(response)

        navigate('/sports-club/equipments')

    }

    

    return (
        <>
            <div className='page' style={{height: height - 100, width: width}}>
                <div className="register-page" style={{justifyContent: 'flex-start', paddingTop: '150px'}}>               

                    <InputBox 
                        title='Equipment ID'
                        value={eId}
                        onChange={(event) => setEId(event.target.value)}
                        maxLength={20}
                        />
   
                    <div style={{marginTop: '30px'}}>
                        <SecondaryButton 
                            buttonText='Proceed'
                            handlePress={handleProceed}
                            />
                    </div>    


                </div>
            </div>
        </>

    );
}

