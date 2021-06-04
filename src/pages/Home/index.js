import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { confirmAlert } from "react-confirm-alert"; // Import
import "react-confirm-alert/src/react-confirm-alert.css"; // Import css
import { BlogItem, Button, Gap } from "../../components";
import "./home.scss";
import { setDataBlog } from "../../config/redux/action";
import axios from "axios";

const Home = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const {
    homeReducer: { dataBlog, page },
  } = useSelector((state) => state);
  const [counter, setCounter] = useState(1);
  useEffect(() => {
    dispatch(setDataBlog(counter));
  }, [counter, dispatch]);
  const previous = () => {
    setCounter(counter <= 1 ? 1 : counter - 1);
  };
  const next = () => {
    setCounter(counter === page.total_page ? page.total_page : counter + 1);
  };
  const confirmDelete = (id) => {
    confirmAlert({
      title: "Confirm to delete",
      message: "Apakah anda yakin ingin menghapus postingan ini ?",
      buttons: [
        {
          label: "Ya",
          onClick: () => {
            axios
              .delete(`http://localhost:8000/v1/blog/post/${id}`)
              .then((res) => {
                console.log("succes delete", res);
                dispatch(setDataBlog(counter));
              })
              .catch((err) => {
                console.log(err);
              });
          },
        },
        {
          label: "Tidak",
          onClick: () => console.log("user tidak setuju"),
        },
      ],
    });
  };

  return (
    <div className="home-page-wrapper">
      <div className="create-wrapper">
        <Button
          title="Create BLog"
          onClick={() => {
            history.push("/create-blog");
          }}
        />
      </div>
      <Gap height={20} />
      <div className="content-wrapper">
        {dataBlog.map((blog) => {
          return (
            <BlogItem
              key={blog._id}
              image={`http://localhost:8000/images/${blog.image}`}
              _id={blog._id}
              title={blog.title}
              body={blog.body}
              name={blog.author.name}
              date={blog.createdAt}
              onDelete={confirmDelete}
            />
          );
        })}
      </div>
      <div className="pagination">
        <Button title="Previous" onClick={previous} />
        <Gap width={20} />
        <p className="text-page">
          {page.current_page} / {page.total_page}
        </p>
        <Gap width={20} />
        <Button title="Next" onClick={next} />
      </div>
      <Gap height={20} />
    </div>
  );
};

export default Home;
