import { gql, useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import { PHOTO_FRAGMENT } from "../components/fragments";

const SEE_PROFILE_QUERY = gql`
    query seeProfile($username: String!){
        seeProfile(username: $username){
            firstName
            lastName
            username
            bio
            avatar
            photos {
                ...PHOTO_FRAGMENT
            }
            totalFollowing
            totalFollowers
            isMe
            isFollowing
        }
    }
    ${PHOTO_FRAGMENT}
`;

function Profile() {
  const { username } = useParams();
  const { data } = useQuery(SEE_PROFILE_QUERY, {
    variables: {
      username,
    },
  });

  return "Profile";
}

export default Profile;
