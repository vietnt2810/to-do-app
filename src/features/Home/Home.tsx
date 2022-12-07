import { useAuth } from "hooks/useAuth";

import { Title } from "./homeStyles";

const Home: React.FC = () => {
  const auth = useAuth();

  return (
    <>
      <Title>
        {auth?.accessToken
          ? `Welcome, ${auth?.user?.username}`
          : "Hello guest, please login first!"}
      </Title>
    </>
  );
};

export default Home;
