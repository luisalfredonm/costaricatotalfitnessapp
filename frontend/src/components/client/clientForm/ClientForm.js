import React from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import Card from "../../card/Card";

import "./ClientForm.scss";

const ClientForm = ({
  client,
  productImage,
  imagePreview,
  description,
  setDescription,
  handleInputChange,
  handleImageChange,
  saveClient,
}) => {
  return (
    <div className="add-product">
      <Card cardClass={"card"}>
        <form onSubmit={saveClient}>
          <Card cardClass={"group"}>
            <label>Profile Image</label>
            <code className="--color-dark">
              Supported Formats: jpg, jpeg, png
            </code>
            <input
              type="file"
              name="image"
              onChange={(e) => handleImageChange(e)}
            />

            {imagePreview != null ? (
              <div className="image-preview">
                <img src={imagePreview} alt="client" />
              </div>
            ) : (
              <p>No image set for this poduct.</p>
            )}
          </Card>
          <label>Name:</label>
          <input
            type="text"
            placeholder="Client Name"
            name="name"
            value={client?.name}
            onChange={handleInputChange}
          />

          <label>Client Category:</label>
          <input
            type="text"
            placeholder="Category"
            name="category"
            value={client?.category}
            onChange={handleInputChange}
          />

          <label>Client Price:</label>
          <input
            type="text"
            placeholder="Client Price"
            name="price"
            value={client?.price}
            onChange={handleInputChange}
          />

          <label>Client Quantity:</label>
          <input
            type="text"
            placeholder="Product Quantity"
            name="quantity"
            value={client?.quantity}
            onChange={handleInputChange}
          />

          <label>Client Description:</label>
          <ReactQuill
            theme="snow"
            value={description}
            onChange={setDescription}
            modules={ClientForm.modules}
            formats={ClientForm.formats}
          />

          <div className="--my">
            <button type="submit" className="--btn --btn-primary">
              Save Client
            </button>
          </div>
        </form>
      </Card>
    </div>
  );
};

ClientForm.modules = {
  toolbar: [
    [{ header: "1" }, { header: "2" }, { font: [] }],
    [{ size: [] }],
    ["bold", "italic", "underline", "strike", "blockquote"],
    [{ align: [] }],
    [{ color: [] }, { background: [] }],
    [
      { list: "ordered" },
      { list: "bullet" },
      { indent: "-1" },
      { indent: "+1" },
    ],
    ["clean"],
  ],
};
ClientForm.formats = [
  "header",
  "font",
  "size",
  "bold",
  "italic",
  "underline",
  "strike",
  "blockquote",
  "color",
  "background",
  "list",
  "bullet",
  "indent",
  "link",
  "video",
  "image",
  "code-block",
  "align",
];

export default ClientForm;