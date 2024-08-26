import { Box, Stack, Heading, Text, Avatar, useColorModeValue, SimpleGrid, Center } from '@chakra-ui/react';
import Slider from 'react-slick';
import Image from 'next/image';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

interface BlogPostProps {
  title: string;
  description: string;
  images: { src: string; width: number; height: number }[]; // Mettre à jour pour inclure la largeur et la hauteur
  author: string;
  date: string;
  avatarSrc: string;
}

function BlogPostWithImage({
  title,
  description,
  images,
  author,
  date,
  avatarSrc,
}: BlogPostProps) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Box
      maxW={'445px'}
      w={'full'}
      bg={useColorModeValue('white', 'gray.900')}
      boxShadow={'2xl'}
      rounded={'md'}
      p={6}
      overflow={'hidden'}>
      
      <Box h={'310px'} bg={'gray.100'} mt={-6} mx={-6} mb={6} pos={'relative'}>
        <Slider {...settings}>
          {images.map(({ src, width, height }, index) => (
            <Box key={index} h={'310px'} position="relative">
              <Image
                src={src}
                alt={`Slide ${index}`}
                width={width}
                height={height}
                style={{
                  objectFit: 'cover',
                }}
              />
            </Box>
          ))}
        </Slider>
      </Box>
      
      <Stack>
        <Text
          color={'green.500'}
          textTransform={'uppercase'}
          fontWeight={800}
          fontSize={'sm'}
          letterSpacing={1.1}>
          Blog
        </Text>
        <Heading
          color={useColorModeValue('gray.700', 'white')}
          fontSize={'2xl'}
          fontFamily={'body'}>
          {title}
        </Heading>
        <Text color={'gray.500'}>
          {description}
        </Text>
      </Stack>
      <Stack mt={6} direction={'row'} spacing={4} align={'center'}>
        <Avatar src={avatarSrc} />
        <Stack direction={'column'} spacing={0} fontSize={'sm'}>
          <Text fontWeight={600}>{author}</Text>
          <Text color={'gray.500'}>{date}</Text>
        </Stack>
      </Stack>
    </Box>
  );
}

export default function BlogPostGrid() {
  return (
    <Center py={6}>
      <Stack spacing={8} align="center">
        <Heading
          as={'span'}
          position={'relative'}
          _after={{
            content: "''",
            width: 'full',
            height: '30%',
            position: 'absolute',
            bottom: 1,
            left: 0,
            bg: 'red.400',
            zIndex: -1,
          }}>
          Mes Réalisations Professionnels
        </Heading>

        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
          <BlogPostWithImage
            title="Boost your conversion rate"
            description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor."
            images={[
              { src: "/image/vkh1.jpeg", width: 800, height: 800 }, // Assurez-vous d'ajuster les dimensions en fonction de vos images
              { src: "/image/vkh2.jpeg", width: 800, height: 800 },
            ]}
            author="Achim Rolle"
            date="Feb 08, 2021 · 6min read"
            avatarSrc="https://avatars0.githubusercontent.com/u/1164541?v=4"
          />
          <BlogPostWithImage
            title="How to use SEO efficiently"
            description="Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            images={[
              { src: "/image/vkh1.jpeg", width: 800, height: 800 },
              { src: "/image/vkh4.jpeg", width: 800, height: 800 },
              { src: "/image/vkh2.jpeg", width: 800, height: 800 },
            ]}
            author="Jane Doe"
            date="Mar 10, 2021 · 5min read"
            avatarSrc="https://avatars.githubusercontent.com/u/567821?v=4"
          />
          {/* Ajoutez plus de cartes comme nécessaire */}
        </SimpleGrid>
      </Stack>
    </Center>
  );
}
