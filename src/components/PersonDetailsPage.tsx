import React from 'react';
import { useParams } from 'react-router-dom';

export const PersonDetailsPage: React.FC = () => {
  const { personSlug } = useParams();

  return (
    <div className="content">
      <h1 className="title">Деталі про людину</h1>
      <p>
        Ми шукаємо інформацію про: <strong>{personSlug}</strong>
      </p>
    </div>
  );
};
