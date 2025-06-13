import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import axios from 'axios';
import { CiEdit } from "react-icons/ci";
import { IoMdCheckmark } from "react-icons/io";
import { HiMiniXMark } from "react-icons/hi2";
import Swal from 'sweetalert2';
import { FaArrowLeftLong } from "react-icons/fa6";
import { useNavigate } from 'react-router';

function ProjectDetailsAdmin() {
  const navigate=useNavigate()
  const { id } = useParams();
  const [student, setStudent] = useState(null);
  const [editDes, setEditDes] = useState(false);
  const [editedDescription, setEditedDescription] = useState('');
  const apiUrl = `https://68219a91259dad2655afc3cc.mockapi.io/api/users/user/${id}`;

  useEffect(() => {
    axios.get(apiUrl)
      .then(res => {
        setStudent(res.data);
        setEditedDescription(res.data.description);
      })
      .catch(err => console.error(err));
  }, [id]);

  const handleAccept = () => {
    axios.put(apiUrl, { status: 'accepted', rejectionReason: '' }).then(() => {
      Swal.fire("Success", "Project idea accepted", "success");
      setStudent(item => ({ ...item, status: 'accepted', rejectionReason: '' }));
    });
  };

  const handleReject = () => {
    const reason = prompt("Enter reason for rejection:");
    if (reason) {
      axios.put(apiUrl, { status: 'rejected', rejectionReason: reason }).then(() => {
        Swal.fire("Rejected", `Reason: ${reason}`, "info");
        setStudent(item => ({ ...item, status: 'rejected', rejectionReason: reason }));
      });
    }
  };

  function switchSearchPage(){
    navigate("/search-std-1d")
  }

  const handleSaveDescription = () => {
    axios.put(apiUrl, { description: editedDescription }).then(() => {
      setStudent(item => ({ ...item, description: editedDescription }));
      setEditDes(false);
      Swal.fire("Saved", "Description updated", "success");
    });
  };

  if (!student) return <div className="text-center text-lg mt-10">Loading...</div>;

  return (
    <>
  
    <div className="p-6 max-w-3xl mx-auto bg-white rounded-lg shadow mt-6">
      <h2 className="text-2xl font-bold mb-4">Project Details</h2>

      <div className="space-y-4 text-gray-700">
        <p><strong>Student Name:</strong> {student.username}</p>
        <p><strong>Project Title:</strong> {student.title}</p>

        <div>
          <strong>Description:</strong>
          {editDes ? (
            <>
              <textarea
                value={editedDescription}
                onChange={(e) => setEditedDescription(e.target.value)}
                rows={4}
                className="w-full border mt-2 p-2 rounded-md"
              />
<button onClick={handleSaveDescription}
                className="mt-2 bg-green-200 text-white px-4 py-1 rounded hover:bg-green-300 cursor-pointer"
              >
                Update
              </button>
            </>
          ) : (
            <div className="flex items-start justify-between">
              <p className="mt-1">{student.description || 'No description'}</p>
              <button
                onClick={() => setEditDes(true)}
                className="text-blue-600 hover:text-blue-800 ml-2"
                title="Edit"
              >
                <CiEdit size={20} />
              </button>
            </div>
          )}
        </div>

        <p><strong>Type:</strong> {student.type}</p>
        <p><strong>Leader:</strong> {student.leader}</p>
        <p><strong>Team Count:</strong> {student.teamCount}</p>
        <p><strong>Team Name:</strong> {student.teamName}</p>
        <p><strong>Contact:</strong> {student.contact}</p>
        <p><strong>Status:</strong> 
          <span className={`ml-2 font-semibold ${student.status === 'accepted' ? 'text-green-600' : student.status === 'rejected' ? 'text-red-600' : 'text-yellow-600'}`}>
            {student.status || 'Pending'}
          </span>
        </p>
        {student.rejectionReason && (
          <p className="text-red-600"><strong>Rejection Reason:</strong> {student.rejectionReason}</p>
        )}
      </div>

      <div className="flex gap-4 mt-6">
        <button className="bg-green-200 text-white px-4 py-2 rounded flex items-center gap-2 hover:bg-green-300 delay-100 duration-300 cursor-pointer"  onClick={handleAccept}>
          <IoMdCheckmark /> Accept
        </button>
        <button className="bg-red-200 text-white px-4 py-2 rounded flex items-center gap-2 hover:bg-red-400 delay-100 duration-300 cursor-pointer"  onClick={handleReject}>
          <HiMiniXMark /> Reject
        </button>
      </div>
    </div> 
    {/* <div>
    <h2 onClick={switchSearchPage} className='flex items-center gap-2 hover:underline cursor-pointer'><FaArrowLeftLong></FaArrowLeftLong> Back</h2>
    </div> */}
      </>
  );
}

export default ProjectDetailsAdmin;
