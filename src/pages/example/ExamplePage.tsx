import { useFetchExampleUsers } from "../../apis/example/useFetchExampleUsers.ts";

const ExamplePage = () => {
  const { data: users } = useFetchExampleUsers();
  return (
    <div>
      <h1>Example Page</h1>
      <div>
        {users?.map((user) => (
          <div key={user.id}>
            <img className={`size-30`} src={user.avatar} alt={`image`} />
            <h2>{user.first_name}</h2>
            <p>{user.email}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExamplePage;
