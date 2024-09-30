import { Box, Flex, Text, Button, Image } from "@chakra-ui/react";
import NavigationBar from "../components/NavigationBar";
import Header from "../components/Header";
import Carousel from "../components/Carousel";
import Gamelist from "../components/Gamelist";

const HomePage: React.FC = () => {
  const slides = [
    <Box
      textAlign="center"
      bg={"linear-gradient(rgba(128, 0, 128, 0.3), white)"}
      width={"100%"}
      p={"50px 10px"}
    >
      <Image src="/star.png" alt="Slide 1 Image" width={24} mx="auto" />

      <Text
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        fontWeight={900}
        gap={1}
        fontSize={"21px"}
      >
        <Image src="/star.png" width={8} mb={7} />
        Free Tournament 26.09.2024 - 27.09.2024
      </Text>

      <Text fontSize={"16px"} fontWeight={700} mt={3}>
        Everyday at 18:00 UTC
      </Text>

      <Button mt={4} color={"purple"} bg={"rgba(128, 0, 128, 0.2)"}>
        Check it out!
      </Button>
    </Box>,
    <Box
      textAlign="center"
      bg={"linear-gradient(rgba(128, 0, 128, 0.3), white)"}
      width={"100%"}
      p={"50px 10px"}
    >
      <Image src="/star.png" alt="Slide 1 Image" width={24} mx="auto" />

      <Text
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        fontWeight={900}
        gap={1}
        fontSize={"21px"}
      >
        <Image src="/star.png" width={8} mb={7} />
        Free Tournament 26.09.2024 - 27.09.2024
      </Text>

      <Text fontSize={"16px"} fontWeight={700} mt={3}>
        Everyday at 18:00 UTC
      </Text>

      <Button mt={4} color={"purple"} bg={"rgba(128, 0, 128, 0.2)"}>
        Check it out!
      </Button>
    </Box>,
    <Box
      textAlign="center"
      bg={"linear-gradient(rgba(128, 0, 128, 0.3), white)"}
      width={"100%"}
      p={"50px 10px"}
    >
      <Image src="/star.png" alt="Slide 1 Image" width={24} mx="auto" />

      <Text
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        fontWeight={900}
        gap={1}
        fontSize={"21px"}
      >
        <Image src="/star.png" width={8} mb={7} />
        Free Tournament 26.09.2024 - 27.09.2024
      </Text>

      <Text fontSize={"16px"} fontWeight={700} mt={3}>
        Everyday at 18:00 UTC
      </Text>

      <Button mt={4} color={"purple"} bg={"rgba(128, 0, 128, 0.2)"}>
        Check it out!
      </Button>
    </Box>,
    <Box
      textAlign="center"
      bg={"linear-gradient(rgba(128, 0, 128, 0.3), white)"}
      width={"100%"}
      p={"50px 10px"}
    >
      <Image src="/star.png" alt="Slide 1 Image" width={24} mx="auto" />

      <Text
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        fontWeight={900}
        gap={1}
        fontSize={"21px"}
      >
        <Image src="/star.png" width={8} mb={7} />
        Free Tournament 26.09.2024 - 27.09.2024
      </Text>

      <Text fontSize={"16px"} fontWeight={700} mt={3}>
        Everyday at 18:00 UTC
      </Text>

      <Button mt={4} color={"purple"} bg={"rgba(128, 0, 128, 0.2)"}>
        Check it out!
      </Button>
    </Box>,
  ];

  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      bgColor={"white"}
      width={"100vw"}
      minHeight={"100vh"}
      alignItems={"center"}
      py={7}
    >
      <Flex
        width={"95%"}
        p={"0px 10px"}
        height={"100%"}
        bgColor={"white"}
        flexDirection={"column"}
        pb={32}
        gap={5}
      >
        <Header />
        <Box
          p={"10px"}
          border={"1px solid rgba(0, 0, 0, 0.3)"}
          borderRadius={"20px"}
        >
          <Carousel slides={slides} />
        </Box>
        <Box
        display={'flex'}
        flexDirection={'column'}
        gap={5}>
            <Flex
            alignItems={'center'}
            justifyContent={'space-between'}
            mt={10}>
                <Text
                fontWeight={900}
                fontSize={'20px'}
                >
                    Keep on playing
                </Text>
                <Button
                color={'blue.500'}
                bgColor={'blue.100'}
                width={'75px'}>
                    See all
                </Button>
            </Flex>
            <Gamelist />
        </Box>
      </Flex>
      <NavigationBar />
    </Box>
  );
};

export default HomePage;
