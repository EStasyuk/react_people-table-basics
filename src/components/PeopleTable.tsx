import React from 'react';
import { useParams } from 'react-router-dom';
import { PersonLink } from './PersonLink';

interface Person {
  slug: string;
  name: string;
  sex: string;
  born: number;
  motherName?: string;
  fatherName?: string;
}

interface Props {
  people: Person[];
}

export const PeopleTable: React.FC<Props> = ({ people }) => {
  const { personSlug } = useParams();

  return (
    <table
      data-cy="peopleTable"
      className="table is-striped is-hoverable is-narrow is-fullwidth"
    >
      <thead>
        <tr>
          <th>Name</th>
          <th>Sex</th>
          <th>Born</th>
          <th>Mother</th>
          <th>Father</th>
        </tr>
      </thead>
      <tbody>
        {people.map(person => (
          <tr
            key={person.slug}
            className={
              person.slug === personSlug ? 'has-background-warning' : ''
            }
          >
            <td>
              <PersonLink person={person} nameToDisplay={person.name} />
            </td>
            <td>{person.sex}</td>
            <td>{person.born}</td>
            <td>
              <PersonLink
                person={people.find(p => p.name === person.motherName) || null}
                nameToDisplay={person.motherName || ''}
              />
            </td>
            <td>
              <PersonLink
                person={people.find(p => p.name === person.fatherName) || null}
                nameToDisplay={person.fatherName || ''}
              />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};