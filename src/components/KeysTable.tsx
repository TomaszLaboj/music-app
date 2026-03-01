import { useState } from 'react';
import { Table, Stack, createListCollection, Text } from "@chakra-ui/react";
import DropdownList from "./ui/DropdownLIst";
import type { ListCollection } from '@chakra-ui/react';

export const chromaticNotes = ['C','C#','D','D#','E','F','F#','G','G#','A','A#','B'];

type Mode = { name: string; position: number };
interface Modes {
  [key: string]: Mode;
  ionian: Mode; 
  dorian: Mode; 
  phrygian: Mode; 
  lydian: Mode; 
  mixolydian: Mode; 
  eolian: Mode; 
  locrian: Mode; 
}

const modes: Modes = {
  ionian: { name: 'Ionian', position: 0 },
  dorian: { name: 'Dorian', position: 1 },
  phrygian: { name: 'Phrygian', position: 2 },
  lydian: { name: 'Lydian', position: 3 },
  mixolydian: { name: 'Mixolydian', position: 4 },
  eolian: { name: 'Eolian', position: 5 },
  locrian: { name: 'Locrian', position: 6 }
};

const KeysTable = () => {
  const [selectedKey, setSelectedKey] = useState<string[]>(['C']);
  const [selectedMode, setSelectedMode] = useState<string[]>(['ionian']);

  const listOfKeys: ListCollection = createListCollection({
      items: chromaticNotes
  });

  const handleKeySelect = (key: string[]) => {
    console.log('from handle key select', key)
    setSelectedKey(key)
  };

  const handleModeSelect = (mode: string[]) => {
    console.log('from handle mode select');
    setSelectedMode(mode);
  }

  const listOfModes: ListCollection = createListCollection({
    items: Object.keys(modes).map((mode) => mode)
  }) ;
  const moveFirstToEnd = (array: (number|undefined) []) => {
    const firstElement = array.shift();
    return [...array, firstElement];
  }

  const createNaturalModeStepsArray = (mode: Mode): (number | undefined)[] => {
    console.log(mode);
    const naturalMajor = [2, 2, 1, 2, 2, 2, 1];
    let steps: (number | undefined)[] = [...naturalMajor]
    for (let i = 0; i < mode.position; i++) {
      steps = moveFirstToEnd(steps)
    }
    steps.pop()

    return steps;
  }

  const createScale = (steps: (number|undefined)[]): string[] => {
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
  
    return (
      <Stack gap="10">
        <Table.Root size={'lg'}>
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeader>Key</Table.ColumnHeader>
            <Table.ColumnHeader>Mode</Table.ColumnHeader>
            <Table.ColumnHeader>Notes</Table.ColumnHeader>
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
            <Table.Row>
              <Table.Cell>
                <DropdownList
                  selectedValue={selectedKey}
                  selectValue={handleKeySelect}
                  listOfItems={listOfKeys}
                  label={'key'}
                />
              </Table.Cell>
              <Table.Cell>
                <DropdownList
                  selectedValue={selectedMode}
                  selectValue={handleModeSelect}
                  listOfItems={listOfModes}
                  label={'mode'}
                />
              </Table.Cell>
              <Table.Cell>{createScale(createNaturalModeStepsArray(modes[selectedMode[0]])).map(note => <span >{note}</span>)}</Table.Cell>
              {createScale(createNaturalModeStepsArray(modes[selectedMode[0]])).map(note => <Table.Cell key={note}>{note}</Table.Cell>)}
            </Table.Row>
        </Table.Body>
        </Table.Root>
      </Stack>
    )
};

export default KeysTable;