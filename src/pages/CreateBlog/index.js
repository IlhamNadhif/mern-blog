import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, withRouter } from "react-router";
import { Button, Gap, Input, Link, TextArea, Upload } from "../../components";
import { setForm, setImgPreview, postToAPI, updateToAPI } from "../../config/redux/action";
import "./createBlog.scss";

const CreateBlog = (props) => {
  const { form, imgPreview } = useSelector((state) => state.createBlogReducer);
  const { title, body } = form;
  const [isUpdate, setIsUpdate] = useState(false);
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    console.log(props.match.params.id);
    const id = props.match.params.id;
    if (id) {
      setIsUpdate(true);
      axios
        .get(`http://localhost:8000/v1/blog/post/${id}`)
        .then((res) => {
          const data = res.data.data
          dispatch(setForm("title", data.title));
          dispatch(setForm("body", data.body));
          dispatch(setImgPreview(`http://localhost:8000/images/${data.image}`));
        })
        .catch((err) => console.log(err));
    }
  }, []);

  const onSubmit = () => {
    const id = props.match.params.id;
    if (isUpdate) {
      console.log("update data");
      updateToAPI(form, id)
    }else{
      console.log("create data");
      postToAPI(form);
    }
    dispatch(setForm("title", ""));
    dispatch(setForm("body", ""));
    dispatch(setForm("image", ""));
    dispatch(setImgPreview(null));
    history.push("/");
  };

  const onImageUpload = (e) => {
    const file = e.target.files[0];
    dispatch(setForm("image", file));
    dispatch(setImgPreview(URL.createObjectURL(file)));
  };
  return (
    <div className="blog-post">
      <Link
        title="Kembali"
        onClick={() => {
          history.push("/");
        }}
      />
      <p className="title">{isUpdate ? "Update" : "Create New"} Create Blog</p>
      <Input
        label="Post Title"
        value={title}
        onChange={(e) => dispatch(setForm("title", e.target.value))}
      />
      <Upload img={imgPreview} onChange={(e) => onImageUpload(e)} />
      <TextArea
        value={body}
        onChange={(e) => dispatch(setForm("body", e.target.value))}
      />
      <Gap height={20} />
      <div className="button-action">
        <Button title={isUpdate ? "Update" : "Simpan"} onClick={onSubmit} />
      </div>
      <Gap height={20} />
    </div>
  );
};

export default withRouter(CreateBlog);
