
import '../../styles/coachList.css'

function CoachCard(props) {

    const coach = props.coach;
    
    return (
        <div className='coach-card'>
            <p style={{width: '50px'}}>
                {coach.Coach_id}
            </p>
            <p>
                {coach.C_name}
            </p> 
            <p>
                {coach.sport}
            </p>
            <p>
                {coach.address}
            </p>
            <p>
                {coach.phone_no}
            </p>
            <p style={{width: '110px'}}>
                {coach.experience}
            </p>         
        </div>
    )
}


export default function CoachList(props) {

    const attributes = {
        Coach_id: 'ID', 
        C_name: 'NAME', 
        sport: 'SPORT', 
        address: 'ADDRESS', 
        phone_no: 'PHONE NO.', 
        experience: 'EXPERIENCE'
    }

    return (
        <div className="coach-list-container">

            {<CoachCard coach={attributes} />}

            {props.coaches.map(coach => <CoachCard coach={coach} />)}

            {props.coaches.length === 0 &&
            <div className='coach-card'>
                <p style={{width: '100%', textAlign: 'center'}}> NO RECORDS FOUND. </p>
            </div>}
            
        </div>
        
    );
}