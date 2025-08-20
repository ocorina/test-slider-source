import "./App.css";
import { useState, useEffect } from "react";
import { Loader } from "./components/Loader/Loader.jsx";
import { Slider } from "./components/Slider/Slider.jsx";
import { Form } from "./components/Form/Form.jsx";

export default function App() {
  const [formData, setFormData] = useState({ title: "", body: "" });
  const [loading, setLoading] = useState(false);
  const [slides, setSlides] = useState([]);
  const [error, setError] = useState(null);
  const fetchInitialSlides = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users/1/posts"
      );
      const data = await response.json();
      setSlides(data);
    } catch (err) {
      setError(`Ошибка загрузки данных: ${err.message}`);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchInitialSlides();
  }, []);
  const handleAddSlide = (newSlide) => {
    setSlides([...slides, newSlide]);
  };

  return (
    <div className="app">
      {loading ? (
        <Loader />
      ) : error ? (
        <p className="error">{error}</p>
      ) : (
        <div className="container">
          <Form className={"container__form"} onAddSlide={handleAddSlide} />
          <Slider slides={slides} />
        </div>
      )}
    </div>
  );
}
