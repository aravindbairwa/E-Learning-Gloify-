import React from 'react';
import { Link } from 'react-router-dom';
import VideoList from "./video_list";

export default function (){

  return (
    <div >
      <ul className="history-ui">
        <li><div>History video 1</div></li>
        <li>History video 2</li>
        <li>History video 3</li>
        <li>History video 4</li>
        <li>History video 5</li>
        <li>History video 6</li>
      </ul>
    </div>
  );
}
