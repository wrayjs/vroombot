import React from 'react';
import { branch, renderNothing } from 'recompose';

const labels = {
  miles: 'Miles',
  gallons: 'Gallons',
  dollars: 'Price',
};

const DayView = ({ entry, className }) => (
  <div className='DayView'>
    {Object.keys(labels).map(key => (
      <div key={key} className={entry[key] ? 'text' : 'text-danger'}>
        {labels[key]}: {entry[key]}
      </div>
    ))}
  </div>
);

export default branch(({ entry }) => !entry, renderNothing)(DayView);
