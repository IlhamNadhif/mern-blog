import axios from "axios";

export const setDataBlog = (page) => {
  return (dispatch) => {
    axios
      .get(`http://localhost:8000/v1/blog/posts?page=${page}&perPage=2`)
      .then((result) => {
        dispatch({ type: "UPDATE_DATA_BLOG", payload: result.data.data });
        dispatch({
          type: "UPDATE_PAGE",
          payload: { 
              current_page: result.data.current_page, 
              total_page: Math.ceil(result.data.total_data / result.data.per_page)
            },
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
