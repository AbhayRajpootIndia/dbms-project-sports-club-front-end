
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
import DropdownMenu from '../components/UI/DropDown';

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

    const [sport, setSport] = useState({ value: '', label: 'Show All' });

    const [sportOptions, setSportOptions] = useState([
        { value: 'cricket', label: 'cricket' },
        { value: 'football', label: 'football' },
        { value: 'basketball', label: 'basketball' },
        { value: 'badminton', label: 'badminton' },
    ]);


    useEffect(() => {
        getTeams()
        getSports()
    }, [])

    const defaultOption = options[0];

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
            console.log(result.data)
            setTeams(result.data);
            
        })
        .catch(error => console.log(error));
    }

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
            })));
            setSportOptions(prev => {
                return [{ value: '', label: 'Show All' }, ...prev]
            })
            
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
                    
                    <DropdownMenu 
                        options={sportOptions}
                        value={sport}
                        setValue={setSport}
                        title={"Search by Sport"}
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


