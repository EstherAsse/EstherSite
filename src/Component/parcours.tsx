'use client'

import { ReactElement } from 'react'
import { Box, SimpleGrid, Icon, Text, Stack, Flex, Heading, VStack, Container, Divider } from '@chakra-ui/react'
import { FcAssistant, FcDonate, FcInTransit } from 'react-icons/fc'

interface FeatureProps {
  title: string
  text: string
  text2 : string
  icon: ReactElement
}

const Feature = ({ title, text,text2, icon }: FeatureProps) => {
  return (
    <Stack>
      <Flex
        w={16}
        h={16}
        align={'center'}
        justify={'center'}
        color={'white'}
        rounded={'full'}
        bg={'gray.100'}
        mb={1}>
        {icon}
      </Flex>
      <Text fontWeight={600}>{title}</Text>
      <Text color={'gray.600'}>{text}</Text>
      <Text color={'gray.600'}>{text2}</Text>

    </Stack>
  )
}

export default function SimpleThreeColumns() {
  return (
    
    <Box p={2}>
         <Container maxW={'7xl'} p="10"> 
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
              }}
              >Mon Parcours Educatif
              </Heading>
            
            <SimpleGrid columns={{ base: 1, md: 3 }} spacing={1}  marginTop="5"
            >     
                <Feature

                icon={<Icon as={FcAssistant} w={10} h={10} />}
                title={'Baccalauréat Général'}
                text={
                    'Sciences économiques et sociales'
                }
                text2={
                  'Lycée Camille Claudel - Vauréal - juillet 2021'
              }
                />
      
                <Feature
                icon={<Icon as={FcInTransit} w={10} h={10} />}
                title={'Bachelor universitaire de technologie'}
                text={
                    'technologie en techniques de commercialisation, spécialité marketing digital'
                }
                text2={
                  'IUT de lOise (UPJV) - septembre 2021 à août 2024'
              }
                />

              <Feature
                icon={<Icon as={FcDonate} w={10} h={10} />}
                title={'Master 1'}
                text={
                    'Digitalisation, intelligence artificielle et big data'
                }
                text2={
                  'INSEEC Paris - Grande Ecole - Septembre 2024 à août 2026'
              }
                />
                </SimpleGrid>       
         </Container>
    </Box>
  )
}