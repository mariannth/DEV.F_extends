import { useParams } from 'react-router-dom';

const citas = [
    { id: '1', paciente: 'Juan Pérez', fecha: '2025-07-01', doctor: 'Dr. García', motivo: 'Chequeo' },
    { id: '2', paciente: 'Ana Gómez', fecha: '2025-07-02', doctor: 'Dra. Ruiz', motivo: 'Dolor de cabeza' },
];

function CitaDetalle() {
    const { id } = useParams();
    const cita = citas.find(c => c.id === id);

    if (!cita) return <p>Cita no encontrada</p>;

    return (
        <div className="card p-3">
            <h2>Detalles de la Cita</h2>
            <p><strong>Paciente:</strong> {cita.paciente}</p>
            <p><strong>Fecha:</strong> {cita.fecha}</p>
            <p><strong>Doctor:</strong> {cita.doctor}</p>
            <p><strong>Motivo:</strong> {cita.motivo}</p>
        </div>
    );
}


export default CitaDetalle;
