
import { Grid } from "@mui/material";

import UserCard from "./UserCard/UserCard";
import Loader from "./Loader";

import useTrombi from "../hooks/useFetch";
import { useNavigationContext } from "../context/NavigationContext";


const UserList = () => {
  const { offset } = useNavigationContext();
  const { loading, data, errors } = useTrombi('GET_USERS', {offset});

  return (
    <Grid item container xs={6} alignContent="center" textAlign="center">
    { loading && <Loader /> }
    { !loading && data && data.map((el, index) => {
      if(index === data?.length -1 ) return;
      return <UserCard name={el?.name} photo={el?.photo} key={`user-${index}`} />
    })}
    {errors && !loading &&
    <>
    <strong>{errors?.message}</strong>
    <p>correlation_id: {errors?.correlation_id}</p>
    </>
    }
    </Grid>
  )
};

export default UserList;
