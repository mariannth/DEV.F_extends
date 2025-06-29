const Profile = ({ user }) => {
    return (
        <div className="card mx-auto" style={{ maxWidth: 500 }}>
            <div className="card-body">
                <h2 className="card-title">Perfil del Usuario</h2>
                <p className="card-text"><strong>Nombre de usuario:</strong> {user.username}</p>
            </div>
        </div>
    );
};

export default Profile;
