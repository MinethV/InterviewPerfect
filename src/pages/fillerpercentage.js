import React, { useEffect, useState } from 'react';

const FillerPercentagePage = () => {
  const [fillerPercentage, setFillerPercentage] = useState(null);

  useEffect(() => {
    const fetchFillerPercentage = async () => {
      try {
        const response = await fetch('http://localhost:8000/get_filler_percentage/');
        if (!response.ok) {
          throw new Error('Failed to fetch filler percentage');
        }
        const data = await response.json();
        setFillerPercentage(data.filler_percentage);
      } catch (error) {
        console.error('Error fetching filler percentage:', error);
      }
    };

    fetchFillerPercentage();
  }, []);

  return (
    <div>
      <h2>Filler Words Percentage</h2>
      {fillerPercentage !== null ? (
        <p>{`Filler Words Percentage: ${fillerPercentage.toFixed(2)}%`}</p>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default FillerPercentagePage;
