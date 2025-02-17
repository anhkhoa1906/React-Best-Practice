
import React, {useState, useEffect} from "react";

const UserListAPI = () =>{
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const[error, setError] = useState(null);

    useEffect(() =>{
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then((response) => {
            if (!response.ok){
                throw new Error("ERROR");
            }
            return response.json();
        })
        .then((data) =>{
            setUsers(data);
            setLoading(false);
        })
        .catch((error)=>{
            setError(error.message);
            setLoading(false);
        });

    }, []);

    if (loading) return<p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    return(
        <div>
            <h2>User List</h2>
            <ul>
                {users.map((user)=>(
                    <li key={user.id}>{user.name}</li>
                ))}
            </ul>
        </div>
    )
};
export default UserListAPI;