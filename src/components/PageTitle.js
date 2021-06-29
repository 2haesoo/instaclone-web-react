import { PropTypes } from "prop-types";
import { Helmet } from "react-helmet-async";

function PageTitle({ title, test }) {
  return <Helmet><title>{title} | Instaclone</title></Helmet>;
}

PageTitle.propTypes = {
  title: PropTypes.string.isRequired,
  // title이 안됨
};

export default PageTitle;
