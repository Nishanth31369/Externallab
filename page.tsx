export default function Home() {
  const student = {
    name: "Nishanth P",
    rollNumber: "2400031369",
    department: "Computer Science and Engineering",
    image: "/student-profile.jpg", // from public folder
  };

  return (
    <main className="page">
      <section className="card">
        {/* Profile Image */}
        <img
          src={student.image}
          alt="Student profile"
          className="profile-image"
        />

        {/* Student Details */}
        <h1 className="student-name">{student.name}</h1>

        <div className="detail-row">
          <span className="label">Roll Number:</span>
          <span>{student.rollNumber}</span>
        </div>

        <div className="detail-row">
          <span className="label">Department:</span>
          <span>{student.department}</span>
        </div>
      </section>
    </main>
  );
}
