'use client'

import {
  Box,
  Heading,
  Image,
  Text,
  Divider,
  HStack,
  Tag,
  Wrap,
  WrapItem,
  SpaceProps,
  useColorModeValue,
  Container,
  VStack,
} from '@chakra-ui/react'

interface IBlogTags {
  tags: Array<string>
  marginTop?: SpaceProps['marginTop']
}

interface Props {
  marginTop?: number
  tags: any[]
}

const BlogTags = (props: Props) => {
  const { marginTop = 0, tags } = props

  return (
    <HStack spacing={2} marginTop={marginTop}>
      {tags.map((tag) => {
        return (
          <Tag size={'md'} variant="solid" colorScheme="orange" key={tag}>
            {tag}
          </Tag>
        )
      })}
    </HStack>
  )
}

interface BlogAuthorProps {
  date: Date
  name: string
}

const BlogAuthor = (props: BlogAuthorProps) => {
  return (
    <HStack marginTop="2" spacing="2" display="flex" alignItems="center">
      <Image
        borderRadius="full"
        boxSize="40px"
        src="https://100k-faces.glitch.me/random-image"
        alt={`Avatar of ${props.name}`}
      />
      <Text fontWeight="medium">{props.name}</Text>
      <Text>—</Text>
      <Text>{props.date.toLocaleDateString()}</Text>
    </HStack>
  )
}

const ArticleList = () => {
  return (
    <Container maxW={'7xl'} p="12">
      <Divider />
      <VStack paddingTop="40px" spacing="2" alignItems="flex-start">
        <Heading as="h2">Ce qu'il faut savoir</Heading>
        <Text as="p" fontSize="lg">
          Pour commencer par la Genèse de mon parcours scolaire, j’ai obtenu mon Baccalauréat Général, 
          avec pour spécialité Sciences Économique et Social ( SES), Histoire Géographie Géopolitique Sciences Politiques( HGGSP)
          À la sortie de ma Terminale, je me dirige vers un Bachelor universitaire technologique en techniques de commercialisation 
          à l’IUT de Creil, une branche de  L’université Picardie Jules Vernes.
        </Text>
        <Text as="p" fontSize="lg">
          De prime abord, ce choix d’étude correspond à mes traits de personnalité tels que le sérieux, la rigueur, l’organisation ou encore  l’autonomie et la créativité
          Je me suis donc dirigée vers un BUT Techniques de commercialisation. Ce cursus est multidisciplinaire et fait découvrir différents aspects d’une entreprise, principalement son marketing.
          Parmi la vingtaine de matières que l'on étudie au long des deux ans, on trouve différents types de marketing, de la communication, de la négociation-vente, de la comptabilité et gestion 
          financière, des statistiques, etc. Ce qui m'a laissé le temps de déterminer le volet que je préférais dans une entreprise.
        </Text>
        <Text as="p" fontSize="lg">
        Ce cursus a confirmé ma préférence pour le Marketing Opérationnel ainsi que la communication.
        Pour ma deuxième année de BUT, je me suis spécialisée en marketing digital. 
        J'ai réaliser la troisiéme année en allternance dans laquelle j'occupe le poste de chef de projet éditorial web à la mairie de Cergy;
        Je compte poursuivre mes étude en master 1 à l'INSEEC Paris  ( école supérieure de communication et publicité).
        </Text>
      </VStack>
    </Container>
  )
}

export default ArticleList