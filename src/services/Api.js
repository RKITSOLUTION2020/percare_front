const BASE_URL = 'http://localhost:8000/pets';

export const getAllPets = async () => {
  const res = await fetch(BASE_URL);
  return res.json();
};

export const getPetById = async (id) => {
  const res = await fetch(`${BASE_URL}/${id}`);
  if (!res.ok) {
    throw new Error(`Failed to fetch pet with ID ${id}`);
  }
  return res.json();
};

export const getPetByFilter = async (mood) => {
  const res = await fetch(`${BASE_URL}/filter?mood=${mood}`);
  if (!res.ok) {
    throw new Error(`Failed to fetch pet with ID ${mood}`);
  }
  return res.json();
};

export const addPet = async (petData) => {
  const res = await fetch(BASE_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(petData),
  });
  return res.json();
};

export const updatePet = async (id, updates) => {
  const res = await fetch(`${BASE_URL}/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(updates),
  });
  return res.json();
};

export const adoptPet = async (id, adopt) => {
  await fetch(`${BASE_URL}/${id}/adopt?adopt=${adopt}`, {
    method: 'PATCH',
  });
};

export const deletePet = async (id) => {
  await fetch(`${BASE_URL}/${id}`, { method: 'DELETE' });
};
