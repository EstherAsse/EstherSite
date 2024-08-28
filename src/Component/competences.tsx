'use client'

import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Icon,
  Stack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react'
import { ReactElement } from 'react'
import {
  FcAbout,
  FcAssistant,
  FcCollaboration,
  FcCursor,
  FcDocument,
  FcDonate,
  FcEditImage,
  FcGoogle,
  FcManager,
  FcPicture,
  FcVideoProjector,
} from 'react-icons/fc'

interface CardProps {
  heading: string
  description: string
  icon: ReactElement
  href: string
}

const Card = ({ heading, description, icon, href }: CardProps) => {
  return (
    <Box
      maxW={{ base: 'full', md: '275px' }}
      w={'full'}
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      p={5}>
      <Stack align={'start'} spacing={2}>
        <Flex
          w={16}
          h={16}
          align={'center'}
          justify={'center'}
          color={'white'}
          rounded={'full'}
          bg={useColorModeValue('gray.100', 'gray.700')}>
          {icon}
        </Flex>
        <Box mt={2}>
          <Heading size="md">{heading}</Heading>
          <Text mt={1} fontSize={'sm'}>
            {description}
          </Text>
        </Box>
        <Button variant={'link'} colorScheme={'blue'} size={'sm'}>
          
        </Button>
      </Stack>
    </Box>
  )
}

export default function GridListWith() { 
  return (
    <Box p={4}>
      <Stack spacing={4} as={Container} maxW={'3xl'} textAlign={'center'}>
        <Heading fontSize={{ base: '2xl', sm: '4xl' }} fontWeight={'bold'}
         as={'span'}
         id='Compétences'
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
        Compétences Informatiquues
        </Heading>
        <Text color={'gray.600'} fontSize={{ base: 'sm', sm: 'lg' }}>
            Lors de mon année scolaire, j'ai acquis plusieurs compétences, que ce soit des compétences techniques ou informatiques. 
            Ces compétences m'ont permis de renforcer la compréhension théorique. Je suis prête à relever les défis dynamiques du monde professionnel.
        </Text>
      </Stack>

      <Container maxW={'5xl'} mt={12}>
        <Flex flexWrap="wrap" gridGap={6} justify="center">
          <Card
            heading={'Photoshop'}
            icon={<Icon as={FcPicture} w={10} h={10} />}
            description={''}
            href={'#'}
          />
          <Card
            heading={'Goolgle ADS'}
            icon={<Icon as={FcGoogle} w={10} h={10} />}
            description={''}
            href={'#'}
          />
           <Card
            heading={'Final Cut Pro'}
            icon={<Icon as={FcCursor} w={10} h={10} />}
            description={''}
            href={'#'}
          />
           <Card
            heading={'Power Bi'}
            icon={<Icon as={FcVideoProjector} w={10} h={10} />}
            description={''}
            href={'#'}
          />
          <Card
            heading={'Microsoft 360'}
            icon={<Icon as={FcDocument} w={10} h={10} />}
            description={''}
            href={'#'}
          />
          <Card
            heading={'Python'}
            icon={<Icon as={FcEditImage} w={10} h={10} />}
            description={''}
            href={'#'}
          />
          
        </Flex>
      </Container>
    </Box>
  )
}
