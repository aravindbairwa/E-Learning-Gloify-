import React from 'react';
import { Link } from 'react-router-dom';

export default function CourseList () {
  return (
    <div>
      <div className="row course-list">
      <div className="col-md-2"><Link to="#" ><img src="https://filestore.hasura.io/v1/file/7723c234-4263-4599-9568-9d6788138c5b" /></Link></div>
      <div className="col-md-2"><Link to="#" ><img src="https://seeklogo.com/images/J/javascript-logo-E967E87D74-seeklogo.com.png" /></Link></div>
      <div className="col-md-2"><Link to="#" ><img src="https://seeklogo.com/images/V/vuejs-logo-17D586B587-seeklogo.com.png" /></Link></div>
      <div className="col-md-6"><h3 style={{padding : "60px"}}>Recommended Courses</h3></div>
      </div>
    </div>
  );
}
