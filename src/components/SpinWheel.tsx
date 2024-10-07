import React, { useState } from "react";
import { 
  Box, 
  Button, 
  Text, 
  VStack, 
  HStack, 
  useToast, 
  Image,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  FormControl,
  FormLabel,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper } from "@chakra-ui/react";
import { Wheel } from "react-custom-roulette";
import { motion, AnimatePresence } from "framer-motion";
import Leaderboard from "./leaderboard";

interface Score {
  player: string;
  score: number;
}

const SpinnerWheel: React.FC = () => {
  const {isOpen, onClose, onOpen} = useDisclosure()
  const [mustSpin, setMustSpin] = useState<boolean>(false);
  const [prizeNumber, setPrizeNumber] = useState<number>(0);
  const [stakeAmount, setStakeAmount] = useState<number | null>(null); // Stake amount is required before the game
  const [spinsLeft, setSpinsLeft] = useState<number>(1); // One spin per payment
  const [totalWinnings, setTotalWinnings] = useState<number>(0);
  const [lastWin, setLastWin] = useState<number>(0);
  const [spinResults, setSpinResults] = useState<number[]>([]);
  const [isGameOver, setIsGameOver] = useState<boolean>(false);
  const [showWinAnimation, setShowWinAnimation] = useState<boolean>(false);
  const [leaderboardScores, setLeaderboardScores] = useState<Score[]>([]);
  const toast = useToast();
  

  const data = [
    { option: "0.5x", style: { backgroundColor: "#FF6B6B", textColor: "white" } },
    { option: "Try Again", style: { backgroundColor: "#FFE15D", textColor: "black" } },
    { option: "1.0x", style: { backgroundColor: "#4ECDC4", textColor: "white" } },
    { option: "Try Again", style: { backgroundColor: "#FFE15D", textColor: "black" } },
    { option: "1.5x", style: { backgroundColor: "#FFD93D", textColor: "black" } },
    { option: "Try Again", style: { backgroundColor: "#FFE15D", textColor: "black" } },
    { option: "2.0x", style: { backgroundColor: "#6E85B7", textColor: "white" } },
    { option: "Try Again", style: { backgroundColor: "#FFE15D", textColor: "black" } },
    { option: "2.5x", style: { backgroundColor: "#ED8975", textColor: "white" } },
    { option: "Try Again", style: { backgroundColor: "#FFE15D", textColor: "black" } },
    { option: "3.0x", style: { backgroundColor: "#9575DE", textColor: "white" } },
    { option: "Try Again", style: { backgroundColor: "#FFE15D", textColor: "black" } },
    { option: "3.5x", style: { backgroundColor: "#FF8066", textColor: "white" } },
    { option: "Try Again", style: { backgroundColor: "#FF9B9B", textColor: "white" } },
    { option: "4.0x", style: { backgroundColor: "#45B7D1", textColor: "white" } },
    { option: "Try Again", style: { backgroundColor: "#FF9B9B", textColor: "white" } },
  ];

  const handleSpinClick = () => {
    if (stakeAmount === null || stakeAmount <= 0) {
      toast({
        title: "Please set a valid stake amount to play.",
        status: "warning",
        duration: 3000,
        isClosable: true,
      });
      return;
    }

    if (spinsLeft > 0) {
      const newPrizeNumber = Math.floor(Math.random() * data.length);
      setPrizeNumber(newPrizeNumber);
      setMustSpin(true);
      setSpinsLeft(0); // Only one spin per payment
    }
  };

  const handleSpinStop = () => {
    setMustSpin(false);

    const result = data[prizeNumber].option;
    if (result === "Try Again") {
      // If it's "Try Again", player loses the stake
      setLastWin(0);
      setStakeAmount(null);
      toast({
        title: "You lost!",
        description: `You lost your stake. Better luck next time!`,
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    } else {
      const multiplier = parseFloat(result.replace('x', '')) || 0;
      const winAmount = stakeAmount! * multiplier;
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

      setTimeout(() => {
        setIsGameOver(true);
        setLeaderboardScores((prevScores) =>
          [...prevScores, { player: "Player", score: newTotalWinnings }]
            .sort((a, b) => b.score - a.score)
            .slice(0, 10) // Limit the leaderboard to 10 players
        );
      }, 2000);
    }
  };

  const handlePayment = (amount: number) => {
    setStakeAmount(amount);
    setSpinsLeft(1); // Grant one spin per payment
    setTotalWinnings(0); // Reset winnings for the new round
  };

  if (isGameOver) {
    return (
      <VStack spacing={8} align="center">
        <Text fontSize="2xl" fontWeight="bold">
          Game Over! Total Winnings: ${totalWinnings}
        </Text>
        <Button
          colorScheme="teal"
          onClick={() => {
            setIsGameOver(false);
            setStakeAmount(null); // Reset stake amount
          }}
        >
          Play Again (Requires New Payment)
        </Button>
        <Leaderboard scores={leaderboardScores} />
      </VStack>
    );
  }

  return (
    <VStack spacing={8} align="center">
      {!stakeAmount && (
        <>
        <Image src="/game.png"/>
        </>
      )}
      <Text fontSize="2xl" fontWeight="bold">
        {stakeAmount ? `Stake: $${stakeAmount}` : "Buy a slot to spin the wheel"}
      </Text>
      {!stakeAmount && (
        <>
        <Text mt={-4} display={'flex'} color={"red"} gap={1}>
        Note
        <Text color={'black'}>
        : 1 ton = 1 slot to spin
        </Text>
      </Text>
        </>
      )}

      {!stakeAmount && (
        <HStack spacing={4}>
          <Button colorScheme="blue" 
          // onClick={() => handlePayment(10)}
          onClick={onOpen}
          >
            Buy a slot
          </Button>

        </HStack>
      )}

      {stakeAmount && (
        <>
          <Text color="black" fontSize="xl">
            Spins Left: {spinsLeft}
          </Text>
          <AnimatePresence>
            {showWinAnimation && (
              <motion.div>
                <Text color="yellow.300" fontSize="6xl" fontWeight="bold">
                  ${lastWin}
                </Text>
              </motion.div>
            )}
          </AnimatePresence>
          <Box w={"100%"} display={"flex"} flexDirection={"column"} alignItems={"center"}>
            <motion.div animate={mustSpin ? { scale: [1, 1.05, 1] } : {}} transition={{ duration: 0.5, repeat: Infinity }}>
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
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <Button colorScheme="teal" onClick={handleSpinClick} isDisabled={mustSpin || spinsLeft === 0}>
                Spin
              </Button>
            </motion.div>
          </HStack>
        </>
      )}
      {!stakeAmount && (
      <Drawer isOpen={isOpen} placement="bottom" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Choose Amount of Slots</DrawerHeader>

          <DrawerBody>
            <Box display={'flex'} flexDirection={'column'} gap={5}>
<FormControl>
  <FormLabel>Amount</FormLabel>
  <NumberInput max={100} min={1}>
    <NumberInputField  />
    <NumberInputStepper>
      <NumberIncrementStepper />
      <NumberDecrementStepper />
    </NumberInputStepper>
  </NumberInput>
</FormControl>
            </Box>
          </DrawerBody>

          <DrawerFooter>
            <Button variant="outline" mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button 
              colorScheme="green" 
              onClick={() => handlePayment(10)} 
              // isDisabled={isConfirmButtonDisabled} // Disable button if inputs are invalid
            >
              Confirm
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
      )}
    </VStack>
    
  );
};

export default SpinnerWheel;
