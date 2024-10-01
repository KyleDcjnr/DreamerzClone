import { Box, Flex, Text, Image, Icon, Button } from "@chakra-ui/react";
import { BsFillEmojiWinkFill } from "react-icons/bs";

export default function RegularTournament() {
  return (
    <Flex flexDirection={"column"} gap={10}>
      <Text fontWeight={700} fontSize={"22px"}>
        Regular
      </Text>
      <Flex alignItems={"center"} gap={3}>
        <Box
          display={"flex"}
          width={"20%"}
          height={"80px"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Image src="/resilience.png" width={"80%"} height={"80%"} />
        </Box>
        <Box width={"50%"}>
          <Text color={'rgba(0, 0, 0, 0.3)'}
          fontSize={'14px'}>$560</Text>
          <Text fontWeight={600} display={'flex'}
          fontSize={'15px'}
          alignItems={'center'}
          gap={2}>A Good Play to play Hard 
            <Text
            bg={'rgba(128, 0, 128, 0.2)'}
            padding={'2px 5px'}
            borderRadius={'10px'}
            >soon</Text>
          </Text>
          <Text fontSize={"14px"}
          display={'flex'}
          gap={1}
          alignItems={'center'}
          color={'rgba(0, 0, 0, 0.3)'}>
            <Icon as={BsFillEmojiWinkFill}
            />
            Ready ?
          </Text>
        </Box>
        <Button bgColor={"blue.500"} color={"white"}>
          Enter for $100
        </Button>
      </Flex>
      <Flex alignItems={"center"} gap={3}>
        <Box
          display={"flex"}
          width={"20%"}
          height={"80px"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Image src="/shield.png" width={"80%"} height={"80%"} />
        </Box>
        <Box width={"50%"}>
          <Text color={'rgba(0, 0, 0, 0.3)'}
          fontSize={'14px'}>$98</Text>
          <Text fontWeight={600} display={'flex'}
          fontSize={'15px'}
          alignItems={'center'}
          gap={2}>Ready for a Showdown? 
            <Text
            bg={'rgba(128, 0, 128, 0.2)'}
            padding={'2px 5px'}
            borderRadius={'10px'}
            >8h</Text>
          </Text>
          <Text fontSize={"14px"}
          display={'flex'}
          gap={1}
          alignItems={'center'}
          color={'rgba(0, 0, 0, 0.3)'}>
            <Icon as={BsFillEmojiWinkFill}
            />
            Ready?
          </Text>
        </Box>
        <Button bgColor={"blue.500"} color={"white"} >
          Enter for $10
        </Button>
      </Flex>
      <Flex alignItems={"center"} gap={3}>
        <Box
          display={"flex"}
          width={"20%"}
          height={"80px"}
          position={"relative"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Image
        src="/player-versus-player (2).png"
        alt="Slide 1 Image"
        width={24}
        mx="auto"
      />
        </Box>
        <Box width={"50%"}>
          <Text color={'rgba(0, 0, 0, 0.3)'}
          fontSize={'14px'}>$27.3</Text>
          <Text fontWeight={600} display={'flex'}
          fontSize={'15px'}
          alignItems={'center'}
          gap={2}>Cool or What 
            <Text
            bg={'rgba(128, 0, 128, 0.2)'}
            padding={'2px 5px'}
            borderRadius={'10px'}
            >8h</Text>
          </Text>
          <Text fontSize={"14px"}
          display={'flex'}
          gap={1}
          alignItems={'center'}
          color={'rgba(0, 0, 0, 0.3)'}>
            <Icon as={BsFillEmojiWinkFill}
            />
            Ready ?
          </Text>
        </Box>
        <Button bgColor={"blue.500"} color={"white"} >
          Enter for $1
        </Button>
      </Flex>
      <Flex alignItems={"center"} gap={3}>
        <Box
          display={"flex"}
          width={"20%"}
          height={"80px"}
          position={"relative"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Image
        src="/tournamentIcon.png"
        alt="Slide 1 Image"
        width={24}
        mx="auto"
      />
        </Box>
        <Box width={"50%"}>
          <Text color={'rgba(0, 0, 0, 0.3)'}
          fontSize={'14px'}>Mystery</Text>
          <Text fontWeight={600} display={'flex'}
          fontSize={'15px'}
          alignItems={'center'}
          gap={2}>Free Tournament 
          </Text>
          <Text fontSize={"14px"}
          display={'flex'}
          gap={1}
          alignItems={'center'}
          color={'rgba(0, 0, 0, 0.3)'}>
            <Icon as={BsFillEmojiWinkFill}
            />
            Ready ?
          </Text>
        </Box>
        <Button bgColor={"blue.500"} color={"white"} >
          Enter for free
        </Button>
      </Flex>
    </Flex>
  );
}
