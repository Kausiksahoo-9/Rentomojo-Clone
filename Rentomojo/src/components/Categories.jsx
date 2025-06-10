import { Flex, Box, SimpleGrid, Text } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCouch, faTv, faMobileAlt, faBicycle, faDumbbell, faBaby, faBox } from "@fortawesome/free-solid-svg-icons";
import './Categories.css';

//all items are categorized according to the requided data
const categories = [
  { name: "Packages", icon: faBox },
  { name: "Furniture", icon: faCouch },
  { name: "Appliances", icon: faTv },
  { name: "Electronics", icon: faMobileAlt },
  { name: "Bikes", icon: faBicycle },
  { name: "Fitness", icon: faDumbbell },
  { name: "Baby & Kids", icon: faBaby },
];

const Categories = () => {
  return (
    <Flex className="workkarjabkl" direction="column" textAlign="center" mt={10} mb={10} px={[2, 4, 8, 16]}>
      <Text fontSize={['xl', '2xl', '3xl']} mb={6}>Rent Furniture & Appliances</Text>

      <SimpleGrid columns={{ base: 2, sm: 3, md: 4, lg: 7 }} spacing={6} mx="auto">
        {categories.map((category) => (
          <Box
            key={category.name}
            p={4}
            className="Catcard"
            cursor="pointer"
            _hover={{
              transition: "transform 0.5s, box-shadow 0.29s",
              boxShadow: "rgba(136, 165, 191, 0.48) 0px 10px 16px 10px, rgba(255, 255, 255, 0.8) 0px 2px 16px 0px",
            }}
            borderRadius="md"
            textAlign="center"
            width={{ base: "120px", sm: "140px", md: "160px", lg: "180px" }} // Adjust width based on screen size
          >
            <FontAwesomeIcon icon={category.icon} size="3x" style={{ marginBottom: '16px' }} />
            <Text fontSize={['sm', 'md', 'lg']}>{category.name}</Text>
          </Box>
        ))}
      </SimpleGrid>
    </Flex>
  );
};

export default Categories;
