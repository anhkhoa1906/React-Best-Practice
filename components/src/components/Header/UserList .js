

const UserList = () =>{
 const users =["An","Bình","Cường"];
 return(
    <div>
    <h2>List</h2>
    <ol style={{ listStylePosition: "inside" }}>
       {users.map((users, index) =>(
       <li key={index}>{users}</li>
       ))}
    </ol>
    </div>
 );
};
export default UserList