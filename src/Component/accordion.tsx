'use client'

import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  Flex,
  useColorModeValue,
  Text,
  Container,
  AccordionIcon,
  Box,
  Heading,
} from '@chakra-ui/react'

import { ChevronDownIcon } from '@chakra-ui/icons'

export default function SimpleAccordion() {
  return (
    <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}>
      <Container>
      <Accordion defaultIndex={[0]} allowMultiple  marginTop={10}  marginBottom={20}>
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box as="span" flex='2' textAlign='left'>
                <Heading as="h3">Comment Profiter du Suivis et des Cours ?</Heading>
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <p>Pour tirer parti de notre programme et faire un pas vers votre inclusion numérique, suivez ces étapes simples :</p>
              <p>- Cliquez sur l&apos;un des boutons &quot;Rejoignez-nous&quot; disponibles sur la page.</p>
              <p>- Sélectionnez l&apos;objet correspondant à votre demande et envoyez-nous un message.</p>
              <p>Nous nous engageons à répondre dans un délai de moins de 24 heures. Nous vous attendons avec impatience !</p>
            </AccordionPanel>


          </AccordionItem>

          

          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box as="span" flex='1' textAlign='left'>
                <Heading as="h3">Comment Devenir un Bénévole ?</Heading>
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <p>Si vous souhaitez devenir bénévole et aider des personnes :</p>
              <p>- Accédez à notre page et cliquez sur l&apos;un des boutons &quot;Rejoignez-nous&quot;.</p>
              <p>- Choisissez l&apos;objet qui correspond à votre intention de devenir bénévole et envoyez un message, en précisant vos disponibilités pour un entretien.</p>
              <p>- Un entretien sera programmé selon vos disponibilités, pouvant se dérouler en présentiel ou en ligne.</p>
            </AccordionPanel>


          </AccordionItem>
          

          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box as="span" flex='1' textAlign='left'>
                <Heading as="h3">Comment Devenir un mentor ?</Heading>
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
            <p>Si vous souhaitez devenir mentor et partager votre expertise :</p>
            <p>- Accédez à notre page et cliquez sur l&apos;un des boutons &quot;Rejoignez-nous&quot;.</p>
            <p>- Choisissez l&apos;objet qui correspond à votre intention de devenir mentor et envoyez un message, en précisant vos disponibilités pour un entretien.</p>
            <p>- Un entretien sera programmé selon vos disponibilités, pouvant se dérouler en présentiel ou en ligne.</p>
          </AccordionPanel>


          </AccordionItem>
        </Accordion>
      </Container>
    </Flex>
  )
}