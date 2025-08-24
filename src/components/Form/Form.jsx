import React, { useState } from "react";
import "./Form.css";

export const Form = ({ className, onAddSlide }) => {
  const [formData, setFormData] = useState({ title: "", body: "" });
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    onAddSlide({
      title: formData.title,
      body: formData.body,
    });
    setFormData({
      title: "",
      body: "",
    });
  };
  return (
    <form onSubmit={handleSubmit} className={`slide-form ${className}`}>
      <h2 className="title title_size_h2 slide-form__title">Новый слайд</h2>

      <input
        className="input form-group__input"
        type="text"
        id="title"
        name="title"
        placeholder="Title"
        value={formData.title}
        onChange={handleInputChange}
        required
      />

      <textarea
        className="textarea form-group__textarea"
        spellCheck="false"
        id="body"
        name="body"
        placeholder="Body"
        value={formData.body}
        onChange={handleInputChange}
        required
      ></textarea>

      <button
        className="button form-group__button button_color_blue"
        type="submit"
      >
        Добавить
      </button>
    </form>
  );
};
