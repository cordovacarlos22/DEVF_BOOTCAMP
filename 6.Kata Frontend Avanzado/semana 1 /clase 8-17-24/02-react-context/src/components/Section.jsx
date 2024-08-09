import React from 'react'
import SectionTitle from './SectionTitle';

const Section = ({ tittle, description, children }) => {
  return (
    <>
      <SectionTitle
        title={tittle}
      >


      </SectionTitle>
      <p>
        {description}
      </p>
      {children}
    </>
  ) 
};

export default Section