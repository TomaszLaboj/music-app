import { Table, Stack } from "@chakra-ui/react";

type Mode = { name: string; position: number };

const KeysTable = () => {

  const notes = ['C', 'D', 'E', 'F', 'G', 'A', 'B'];
  const degrees = [
    'maj 7', 'min 7', 'min 7', 'maj 7', '7', 'min 7', 'min -5/7'
  ];
  
  const modes = {
    ionian: { name: 'Ionian', position: 0 },
    dorian: { name: 'Dorian', position: 1 },
    phrygian: { name: 'Phrygian', position: 2 },
    lydian: { name: 'Lydian', position: 3 },
    mixolydian: { name: 'Mixolydian', position: 4 },
    eolian: { name: 'Eolian', position: 5 },
    locrian: { name: 'Locrian', position: 6 }
  };

  const moveFirstToEnd = (array: (number|undefined) []) => {
    const firstElement = array.shift();
    return [...array, firstElement];
  }

  const createNaturalModeStepsArray = (mode: Mode): (number | undefined)[] => {
    const naturalMajor = [2, 2, 1, 2, 2, 2, 1];
    let steps: (number | undefined)[] = [...naturalMajor]
    for (let i = 0; i < mode.position; i++) {
      steps = moveFirstToEnd(steps)
    }
    steps.pop()

    return steps;
  }

  const createScale = (steps: (number|undefined)[]): string[] => {
    const chromaticNotes = ['C','C#','D','D#','E','F','F#','G','G#','A','A#','B']
    const newScale = [];
    let chromaticScaleIndex = 0;
    newScale.push(chromaticNotes[chromaticScaleIndex])
    for (const step of steps) {
      if (step) {
        chromaticScaleIndex = chromaticScaleIndex + step;
        newScale.push(chromaticNotes[chromaticScaleIndex])
      }
    }
    return newScale;
  }

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
            <Table.ColumnHeader>Mode</Table.ColumnHeader>
            <Table.ColumnHeader>1</Table.ColumnHeader>
            <Table.ColumnHeader>2</Table.ColumnHeader>
            <Table.ColumnHeader>3</Table.ColumnHeader>
            <Table.ColumnHeader>4</Table.ColumnHeader>
            <Table.ColumnHeader>5</Table.ColumnHeader>
            <Table.ColumnHeader>6</Table.ColumnHeader>
            <Table.ColumnHeader>7</Table.ColumnHeader>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {keys.map((key) => (
            <Table.Row key={key.id}>
              <Table.Cell>{key.keyName}</Table.Cell>
              <Table.Cell>{createScale(createNaturalModeStepsArray(modes.dorian)).map(note => note)}</Table.Cell>
              <Table.Cell>{modes.dorian.name}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
        </Table.Root>
      </Stack>
    )
};

export default KeysTable;