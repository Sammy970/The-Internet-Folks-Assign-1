import React from 'react';
import { Box, Button, Flex, Heading, Text, Image } from '@chakra-ui/react';

const HeroPage = () => {
  return (
    <Flex
      w={{ base: 'full', md: '90%' }}
      m="auto"
      marginRight={0}
      justify="center"
      align="center"
      gap="10"
    >
      <Box w="50%" className="max-sm:hidden">
        <Heading
          as="h1"
          className={'text-[#0E2368] tracking-[0.1rem]'}
          size={'3xl'}
        >
          Discover the <br />
          <Text as="span" className="text-[#E23744]">
            Best
          </Text>{' '}
          Food <br /> and Drinks
        </Heading>
        <Text className="text-[#444957] mt-8">
          Naturally made Healthcare Products for the <br /> better care &
          support of your body.
        </Text>
        <Button
          mt={8}
          backgroundColor={'#E23744'}
          borderRadius={30}
          padding={6}
          _hover={{ backgroundColor: '#e23745c7' }}
        >
          Explore Now!
        </Button>
      </Box>
      <Box w={{ base: 'full', md: '50%' }}>
        <Image src="/Assets/hero_image.png" alt="Hero" objectFit="fill" />
      </Box>
    </Flex>
  );
};

export default HeroPage;
