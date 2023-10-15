import { Box, Button, Flex, Heading, Image, Text } from '@chakra-ui/react';
import React from 'react';

const AboutPage = () => {
  return (
    <Flex
      w={{ base: 'full', md: '90%' }}
      m={'auto'}
      justify={'center'}
      align={'center'}
      flexDirection={{ base: 'column', md: 'row' }}
    >
      <Box
        w={'full'}
        p={50}
        paddingTop={0}
        paddingBottom={0}
        display={{ base: 'none', md: 'block' }}
      >
        <Image
          src="/Assets/about.png"
          m={'auto'}
          alt="Hero"
          objectFit={'fill'}
          w={300}
        />
      </Box>
      <Box
        w={'full'}
        p={10}
        paddingY={{ base: '24', md: 0 }}
        textAlign={{ base: 'center', md: 'left' }}
      >
        <Heading
          as="h1"
          className={'text-[#0E2368] tracking-[0.1rem]'}
          size={'xl'}
          fontFamily={'sans-serif'}
        >
          About Us
        </Heading>
        <Text
          w={'full'}
          fontSize={'sm'}
          letterSpacing={1}
          className="text-[#444957] w-[74%]"
          mt={4}
        >
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. t has survived not only
          five centuries.
        </Text>
        <Button
          mt={6}
          backgroundColor={'#E23744'}
          borderRadius={30}
          padding={6}
          paddingX={10}
          paddingY={3}
          color={'white'}
          _hover={{ backgroundColor: '#e23745c7' }}
        >
          Read More
        </Button>
      </Box>
    </Flex>
  );
};

export default AboutPage;
