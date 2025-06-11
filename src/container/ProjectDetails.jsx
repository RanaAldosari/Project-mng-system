import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import Swal from 'sweetalert2';
function ProjectDetails() {
  const { id } = useParams();
  const apiUrl = "https://68219a91259dad2655afc3cc.mockapi.io/api/users/image";
  const [details, setDetails] = useState([]);

  useEffect(() => {
    axios.get(apiUrl)
      .then((res) => {
        const userProjects = res.data.filter(project => project.id === id);
        setDetails(userProjects);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);
function acceptproject(){
 Swal.fire('Project Accepted!');
}
 function rejectproject() {
    Swal.fire({
      title: 'Why do you reject this project?',
      input: 'text',
      inputPlaceholder: 'Type your reason here...',
      showCancelButton: true,
      confirmButtonText: 'Send',
      cancelButtonText: 'Cancel',
}).then((result) => {
      if (result.isConfirmed) {
        const reason = result.value;
        console.log("Rejected with reason:", reason);
        Swal.fire('Project Rejected!', `Reason: ${reason}`, 'info');
      }
    });
  }


  return (
    <>
    <div>
 <div>
<h2>Project Details:</h2>
      {details.length === 0 ? (
       <h1>project not found</h1>
      ) : (
        details.map((item) => (
          <div key={item.id} className='border p-4 mb-4'>
            <h3 className='text-lg font-semibold'>{item.title}</h3>
            <p>{item.description}</p>
<div className='flex gap-3'>
                <button className='bg-green-400' onClick={acceptproject}>Accept</button>
            <button onClick={rejectproject} className='bg-red-500'>ignor</button>
</div>
          </div>
        ))
      )}
    </div>
      </div>
    </>
  );
}

export default ProjectDetails;
