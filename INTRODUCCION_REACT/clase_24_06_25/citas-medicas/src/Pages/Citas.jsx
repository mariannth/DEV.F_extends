import { Link } from 'react-router-dom';

const citas = [
    { id: 1, paciente: 'Juan Pérez', fecha: '2025-07-01' },
    { id: 2, paciente: 'Ana Gómez', fecha: '2025-07-02' },
];

function Citas() {
    return (
        <div>
            <h2>Lista de Citas</h2>
            <ul className="list-group">
                {citas.map((cita) => (
                    <li key={cita.id} className="list-group-item d-flex justify-content-between align-items-center">
                        {cita.paciente} - {cita.fecha}
                        <Link className="btn btn-outline-primary btn-sm" to={`/cita/${cita.id}`}>
                            Ver Detalle
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Citas;
