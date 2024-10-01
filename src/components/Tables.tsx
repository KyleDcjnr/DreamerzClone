import {
  Box,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from "@chakra-ui/react";

export default function Tables() {
  return (
    <Box>
      <TableContainer>
        <Table variant="simple">
          <TableCaption></TableCaption>
          <Thead>
            <Tr>
              <Th>Name</Th>
              <Th>Winnings</Th>
              <Th isNumeric>Referral Earnings</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td></Td>
              <Td></Td>
              <Td isNumeric></Td>
            </Tr>
            <Tr>
              <Td></Td>
              <Td></Td>
              <Td isNumeric></Td>
            </Tr>
            <Tr>
              <Td></Td>
              <Td></Td>
              <Td isNumeric></Td>
            </Tr>
          </Tbody>
          <Tfoot>
            <Tr>
              <Th></Th>
              <Th></Th>
              <Th isNumeric></Th>
            </Tr>
          </Tfoot>
        </Table>
      </TableContainer>
    </Box>
  );
}
