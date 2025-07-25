import React, { useEffect, useState } from 'react';
import { fetchDonors } from '../data/api';

const DonorList = () => {
  const [donors, setDonors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchDonors()
      .then(setDonors)
      .catch(err => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <div>Loading donors...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h2>Donor List</h2>
      <ul>
        {donors.map(donor => (
          <li key={donor.id}>{donor.name} ({donor.email}) - Donated Books: {donor.donated_books}</li>
        ))}
      </ul>
    </div>
  );
};

export default DonorList;
