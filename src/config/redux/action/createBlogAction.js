import axios from "axios";

export const setForm = (formType, formValue) => {
  return { type: "SET_FORM_DATA", formType, formValue };
};

export const setImgPreview = (payload) => {
  return { type: "SET_IMG_PREVIEW", payload };
};

export const postToAPI = ({ title, body, image }) => {
  const data = new FormData();
  data.append("title", title);
  data.append("body", body);
  data.append("image", image);
  axios
    .post("http://localhost:8000/v1/blog/post", data, {
      headers: {
        "content-type": "multipart/form-data",
      },
    })
    .then((res) => console.log("create succes", res))
    .catch((err) => console.log(err));
};

export const updateToAPI = ({ title, body, image }, id) => {
  const data = new FormData();
  data.append("title", title);
  data.append("body", body);
  data.append("image", image);
  axios
    .put(`http://localhost:8000/v1/blog/post/${id}`, data, {
      headers: {
        "content-type": "multipart/form-data",
      },
    })
    .then((res) => console.log("update succes", res))
    .catch((err) => console.log(err));
};
