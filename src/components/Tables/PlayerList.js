
import '../../styles/coachList.css'

function PlayerCard(props) {

    const player = props.player;
    
    return (
        <div className='coach-card'>
            <p style={{width: '50px'}}>
                {player.Player_id}
            </p>
            <p>
                {player.P_name}
            </p> 
            <p>
                {player.sport}
            </p>
            <p>
                {player.address}
            </p>
            <p>
                {player.phone}
            </p>
            <p>
                {player.Team_id}
            </p>   
            <p>
                {player.Coach_id}
            </p>         
        </div>
    )
}


export default function PlayerList(props) {

    const attributes = {
        Player_id: 'ID', 
        P_name: 'NAME', 
        sport: 'SPORT', 
        address: 'ADDRESS', 
        phone: 'PHONE NO.', 
        Team_id: 'TEAM ID',
        Coach_id: 'COACH ID'
    }

    return (
        <div className="coach-list-container">

            {<PlayerCard player={attributes} />}

            {props.players.map(player => <PlayerCard player={player} />)}

            {props.players.length === 0 &&
            <div className='coach-card'>
                <p style={{width: '100%', textAlign: 'center'}}> NO RECORDS FOUND. </p>
            </div>}
            
        </div>
        
    );
}