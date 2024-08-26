import { Box, Flex, Text, VStack, Divider, Heading } from '@chakra-ui/react';

interface TimelineItemProps {
  year: string;
  title: string;
  description: string;
}

const TimelineItem: React.FC<TimelineItemProps> = ({ year, title, description }) => (
  <Flex>
    <VStack align="start" minW="100px" pr={4}>
      <Text fontSize="lg" fontWeight={year === 'Aujourd\'hui' ? 'bold' : 'normal'} color={year === 'Aujourd\'hui' ? 'blue.500' : 'gray.500'}>
        {year}
      </Text>
      {year !== 'Aujourd\'hui' && (
        <Text fontSize="2xl" fontWeight="bold">
          {year}
        </Text>
      )}
    </VStack>
    <Divider orientation="vertical" borderWidth={1} borderColor="gray.300" mx={2} />
    <Box pl={4}>
      <Text fontWeight="bold">{title}</Text>
      <Text>{description}</Text>
    </Box>
  </Flex>
);

export default function ExperienceTimeline() {
  return (
    <Box p={8}>
      <Heading as="h2" size="xl" mb={6}>
        Mes Expériences
      </Heading>
      <VStack align="start" spacing={8}>
        <TimelineItem
          year="Aujourd'hui, 2024"
          title="Chef de projet éditorial web"
          description="Mission humanitaire au Madagascar, réalisation d'un reportage."
        />
        <TimelineItem
          year="2023"
          title="Membre d’une association"
          description="Stage dans l'entreprise Storengy en tant que assistante communication 360."
        />
      </VStack>
    </Box>
  );
}
