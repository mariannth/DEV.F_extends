function ListaSkills({ skills }) {
  return (
    <div className="skills">
      <h5>Habilidades:</h5>
      <ul>
        {skills.map((skill, index) => (
          <li key={index}>🔹 {skill}</li>
        ))}
      </ul>
    </div>
  );
}

export default ListaSkills;
