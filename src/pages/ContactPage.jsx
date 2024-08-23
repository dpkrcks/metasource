// ContactPage.jsx
import React from 'react';
import { Container, Grid, Card, Text, ThemeIcon, Group,Flex } from '@mantine/core';
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from 'react-icons/fa';
import backgroundImage from '../assets/meta.jpg';


const ContactPage = () => {
  return (
    // <div className="h-full w-full bg-cover bg-center overflow-auto" style={{
    //     backgroundImage: 'url(https://cdnb.artstation.com/p/assets/covers/images/035/208/137/large/ideun-kim-ideun-kim-commerce-detail-planet03-a.jpg?1614363356)'
    //   }}
    //   >
    <div
        className="h-full w-full flex flex-col justify-between bg-cover bg-center"
        style={{
          backgroundImage: `url(${backgroundImage})`,
        }}
      >
    <Container size="lg" py="xl" mb={'lg'}>
      <Text align="center" size="xl" weight={700} mt="md" color='white'>
        Contact US
      </Text>
    
      
      <Grid justify="center" mt={'lg'}>
        {/* <Grid.Col xs={12} sm={4}>
          <Card shadow="sm" padding="lg">
          <Flex
              direction="column"
              align="center"
              justify="center"
              style={{ height: '100%' }}
            >
            <Group direction="column" align="center">
              <ThemeIcon radius="xl" size="xl" color="blue">
                <FaMapMarkerAlt size={30} />
              </ThemeIcon>
              <Text size="lg" weight={500} >Visit Us Anytime</Text>
              <Text color="dimmed">123 Main St, Anytown, USA</Text>
            </Group>
            </Flex>
          </Card>
        </Grid.Col> */}
        
        <Grid.Col xs={12} sm={4} mb={'lg'}>
          <Card shadow="sm" padding="lg">
          <Flex
              direction="column"
              align="center"
              justify="center"
              style={{ height: '100%' }}
            >
            <Group direction="column" align="center">
              <ThemeIcon radius="xl" size="xl" color="blue">
                <FaEnvelope size={30} />
              </ThemeIcon>
              <Text size="lg" weight={500}>Send an Email</Text>
              <Text color="dimmed">info@metasourcesolutions.com</Text>
            </Group>
            </Flex>
          </Card>
        </Grid.Col>
        
        <Grid.Col xs={12} sm={4} mt={'lg'}>
          <Card shadow="sm" padding="lg">
          <Flex
              direction="column"
              align="center"
              justify="center"
              style={{ height: '100%' }}
            >
            <Group direction="column" align="center">
              <ThemeIcon radius="xl" size="xl" color="blue">
                <FaPhoneAlt size={30} />
              </ThemeIcon>
              <Text size="lg" weight={500}>Call Center</Text>
              <Text color="dimmed">+91 9990288787</Text>
            </Group>
            </Flex>
          </Card>
        </Grid.Col>
      </Grid>
    </Container>
    </div>
  );
};

export default ContactPage;
