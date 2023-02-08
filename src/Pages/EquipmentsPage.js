
// styles
import '../styles/page.css'
import '../styles/coachesPage.css'  

// components
import InputBox from '../components/UI/InputBox';
import SecondaryButton from '../components/UI/SecondaryButton';

// helper functions
import useWindowDimensions from "../customHooks/useWindowDimensions";

import axios from 'axios';

// navigation
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from 'react';

// tables
import CourtList from '../components/Tables/CourtList';
import EquipmentsList from '../components/Tables/EquipmentsList';

export default function EquipmentsPage(props) {

    const { height, width } = useWindowDimensions();

    const navigate = useNavigate();

    const [equipments, setEquipments] = useState([]);

    const [playerId, setPlayerId] = useState('');

    const [sportOptions, setSportOptions] = useState([
        { value: 'cricket', label: 'cricket' },
        { value: 'football', label: 'football' },
        { value: 'basketball', label: 'basketball' },
        { value: 'badminton', label: 'badminton' },
    ]);

    

    useEffect(() => {
        getCourts();
        getSports();
    }, [])

    function getCourts()  {

        const API_PATH = `http://localhost:3001/equipments/${playerId}`

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
            setEquipments(result.data);
            
        })
        .catch(error => console.log(error));
    }

    function getSports()  {

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
                        List of all  the equipments
                    </p>
                    
                    <InputBox 
                        value={playerId}
                        onChange={(event) => setPlayerId(event.target.value)}
                        maxLength={20}
                        />

                    <div style={{marginTop: '10px', marginBottom: '20px'}}>
                        <SecondaryButton 
                            buttonText={"Search"}
                            handlePress={getCourts}
                            />
                    </div>

                    <div style={{marginTop: '0px', marginBottom: '20px', display: 'flex', columnGap: '10px'}}>
                        <SecondaryButton 
                            buttonText={"Borrow"}
                            handlePress={() => navigate('/sports-club/borrow')}
                            />
                            <SecondaryButton 
                            buttonText={"Return"}
                            handlePress={() => navigate('/sports-club/return')}
                            />
                    </div>

                    <EquipmentsList equipments={equipments} />

                </div>
            </div>
        </>

    );
}


