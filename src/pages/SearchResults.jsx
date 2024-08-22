import React, { useEffect } from 'react';
import { Container, Button, Text, Box, Grid, Card, Badge, Group } from '@mantine/core';
import { FaUserPlus } from 'react-icons/fa';
import { useLocation } from 'react-router-dom';

// Sample data
const hotels = [
  { name: 'Hotel Campus', owner_name: 'Kalpit Patel', pin_code: '380015', reviews: 40, badgeColor: 'purple' },
  { name: 'Hotel Mukund Inn', owner_name: 'Mohan', pin_code: '380015', reviews: 49, badgeColor: 'green' },
  { name: 'Airport Resiency', owner_name: 'Siddharth Shukla', pin_code: '380001', reviews: 42, badgeColor: 'orange' },
  { name: 'Jakin Corporation', owner_name: 'Mr. Jakin Shah', pin_code: '382405', reviews: 18, badgeColor: 'gray' },
  { name: 'Hotel Campus', owner_name: 'Kalpit Patel', pin_code: '380015', reviews: 40, badgeColor: 'purple' },
  { name: 'Hotel Mukund Inn', owner_name: 'Mohan', pin_code: '380015', reviews: 49, badgeColor: 'green' },
  { name: 'Airport Resiency', owner_name: 'Siddharth Shukla', pin_code: '380001', reviews: 42, badgeColor: 'orange' },
  { name: 'Jakin Corporation', owner_name: 'Mr. Jakin Shah', pin_code: '382405', reviews: 18, badgeColor: 'gray' },
];

function SearchResults() {
  const location = useLocation();
  const { id } = location.state || {};
  useEffect(() => {
    console.log({ id })
    // api call with this id get the results
  }, [id])
  return (
    <div className="h-full w-full bg-cover bg-center overflow-auto" style={{
      backgroundImage: 'url(https://cdnb.artstation.com/p/assets/covers/images/035/208/137/large/ideun-kim-ideun-kim-commerce-detail-planet03-a.jpg?1614363356)'
    }}
    >
    <Container>
      {/* Hotel List */}
      <Grid gutter="lg" style={{ marginTop: '20px' }}>
        {hotels.map((hotel, index) => (
          <Grid.Col span={6} key={index}>
            <Card shadow="sm" padding="lg">
              <Group position="apart" style={{ marginBottom: 5 }}>
                <Text weight={500}>{hotel.name}</Text>
                <Badge color={hotel.badgeColor} variant="filled">
                  {hotel.name.charAt(0)}
                </Badge>
              </Group>

              <Text size="sm" style={{ lineHeight: 1.5 }}>
                <strong>Owner Name:</strong> {hotel.owner_name}
                <br />
                <strong>Pin Code:</strong> {hotel.pin_code}
              </Text>

              <Group position="apart" style={{ marginTop: 15 }}>
                <Text size="sm">
                  <span role="img" aria-label="stars">⭐</span> ({hotel.reviews} reviews)
                </Text>
                <Button variant="light" color="yellow" radius="xl" size="sm" leftIcon={<FaUserPlus />}>
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
