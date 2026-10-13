import React, { useState } from "react";
import "./Management.css";
function Management() {
  // Object State
  const [student, setStudent] = useState({
    name: "",
    age: "",
    course: ""
  });
  // Student Array
  const [students, setStudents] = useState([]);
  // Counter
  const [count, setCount] = useState(0);
  // Theme
  const [dark, setDark] = useState(false);
  // Accordion
  const [open, setOpen] = useState(false);
  // Modal
  const [showModal, setShowModal] = useState(false);
  const [deleteId, setDeleteId] = useState(null);
  // Form Handling
  function handleChange(e) {
    setStudent({
      ...student,
      [e.target.name]: e.target.value
    });
  }
  // Add Student
  function addStudent(e) {
    e.preventDefault();
    if (
      student.name === "" ||
      student.age === "" ||
      student.course === ""
    ) {
      alert("Please fill all fields");
      return;
    }
    const newStudent = {
      id: Date.now(),
      name: student.name,
      age: Number(student.age),
      course: student.course
    };
    setStudents([...students, newStudent]);
    setStudent({
      name: "",
      age: "",
      course: ""
    });
  }
  // Open Modal
  function openModal(id) {
    setDeleteId(id);
    setShowModal(true);
  }
  // Delete Student
  function deleteStudent() {
    setStudents(
      students.filter((item) => item.id !== deleteId)
    );

    setShowModal(false);
  }
  // Filter students age 18 or above
  const adults = students.filter(
    (item) => item.age >= 18
  );
  return (
    <div className={dark ? "management dark" : "management"}>
      <h1>Student Management</h1>
      {/* Theme */}
      <button onClick={() => setDark(!dark)}>
        {dark ? "Light Mode" : "Dark Mode"}
      </button>
      {/* Student Form */}
      <div className="form-box">
        <h2>Add Student</h2>
        <form onSubmit={addStudent}>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={student.name}
            onChange={handleChange}
          />
          <input
            type="number"
            name="age"
            placeholder="Age"
            value={student.age}
            onChange={handleChange}
          />
          <input
            type="text"
            name="course"
            placeholder="Course"
            value={student.course}
            onChange={handleChange}
          />
          <button type="submit"> Add Student</button>
        </form>
      </div>
      {/* Display Students */}
      <h2>All Students</h2>
      {students.length === 0 ? (
        <p>No students added.</p>
      ) : (
        students.map((item) => (
          <div className="student-card" key={item.id}>
            <h3>{item.name}</h3>
            <p>Age: {item.age}</p>
            <p>Course: {item.course}</p>
            <button
              className="delete-btn"
              onClick={() => openModal(item.id)}
            >Delete
            </button>
          </div>
        ))
      )}
      {/* Students 18 or Above */}
      <h2>Students 18 or Above</h2>
      {adults.length === 0 ? (
        <p>No students found.</p>
      ) : (
        adults.map((item) => (
          <p key={item.id}>
            {item.name} - {item.age} years
          </p>
        ))
      )}
      {/* Counter */}
      <div className="counter">
        <h2>Counter</h2>
        <h3>{count}</h3>
        <button onClick={() => setCount(count - 1)}>−</button>
        <button onClick={() => setCount(count + 1)}> +</button>
           <button onClick={() => setCount(0)}>Reset</button>
      </div>
      {/* Accordion */}
      <div className="accordion">
        <h2 onClick={() => setOpen(!open)}>
          What is React? {open ? "👆" : "👇"}
        </h2>
        {open && (
          <p>
            React is a JavaScript library used to
            build user interfaces.
          </p>
        )}
      </div>
      {/* Modal */}
      {showModal && (
        <div className="modal-bg">
          <div className="modal">
            <h2>Are you sure?</h2>
            <p>Do you want to delete this student?</p>
            <button onClick={deleteStudent}>Delete
            </button>
            <button onClick={() => setShowModal(false)}>Cancel</button>
          </div>
        </div>
      )}
    </div>
  );
}
export default Management;