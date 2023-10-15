import {
  Box,
  Button,
  Flex,
  Grid,
  GridItem,
  Heading,
  Text,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import ArticleCard from '../components/ArticleCard';
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';

const ArticleData = [
  {
    id: 1,
    title: 'Grilled Tomatoes at Home',
    desc: "PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard...",
    image: '/Assets/ArticleImg/a1.png',
  },
  {
    id: 2,
    title: 'Snacks for Travel',
    desc: "PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard...",
    image: '/Assets/ArticleImg/a2.png',
  },
  {
    id: 3,
    title: 'Post-workout Recipes',
    desc: "PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard...",
    image: '/Assets/ArticleImg/a3.png',
  },
  {
    id: 4,
    title: 'How To Grill Corn',
    desc: "PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard...",
    image: '/Assets/ArticleImg/a4.png',
  },
  {
    id: 5,
    title: 'Crunchwrap Supreme',
    desc: "PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard...",
    image: '/Assets/ArticleImg/a5.png',
  },
  {
    id: 6,
    title: 'Broccoli Cheese Soup',
    desc: "PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard...",
    image: '/Assets/ArticleImg/a6.png',
  },
];

const LatestArticles = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const articlesPerPage = 3;

  const indexOfLastArticle = currentPage * articlesPerPage;

  const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;

  const currentArticles = ArticleData.slice(
    indexOfFirstArticle,
    indexOfLastArticle
  );

  const paginate = pageNumber => {
    if (pageNumber >= 1 && pageNumber <= 2) {
      setCurrentPage(pageNumber);
    }
  };

  return (
    <Flex
      w={'full'}
      m={'auto'}
      p={{ base: 10, md: 20 }}
      flexDirection={'column'}
      paddingY={{ base: 20, md: 'auto' }}
    >
      <Heading
        textAlign={{ base: 'center', md: 'left' }}
        fontFamily={'sans-serif'}
        textColor={'#0E2368'}
        letterSpacing={1}
        fontWeight={'semibold'}
        paddingBottom={5}
      >
        Latest Articles
      </Heading>
      <Box w={'full'} p={{ base: 4, md: 10 }}>
        <Grid templateColumns={{ base: '1fr', md: '1fr 1fr 1fr' }} gap={'10'}>
          {currentArticles.map(article => (
            <GridItem key={article.id}>
              <ArticleCard {...article} />
            </GridItem>
          ))}
        </Grid>
        <Box
          mt={10}
          display="flex"
          alignItems={'center'}
          justifyContent="center"
          gap={4}
        >
          <Button
            borderColor={currentPage === 1 ? '#AFAFAF' : '#424961'}
            borderWidth={'2px'}
            borderRadius={'5px'}
            h={9}
            w={1}
            bg={currentPage === 1 ? 'transparent' : 'white'}
            color={currentPage === 1 ? '#AFAFAF' : '#424961'}
            onClick={() => paginate(currentPage - 1)}
            disabled={currentPage === 1}
            _hover={currentPage === 1 && { cursor: 'not-allowed' }}
          >
            <ChevronLeftIcon color={'inherit'} boxSize={8} />
          </Button>
          <Text fontFamily={'sans-serif'} fontSize={'xl'} color={'#424961'}>
            {currentPage}/2
          </Text>
          <Button
            borderColor={currentPage === 2 ? '#AFAFAF' : '#424961'}
            borderWidth={'2px'}
            borderRadius={'5px'}
            w={1}
            h={9}
            bg={currentPage === 2 ? 'transparent' : 'white'}
            color={currentPage === 2 ? '#AFAFAF' : '#424961'}
            onClick={() => paginate(currentPage + 1)}
            disabled={currentPage === 2}
            _hover={currentPage === 2 && { cursor: 'not-allowed' }}
          >
            <ChevronRightIcon color={'inherit'} boxSize={8} />
          </Button>
        </Box>
      </Box>
    </Flex>
  );
};

export default LatestArticles;
