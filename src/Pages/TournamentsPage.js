
// styles
import '../styles/page.css'
import '../styles/coachesPage.css'  

// components
import TournamentsList from '../components/Tables/TournamentsList';
import InputBox from '../components/UI/InputBox';
import SecondaryButton from '../components/UI/SecondaryButton';

// helper functions
import useWindowDimensions from "../customHooks/useWindowDimensions";

import axios from 'axios';

// navigation
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from 'react';

export default function TournamentsPage(props) {

    const { height, width } = useWindowDimensions();

    const navigate = useNavigate();

    const [tournaments, setTournaments] = useState([]);

    const [sport, setSport] = useState('');
    

    useEffect(() => {
        getTournaments()
    }, [])

    function getTournaments()  {
        console.log(sport);

        const API_PATH = `http://localhost:3001/tournaments/${sport}`

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
            setTournaments(result.data);
            
        })
        .catch(error => console.log(error));
    }

    

    return (
        <>
            <div className='page' style={{height: height - 100, width: width}}>
                <div className="coaches-page">

                    <p className='coaches-page-title'>
                        List of all the tournaments
                    </p>
                    
                    <InputBox 
                        value={sport}
                        onChange={(event) => setSport(event.target.value)}
                        maxLength={20}
                        />

                    <div style={{marginTop: '10px', marginBottom: '20px'}}>
                        <SecondaryButton 
                            buttonText={"Search"}
                            handlePress={getTournaments}
                            />
                    </div>

                    <TournamentsList tournaments={tournaments} />

                </div>
            </div>
        </>

    );
}


