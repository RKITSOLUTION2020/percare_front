import React from 'react';
import { MdDelete } from 'react-icons/md';
import { MdEdit } from 'react-icons/md';
import moment from 'moment';

export const PetCard = ({ pet, onUpdate, onDelete, onCheckAdopted, image }) => {
  return (
    <div className='relative max-w-xs border border-solid border-gray-200 rounded-2xl transition-all duration-500 '>
      <div className='block overflow-hidden'>
        <img
          src={image}
          alt='Pet'
          className='w-full h-48 object-cover rounded'
        />
      </div>
      <div className='p-4 flex justify-between items-center'>
        <div>
          <h4 className='text-base font-semibold text-gray-900 capitalize transition-all duration-500'>
            {pet.name}
          </h4>
          <p className='text-sm font-normal text-gray-500 transition-all duration-500 leading-5 mb-5'>
            {pet.species}
          </p>
          <p>
            {pet.adoption_date
              ? moment(pet.adoption_date).format('MMMM D, YYYY')
              : ''}
          </p>
        </div>

        <div
          className={`w-4 h-4 rounded-full ${
            pet.personality === 'Happy'
              ? 'bg-green-500 '
              : pet.personality === 'Sad'
              ? 'bg-red-500'
              : pet.personality === 'Neutral'
              ? 'bg-yellow-500'
              : 'bg-gray-400'
          }  `}
        ></div>
      </div>

      {/* Adopted Checkbox */}
      <div className='px-4 mb-3'>
        <label className='inline-flex items-center gap-2 text-sm text-gray-700'>
          <label className='inline-flex items-center gap-2 text-sm text-gray-700'>
            <input
              type='checkbox'
              checked={pet.adopted === true}
              onChange={() => onCheckAdopted(pet._id, !pet.adopted)}
              className='accent-green-500 size-5 cursor-pointer'
            />
            {pet.adopted ? 'Adopted' : 'UnAdopted'}
          </label>
        </label>
      </div>

      <div className='flex items-center justify-between p-2'>
        <MdEdit
          className='text-4xl text-blue-500 border rounded-full p-1'
          onClick={() => onUpdate(pet._id)}
        />
        <MdDelete
          className='text-4xl text-[#ff3f82] border rounded-full p-1'
          onClick={() => onDelete(pet._id)}
        />
      </div>
    </div>
  );
};

export default PetCard;
