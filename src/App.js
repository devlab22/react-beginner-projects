import React, { useState } from 'react';
import './index.scss';
import { Success } from './components/Success';
import { Users } from './components/Users';
import axios from 'axios';

// Тут список пользователей: https://reqres.in/api/users

function App() {

  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const [invites, setInvites] = useState([]);
  const [success, setSuccess] = useState(false);

  const getUsers = async () => {

    setIsLoading(true)
    try {

      const res = await axios.get('https://reqres.in/api/users');

      setUsers(res.data.data)

    }
    catch (err) { console.log(err) }
    finally {
      setIsLoading(false)
    }
  }

  React.useEffect(() => {

    getUsers()

  }, [])


  const OnChangeSearchValue = (e) => {
    setSearchValue(e.target.value);
  }

  const OnInvite = (id) => {

    if (invites.includes(id)) {
      setInvites(prev => prev.filter(_id => _id !== id))
    } else {
      setInvites(prev => [...prev, id])
    }

  }

  const OnInviteUsers = () => {
    setSuccess(true);
  }

  const OnClickBack = () => {
    setSuccess(false)
  }

  return (
    <div className="App">

      {
        success ? (
          <Success
            count={invites.length}
            OnClickBack={OnClickBack}
          />
        ) : (
          <Users
            items={users}
            isLoading={isLoading}
            searchValue={searchValue}
            OnChangeSearchValue={OnChangeSearchValue}
            OnClickInvite={OnInvite}
            invites={invites}
            OnInviteUsers={OnInviteUsers}
          />
        )
      }

    </div>
  );
}

export default App;
