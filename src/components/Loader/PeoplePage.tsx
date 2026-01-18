import React, { useEffect, useState } from 'react';
import { Loader } from './Loader';
import { PeopleTable } from '../PeopleTable';

interface Person {
  slug: string;
  name: string;
  sex: string;
  born: number;
}

export const PeoplePage: React.FC = () => {
  const [people, setPeople] = useState<Person[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    setIsError(false);

    fetch(
'https://mate-academy.github.io/react_people-table-basics/api/people.json',
    )
      .then(response => {
        if (!response.ok) {
          throw new Error('Помилка сервера');
        }

        return response.json();
      })
      .then(data => {
        setPeople(data);
      })
      .catch(() => {
        setIsError(true);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  return (
    <div className="container">
      <h1 className="title">People Page</h1>

      <div className="box table-container">
        {isLoading && <Loader />}

        {isError && (
          <p data-cy="peopleLoadingError" className="has-text-danger">
            Something went wrong
          </p>
        )}

        {!isLoading && !isError && people.length > 0 && (
          <PeopleTable people={people} />
        )}

        {!isLoading && !isError && people.length === 0 && (
          <p data-cy="noPeopleMessage">There are no people on the server</p>
        )}
      </div>
    </div>
  );
};
