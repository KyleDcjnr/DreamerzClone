import { Box, Flex, Text, Image, Icon, Button } from "@chakra-ui/react"
import { FaPlay } from "react-icons/fa";
import { HiUser } from "react-icons/hi2";

export default function Gamelist() {
    return(
        <Flex
        flexDirection={'column'}
        gap={10} 
        >
            <Flex
            alignItems={'center'}
            gap={3}
            >
                <Box
                display={'flex'}
                width={'20%'}
                height={'80px'}
                border={'1px solid rgba(0, 0, 0, 0.3)'}
                position={'relative'}
                borderRadius={'20px'}
                justifyContent={'center'}
                alignItems={'center'}
                >
                    <Image src="/slot-machine.png"
                    width={'80%'}
                    height={'80%'}
                    />
                    <Text
                    display={'flex'}
                    alignItems={'center'}
                    bgColor={'gold'}
                    position={'absolute'}
                    bottom={'-10px'}
                    mx={'auto'}
                    p={'5px'}
                    gap={1}
                    fontSize={'12px'}
                    borderRadius={'10px'}
                    color={'white'}

                    >
                        <Icon as={HiUser}
                        boxSize={3}/>
                        5
                    </Text>
                </Box>
                <Box
                width={'50%'}>
                    <Text
                    fontWeight={800}>
                        Slotz
                    </Text>
                    <Text
                    fontSize={'14px'}>
                        Spin the drums, you'll win something, I'm telling you
                    </Text>
                </Box>
                <Button
                bgColor={'blue.500'}
                color={'white'}
                width={'25%'}>
                    <Icon as={FaPlay}/>
                    Play
                </Button>
            </Flex>
            <Flex
            alignItems={'center'}
            gap={3}
            >
                <Box
                display={'flex'}
                width={'20%'}
                height={'80px'}
                border={'1px solid rgba(0, 0, 0, 0.3)'}
                position={'relative'}
                borderRadius={'20px'}
                justifyContent={'center'}
                alignItems={'center'}
                >
                    <Image src="/game.png"
                    width={'80%'}
                    height={'80%'}
                    />
                    <Text
                    display={'flex'}
                    alignItems={'center'}
                    bgColor={'gold'}
                    position={'absolute'}
                    bottom={'-10px'}
                    mx={'auto'}
                    p={'5px'}
                    gap={1}
                    fontSize={'12px'}
                    borderRadius={'10px'}
                    color={'white'}

                    >
                        <Icon as={HiUser}
                        boxSize={3}/>
                        0
                    </Text>
                </Box>
                <Box
                width={'50%'}>
                    <Text
                    fontWeight={800}>
                        Roll
                    </Text>
                    <Text
                    fontSize={'14px'}>
                        Try out your luck, double or lose
                    </Text>
                </Box>
                <Button
                bgColor={'blue.500'}
                color={'white'}
                width={'25%'}>
                    <Icon as={FaPlay}/>
                    Play
                </Button>
            </Flex>
            <Flex
            alignItems={'center'}
            gap={3}
            >
                <Box
                display={'flex'}
                width={'20%'}
                height={'80px'}
                border={'1px solid rgba(0, 0, 0, 0.3)'}
                position={'relative'}
                borderRadius={'20px'}
                justifyContent={'center'}
                alignItems={'center'}
                >
                    <Image src="/casino.png"
                    width={'80%'}
                    height={'80%'}
                    />
                    <Text
                    display={'flex'}
                    alignItems={'center'}
                    bgColor={'gold'}
                    position={'absolute'}
                    bottom={'-10px'}
                    mx={'auto'}
                    p={'5px'}
                    gap={1}
                    fontSize={'12px'}
                    borderRadius={'10px'}
                    color={'white'}

                    >
                        <Icon as={HiUser}
                        boxSize={3}/>
                        2
                    </Text>
                </Box>
                <Box
                width={'50%'}>
                    <Text
                    fontWeight={800}>
                        Dice
                    </Text>
                    <Text
                    fontSize={'14px'}>
                        You choose the risk-you choose the reward
                    </Text>
                </Box>
                <Button
                bgColor={'blue.500'}
                color={'white'}
                width={'25%'}>
                    <Icon as={FaPlay}/>
                    Play
                </Button>
            </Flex>
        </Flex>
    )

}