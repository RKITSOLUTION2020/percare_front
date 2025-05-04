// src/pages/HomePage.js
import React, { useState } from 'react';
import PetList from '../components/PetList';
import AddPetForm from '../components/AddPetForm';
import FilterBar from '../components/FilterBar';
import Header from '../components/Header';
import usePets from '../utils/Helpers';
import Modal from '../components/Modal';

const HomePage = () => {
  const {
    pets,
    pet,
    filter,
    handleAddPet,
    handleUpdatePet,
    handleDeletePet,
    fetchPet,
    handleAdopte,
    handleFilter,
  } = usePets();

  const [selectedPet, setSelectedPet] = useState(null);
  const [addpet, setAddPet] = useState();
  const [editpet, setEditPet] = useState();
  const displayedPets = filter.length > 0 ? filter : pets;

  const handleFilterChange = async (mood) => {
    await handleFilter(mood);
  };

  const handleAdopteChange = async (id, Adopted) => {
    await handleAdopte(id, Adopted);
  };

  const handlePetSave = async (selectedPet, data) => {
    if (selectedPet) {
      setEditPet(true);

      await fetchPet(selectedPet);
      await handleUpdatePet(selectedPet, data);
    } else {
      setAddPet(true);
      await handleAddPet(data);
    }
  };

  return (
    <div className='max-w-5xl h-full mx-auto p-4 space-y-6'>
      <Header />
      <div className='flex justify-between'>
        <FilterBar onFilterChange={handleFilterChange} />
        <div
          onClick={() => setAddPet(true)}
          className='py-2 px-2 bg-amber-600 rounded-lg text-white cursor-pointer'
        >
          Createpet
        </div>
      </div>

      <PetList
        pets={displayedPets}
        handleDelete={handleDeletePet}
        handleEdit={handlePetSave}
        handleAdopte={handleAdopteChange}
      />

      <Modal
        title={'AddPet'}
        setISOpen={setAddPet}
        isOpen={addpet}
        children={
          <AddPetForm
            onPetSave={handlePetSave}
            selectedPet={pet}
            clearSelectedPet={setSelectedPet}
          />
        }
      />

      <Modal
        title={'EditPet'}
        setISOpen={setEditPet}
        isOpen={editpet}
        children={
          <AddPetForm
            onPetSave={handlePetSave}
            selectedPet={pet}
            clearSelectedPet={setSelectedPet}
          />
        }
      />
    </div>
  );
};

export default HomePage;
