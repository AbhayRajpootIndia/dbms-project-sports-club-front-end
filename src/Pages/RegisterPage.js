
import useWindowDimensions from "../customHooks/useWindowDimensions";



import { useNavigate } from "react-router-dom";

import '../styles/page.css'
import '../styles/registerPage.css'

import InputBox from "../components/UI/InputBox";
import SecondaryButton from "../components/UI/SecondaryButton";
import DropdownMenu from "../components/UI/DropDown";

import { useState, useEffect } from "react";
import axios from "axios";



function isNumeric(str) {
    if (typeof str != "string") return false // we only process strings!  
    return !isNaN(str) && // use type coercion to parse the _entirety_ of the string (`parseFloat` alone does not do this)...
           !isNaN(parseFloat(str)) // ...and ensure strings of whitespace fail
}


export default function RegisterPage(props) {

    const navigate = useNavigate();

    const { height, width } = useWindowDimensions();

    const [name, setName] = useState('');
    const [sport, setSport] = useState('');
    const [address, setAddress] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [team, setTeam] = useState('20');
    const [coach, setCoach] = useState('10');

    const [playerMaxId, setPlayerMaxId] = useState('');

    const [teamsOptions, setTeamsOptions] = useState([]);
    const [coachesOptions, setCoachesOptions] = useState([]);

    const [sportOptions, setSportOptions] = useState([
        { value: 'cricket', label: 'cricket' },
        { value: 'football', label: 'football' },
        { value: 'basketball', label: 'basketball' },
        { value: 'badminton', label: 'badminton' },
    ]);

    // const sportOptions = [
    //     { value: 'cricket', label: 'cricket' },
    //     { value: 'football', label: 'football' },
    //     { value: 'basketball', label: 'basketball' },
    //     { value: 'badminton', label: 'badminton' },
    // ];

    console.log(sport)

    useEffect(() => {
        getMaxPlayerId();
        getSports();
    }, [])

    console.log(playerMaxId)

    function getSports()  {
        console.log(sport);

        const API_PATH = `http://localhost:3001/sports/`

        axios({
            method: 'get',
            url: API_PATH,
            headers: {
                'content-type': 'application/json; charset=UTF-8',
                'Access-Control-Allow-Origin': '*'
            }
        })
        .then(result => {
            console.log('res sports')
            console.log(result.data);
            setSportOptions(result.data.map(sport => ({
                label: sport.sport,
                value: sport.sport
            })))
            
        })
        .catch(error => console.log(error));
    }

    function getMaxPlayerId()  {
        console.log(sport);

        const API_PATH = `http://localhost:3001/players/max-id`

        axios({
            method: 'get',
            url: API_PATH,
            headers: {
                'content-type': 'application/json; charset=UTF-8',
                'Access-Control-Allow-Origin': '*'
            }
        })
        .then(result => {
            console.log('res maxplayerid')
            console.log(result.data)
            setPlayerMaxId(result.data[0]['MAX(player_id)']);;            
        })
        .catch(error => console.log(error));
    }

    



    function handleProceed() {
        const newPlayer = {
            "Player_id": 'NULL',
            "P_name": name,
            "sport": sport.value,
            "address": address,
            "phone": phoneNumber,
            "Team_id": team.value,
            "Coach_id": coach.value
        }

        console.log(newPlayer)


        const response = fetch(`http://localhost:3001/addPlayer`, {
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

        navigate('/sports-club/players')

    }


    function getPhoneNumber(value) {
        if (!value.includes('.') && isNumeric(value) || value === '') {
            setPhoneNumber(value);
        }
    }

    
    useEffect(() => {
        getTeams();
        getCoaches();
    }, [sport])
   
    

    function getTeams()  {
        console.log(sport);

        const API_PATH = `http://localhost:3001/teams/${sport.value}`

        axios({
            method: 'get',
            url: API_PATH,
            headers: {
                'content-type': 'application/json; charset=UTF-8',
                'Access-Control-Allow-Origin': '*'
            }
        })
        .then(result => {
            console.log('res teams')
            console.log(result.data);
            setTeamsOptions(result.data.map(team => ({
                label: team.Team_id,
                value: team.Team_id
            })))
            
        })
        .catch(error => console.log(error));
    }

    function getCoaches()  {
        console.log(sport);

        const API_PATH = `http://localhost:3001/coaches/${sport.value}`

        axios({
            method: 'get',
            url: API_PATH,
            headers: {
                'content-type': 'application/json; charset=UTF-8',
                'Access-Control-Allow-Origin': '*'
            }
        })
        .then(result => {
            console.log('res coaches')
            console.log(result.data);

            setCoachesOptions(result.data.map(coach => ({
                label: coach.Coach_id,
                value: coach.Coach_id
            })))
            
        })
        .catch(error => console.log(error));
    }


    

    return (
        <>
            <div className='page' style={{height: height - 100, width: width}}>
                <div className="register-page">

                    <InputBox 
                        title='Name'
                        value={name}
                        onChange={(event) => setName(event.target.value)}
                        maxLength={20}
                        />

                    <DropdownMenu 
                        options={sportOptions}
                        value={sport}
                        setValue={setSport}
                        title={"Sport"}
                        />

                    <InputBox 
                        title='Address'
                        value={address}
                        onChange={(event) => setAddress(event.target.value)}
                        maxLength={20}
                        />
                    
                    <InputBox 
                        title='Phone Number'
                        value={phoneNumber}
                        onChange={(event) => getPhoneNumber(event.target.value)}
                        maxLength={10}
                        />
                    
                    <DropdownMenu 
                        options={teamsOptions}
                        value={team}
                        setValue={setTeam}
                        title={"Team"}
                        />

                    <DropdownMenu 
                        options={coachesOptions}
                        value={coach}
                        setValue={setCoach}
                        title={"Coach"}
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

