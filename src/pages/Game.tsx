import { Box, Flex, Text } from "@chakra-ui/react";
import Header from "../components/Header";
import NavigationBar from "../components/NavigationBar";
import SlotMachine from "../components/SlotMachine";
import { useParams } from 'react-router-dom'
import SpinnerWheel from '../components/SpinWheel';


const Game: React.FC = () => {
  const { gameType } = useParams<{ gameType: string }>();

  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      bgColor={"white"}
      width={"100vw"}
      minHeight={"100vh"}
      alignItems={"center"}
      py={2}
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
        <Box display={"flex"} flexDirection={"column"} gap={3}>
          <Flex alignItems={"center"} justifyContent={"space-between"} mt={5}>
            <Text fontWeight={900} fontSize={"32px"}>
              Play to Earn
            </Text>
          </Flex>
          
          {gameType === 'slotMachine' && <SlotMachine />}
          {gameType === 'spinWheel' && <SpinnerWheel />}
          {(!gameType || (gameType !== 'slotMachine' && gameType !== 'spinWheel')) && (
        <p>Please select a valid game.</p>
      )}

        </Box>
      </Flex>
      <NavigationBar />
    </Box>
  );
}

export default Game