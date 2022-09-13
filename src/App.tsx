import { useEffect , useState} from 'react';
import api from './services/api';
import User from './components/User';
interface IUser{
  name: string;
  email: string
}

function App() {
  // tipagem para estado
  const [users, setUsers] = useState<IUser[]>([]);

  useEffect(()=>{
    // tipagem para chamadas api
    api.get<IUser[]>('/users').then(response => {
      setUsers(response.data);
      console.log(response.data);
    });
  },[]);

  return (
    <>
    <h1>Hello Typescript</h1>
    {users.map( user => 
      <User key={user.email} user={user}/>
    )}
    </>
  );
}

export default App;
