import React, { useState } from 'react';
import { Container, TextInput, Select, Button, Text, Box, Notification } from '@mantine/core';
import { FaSearch } from 'react-icons/fa';
import AsyncSelect from 'react-select/async';
import { useNavigate } from 'react-router-dom';
import LoadingOverlayComponent from './LoadingOverlayComponent';
import { apiConstants, client } from '../API/client';
import { MdError } from 'react-icons/md';


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
  const [inputValue, setInputValue] = useState('');
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [notification, setNotification] = useState({ show: false, title: '', message: '', color: '', icon: null });


  const toggleLoading = () => {
    setLoading((prevLoading) => !prevLoading);
  };
  const loadOptions = (inputValue, callback) => {
    toggleLoading()
    client.get(apiConstants.CATEGORIES + inputValue)
      .then((response) => {
        toggleLoading()
        const options = response.data.map(item => ({
          value: item.value,
          label: item.label
        }));
        callback(options); // Pass the options to the callback to display them in the dropdown
      })
      .catch((error) => {
        toggleLoading()
        console.error('Error fetching data:', error);
        callback([]);
        setNotification({
          show: true,
          title: 'Error',
          message: error.message,
          color: 'red',
          icon: <MdError />
        });
      });
  };

  const loadOptionsCity = (inputValue, callback) => {
    toggleLoading()
    client.get(apiConstants.STATE + inputValue)
      .then((response) => {
        toggleLoading()
        const options = response.data.map(item => ({
          value: item.value,
          label: item.label
        }));
        callback(options); // Pass the options to the callback to display them in the dropdown
      })
      .catch((error) => {
        toggleLoading()
        console.error('Error fetching data:', error);
        callback([]);
        setNotification({
          show: true,
          title: 'Error',
          message: error.message,
          color: 'red',
          icon: <MdError />
        });
      });
  };

  const handleSearchChange = (selectedOption) => {
    setSearch(selectedOption);
  };
  const handleCityChange = (selectedOption) => {
    setCity(selectedOption);
  };

  const searchHandler = () => {
    // redirect  to results;
    navigate("/search", { state: { search, city } });

    // navigate("/search", { state: { search: search,city:city } });
  }

  const handleInputChange = (newValue) => {
    const inputValue = newValue.replace(/\W/g, ''); // Example of processing input
    setInputValue(inputValue);
    return inputValue;
  };

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
      <LoadingOverlayComponent visible={loading} />
      {notification.show && (
        <div style={{
          position: 'fixed',
          top: '10px',
          right: '10px',
          zIndex: 1000
        }}>
          <Notification
            color={notification.color}
            icon={notification.icon}
            onClose={() => setNotification({ show: false, title: '', message: '', color: '', icon: null })}
          >
            <strong>{notification.title}</strong>
            <br />
            {notification.message}
          </Notification>
        </div>
      )
      }
      <Container className=''>
        <Text size="xl" weight={'bold'} className='mt-[10px] text-white text-center'>
          Let’s Explore YOUR AMAZING CITY
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
            onInputChange={handleInputChange}
            styles={customStyles}
          />
          <div className="w-96">
            <AsyncSelect
              cacheOptions
              loadOptions={loadOptionsCity}
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
          <Button onClick={searchHandler} disabled={!search || !city} color="yellow" size="md" className='min-w-max' leftSection={<FaSearch size={16} />}>
            Search
          </Button>
        </Box>

        {/* <Text size="sm" color="#8a6d3b" style={{ marginTop: '15px' }}>
          <strong>Note:</strong> Search by entering text like Spa Centers, AC Repairing, Hospitals, Hotels, etc.
        </Text> */}
      </Container>
    </Box >
  );
}

export default ExploreCity;
