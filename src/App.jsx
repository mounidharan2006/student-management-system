import Header from "./Header";
import StudentProfile from "./StudentProfile";
import Footer from "./Footer";
import "./App.css";

function App() {
  const student1 = {
    name: "Anu",
    department: "CSE",
    year: "3rd Year"
  };

  const student2 = {
    name: "Bala",
    department: "Computer Science",
    year: "3rd Year"
  };

  return (
    <div>
      <Header />

      <main>
        <h2>Student 1</h2>

        <StudentProfile
          name={student1.name}
          department={student1.department}
          year={student1.year}
        />

        <h2>Student 2</h2>

        <StudentProfile
          name={student2.name}
          department={student2.department}
          year={student2.year}
        />
      </main>

      <Footer />
    </div>
  );
}

export default App;