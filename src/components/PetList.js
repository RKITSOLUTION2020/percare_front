import React from 'react';
import PetCard from './PetCard';

const PetList = ({ pets, handleEdit, handleDelete, handleAdopte }) => {
  const images = [
    'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGV0c3xlbnwwfHwwfHx8MA%3D%3D',
    'https://images.unsplash.com/photo-1583511655826-05700d52f4d9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHBldHN8ZW58MHx8MHx8fDA%3D',
    'https://plus.unsplash.com/premium_photo-1707353402061-c31b6ba8562e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cGV0c3xlbnwwfHwwfHx8MA%3D%3D',
    'https://images.unsplash.com/photo-1625316708582-7c38734be31d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHBldHN8ZW58MHx8MHx8fDA%3D',
  ];
  return (
    <div className='grid gap-4 sm:grid-cols-2 md:grid-cols-3'>
      {pets.map((pet, index) => (
        <PetCard
          key={pet._id}
          pet={pet}
          onUpdate={handleEdit}
          onDelete={handleDelete}
          onCheckAdopted={handleAdopte}
          image={images[index % images.length]}
        />
      ))}
    </div>
  );
};

export default PetList;
