
// styles
import '../styles/page.css'
import '../styles/coachesPage.css'  

// components
import CoachList from '../components/Tables/CoachList';
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

    const [sport, setSport] = useState({ value: '', label: 'Show All' });

    const [sportOptions, setSportOptions] = useState([
        { value: 'cricket', label: 'cricket' },
        { value: 'football', label: 'football' },
        { value: 'basketball', label: 'basketball' },
        { value: 'badminton', label: 'badminton' },
    ]);

    useEffect(() => {
        getCoaches();
        getSports();      
    }, [])

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
            console.log(result.data)
            setCoaches(result.data);
            
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

    return (
        <>
            <div className='page' style={{height: height - 100, width: width}}>
                <div className="coaches-page">

                    <p className='coaches-page-title'>
                        List of all  the coaches
                    </p>
                    
                    <DropdownMenu 
                        options={sportOptions}
                        value={sport}
                        setValue={setSport}
                        title={"Search by Sport"}
                        />

                    <div style={{marginTop: '10px', marginBottom: '20px'}}>
                        <SecondaryButton 
                            buttonText={"Search"}
                            handlePress={getCoaches}
                            />
                    </div>

                    <CoachList coaches={coaches} />

                </div>
            </div>
        </>

    );
}


