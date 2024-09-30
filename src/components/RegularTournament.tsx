import { Box, Flex, Text, Image, Icon, Button } from "@chakra-ui/react";
import { BsFillEmojiWinkFill } from "react-icons/bs";
import { HiUser } from "react-icons/hi2";

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
          border={"1px solid rgba(0, 0, 0, 0.3)"}
          position={"relative"}
          borderRadius={"20px"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Image src="/slot-machine.png" width={"80%"} height={"80%"} />
          <Text
            display={"flex"}
            alignItems={"center"}
            bgColor={"gold"}
            position={"absolute"}
            bottom={"-10px"}
            left={'15px'}
            p={"5px"}
            gap={1}
            fontSize={"12px"}
            borderRadius={"10px"}
            color={"white"}
          >
            <Icon as={HiUser} boxSize={3} />5
          </Text>
        </Box>
        <Box width={"50%"}>
          <Text color={'rgba(0, 0, 0, 0.3)'}
          fontSize={'14px'}>$560</Text>
          <Text fontWeight={600} display={'flex'}
          fontSize={'15px'}
          alignItems={'center'}
          gap={2}>100$ Tournament 
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
            Everyday at 18:00 UTC
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
          border={"1px solid rgba(0, 0, 0, 0.3)"}
          position={"relative"}
          borderRadius={"20px"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Image src="/game.png" width={"80%"} height={"80%"} />
          <Text
            display={"flex"}
            alignItems={"center"}
            bgColor={"gold"}
            position={"absolute"}
            bottom={"-10px"}
            left={5}
            p={"5px"}
            gap={1}
            fontSize={"12px"}
            borderRadius={"10px"}
            color={"white"}
          >
            <Icon as={HiUser} boxSize={3} />0
          </Text>
        </Box>
        <Box width={"50%"}>
          <Text color={'rgba(0, 0, 0, 0.3)'}
          fontSize={'14px'}>$98</Text>
          <Text fontWeight={600} display={'flex'}
          fontSize={'15px'}
          alignItems={'center'}
          gap={2}>10$ Tournament 
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
            Everyday at 18:00 UTC
          </Text>
        </Box>
        <Button bgColor={"blue.500"} color={"white"} >
          {/* <Icon as={FaPlay} /> */}
          Enter for $10
        </Button>
      </Flex>
      <Flex alignItems={"center"} gap={3}>
        <Box
          display={"flex"}
          width={"20%"}
          height={"80px"}
          border={"1px solid rgba(0, 0, 0, 0.3)"}
          position={"relative"}
          borderRadius={"20px"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Image src="/casino.png" width={"80%"} height={"80%"} />
          <Text
            display={"flex"}
            alignItems={"center"}
            bgColor={"gold"}
            position={"absolute"}
            bottom={"-10px"}
            left={5}
            p={"5px"}
            gap={1}
            fontSize={"12px"}
            borderRadius={"10px"}
            color={"white"}
          >
            <Icon as={HiUser} boxSize={3} />2
          </Text>
        </Box>
        <Box width={"50%"}>
          <Text color={'rgba(0, 0, 0, 0.3)'}
          fontSize={'14px'}>$27.3</Text>
          <Text fontWeight={600} display={'flex'}
          fontSize={'15px'}
          alignItems={'center'}
          gap={2}>1$ Tournament 
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
            Everyday at 18:00 UTC
          </Text>
        </Box>
        <Button bgColor={"blue.500"} color={"white"} >
          Enter for $1
        </Button>
      </Flex>
    </Flex>
  );
}
