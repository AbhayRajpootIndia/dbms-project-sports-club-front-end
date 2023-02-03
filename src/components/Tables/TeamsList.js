
import '../../styles/coachList.css'

function TeamCard(props) {

    const team = props.team;
    
    return (
        <div className='coach-card'>
            <p style={{width: '50px'}}>
                {team.Team_id}
            </p>
            <p>
                {team.sport_type}
            </p> 
            <p style={{width: '50px'}}>
                {team.rank}
            </p>
            <p style={{width: '50px'}}>
                {team.no_of_wins}
            </p>                   
        </div>
    )
}


export default function TeamsList(props) {

    const attributes = {
        Team_id: 'ID', 
        sport_type: 'SPORT', 
        rank: 'RANK', 
        no_of_wins: 'WINS', 
    }

    return (
        <div className="coach-list-container">

            {<TeamCard team={attributes} />}

            {props.teams.map(team => <TeamCard team={team} />)}

            {props.teams.length === 0 &&
            <div className='coach-card'>
                <p style={{width: '100%', textAlign: 'center'}}> NO RECORDS FOUND. </p>
            </div>}
            
        </div>
        
    );
}