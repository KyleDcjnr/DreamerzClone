import React, { useState } from "react";
import {
     Box,
     Flex,
    //  Button,
     Circle } from "@chakra-ui/react";

interface CarouselProps {
  slides: React.ReactNode[];
}

const Carousel: React.FC<CarouselProps> = ({ slides }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

//   const goToNextSlide = () => {
//     setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
//   };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <Flex
      direction="column"
      align="center"
      justify="center"
      h="400px"
      w="100%"
      overflow="hidden"
      pos="relative"
      bg="gray.800"
      borderRadius={'20px'}
    >
      {/* Slide container */}
      <Box
        display="flex"
        w="100%"
        h="100%"
        transform={`translateX(-${currentSlide * 100}%)`}
        transition="transform 0.5s ease-in-out"
      >
        {slides.map((slide, index) => (
          <Box
            key={index}
            minW="100%"
            display="flex"
            // alignItems="center"
            justifyContent="center"
            bg={index % 2 === 0 ? "purple.500" : "green.500"}
            color="white"
            fontSize="4xl"
          >
            {slide}
          </Box>
        ))}
      </Box>

      {/* Next Button */}
      {/* <Button
        pos="absolute"
        bottom="20px"
        right="20px"
        colorScheme="teal"
        onClick={goToNextSlide}
      >
        Next
      </Button> */}

      {/* Slide indicators */}
      <Flex pos="absolute" bottom="20px" justify="center" align="center">
        {slides.map((_, index) => (
          <Flex key={index} align="center">
            {currentSlide === index ? (
              <Box
                width="30px"
                height="10px"
                bg="gray.400"
                borderRadius="10px"
                m="2px"
              />
            ) : (
              <Circle
                size="10px"
                bg="rgba(0, 0, 0, 0.2)"
                m="2px"
                cursor="pointer"
                onClick={() => goToSlide(index)}
              />
            )}
          </Flex>
        ))}
      </Flex>
    </Flex>
  );
};

export default Carousel;
