import './App.css';
import users from './users-data.js'

const app = () => {
  return (
    <div className="App">
      <div className="page-deets">
        <h2>Iterate over array and display data</h2>
      </div>

      <div className="users">
        {users.map((user, index) => (
          <div key={index}>
            <h3>{user.name}</h3>
            <p>{user.location}</p>
            <p>{user.car}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default app;
