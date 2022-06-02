
import { Grid } from "@mui/material";

import UserCard from "./UserCard/UserCard";
import Loader from "./Loader";

import useTrombi from "../hooks/useFetch";
import { useNavigationContext } from "../context/NavigationContext";


const UserList = () => {
  const { offset, currentPage } = useNavigationContext();
  const { loading, data, errors } = useTrombi('GET_USERS');
  console.log('current page from UserList', currentPage);
  console.log('offset', offset);

  return (
    <Grid item container xs={6} alignContent="center" textAlign="center">
    { loading && <Loader /> }
    { !loading && data && data.map((el, index) => {
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
