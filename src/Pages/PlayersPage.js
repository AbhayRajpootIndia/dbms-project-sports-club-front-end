
// styles
import '../styles/page.css'
import '../styles/coachesPage.css'  

// components
import PlayerList from '../components/Tables/PlayerList';
import InputBox from '../components/UI/InputBox';
import DropdownMenu from '../components/UI/DropDown';
import SecondaryButton from '../components/UI/SecondaryButton';

// helper functions
import useWindowDimensions from "../customHooks/useWindowDimensions";

import axios from 'axios';

// navigation
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from 'react';

export default function CoachesPage(props) {

    const { height, width } = useWindowDimensions();

    const navigate = useNavigate();

    const [coaches, setCoaches] = useState([]);

    const [sport, setSport] = useState('');

    const [team, setTeam] = useState({value: '', label: 'Show All'});


    const [teamOptions, setTeamOptions] = useState([
        { value: 'cricket', label: 'cricket' },
        { value: 'football', label: 'football' },
        { value: 'basketball', label: 'basketball' },
        { value: 'badminton', label: 'badminton' },
    ]);

    useEffect(() => {
        getTeams() 
        getPlayers()
    }, [])

    function getPlayers()  {
        console.log(sport);

        let API_PATH = `http://localhost:3001/players/`

        if (team.value && sport) {
            API_PATH = `http://localhost:3001/players/${sport}/${team.value}`
        }
        else if (sport) {
            API_PATH = `http://localhost:3001/players/${sport}`
        }

        axios({
            method: 'get',
            url: API_PATH,
            headers: {
                'content-type': 'application/json; charset=UTF-8',
                'Access-Control-Allow-Origin': '*'
            }
        })
        .then(result => {
            console.log(result.data)
            setCoaches(result.data);
            
        })
        .catch(error => console.log(error));
    }    

    function getTeams()  {
        console.log(sport);

        const API_PATH = `http://localhost:3001/teams/`

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
            setTeamOptions(result.data.map(sport => ({
                label: sport.Team_id,
                value: sport.Team_id
            })));
            setTeamOptions(prev => {
                return [{ value: '', label: 'Show All' }, ...prev]
            })
            
        })
        .catch(error => console.log(error));
    }


    return (
        <>
            <div className='page' style={{height: height - 100, width: width}}>
                <div className="coaches-page">

                    <p className='coaches-page-title'>
                        List of all the players
                    </p>
                    
                    <InputBox 
                        value={sport}
                        onChange={(event) => setSport(event.target.value)}
                        maxLength={20}
                        title="Search by Sport"
                        />
                    
                    <DropdownMenu 
                        options={teamOptions}
                        value={team}
                        setValue={setTeam}
                        title={"Search by Team ID"}
                        />

                    <div style={{marginTop: '10px', marginBottom: '20px'}}>
                        <SecondaryButton 
                            buttonText={"Search"}
                            handlePress={getPlayers}
                            />
                    </div>

                    <PlayerList players={coaches} />

                </div>
            </div>
        </>

    );
}


