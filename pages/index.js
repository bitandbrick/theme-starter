
import React, { useEffect, useRef,useState } from 'react';
import Head from 'next/head';
import { Badge,Box, Button, Card,Flex,Grid,Heading, Text, Image, Link as ThemeLink } from 'theme-ui';
import carousel from '../lib/carousel.json';
import Icon from '../components/icon'


/** @jsxImportSource theme-ui */

function Page() {
  const [carouselIndex, setCarouselIndex] = useState(0);
  
  const nextCard = () => {
    setCarouselIndex((prevIndex) => (prevIndex + 1) % carousel.length);
  };

  const card = carousel[carouselIndex];

  return (
    <>
      <Head>
        <title>Bit and Brick - A Community for Budding Innovators</title>
        <meta name="description" content="Bit and Brick is a global network of creative young minds dedicated to innovation and collaboration in technology and design." />
      </Head>
      <Box as="main" sx={{ overflowX: 'hidden', position: 'relative' }}>
        <Box as="header" sx={{ bg: 'dark', pt: [5, 6], pb: [2, 3], textAlign: 'left', position: 'relative', overflowX: 'hidden' }}>
          <Heading as="h1" sx={{ color: 'white', fontSize: ['24px', '32px', '48px'], m: 3 }}>
            Welcome to Bit and Brick
          </Heading>
          <Text sx={{ color: 'gray', fontSize: ['16px', '18px', '20px'], mx: 3, mb: 4 }}>
            Explore. Build. Learn. Join our community of innovators!
          </Text>
          <Button sx={{ ml: 3 }}>Join Us</Button>
        </Box>
        <Box sx={{ py: [4, 5, '82px'], color: 'black', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Box sx={{
            width: '300px',  // Fixed width for uniformity
            minHeight: '400px',  // Minimum height to maintain card size
            bg: card.background,
            p: 4,
            borderRadius: '8px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'space-between'  // Ensures content is spaced out evenly
          }}>
            <Heading sx={{ color: card.titleColor, textAlign: 'center' }}>{card.title}</Heading>
            <Text sx={{ color: card.descriptionColor, textAlign: 'center' }}>{card.description}</Text>
            <ThemeLink href={card.link} sx={{ color: card.titleColor }}>
              Learn More
            </ThemeLink>
            {card.img && (
              <Image src={card.img} sx={{ maxWidth: '100%', mt: 3 }} />
            )}
            <Button onClick={nextCard} sx={{ mt: 3 }}>Next</Button>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default Page;
