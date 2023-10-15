import { Box, Button, Image } from '@chakra-ui/react';
import React from 'react';

const NavPage = () => {
  return (
    <nav className="absolute top-0 p-10 pt-5 pr-4 w-full flex items-center justify-between max-sm:justify-end">
      <Box ml={'24'} display={{ base: 'none', md: 'block' }}>
        <Image src="/Assets/logo.png" objectFit={'fill'} alt="logo" w={100} />
      </Box>
      <Box>
        <Button
          bgColor={'transparent'}
          borderRadius={'21px'}
          borderColor={'white'}
          borderWidth={1}
        >
          Read More
        </Button>
      </Box>
    </nav>
  );
};

export default NavPage;
