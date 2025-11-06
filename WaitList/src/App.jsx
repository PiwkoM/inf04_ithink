import { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";

function App() {
  const [name, setName] = useState("");
  const [selectedCourse, setSelected] = useState({ id: 0, name: "" });
  const [Courses, setCourses] = useState([
    { id: 1, name: "Programowanie w C#", capacity: 20, enrolled: 15 },
    { id: 2, name: "Angular dla początkujących", capacity: 15, enrolled: 15 },
    { id: 3, name: "Kurs Django", capacity: 25, enrolled: 10 },
  ]);

  const handleClick = () => {
    if (!selectedCourse.name || !name) {
      console.log("Wybierz kurs i wpisz imię!");
      return;
    }

    const course = Courses.find((c) => c.id === selectedCourse.id);
    if (!course) return;

    if (course.enrolled === course.capacity) {
      console.log(`Brak miejsca: ${selectedCourse.name}`);
    } else {
      setCourses(
        Courses.map((c) =>
          c.id === course.id ? { ...c, enrolled: c.enrolled + 1 } : c
        )
      );
      console.log(`Zapisano ${name} na ${selectedCourse.name}`);
    }
  };

  const GetSelected = (e) => {
    const selectedName = e.target.value;
    const course = Courses.find((c) => c.name === selectedName);
    setSelected(course || { id: 0, name: "" });
  };

  return (
    <div className="container mt-4">
      <h2>Lista kursów</h2>
      <div className="row mb-4">
        {Courses.map((n) => (
          <div className="col-md-4 mb-3" key={n.id}>
            <div className="card">
              <div className="card-body">
                <h5><b>{n.name}</b></h5>
                Zapisanych: {n.enrolled}/{n.capacity}
              </div>
            </div>
          </div>
        ))}
      </div>

      <label className="form-label" htmlFor="nameInput">
        Imię i nazwisko:
      </label>
      <input
        type="text"
        className="form-control"
        name="nameInput"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <label className="form-label mt-3" htmlFor="courseInput">
        Kurs:
      </label>
      <select className="form-select" onChange={GetSelected}>
        <option value="">-- Wybierz kurs --</option>
        {Courses.map((n) => (
          <option key={n.id} value={n.name}>
            {n.name} (Pozostało: {n.capacity - n.enrolled})
          </option>
        ))}
      </select>

      <button className="btn btn-primary mt-3" onClick={handleClick}>
        Zapisz
      </button>
    </div>
  );
}

export default App;
