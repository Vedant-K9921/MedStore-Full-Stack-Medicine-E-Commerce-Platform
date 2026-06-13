import { useEffect, useState }
  from "react";

import {
  getAllMedicines,
} from "../services/medicineService";

import HeroSection
  from "../components/customer/HeroSection";

import SearchBar
  from "../components/customer/SearchBar";

import CategoryFilter
  from "../components/customer/CategoryFilter";

import ProductCard
  from "../components/customer/ProductCard";

function Store() {

  const [medicines, setMedicines] =
    useState([]);

  const [searchTerm, setSearchTerm] =
    useState("");

  const [selectedCategory,
    setSelectedCategory] =
      useState("All");

  useEffect(() => {

    fetchMedicines();

  }, []);

  const fetchMedicines = async () => {

    try {

      const response =
        await getAllMedicines();

      setMedicines(response.data);

    } catch (error) {

      console.error(error);
    }
  };

  const filteredMedicines =
    medicines.filter((medicine) => {

      const matchesSearch =
        medicine.name
          .toLowerCase()
          .includes(
            searchTerm.toLowerCase()
          );

      const matchesCategory =
        selectedCategory === "All"
          ? true
          : medicine.description
              .toLowerCase()
              .includes(
                selectedCategory.toLowerCase()
              );

      return (
        matchesSearch &&
        matchesCategory
      );
    });

  return (
    <div>

      <HeroSection />

      <SearchBar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />

      <CategoryFilter
        selectedCategory={selectedCategory}
        setSelectedCategory={
          setSelectedCategory
        }
      />

      <div className="products-grid">

        {filteredMedicines.map((medicine) => (

          <ProductCard
            key={medicine.id}
            medicine={medicine}
          />

        ))}

      </div>

    </div>
  );
}

export default Store;
