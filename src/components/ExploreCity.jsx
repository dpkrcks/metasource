// import React from 'react';
// import '../css/ExploreCity.css';

// function ExploreCity() {
//   return (
//     <div className="explore-container">
//       <div className="overlay">
//         <h1>Let's Explore</h1>
//         <h2>Your Amazing City</h2>
//         {/* <p>Find great places to stay, eat, shop, or visit from local experts.</p> */}
//         <div className="search-bar">
//           <select className="category-select">
//             <option>All Categories</option>
//             <option>Category 1</option>
//             <option>Category 2</option>
//             <option>Category 3</option>
//           </select>
//           <input type="text" placeholder="Location" className="location-input" />
//           <button className="search-button">Search</button>
//         </div>
//         <p className="browse-categories">Or browse the selected categories</p>
//       </div>
//     </div>
//   );
// }

// export default ExploreCity;

// src/TraderzPlanet.js

import React, { useState } from 'react';
import { Container, TextInput, Select, Button, Text, Box, Image } from '@mantine/core';
import { FaSearch } from 'react-icons/fa';
import AsyncSelect from 'react-select/async';
import { useNavigate } from 'react-router-dom';


// Dummy data
const dummyData = [
  { value: 'apple', label: 'Apple' },
  { value: 'banana', label: 'Banana' },
  { value: 'cherry', label: 'Cherry' },
  { value: 'date', label: 'Date' },
  { value: 'elderberry', label: 'Elderberry' },
  { value: 'fig', label: 'Fig' },
  { value: 'grape', label: 'Grape' },
  { value: 'honeydew', label: 'Honeydew' }
];

// Simulate an async data fetch
const fetchData = (inputValue) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const filteredData = dummyData.filter(item =>
        item.label.toLowerCase().includes(inputValue.toLowerCase())
      );
      resolve(filteredData);
    }, 2000); // Simulate a delay
  });
};

const customStyles = {
  container: (provided) => ({
    ...provided,
    display: 'inline-block',
    minWidth: '120px', // Adjust as needed,
    width: '100%',
    height: '100%',
  }),
  control: (provided, state) => ({
    ...provided,
    backgroundColor: state.isDisabled ? '#f9f9f9' : '#fff',
    borderColor: state.isFocused ? '#3b82f6' : '#d1d5db',
    boxShadow: state.isFocused ? '0 0 0 2px rgba(59, 130, 246, 0.5)' : 'none',
    padding: '0.5rem',
    '&:hover': {
      borderColor: state.isFocused ? '#3b82f6' : '#9ca3af',
    },
  }),
  menu: (provided) => ({
    ...provided,
    backgroundColor: '#fff',
    borderColor: '#d1d5db',
    boxShadow: '0 5px 15px rgba(0, 0, 0, 0.1)',
    zIndex: 10,
  }),
  option: (provided, state) => ({
    ...provided,
    backgroundColor: state.isSelected
      ? '#3b82f6'
      : state.isFocused
        ? '#e5e7eb'
        : '#fff',
    color: state.isSelected ? '#fff' : '#111827',
    padding: '0.5rem 1rem',
    '&:hover': {
      backgroundColor: state.isSelected ? '#3b82f6' : '#e5e7eb',
      color: state.isSelected ? '#fff' : '#111827',
    },
  }),
  placeholder: (provided) => ({
    ...provided,
    color: '#9ca3af',
    fontSize: '0.875rem',
  }),
  singleValue: (provided) => ({
    ...provided,
    color: '#111827',
  }),
  input: (provided) => ({
    ...provided,
    color: '#111827',
  }),
};

function ExploreCity() {
  const [search, setSearch] = useState(null);
  const [city, setCity] = useState(null);
  const navigate = useNavigate();

  const loadOptions = (inputValue, callback) => {
    fetchData(inputValue).then(options => {
      callback(options);
    });
  };

  const handleSearchChange = (selectedOption) => {
    setSearch(selectedOption);
  };
  const handleCityChange = (selectedOption) => {
    setCity(selectedOption);
  };

  const searchHandler = () => {
    // api call;
    // redirect  to results;
    navigate("/search", { state: { id: 1 } });
  }

  return (
    <Box
      style={{
        height: '50vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '10px',
      }}
    >
      <Container className=''>
        {/* <Image src="/logo.png" alt="Traderz Planet Logo" width={150} /> */}
        <Text size="xl" weight={'bold'} className='mt-[10px] text-red-500 text-center'>
          Worldwide Digital Phone Directory
        </Text>

        <Box
          style={{
            backgroundColor: 'white',
            boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
          }}
          className="mt-[20px] p-[20px] rounded-[20px] flex items-center justify-center gap-x-2 max-w-[1500px]"
        >

          <AsyncSelect
            cacheOptions
            loadOptions={loadOptions}
            onChange={handleSearchChange}
            value={search}
            placeholder="Search..."
            styles={customStyles}
          />
          <div className="w-60">
            <AsyncSelect
              cacheOptions
              loadOptions={loadOptions}
              onChange={handleCityChange}
              value={city}
              placeholder="City"
              styles={customStyles}
            />
          </div>
          {/* <TextInput
            placeholder="What are you looking for?"
            style={{ flex: 1, marginRight: '10px' }}
            size="md"
          /> */}
          {/* <Select
            placeholder="Select City"
            data={['City 1', 'City 2', 'City 3']}
            style={{ marginRight: '10px' }}
            size="md"
          /> */}
          <Button onClick={searchHandler} disabled={!search || !city} color="yellow" size="md" className='min-w-max' leftIcon={<FaSearch size={16} />}>
            Search
          </Button>
        </Box>

        {/* <Text size="sm" color="#8a6d3b" style={{ marginTop: '15px' }}>
          <strong>Note:</strong> Search by entering text like Spa Centers, AC Repairing, Hospitals, Hotels, etc.
        </Text> */}
      </Container>
    </Box>
  );
}

export default ExploreCity;
