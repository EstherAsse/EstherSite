import React, { useState } from 'react';
import {
  Box,
  Button,
  Image,
  Text,
  Grid,
  GridItem,
  Heading,
  Stack,
  Flex,
  Container
} from '@chakra-ui/react';

// Les couleurs à utiliser pour changer dynamiquement les boutons
const colorList = ['#E53E3E', '#38A169', '#00B5D8', '#44337A', '#ED64A6'];

const randomColor = () => Math.floor(Math.random() * colorList.length);

// Définition du type pour les cours
interface Course {
  heading: string;
  content1: string;
  content2: string;
  content3: string;
  imgSrc: string;
}

// Données des cours
const courses: Course[] = [
  {
    heading: "Compétence E-Business ",
    content1: "Élaborer le document un  modèle d'affaires",
    content2: "Développer une vision stratégique partagée",
    content3: "Analyser des documents et indicateurs financiers pertinents",
    imgSrc: "/image/interet3.png",
  },
  {
    heading: "Compétence Marketing Digital",
    content1: "Sélectionner les outils pertinents pour recueillir, traiter et analyser les données ",
    content2: "Développer une stratégie marketing digital performante ",
    content3: "Piloter et évaluer une offre digitale ",
    imgSrc: "/image/interet3.png",
  },
  {
    heading: "Compétence Communication Com",
    content1: "Élaborer une stratégie de communication cohérente avec le mix",
    content2: "Utiliser les outils de communication commerciale",
    content3: "Produire des supports de communication efficaces et qualitatifs",
    imgSrc: "/image/interet3.png",
  },
];

// Typage de la prop 'course' dans CourseCard
interface CourseCardProps {
  course: Course;
}

const CourseCard: React.FC<CourseCardProps> = ({ course }) => {
  const [colorCode, setColorCode] = useState(colorList[randomColor()]);

  const handleButtonClick = () => {
    setColorCode(colorList[randomColor()]);
    window.location.href = 'https://forms.gle/dUD42YSUrjZcjXV88';
  };

  return (
    <Box
      bg="white"
      boxShadow="lg"
      rounded="lg"
      overflow="hidden"
      m={4}
      p={6}
      textAlign="center"
    >
      <Image src={course.imgSrc} alt={course.heading} mb={4} borderRadius="lg" />
      <Heading as="h3" size="lg" mb={2}>
        {course.heading}
      </Heading>
      <Stack spacing={2} mb={4}>
        <Text>{course.content1}</Text>
        <Text>{course.content2}</Text>
        <Text>{course.content3}</Text>
      </Stack>
      {/* <Button
        bg={colorCode}
        color="white"
        onClick={handleButtonClick}
        _hover={{ bg: colorCode }}
        mt={4}
      >
        Participer
      </Button> */}
    </Box>
  );
};

const CoursesGrid: React.FC = () => {
  return (
    <Container maxW="7xl" py={10}>
      <Heading as="h2" size="xl" mb={6} textAlign="center">
      Compétence en lien avec ma formation
      </Heading>
      <Grid
        templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' }}
        gap={6}
      >
        {courses.map((course, index) => (
          <GridItem key={index}>
            <CourseCard course={course} />
          </GridItem>
        ))}
      </Grid>
    </Container>
  );
};

export default CoursesGrid;
