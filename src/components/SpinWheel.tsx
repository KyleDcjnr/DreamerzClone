import React, { useState } from "react";
import { Box, Button, Text, VStack, HStack, useToast } from "@chakra-ui/react";
import { Wheel } from "react-custom-roulette";
import { motion, AnimatePresence } from "framer-motion";
import ResultScreen from "./result";
import Leaderboard from "./leaderboard";

interface Score {
  player: string;
  score: number;
}

const SpinnerWheel: React.FC = () => {
  const [mustSpin, setMustSpin] = useState<boolean>(false);
  const [prizeNumber, setPrizeNumber] = useState<number>(0);
  const [spinsLeft, setSpinsLeft] = useState<number>(3);
  const [totalWinnings, setTotalWinnings] = useState<number>(0);
  const [lastWin, setLastWin] = useState<number>(0);
  const [spinResults, setSpinResults] = useState<number[]>([]);
  const [isGameOver, setIsGameOver] = useState<boolean>(false);
  const [showWinAnimation, setShowWinAnimation] = useState<boolean>(false);
  const [leaderboardScores, setLeaderboardScores] = useState<Score[]>([]);
  const toast = useToast();

  const data = [
    { option: "10", style: { backgroundColor: "#FF6B6B", textColor: "white" } },
    { option: "20", style: { backgroundColor: "#4ECDC4", textColor: "white" } },
    { option: "30", style: { backgroundColor: "#FFD93D", textColor: "black" } },
    { option: "40", style: { backgroundColor: "#6E85B7", textColor: "white" } },
    { option: "50", style: { backgroundColor: "#ED8975", textColor: "white" } },
    { option: "60", style: { backgroundColor: "#9575DE", textColor: "white" } },
    { option: "70", style: { backgroundColor: "#FF8066", textColor: "white" } },
    { option: "80", style: { backgroundColor: "#45B7D1", textColor: "white" } },
    { option: "90", style: { backgroundColor: "#98D8AA", textColor: "black" } },
    {
      option: "100",
      style: { backgroundColor: "#8E8E8E", textColor: "white" },
    },
    {
      option: "200",
      style: { backgroundColor: "#FFE15D", textColor: "black" },
    },
    {
      option: "500",
      style: { backgroundColor: "#FF9B9B", textColor: "white" },
    },
  ];

  const handleSpinClick = () => {
    if (spinsLeft > 0) {
      const newPrizeNumber = Math.floor(Math.random() * data.length);
      setPrizeNumber(newPrizeNumber);
      setMustSpin(true);
      setSpinsLeft(spinsLeft - 1);
    }
  };

  const handleSpinStop = () => {
    setMustSpin(false);
  
    const winAmount = parseInt(data[prizeNumber].option);
    const newTotalWinnings = totalWinnings + winAmount;
  
    setLastWin(winAmount);
    setTotalWinnings(newTotalWinnings);
    setSpinResults([...spinResults, winAmount]);
  
    setShowWinAnimation(true);
    setTimeout(() => setShowWinAnimation(false), 2000);
  
    toast({
      title: `You won $${winAmount}!`,
      description: `Total winnings: $${newTotalWinnings}`,
      status: "success",
      duration: 3000,
      isClosable: true,
    });
  
    if (spinsLeft === 0) {
      setTimeout(() => {
        setIsGameOver(true);
        // Use the newTotalWinnings directly here
        setLeaderboardScores((prevScores) =>
          [...prevScores, { player: "Player", score: newTotalWinnings }]
            .sort((a, b) => b.score - a.score)
            .slice(0, 10) // Limit the leaderboard to 10 players
        );
      }, 2000);
    }
  };
  

  const handleReset = () => {
    setSpinsLeft(3);
    setTotalWinnings(0);
    setLastWin(0);
    setSpinResults([]);
    setIsGameOver(false);
    toast({
      title: "Game Reset",
      description: "Your winnings have been reset. You have 3 new spins!",
      status: "info",
      duration: 3000,
      isClosable: true,
    });
  };



  if (isGameOver) {
    return (
      <ResultScreen
        totalWinnings={totalWinnings}
        spinResults={spinResults}
        onPlayAgain={handleReset}
      />
    );
  }

  return (
    <VStack spacing={8} align="center" minH={"100vh"}>
      <Text color="black" fontSize="xl">
        {spinsLeft} spin{spinsLeft !== 1 ? "s" : ""} left
      </Text>
      <Text color="black" fontSize="2xl">
        Total Winnings: ${totalWinnings}
      </Text>
      <AnimatePresence>
        {showWinAnimation && (
          <motion.div
            // initial={{ scale: 0, opacity: 0 }}
            // animate={{ scale: 1, opacity: 1 }}
            // exit={{ scale: 0, opacity: 0 }}
            // style={{ position: "absolute", zIndex: 10 }}
          >
            <Text color="yellow.300" fontSize="6xl" fontWeight="bold">
              ${lastWin}
            </Text>
          </motion.div>
        )}
      </AnimatePresence>
      <Box w={"100%"}
      display={'flex'}
      flexDirection={'column'}
      alignItems={'center'}>
        <motion.div
          animate={mustSpin ? { scale: [1, 1.05, 1] } : {}}
          transition={{ duration: 0.5, repeat: Infinity }}
          style={{zIndex: 0}}

        >
          <Wheel
            mustStartSpinning={mustSpin}
            prizeNumber={prizeNumber}
            data={data}
            onStopSpinning={handleSpinStop}
            outerBorderColor="#13B5B0"
            outerBorderWidth={10}
            innerBorderColor="#13B5B0"
            radiusLineColor="#13B5B0"
            radiusLineWidth={1}
            textDistance={60}
            fontSize={20}
          />
        </motion.div>
      </Box>
      <HStack spacing={4}>
        <Button colorScheme="red" onClick={handleReset}>
          Reset
        </Button>
        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          <Button
            colorScheme="teal"
            onClick={handleSpinClick}
            isDisabled={mustSpin || spinsLeft === 0}
          >
            Spin
          </Button>
        </motion.div>
      </HStack>
      <Leaderboard scores={leaderboardScores} />
    </VStack>
  );
};

export default SpinnerWheel;
