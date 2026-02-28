import { Table, Stack, For } from "@chakra-ui/react";

const KeysTable = () => {

  const notes = ['C', 'D', 'E', 'F', 'G', 'A', 'B'];
  const degrees = [
    'maj 7', 'min 7', 'min 7', 'maj 7', '7', 'min 7', 'min -5/7'
  ];

  const keys = [
    { id: 1, keyName: 'C', notes: notes },
    { id: 2, keyName: 'D', notes: notes },
    { id: 3, keyName: 'E', notes: notes },
    { id: 4, keyName: 'F', notes: notes },
    { id: 5, keyName: 'G', notes: notes },
    { id: 6, keyName: 'A', notes: notes },
    { id: 7, keyName: 'B', notes: notes }
  ]

    return (
      <Stack gap="10">
        <Table.Root size={'lg'}>
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeader>Key</Table.ColumnHeader>
            <Table.ColumnHeader>Notes</Table.ColumnHeader>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {keys.map((key) => (
            <Table.Row key={key.id}>
              <Table.Cell>{key.keyName}</Table.Cell>
              <Table.Cell>{key.notes.map(note => note)}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
        </Table.Root>
      </Stack>
    )
};

export default KeysTable;