const API_BASE = 'http://localhost:5000/api';

export async function fetchBooks() {
  const res = await fetch(`${API_BASE}/books`);
  if (!res.ok) throw new Error('Failed to fetch books');
  return res.json();
}

export async function fetchDonors() {
  const res = await fetch(`${API_BASE}/donors`);
  if (!res.ok) throw new Error('Failed to fetch donors');
  return res.json();
} 