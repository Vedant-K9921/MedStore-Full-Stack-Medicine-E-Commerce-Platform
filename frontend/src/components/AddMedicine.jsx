import { useEffect, useState } from "react";

import {
  addMedicine,
  updateMedicine,
} from "../services/medicineService";

function AddMedicine({
  refreshMedicines,
  editingMedicine,
  clearEditing,
}) {

  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
    stock: "",
    manufacturer: "",
    imageUrl: "",
  });

  useEffect(() => {

    if (editingMedicine) {

      setFormData({
        name: editingMedicine.name || "",
        description:
          editingMedicine.description || "",
        price: editingMedicine.price || "",
        stock: editingMedicine.stock || "",
        manufacturer:
          editingMedicine.manufacturer || "",
        imageUrl:
          editingMedicine.imageUrl || "",
      });
    }

  }, [editingMedicine]);

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      if (editingMedicine) {

        await updateMedicine(
          editingMedicine.id,
          formData
        );

        alert("Medicine updated successfully");

        clearEditing();

      } else {

        await addMedicine(formData);

        alert("Medicine added successfully");
      }

      setFormData({
        name: "",
        description: "",
        price: "",
        stock: "",
        manufacturer: "",
        imageUrl: "",
      });

      refreshMedicines();

    } catch (error) {

      console.error(
        "Error saving medicine:",
        error
      );
    }
  };

  return (
    <div className="form-container">

      <h2>
        {editingMedicine
          ? "Edit Medicine"
          : "Add Medicine"}
      </h2>

      <form onSubmit={handleSubmit}>

        <input
          type="text"
          name="name"
          placeholder="Medicine Name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="description"
          placeholder="Description"
          value={formData.description}
          onChange={handleChange}
          required
        />

        <input
          type="number"
          name="price"
          placeholder="Price"
          value={formData.price}
          onChange={handleChange}
          required
        />

        <input
          type="number"
          name="stock"
          placeholder="Stock"
          value={formData.stock}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="manufacturer"
          placeholder="Manufacturer"
          value={formData.manufacturer}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="imageUrl"
          placeholder="Image URL"
          value={formData.imageUrl}
          onChange={handleChange}
        />

        <button type="submit">

          {editingMedicine
            ? "Update Medicine"
            : "Add Medicine"}

        </button>

      </form>

    </div>
  );
}

export default AddMedicine;