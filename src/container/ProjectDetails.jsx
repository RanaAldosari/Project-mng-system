import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'

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
          </div>
        ))
      )}
    </div>
      </div>
    </>
  );
}

export default ProjectDetails;
