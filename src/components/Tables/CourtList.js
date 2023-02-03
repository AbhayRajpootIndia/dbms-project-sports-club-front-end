
import '../../styles/coachList.css'

function PlayerCard(props) {

    const player = props.player;
    
    return (
        <div className='coach-card'>
            <p style={{width: '50px'}}>
                {player.Court_id}
            </p>
            <p>
                {player.court_type}
            </p>        
        </div>
    )
}


export default function CourtList(props) {

    const attributes = {
        Court_id: 'ID', 
        court_type: 'SPORT',
    }

    return (
        <div className="coach-list-container">

            {<PlayerCard player={attributes} />}

            {props.coaches.map(player => <PlayerCard player={player} />)}

            {props.coaches.length === 0 &&
            <div className='coach-card'>
                <p style={{width: '100%', textAlign: 'center'}}> NO RECORDS FOUND. </p>
            </div>}
            
        </div>
        
    );
}