import React, { useState } from "react";
import FormModal from "../Modal";
import { fetchAPI } from "../../utils/api";
import RichTextEditor from "../RichTextEditor";
const AddBlogPostForm = ({ onPostAdded }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({ title: "", content: "" });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleContentChange = (newContent) => {
    setFormData(prev => ({ ...prev, content: newContent }));
  };

  // const submitPostsAPI = async () => {
  //   const headers = {
  //     Accept: "application/json",
  //     "Content-Type": "application/json",
  //   };
  //   const method = "POST";
  //   const data = JSON.stringify(formData);
  //   const response = await fetch("http://localhost:5154/api/BlogPosts", {
  //     method,
  //     headers,
  //     body: data,
  //   });
  //   const result = await response.json();
  //   return result;
  // };
  const resetForm = () => {
    setFormData({ title: "", content: "" });
  };
  const handleSave = async() => {
    console.log("Saving data...", formData);
    try {
      const result = await fetchAPI('BlogPosts', 'POST', formData);
      console.log("Data saved successfully", result);
      if (onPostAdded) {
        onPostAdded(); // Refresh the posts list
      }
      // Reset form or additional logic here
     resetForm(); // Reset form after success
    } catch (error) {
      console.error("Failed to save data", error);
    }
    setIsOpen(false);
    // Add logic to save data to backend here
  };

  return (
    <>
      <button
        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mb-4"
        onClick={() => setIsOpen(true)}
      >
        Add Post
      </button>
      <FormModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        onSave={handleSave}
      >
        <h3 className="text-lg font-semibold">Add New Post</h3>
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleInputChange}
          placeholder="Title"
          className="mt-2 p-2 border rounded w-full"
        />
        {/* <textarea
          name="content"
          value={formData.content}
          onChange={handleInputChange}
          placeholder="Content"
          className="mt-2 p-2 border rounded w-full"
          rows="4"
        ></textarea> */}
          <RichTextEditor content={formData.content} onContentChange={handleContentChange} />
          {/* <RichTextEditor initialContent={formData.content} /> */}
      </FormModal>
    </>
  );
};

export default AddBlogPostForm;
