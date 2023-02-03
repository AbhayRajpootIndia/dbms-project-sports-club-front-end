
import '../../styles/coachList.css'

function EquipmentCard(props) {

    const equipment = props.equipment;
    
    return (
        <div className='coach-card'>
            <p style={{width: '50px'}}>
                {equipment.E_id || '-'}
            </p>
            <p style={{width: '200px'}}>
                {equipment.E_type}
            </p> 
            <p style={{width: '150px'}}>
                {equipment.Player_id}
            </p>
            <p>
                {equipment.date_out.slice(0, 10)}
            </p>
            <p>
                {equipment.due_date.slice(0, 10)}
            </p>                   
        </div>
    )
}


export default function EquipmentsList(props) {

    const attributes = {
        E_id: 'ID', 
        E_type: 'TYPE', 
        Player_id: 'PLAYER ID', 
        date_out: 'DATE OUT', 
        due_date: 'DUE DATE',
    }

    return (
        <div className="coach-list-container">

            {<EquipmentCard equipment={attributes} />}

            {props.equipments.map(equipment => <EquipmentCard equipment={equipment} />)}

            {props.equipments.length === 0 &&
            <div className='coach-card'>
                <p style={{width: '100%', textAlign: 'center'}}> NO RECORDS FOUND. </p>
            </div>}
            
        </div>
        
    );
}