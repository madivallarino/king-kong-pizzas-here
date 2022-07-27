import React, { useEffect, useState } from 'react';
import  { Faker, faker }  from '@faker-js/faker';
import Story from './Story';

function Stories() {
    const [suggestions, setSuggestions ] = useState([])
    useEffect(()=> {
        const suggestions = [...Array(20)].map((_, i) => ({
          username: faker.internet.userName(),
          address: faker.address.streetAddress(true),
          company: faker.company.companyName(),
          dob: faker.date.birthdate(),
          phone: faker.phone.number(),
          avatar: faker.image.image(),
          email: faker.internet.email(),
          full_name     : faker.name.firstName() + ' ' + faker.name.lastName(),
           id: i, 

        })
        );
        setSuggestions(suggestions)
    }, [])


  return (
    <div className='flex space-x-2 p-6 bg-white mt-8 border-gray-200 rounded-sm overflow-x-scroll scrollbar-thin scrollbar-thumb-black '>
        {suggestions.map(profile => (
            <Story 
              key={profile.id}
              img={profile.avatar}
              username={profile.username}
            />
        ))}
    </div>
  )
}

export default Stories