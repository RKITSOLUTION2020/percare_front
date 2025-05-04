// src/components/AddPetForm.js
import React, { useEffect, useState } from 'react';

const AddPetForm = ({ onPetSave, selectedPet, clearSelectedPet }) => {
  console.log('sele', selectedPet);

  const [formData, setFormData] = useState({
    name: '',
    species: '',
    age: '',
    personality: '',
  });

  useEffect(() => {
    if (selectedPet) {
      setFormData(selectedPet);
    } else {
      setFormData({ name: '', species: '', age: '', personality: '' });
    }
  }, [selectedPet]);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.species || !formData.age) return;

    if (selectedPet) {
      await onPetSave(formData._id, formData);
    } else {
      await onPetSave(formData);
    }

    setFormData({ name: '', species: '', age: '', personality: '' });
    clearSelectedPet();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className='bg-white p-4 rounded shadow space-y-3 w-[70vw] h-[30vw]'
    >
      <h2 className='text-lg font-semibold'></h2>
      <div className='grid gap-2 sm:grid-cols-2'>
        <input
          type='text'
          name='name'
          value={formData.name}
          onChange={handleChange}
          placeholder='Pet Name'
          className='border rounded px-2 py-1'
        />
        <input
          type='text'
          name='species'
          value={formData.species}
          onChange={handleChange}
          placeholder='Species'
          className='border rounded px-2 py-1'
        />
        <input
          type='number'
          name='age'
          value={formData.age}
          onChange={handleChange}
          placeholder='Age'
          className='border rounded px-2 py-1'
        />
        <select
          name='personality'
          value={formData.personality}
          onChange={handleChange}
          className='border rounded px-2 py-1 sm:col-span-2'
        >
          <option
            value=''
            className='text-gray-400'
          >
            select
          </option>
          <option value='Happy'>Happy</option>
          <option value='Neutral'>Neutral</option>
          <option value='Sad'>Sad</option>
        </select>
      </div>
      <button
        type='submit'
        className='border border-amber-500 text-black font-medium px-4 py-2 rounded '
      >
        {(selectedPet.length = 0 ? 'Add Pet' : 'Update Pet')}
      </button>
    </form>
  );
};

export default AddPetForm;
