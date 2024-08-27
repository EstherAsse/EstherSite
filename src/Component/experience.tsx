import { Box, Flex, Text, VStack, Divider, Heading } from '@chakra-ui/react';

interface TimelineItemProps {
  year: string;
  title: string;
  description: string;
}

const TimelineItem: React.FC<TimelineItemProps> = ({ year, title, description }) => (
  <Flex align="center">
    <VStack align="end" minW="120px" pr={4} spacing={0}>
      {year.includes('Aujourd\'hui') ? (
        <>
          <Text fontSize="lg" fontWeight="bold" color="blue.400">
            Aujourd'hui,
          </Text>
          <Text fontSize="3xl" fontWeight="bold" color="black">
            2024
          </Text>
        </>
      ) : (
        <Text fontSize="3xl" fontWeight="bold" color="gray.500">
          {year}
        </Text>
      )}
    </VStack>
    <Divider orientation="vertical" borderWidth={1} borderColor="gray.300" height="100px" mx={4} />
    <Box pl={4}>
      <Text fontWeight="bold" fontSize="lg">{title}</Text>
      <Text>{description}</Text>
    </Box>
  </Flex>
);

export default function ExperienceTimeline() {
  return (
    <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh">
      <Box p={8} maxW="600px" w="100%">
        <Heading as="h2" size="xl" mb={6} textAlign="center" id="Experience">
          Mes Expériences
        </Heading>
        <VStack align="start" spacing={8}>
          <TimelineItem
            year="Octobre 2023 à août 2024"
            title="Chef de projet éditorial web"
            description="Gestion et mise à jour des contenus numériques, supports multimédia, et réseaux sociaux, avec suivi des performances et participation à la stratégie de communication."
          />
          <TimelineItem
            year="Avril à juin 2023"
            title="Chargée de communication"
            description="Animation des réseaux sociaux, mise à jour des actualités, création de contenus visuels, organisation d'événements, SEO, et participation à la création de contenus TikTok."
          />
          <TimelineItem
            year="Mai à juin 2022"
            title="Chargée de marketing"
            description="Analyse marketing et référencement SEO"
          />
          {/* Ajoutez plus de TimelineItem ici si nécessaire */}
        </VStack>
      </Box>
    </Box>
  );
}
