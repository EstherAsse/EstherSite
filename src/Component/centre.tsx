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
      
      <Box h={'250px'} bg={'gray.100'} mt={-6} mx={-6} mb={6} pos={'relative'}>
        <Slider {...settings}>
          {images.map(({ src, width, height, isVideo }, index) => (
            <Box key={index} h={'250px'} position="relative">
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
        cursor="pointer">
        <FaPlay />
      </Box>
    </Box>
  );
}

export default function CentreInteret() {
  return (
    <Center py={6}>
      <Stack spacing={8} align="center">
        <Heading
          as={'span'}
          position={'relative'}
          id="centre"
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
          Centre d'interet
        </Heading>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
          <BlogPostWithImage
            title="Les podcasts"
            description="Les podcasts sont incontournables aujourd'hui….
             Que ce soit en écoutant des discussions profondes sur des sujets variés, des interviews avec des experts ou des récits captivants, j'apprécie le format audio qui permet de se plonger dans des univers différents tout en étant en mouvement. 
             Les podcasts m'accompagnent au quotidien."
            images={[
              { src: "/image/interet1.jpeg", width: 800, height: 800 },
              { src: "/image/interet1.jpeg", width: 800, height: 800 }
            ]}
          />
          <BlogPostWithImage
            title="YouTube"
            description="YouTube est une véritable mine d'or pour moi, avec une multitude de vidéos qui couvrent pratiquement tous les sujets imaginables.  Je suis de nature autodidacte, et YouTube est mon allié incontournable pour apprendre de nouvelles choses. 
            Que ce soit pour découvrir des recettes de cuisine innovantes, suivre des cours en ligne "
            images={[
              { src: "/image/interet2.jpeg", width: 800, height: 800 },
              { src: "/image/interet2.jpeg", width: 800, height: 800 }
            ]}
          />
          <BlogPostWithImage
            title="Formation"
            description="J'ai un intérêt marqué pour les formations, car j'aime apprendre et me perfectionner continuellement. Qu'il s'agisse de cours en ligne, d'ateliers pratiques ou de programmes de certification, je suis toujours à la recherche de nouvelles compétences à acquérir. "
            images={[
              { src: "/image/interet3.png", width: 800, height: 800 },
              { src: "/image/interet3.png", width: 800, height: 800 }
            ]}
          />
          
        </SimpleGrid>
      </Stack>
    </Center>
  );
}
