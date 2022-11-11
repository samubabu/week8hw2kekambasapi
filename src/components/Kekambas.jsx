import React from 'react'

export default function Kekambas(props) {
    const[students, setstudents]=useState([
            {
                first_name: 'Sam',
                last_name: 'Babu'
                id: 1



            }

    ]);
  return (
    <div className ='row'>
        <div className ='col'>
            <h1 className="text center"> Cohort Students:</h1>
            <ul className ='list-group'>
                {students.map(student => (
                <li className ='list-group-item' key={student.id}> {student.first_name} {student.last_name}</li>)
                )}
            </ul>

        </div>
    </div>
  )
}

