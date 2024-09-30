import { Box, Flex, Text } from "@chakra-ui/react";
import Header from "../components/Header";
import Gamelist from "../components/Gamelist";
import NavigationBar from "../components/NavigationBar";

export default function Game() {
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
      >
        <Header />
        <Box display={"flex"} flexDirection={"column"} gap={5}>
          <Flex alignItems={"center"} justifyContent={"space-between"} mt={10}>
            <Text fontWeight={900} fontSize={"32px"}>
              Play to Earn
            </Text>
          </Flex>
          <Text fontWeight={700} fontSize={"22px"}>
            All games
          </Text>
          <Gamelist />
        </Box>
      </Flex>
      <NavigationBar />
    </Box>
  );
}
