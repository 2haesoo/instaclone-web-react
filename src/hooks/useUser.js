import { gql, useQuery, useReactiveVar } from "@apollo/client";
import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { isLoggedInVar, logUserOut } from "../apollo";

const ME_QUERY = gql`
  query me {
    me {
      username
      avatar
    }
  }
`;

function useUser() {
  const history = useHistory();
  const hasToken = useReactiveVar(isLoggedInVar);
  const { data, error } = useQuery(ME_QUERY, {
    skip: !hasToken,
  });
  useEffect(() => {
    console.log(data);
    if (data?.me === null) {
      logUserOut(history);
    }
  }, [data]);
  console.log(data, error);
  return;
}

export default useUser;
