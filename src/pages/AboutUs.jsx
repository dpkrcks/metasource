import React from 'react';
import { Container, Grid, Image, Text, Title, Space } from '@mantine/core';
import backgroundImage from '../assets/meta.jpg';


const AboutUs = () => {
  return (
    <Container>
      {/* Header Section */}
      <div style={{ backgroundColor: '#0e1b32', padding: '40px 0' }}>
        <Container>
          <Title order={1} style={{ color: '#fff', textAlign: 'center' }}>
            ABOUT US
          </Title>
          <Text style={{ color: '#fff', textAlign: 'center' }}>
            Home - About Us
          </Text>
        </Container>
      </div>

      {/* Content Section */}
      <Container>
        <Space h="xl" />
        <Text align="center" size="sm" weight={500} color="cyan">
          GET TO KNOW ABOUT US
        </Text>
        <Title align="center" order={2}>
          Our Mission
        </Title>
        <Text align="center" size="lg" color="dimmed">
          Our online digital directory offers convenient features and services to enhance your experience. With MetaSource, you can access local services on the go and read reviews. Our aim is to provide a seamless and convenient solution that caters to your needs and saves you time and effort. In short, we are a digital phone directory where you can find anything.
        </Text>
        <Space h="xl" />

        {/* Image and Text Section */}
        <Grid>
          {/* <Grid.Col span={12} md={6}>
            <Image src="path/to/your/image1.png" alt="About Image" />
          </Grid.Col> */}
          <Grid.Col span={12} md={6}>
            <Title order={3}>
              About Our MetaSource Community and Our Expertise
            </Title>
            <Text>
              MetaSource believes in simplifying your search for local, nearby services and connecting you with the right businesses in your area. Our comprehensive online directory and user-friendly platform make it effortless to find the services you need, whether you're looking for a restaurant, a doctor, a plumber, or anything in between. With a vast database of businesses and service providers, we connect with local businesses. Our platform covers a wide range of categories, including restaurants, hotels, hospitals, beauty salons, car rentals, home services, and much more. Whatever you're searching for, we strive to provide you with accurate and up-to-date information to make informed decisions.
            </Text>
          </Grid.Col>
        </Grid>
      </Container>
    </Container>
  );
};

export default AboutUs;
