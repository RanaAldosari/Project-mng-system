import React, { useState } from 'react';
import Swal from 'sweetalert2';
import { LuArrowUpRight } from 'react-icons/lu';

function AdminTechControls() {
  const defaultTeacher = {
    id: 1,
    email: 'teacher-id-23451@tuwaiq.com',
    password: '23451',
  };

  const [teachers, setTeachers] = useState([defaultTeacher]);
  const [newTeacher, setNewTeacher] = useState({ email: '', password: '' });

// add
  const handleAddTeacher = (e) => {
    e.preventDefault();

    if (!newTeacher.email || !newTeacher.password) {
      Swal.fire('Please fill in all fields');
      return;
    }

    if (!newTeacher.email.endsWith('@tuwaiq.com')) {
      Swal.fire('Email must end with @tuwaiq.com');
      return;
    }

    const newId = teachers.length ? teachers[teachers.length - 1].id + 1 : 2;

    setTeachers([...teachers, { ...newTeacher, id: newId }]);
    Swal.fire('Teacher added successfully!', '', 'success');
    setNewTeacher({ email: '', password: '' });
  };
// delete
  const handleDeleteTeacher = (id) => {
    Swal.fire({
      title: 'Are you sure?',
      text: "This teacher will be removed.",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete',
      cancelButtonText: 'Cancel',
    }).then((result) => {
      if (result.isConfirmed) {
        const updated = teachers.filter((t) => t.id !== id);
        setTeachers(updated);
        Swal.fire('Deleted!', 'Teacher has been removed.', 'success');
      }
    });
  };

  return (
    <div className="p-4 max-w-7xl mx-auto">
      <h2 className="text-lg sm:text-2xl font-bold text-purple-900 mb-6">Teachers List:</h2>
  <form onSubmit={handleAddTeacher} className="mb-6 bg-white p-4 rounded-lg shadow">
        <h3 className="text-lg font-semibold mb-4">Add New Teacher</h3>
        <div className="flex flex-col sm:flex-row sm:items-center gap-4">
          <input
            type="email"
            placeholder="Email (@tuwaiq.com)"
            value={newTeacher.email}
            onChange={(e) => setNewTeacher({ ...newTeacher, email: e.target.value })}
            className="border p-2 rounded w-full sm:w-auto flex-1"
          />
          <input
            type="text"
            placeholder="Password"
            value={newTeacher.password}
            onChange={(e) => setNewTeacher({ ...newTeacher, password: e.target.value })}
            className="border p-2 rounded w-full sm:w-auto flex-1"
          />
          <button
            type="submit"
            className="bg-purple-600 text-white px-6 py-2 rounded hover:bg-purple-700 duration-300 w-full sm:w-auto"
          >
            Add Teacher
          </button>
        </div>
      </form>
      <div className="space-y-4">
        {teachers.map((teacher) => (
          <div
            key={teacher.id}
            className="bg-white flex flex-col sm:flex-row justify-between items-start sm:items-center p-4 rounded-lg shadow hover:shadow-md transition duration-300"
          >
            <div className="mb-4 sm:mb-0">
              <p className="font-semibold text-gray-800 text-sm sm:text-base">
                Email: {teacher.email}
              </p>
              <p className="text-gray-500 text-xs sm:text-sm">
                Password: {teacher.password}
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">
              <button
                onClick={() => handleDeleteTeacher(teacher.id)}
                className="bg-red-200 text-white px-4 py-1.5 rounded hover:bg-red-400 duration-300 w-full sm:w-auto text-center"
              >
                Delete
              </button>
              <button
                className="flex justify-center items-center gap-1 bg-purple-600 text-white px-4 py-1.5 rounded hover:bg-purple-500 duration-300 w-full sm:w-auto"
                disabled
              >
                View <LuArrowUpRight size={18} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AdminTechControls;
