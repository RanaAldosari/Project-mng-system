import React, { useState, useEffect } from 'react';
import axios from 'axios';

function AdminStdControls() {
  const [students, setStudents] = useState([]);
  const [newStudent, setNewStudent] = useState({ name: '', email: '' });

  useEffect(() => {
    axios.get('https://68219a91259dad2655afc3cc.mockapi.io/api/users/user')
      .then(response => setStudents(response.data))
      .catch(error => console.error(error));
  }, []);
// delete student
  const handleDelete = (id) => {
    axios.delete(`https://68219a91259dad2655afc3cc.mockapi.io/api/users/user/${id}`)
      .then(() => {
        setStudents(students.filter(student => student.id !== id));
      })
      .catch(error => console.error('Error deleting student:', error));
  };
// add new stdudent
  const handleAdd = () => {
    axios.post('https://68219a91259dad2655afc3cc.mockapi.io/api/users/user', newStudent)
      .then(response => {
        setStudents([...students, response.data]);
        setNewStudent({ name: '', email: '' });
      })
      .catch(error => console.error('Error adding student:', error));
  };

  return (
    <>
 <div>
      <h1>Student Management</h1>
      <div>
        <input
          type="text"
          placeholder="Name"
          value={newStudent.name}
          onChange={(e) => setNewStudent({ ...newStudent, name: e.target.value })}
        />
        <input
          type="email"
          placeholder="Email"
          value={newStudent.email}
          onChange={(e) => setNewStudent({ ...newStudent, email: e.target.value })}
        />
        <button onClick={handleAdd}>Add Student</button>
      </div>
      <ul>
        {students.map(student => (
          <li key={student.id}>
            {student.name} ({student.email})
            <button onClick={() => handleDelete(student.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
</>
  );
}

export default AdminStdControls;
