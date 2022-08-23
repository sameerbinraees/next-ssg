export default function UsersList({ users }) {
  return (
    <>
      <h1>List of all users:</h1>

      {users.map((user) => {
        return (
          <div key={user.id}>
            <p>{user.name}</p>
            <p>{user.email}</p>
          </div>
        );
      })}
    </>
  );
}

export async function getStaticProps() {
  const response = await (await fetch('https://jsonplaceholder.typicode.com/users')).json();
  return {
    props: {
      users: response,
    },
  };
}
