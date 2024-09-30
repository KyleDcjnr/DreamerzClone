import { Box, Flex, Text, Icon, Image} from "@chakra-ui/react"
import star from '../../public/star.png'
import { BsCurrencyDollar } from "react-icons/bs";
import { FaBell } from "react-icons/fa";
import { HiUser } from "react-icons/hi2";
import { IoMdHelpCircle } from "react-icons/io";

export default function Header() {
    return(
        <Box
        display={'flex'}
        width={'100%'}
        height={'80px'}
        bgColor={'white'}
        justifyContent={'space-between'}
        alignItems={'center'}
        >
            <Box
            display={'flex'}
            gap={2}
            alignItems={'center'}>

            <Flex
            alignItems={'center'}
            gap={2}
            border={'1px solid rgba(0, 0, 0, 0.3)'}
            p={'5px 10px'}
            borderRadius={'20px'}>
                <Image src={star}
                width={6}/>
                <Text
                display={'flex'}
                fontWeight={600}
                gap={1}
                fontSize={'16px'}>
                    1,000
                    <span
                    className="text-blue-500">
                        XP
                    </span>
                </Text>
            </Flex>

            <Flex
            alignItems={'center'}                
            border={'1px solid rgba(0, 0, 0, 0.3)'}
            borderRadius={'20px'}
            p={'5px 10px'}
            gap={1}>
                <Icon as={BsCurrencyDollar}
                width={10}
                height={10}
                borderRadius={'20px'}
                boxSize={5} 
                />
                <Text
                fontWeight={600}
                fontSize={'16px'}

                >
                    0.00</Text>
            </Flex>
            </Box>

            <Flex
            alignItems={'center'}
            gap={3}>
                <Icon as={IoMdHelpCircle}
                width={12}
                height={12}
                boxSize={10}
                p={'5px'}
                color={'rgba(0, 0, 0, 0.3)'}
                border={'1px solid rgba(0, 0, 0, 0.3)'}
                borderRadius={'20px'}/>
                <Icon as={FaBell} 
                width={12}
                height={12}
                boxSize={9}
                border={'1px solid rgba(0, 0, 0, 0.3)'}
                borderRadius={'20px'}
                p={'5px'}
                color={'rgba(0, 0, 0, 0.3)'}/>
                <Flex 
                position={'relative'}>
                <Icon as={HiUser} 
                width={18}
                height={18} 
                boxSize={12}
                border={'1px solid rgba(0, 0, 0, 0.3)'}
                borderRadius={'50%'}
                p={'5px'}
                color={'rgba(0, 0, 0, 0.3)'}/>
                <Text
                position={'absolute'}
                bg={'rgba(0, 0, 0, 0.2)'}
                fontSize={'10px'}
                bottom={'-12px'}
                left={'11px'}
                fontWeight={700}
                p={'2px'}
                color={'rgba(0, 0, 0, 0.6)'}>
                    5638
                </Text>
                </Flex>
            </Flex>

        </Box>
    )
}