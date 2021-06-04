import React, { useEffect, useState } from "react";
import "./detailBlog.scss";
import { Gap, Link } from "../../components";
import { useHistory, withRouter } from "react-router";
import axios from "axios";

const DetailBlog = (props) => {
  const [data, setData] = useState({});
  useEffect(() => {
    const id = props.match.params.id;
    axios
      .get(`http://localhost:8000/v1/blog/post/${id}`)
      .then((res) => {
        setData(res.data.data);
      })
      .catch((err) => console.log(err));
  }, [props]);
  const history = useHistory();
  if (data.author) {
    return (
      <div className="detail-blog-wrapper">
        <img
          className="img-cover"
          src={`http://localhost:8000/images/${data.image}`}
          alt="thumb"
        />
        <p className="blog-title">{data.title}</p>
        <p className="blog-author">
          {data.author.name} - {data.createdAt}
        </p>
        <p className="blog-body">{data.body}</p>
        <Gap height={20} />
        <Link
          title="kembali"
          onClick={() => {
            history.push("/");
          }}
        />
      </div>
    );
  }
  return <p>Loading boss....</p>;
};

export default withRouter(DetailBlog);
