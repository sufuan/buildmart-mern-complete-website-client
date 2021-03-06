import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../../../Shared/Loading';
import UserRow from './UserRow';


const Users = () => {

    const { data: users, isLoading, refetch } = useQuery('users', () => fetch('https://infinite-river-32307.herokuapp.com/user', {
        method: 'GET',
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));


    if (isLoading) {
        return <Loading></Loading>
    }



    return (
        <div>
            all {users.length}

            <div class="overflow-x-auto">
                <table class="table w-full">
                    {/* <!-- head --> */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Action</th>
                           
                        </tr>
                    </thead>
                    <tbody>
                       
                       {
                           users.map(user=><UserRow
                           user={user}
                           key={user._id}
                           refetch={refetch}
                           ></UserRow>)
                       }
                       
                    
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Users;