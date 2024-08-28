import { Box, Stack, Heading, Text, useColorModeValue, SimpleGrid, Center } from '@chakra-ui/react';
import { FaPlay } from 'react-icons/fa';
import Slider from 'react-slick';
import Image from 'next/image';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useRef } from 'react';

interface BlogPostProps {
  title: string;
  description: string;
  images: { src: string; width: number; height: number; isVideo?: boolean }[];
}

function BlogPostWithImage({ title, description, images }: BlogPostProps) {
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
      
      <Box h={'400px'} bg={'gray.100'} mt={-6} mx={-6} mb={6} pos={'relative'}>
        <Slider {...settings}>
          {images.map(({ src, width, height, isVideo }, index) => (
            <Box key={index} h={'400px'} position="relative">
              {isVideo ? (
                <VideoWithPlayButton src={src} width={width} height={height} />
              ) : (
                <Image
                  src={src}
                  alt={`Slide ${index}`}
                  width={width}
                  height={height}
                  style={{
                    objectFit: 'cover',
                    width: '100%',
                    height: '100%',
                  }}
                />
              )}
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
          Projet
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
    </Box>
  );
}

function VideoWithPlayButton({ src, width, height }: { src: string, width: number, height: number }) {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  return (
    <Box position="relative" h="100%" w="100%">
      <video
        ref={videoRef}
        src={src}
        width={width}
        height={height}
        style={{
          objectFit: 'cover',
          width: '100%',
          height: '100%',
        }}
        controls
      />
      <Box
        position="absolute"
        top="50%"
        left="50%"
        transform="translate(-50%, -50%)"
        zIndex="1"
        color="white"
        fontSize="4xl"
        opacity={0.8}
        onClick={handlePlay}
        cursor="pointer"
      >
        <FaPlay />
      </Box>
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
          id="Projet"
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
          Mes Réalisations Professionnelles
        </Heading>

        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
          <BlogPostWithImage
            title="Situation d'Apprentissage et d'Évaluation"
            description="J'ai réalisé cette affiche dans le cadre d'une SAE (situation d'apprentissage et d'évaluation)..."
            images={[
              { src: "/image/tableMol.jpeg", width: 800, height: 800 },
              { src: "/image/tableMol2.jpeg", width: 800, height: 800 },
              { src: "/image/tableMol3.jpeg", width: 800, height: 800 },
            ]}
          />
          <BlogPostWithImage
            title="Comment utiliser le SEO efficacement"
            description="Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            images={[
              { src: "/image/vkh1.jpeg", width: 800, height: 800 },
              { src: "/image/vkh4.jpeg", width: 800, height: 800 },
              { src: "/image/vkh2.jpeg", width: 800, height: 800 },
            ]}
          />
          <BlogPostWithImage
            title="Stage chez Storengy"
            description="Dans le cadre de mon stage chez Storengy, j'ai eu l'opportunité de réaliser des miniatures pour leur chaîne YouTube..."
            images={[
              { src: "/image/storen1.jpeg", width: 800, height: 800 },
              { src: "/image/storen2.jpeg", width: 800, height: 800 },
              { src: "/image/storen3.jpeg", width: 800, height: 800 },
            ]}
          />
          <BlogPostWithImage
            title="Cadreuse lors d'un séminaire"
            description="J'ai eu l'occasion de travailler en tant que cadreuse lors d'un séminaire..."
            images={[
              { src: "/image/video/projetvideo.mp4", width: 800, height: 800, isVideo: true },
              { src: "/image/video/projetvideo.mp4", width: 800, height: 800, isVideo: true},
             
            ]}
          />
          {/* Ajoutez plus de cartes si nécessaire */}
        </SimpleGrid>
      </Stack>
    </Center>
  );
}
