import {
  Box,
  Button,
  Card,
  CardBody,
  Flex,
  Heading,
  Image,
  Text,
} from '@chakra-ui/react';
import React from 'react';

const ArticleCard = ({ title, desc, image }) => {
  return (
    <Card
      w={'full'}
      rounded={'21px'}
      bg={'white'}
      p={3}
      paddingY={{ base: 5, md: 'auto' }}
      border={'2px solid rgba(147, 162, 211, 0.38)'}
      borderColor={{ base: '#373737', md: 'rgba(147, 162, 211, 0.38)' }}
    >
      <CardBody>
        <Box w={'full'}>
          <Image
            src={image}
            alt="article image 1"
            objectFit="fill"
            m={'auto'}
            rounded={'21px'}
          />
          <Box w={{ base: 'full', md: '85%' }} m={'auto'} mt={8}>
            <Heading
              color={'#0E2368'}
              mx={'-2'}
              fontSize={{ base: 'lg', md: 'xl' }}
              textAlign={{ base: 'center', md: 'left' }}
            >
              {title}
            </Heading>
            <Text
              w={{ base: '95%', md: 'full' }}
              m={'auto'}
              marginTop={3}
              color={'#444957'}
              noOfLines={5}
              fontSize={{ base: 'sm', md: 'lg' }}
            >
              {desc}
            </Text>
            <Flex
              w={'full'}
              mt={8}
              justifyContent={{ base: 'center', md: 'start' }}
            >
              <Button
                border={{ base: '3px solid #424961', md: '1px solid #424961' }}
                color={'#424961'}
                borderRadius={'21px'}
                paddingX={10}
                paddingY={'-1px'}
                fontSize={{ base: 'sm', md: 'md' }}
              >
                Read More
              </Button>
            </Flex>
          </Box>
        </Box>
      </CardBody>
    </Card>
  );
};

export default ArticleCard;
