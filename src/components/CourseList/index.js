import { React, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

function addCourseAction(title) {
  return { type: 'ADD_COURSE', title }
}

export default function CourseList() {
  const courses = useSelector(state => state.data);
  const dispatch = useDispatch();
  const [description, setDescription] = useState('');

  function addCourse() {
    dispatch(addCourseAction(description))
  }

  return (
    <>
      <ul>
        { courses.map(course => <li key={course}>{course}</li>)}
      </ul>
      <input type="text" value={description} onChange={event => setDescription(event.target.value)}></input>
      <button type="button" onClick={addCourse}>Adicionar curso</button>
    </>
  );
}