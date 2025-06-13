import React from 'react'

function ViewProjects() {
  return (
<>
<div>
    {/* projects */}
<div className=" min-h-screen p-6">
   <div className="mb-6">
    <h1 className="text-3xl font-bold text-purple-600">All Projects:</h1>
  </div>
    {/* card */}
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
<div className="bg-white border rounded-lg shadow p-4 hover:shadow-md cursor-pointer duration-500 delay-500 hover:scale-110 hover:border-purple-600">
      <h2 className="text-xl font-semibold  mb-2">Title: test1</h2>
      <p className="text-gray-700 text-sm">
        Description: Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas iure dolores molestiae, ducimus, dignissimos animi obcaecati odit asperiores optio aspernatur totam quo labore dicta consequuntur minus placeat numquam laudantium quidem.
      </p>
    </div>

<div className="bg-white border rounded-lg shadow p-4 hover:shadow-md cursor-pointer duration-500 delay-500 hover:scale-110 hover:border-purple-600 ">
      <h2 className="text-xl font-semibold mb-2">Title: test1</h2>
      <p className="text-gray-700 text-sm">
        Description: Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas iure dolores molestiae, ducimus, dignissimos animi obcaecati odit asperiores optio aspernatur totam quo labore dicta consequuntur minus placeat numquam laudantium quidem.
      </p>
    </div>

<div className="bg-white border rounded-lg shadow p-4 hover:shadow-md cursor-pointer duration-500 delay-500 hover:scale-110 hover:border-purple-600 ">
      <h2 className="text-xl font-semibold mb-2">Title: test1</h2>
      <p className="text-gray-700 text-sm">
        Description: Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas iure dolores molestiae, ducimus, dignissimos animi obcaecati odit asperiores optio aspernatur totam quo labore dicta consequuntur minus placeat numquam laudantium quidem.
      </p>
    </div>

<div className="bg-white border rounded-lg shadow p-4 hover:shadow-md cursor-pointer duration-500 delay-500 hover:scale-110 hover:border-purple-600 ">
      <h2 className="text-xl font-semibold mb-2">Title: test1</h2>
      <p className="text-gray-700 text-sm">
        Description: Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas iure dolores molestiae, ducimus, dignissimos animi obcaecati odit asperiores optio aspernatur totam quo labore dicta consequuntur minus placeat numquam laudantium quidem.
      </p>
    </div>
    </div>

 </div>
</div>
</>
  )
}

export default ViewProjects