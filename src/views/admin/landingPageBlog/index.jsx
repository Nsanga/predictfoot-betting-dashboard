import { Box } from "@chakra-ui/react";

import React, { useEffect } from "react";
import ArticlesView from "./components/ArticlesView";
import { connect, useDispatch } from "react-redux";
import { fetchArticleRequest } from "redux/landingPage/actions";

const Blog = ({articles, loading}) => {
  const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchArticleRequest());
    }, [dispatch]);
    console.log('article', articles)
  return (
    <Box pt={{ base: "130px", md: "80px", xl: "80px" }}>
        {/* <Box boxSize={{ base: 'none', lg: "2xl"}}> */}
          <ArticlesView articles={articles} loading={loading}/>
        {/* </Box> */}
    </Box>
  );
}
const mapStateToProps = ({ LandingReducer }) => ({
  articles: LandingReducer.articles,
  loading: LandingReducer.loading,
  error: LandingReducer.error,
});

export default connect(mapStateToProps)(Blog);
