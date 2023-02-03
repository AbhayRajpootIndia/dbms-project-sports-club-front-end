
// styles
import '../styles/page.css'
import '../styles/coachesPage.css' 

// other dependencies
import React from 'react';
import Select from 'react-select';


// components
import TeamsList from '../components/Tables/TeamsList';
import InputBox from '../components/UI/InputBox';
import SecondaryButton from '../components/UI/SecondaryButton';

// helper functions
import useWindowDimensions from "../customHooks/useWindowDimensions";

import axios from 'axios';

// navigation
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from 'react';

const options = [
    { value: 'cricket', label: 'Cricket' },
    { value: 'football', label: 'Football' },
    { value: 'basketball', label: 'Basketball' },
    { value: 'badminton', label: 'Badminton' },
  ];



export default function TeamsPage(props) {

    const { height, width } = useWindowDimensions();

    const navigate = useNavigate();

    const [teams, setTeams] = useState([]);

    const [sport, setSport] = useState('');


    useEffect(() => {
        getTeams()
    }, [])

    const defaultOption = options[0];

    function getTeams()  {
        console.log(sport);

        const API_PATH = `http://localhost:3001/teams/${sport}`

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
            setTeams(result.data);
            
        })
        .catch(error => console.log(error));
    }



    const [selectedOption, setSelectedOption] = useState(null);

    

    return (
        <>
            <div className='page' style={{height: height - 100, width: width}}>
                <div className="coaches-page">

                    <p className='coaches-page-title'>
                        List of all  the teams
                    </p>
                    
                    <InputBox 
                        value={sport}
                        onChange={(event) => setSport(event.target.value)}
                        maxLength={20}
                        title='Search by Sport'
                        />                   

                    
                    <div style={{marginTop: '10px', marginBottom: '30px'}}>
                        <SecondaryButton 
                            buttonText={"Search"}
                            handlePress={getTeams}
                            />
                    </div>

                    <TeamsList teams={teams} />

                </div>
            </div>
        </>

    );
}


