import React from 'react';
import { Container, Grid, Image, Text, Title } from '@mantine/core';

const HowItWorksPage = () => {
  return (
    <>
      {/* Header Section */}
      <div style={{
       backgroundImage: 'url(https://cdnb.artstation.com/p/assets/covers/images/035/208/137/large/ideun-kim-ideun-kim-commerce-detail-planet03-a.jpg?1614363356)',
        backgroundSize: 'cover',
        padding: '80px 0',
        textAlign: 'center',
        color: 'white'
      }}>
        <Container>
          <Title order={1} style={{ fontSize: '36px', marginBottom: '10px' }}>
            HOW IT WORKS
          </Title>
          <Text size="lg">Home - How It Works</Text>
        </Container>
      </div>

      {/* Content Section */}
      <Container size="lg" py="xl">
        <Grid gutter="lg" align="center">
          {/* <Grid.Col xs={12} md={6}>
            <Image src="https://metasourcesolutions.com/wp-content/uploads/2023/07/about-img.jpg" alt="About Image" />
          </Grid.Col> */}
          <Grid.Col xs={12} md={6}>
            <Title order={2} style={{ marginBottom: '20px' }}>
              About Our MetaSource Community and Our Expertise
            </Title>
            <Text size="md" color="dimmed">
              MetaSource believe in simplifying your search for local, near-by services and connecting you with the right businesses in your area. Our comprehensive online directory and user-friendly platform make it effortless to find the services you need, whether you're looking for a restaurant, a doctor, a plumber, or anything in between. With a vast database of businesses and service providers, we connect you with local businesses. Our platform covers a wide range of categories, including restaurants, hotels, hospitals, beauty salons, car rentals, home services, and much more. Whatever you're searching for, we strive to provide you with accurate and up-to-date information to make informed decisions.
            </Text>
          </Grid.Col>
        </Grid>
      </Container>
    </>
  );
};

export default HowItWorksPage;
