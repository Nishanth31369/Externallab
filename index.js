export default function StudentProfilePage() {
  const student = {
    name: "Nishanth P",
    rollNumber: "21CS1234",
    department: "Computer Science and Engineering",
    image: "/student-profile.jpg",
  };

  return (
    <div style={styles.page}>
      <div style={styles.card}>
        <img src={student.image} alt="profile" style={styles.image} />

        <h2 style={styles.name}>{student.name}</h2>

        <p><b>Roll Number:</b> {student.rollNumber}</p>
        <p><b>Department:</b> {student.department}</p>
      </div>
    </div>
  );
}

const styles = {
  page: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    background: "#f0f0f0",
    fontFamily: "Arial, sans-serif"
  },
  card: {
    background: "#fff",
    padding: "25px",
    borderRadius: "10px",
    width: "280px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
    textAlign: "center"
  },
  image: {
    width: "120px",
    height: "120px",
    borderRadius: "50%",
    objectFit: "cover",
    marginBottom: "10px"
  },
  name: {
    margin: "10px 0"
  }
};
