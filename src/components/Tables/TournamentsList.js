
import '../../styles/coachList.css'

function TournamentCard(props) {

    const tournament = props.tournament;
    
    return (
        <div className='coach-card'>
            {/* <p style={{width: '50px'}}>
                {tournament.id || '-'}
            </p> */}
            <p style={{width: '300px'}}>
                {tournament.tournament_name}
            </p> 
            <p style={{width: '150px'}}>
                {tournament.T_date.slice(0, 10)}
            </p>
            <p style={{width: '200px'}}>
                {tournament.venue}
            </p>
            <p>
                {tournament.time}
            </p>
            <p>
                {tournament.sport_type}
            </p>                   
        </div>
    )
}


export default function TournamentsList(props) {

    const attributes = {
        id: 'ID', 
        tournament_name: 'TOURNAMENT NAME', 
        T_date: 'DATE', 
        venue: 'VENUE NAME', 
        time: 'TIME',
        sport_type: 'SPORT'
    }

    return (
        <div className="coach-list-container">

            {<TournamentCard tournament={attributes} />}

            {props.tournaments.map(tournament => <TournamentCard tournament={tournament} />)}

            {props.tournaments.length === 0 &&
            <div className='coach-card'>
                <p style={{width: '100%', textAlign: 'center'}}> NO RECORDS FOUND. </p>
            </div>}
            
        </div>
        
    );
}