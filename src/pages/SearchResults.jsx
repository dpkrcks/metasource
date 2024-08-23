import React, { useEffect, useState } from 'react';
import { Container, Button, Text, Box, Grid, Card, Badge, Group, Notification } from '@mantine/core';
import { FaUserPlus } from 'react-icons/fa';
import { useLocation } from 'react-router-dom';
import { apiConstants, client } from '../API/client';
import LoadingOverlayComponent from '../components/LoadingOverlayComponent';
import { MdError } from 'react-icons/md';
import backgroundImage from '../assets/meta.jpg';

function SearchResults() {
  const location = useLocation();
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([])
  const [notification, setNotification] = useState({ show: false, title: '', message: '', color: '', icon: null });

  const toggleLoading = (val) => {
    setLoading(val);
  };
  const { search, city } = location.state || {};
  const searchValue = search?.value;
  const cityValue = city?.value;

  let params = {
    "stateName": cityValue,
    "smallCategory": searchValue
  }
  useEffect(() => {
    toggleLoading(true)
    client.post(apiConstants.DETAILS + '1&pageSize=20', params)
      .then((response) => {
        toggleLoading(false)
        setData(response.data)
      })
      .catch((error) => {
        toggleLoading(false)
        setNotification({
          show: true,
          title: 'Error',
          message: error.message,
          color: 'red',
          icon: <MdError />
        });
        console.error('Error fetching data:', error);
      });

  }, [search])
  return (
    // <div
    //   className="h-full w-full flex flex-col justify-between bg-cover bg-center"
    //   style={{
    //     backgroundImage: `url(${backgroundImage})`,
    //   }}
    // >
    <div
    className="min-h-screen w-full flex flex-col justify-between bg-cover bg-center"
    style={{
      backgroundImage: `url(${backgroundImage})`,
      backgroundAttachment: 'fixed',
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

      <Container mt={'md'} mb={'md'}>
        <Grid gutter="lg" style={{ marginTop: '20px' }}>
          {data.map((hotel, index) => (
            <Grid.Col span={6} key={index}>
              <Card shadow="sm" padding="lg">
                <Group position="apart" style={{ marginBottom: 5 }}>
                  <Text weight={500}>{hotel.companyName}</Text>
                  <Badge color={hotel.badgeColor} variant="filled">
                    {hotel.companyName.charAt(0)}
                  </Badge>
                </Group>

                <Text size="sm" style={{ lineHeight: 1.5 }}>
                  <strong>Owner Name:</strong> {hotel.ownerName}
                  <br />
                  <strong>Pin Code:</strong> {hotel.pincode}
                </Text>

                <Group position="apart" style={{ marginTop: 15 }}>
                  <Text size="sm">
                    <span role="img" aria-label="stars">⭐</span> ({hotel.reviews} reviews)
                  </Text>
                  <Button variant="light" color="yellow" radius="xl" size="sm" leftSection={<FaUserPlus />}>
                    ADD TO LIST
                  </Button>
                </Group>
              </Card>
            </Grid.Col>
          ))}
        </Grid>
      </Container>
    </div>
  );
}

export default SearchResults;
