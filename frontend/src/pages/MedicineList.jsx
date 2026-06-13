import { useEffect, useState } from "react";

import {
  getAllMedicines,
  deleteMedicine,
} from "../services/medicineService";

import AddMedicine from "../components/AddMedicine";

function MedicineList() {

  const [medicines, setMedicines] = useState([]);

  const [editingMedicine, setEditingMedicine] = useState(null);

  useEffect(() => {
    fetchMedicines();
  }, []);

  const fetchMedicines = async () => {

    try {

      const response = await getAllMedicines();

      setMedicines(response.data);

    } catch (error) {

      console.error("Error fetching medicines:", error);
    }
  };

  const handleDelete = async (id) => {

    try {

      await deleteMedicine(id);

      alert("Medicine deleted successfully");

      fetchMedicines();

    } catch (error) {

      console.error("Error deleting medicine:", error);
    }
  };

  const handleEdit = (medicine) => {
    setEditingMedicine(medicine);
  };

  const clearEditing = () => {
    setEditingMedicine(null);
  };

  return (
    <div>

      <AddMedicine
        refreshMedicines={fetchMedicines}
        editingMedicine={editingMedicine}
        clearEditing={clearEditing}
      />

      <div>

        <h2 style={{ marginBottom: "20px" }}>
          Available Medicines
        </h2>

        {medicines.length === 0 ? (

          <p>No medicines found</p>

        ) : (

          <div className="medicine-grid">

            {medicines.map((medicine) => (

              <div
                key={medicine.id}
                className="medicine-card"
              >

                <h3>{medicine.name}</h3>

                <p>{medicine.description}</p>

                <p>
                  <strong>Price:</strong> ₹{medicine.price}
                </p>

                <p>
                  <strong>Stock:</strong> {medicine.stock}
                </p>

                <p>
                  <strong>Manufacturer:</strong> {medicine.manufacturer}
                </p>

                <div className="button-group">

                  <button
                    onClick={() => handleEdit(medicine)}
                    className="edit-btn"
                  >
                    Edit
                  </button>

                  <button
                    onClick={() => handleDelete(medicine.id)}
                    className="delete-btn"
                  >
                    Delete
                  </button>

                </div>

              </div>
            ))}

          </div>
        )}
      </div>
    </div>
  );
}

export default MedicineList;