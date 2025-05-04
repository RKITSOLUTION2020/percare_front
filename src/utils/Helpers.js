// src/hooks/usePets.js
import { useState, useEffect } from 'react';
import {
  getAllPets,
  deletePet,
  addPet,
  updatePet,
  getPetById,
  getPetByFilter,
  adoptPet,
} from '../services/Api';

const usePets = () => {
  const [pets, setPets] = useState([]);
  const [pet, setPet] = useState({});
  const [filter, setFilter] = useState([]);

  const fetchPets = async () => {
    try {
      const data = await getAllPets();
      setPets(data);
    } catch (error) {
      console.error('Failed to fetch pets:', error);
    }
  };

  const handleFilter = async (mood) => {
    const filter = await getPetByFilter(mood);
    setFilter(filter);
  };

  const fetchPet = async (id) => {
    try {
      const data = await getPetById(id);
      setPet(data);
    } catch (error) {
      console.error('Failed to fetch pets:', error);
    }
  };

  const handleAddPet = async (newPet) => {
    await addPet(newPet);
    await fetchPets();
  };

   const handleAdopte = async (id,Adopt) => {
     await adoptPet(id,Adopt);
     await fetchPets();
   };

  const handleUpdatePet = async (id, updatedPet) => {
    await updatePet(id, updatedPet);
    await fetchPets();
  };

  const handleDeletePet = async (id) => {
    try {
      await deletePet(id);
      await fetchPets();
    } catch (err) {
      console.error('Error deleting pet:', err);
    }
  };

  useEffect(() => {
    fetchPets();
    handleFilter();
  }, []);

  return {
    pets,
    pet,
    filter,
    handleAddPet,
    handleDeletePet,
    handleUpdatePet,
    fetchPet,
    handleAdopte,
    handleFilter,
    fetchPets,
  };
};

export default usePets;
