import {
  Box,
  Flex,
  Grid,
  Heading,
  Image,
  Link,
  List,
  ListItem,
  Text,
} from '@chakra-ui/react';
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#F8F8F8]">
      <Grid
        templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(4, 1fr)' }}
        w={'95%'}
        m={'auto'}
        p={10}
        justify={'space-between'}
        align={'start'}
        gap={20}
        paddingY={20}
      >
        <Flex justify={'center'} align={'center'}>
          <Image
            src="/Assets/logo.png"
            objectFit={'fill'}
            w={{ base: 140, md: 180 }}
            alt="logo"
          />
        </Flex>
        <Flex gap={5} flexDirection={'column'}>
          <Heading color={'#0E2368'} fontSize={'2xl'} fontFamily={'sans-serif'}>
            Contact Us
          </Heading>
          <Text color={'#646874'} fontFamily={'sans-serif'}>
            Lorem Ipsum Pvt Ltd.5/1, Magalton Road, Phartosh Gate near YTM
            Market, XYZ-343434
          </Text>
          <Text color={'#646874'} fontFamily={'sans-serif'}>
            example2020@gmail.com
          </Text>
          <Text color={'#646874'} fontFamily={'sans-serif'}>
            (904) 443-0343
          </Text>
        </Flex>
        <Flex
          gap={5}
          ml={{ base: 0, md: 20 }}
          justify={'space-between'}
          flexDirection={'column'}
        >
          <Heading color={'#0E2368'} fontSize={'2xl'} fontFamily={'sans-serif'}>
            More
          </Heading>
          <List spacing={5} color={'#646874'} fontFamily={'sans-serif'}>
            <ListItem>About Us</ListItem>
            <ListItem>Products</ListItem>
            <ListItem>Career</ListItem>
            <ListItem>Contact Us</ListItem>
          </List>
        </Flex>
        <Flex
          justify={'space-between'}
          align={'center'}
          flexDirection={{ base: 'column-reverse', md: 'column' }}
        >
          <Box>
            <Heading
              color={'#0E2368'}
              fontSize={'2xl'}
              fontFamily={'sans-serif'}
              display={{ base: 'none', md: 'block' }}
            >
              Social Links
            </Heading>
            <Flex align={'center'} gap={10} mt={5} justify={'space-evenly'}>
              <Link href="https://www.instagram.com" target={'_blank'}>
                <Image src="/Assets/insta.png" />
              </Link>
              <Link href="https://www.twitter.com" target={'_blank'}>
                <Image src="/Assets/twitter.png" />
              </Link>
              <Link href="https://www.facebook.com" target={'_blank'}>
                <Image src="/Assets/facebook.png" />
              </Link>
            </Flex>
          </Box>
          <Text color={'#646874'} fontFamily={'sans-serif'}>
            © 2022 Food Truck Example
          </Text>
        </Flex>
      </Grid>
    </footer>
  );
};

export default Footer;
