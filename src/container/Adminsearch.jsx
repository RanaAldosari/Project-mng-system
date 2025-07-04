import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router';
import { LuArrowUpRight } from "react-icons/lu";
import { BsSearch } from "react-icons/bs";
import Swal from 'sweetalert2';

function AdminSearch() {
  const apiUrl = "https://68219a91259dad2655afc3cc.mockapi.io/api/users/image";

  const [students, setStudents] = useState([]);
  const [search, setSearch] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(apiUrl)
      .then((res) => setStudents(res.data))
      .catch((err) => console.log(err));
  }, []);
// display the project of students
  function goToDetails(id) {
    navigate(`/projet-details/std/${id}`);
  }
// delete students
  function deleteStudent(id) {
    Swal.fire({
      title: 'Are you sure?',
      text: "The student account will be deleted!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        axios.delete(`${apiUrl}/${id}`)
          .then(() => {
            setStudents(prev => prev.filter(student => student.id !== id));
            Swal.fire('Deleted!', 'The student has been removed.', 'success');
          })
          .catch((err) => {
            Swal.fire('Error', 'Failed to delete student.', 'error');
            console.error(err);
          });
      }
    });
  }
// search of students
  const filteredStudents = students.filter(student => {
    const name = student.userId || student.username || '';
    return name.toLowerCase().includes(search.toLowerCase());
  });

  return (
    <>
      <div className="p-0 lg:p-6 max-w-7xl mx-auto">
        <div className='flex justify-between items-center mb-4'>
          <h2 className='text-[.8rem] lg:text-2xl font-bold text-purple-400'>Students:</h2>
          <div className="relative w-full max-w-md">
            <input
              type="text"
              placeholder="Search students..."
              className="pl-10 border border-gray-300 p-3 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-purple-400"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <BsSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>
        </div>

        <div className="space-y-4">
          {filteredStudents.length > 0 ? (
            filteredStudents.map(student => (
              <div
                key={student.id}
                className="bg-white flex justify-between items-center p-4 rounded-lg shadow hover:shadow-md delay-300 duration-500"
              >
                <div>
                  <p className="font-semibold text-gray-800 text-[.8rem] lg:text-[1rem]">
                    Student Name: {student.userId || student.username || 'Unknown'}
                  </p>
                  <p className="text-sm text-gray-500 text-[.6rem] lg:text-[.8rem]">
                    Project Title: {student.title || 'No title'}
                  </p>
                </div>
                <div className="flex flex-col lg:flex-row gap-2">
                  <button
                    onClick={() => deleteStudent(student.id)}
                    className="bg-red-200 text-white px-4 py-1.5 rounded-md hover:bg-red-400 duration-300"
                  >
                    Delete
                  </button>
                  <button
                    onClick={() => goToDetails(student.id)}
                    className="flex items-center gap-2 bg-purple-100 text-purple-600 px-4 py-1.5 rounded-md hover:bg-purple-300 cursor-pointer duration-500 delay-200"
                  >
                    View <LuArrowUpRight size={18} />
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-500 mt-4">Students not found.</p>
          )}
        </div>
      </div>
    </>
  );
}

export default AdminSearch;
