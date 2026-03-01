import { Portal, Select } from "@chakra-ui/react"
import type { ListCollection } from "@chakra-ui/react";

interface KeyDropdownListProps {
    listOfItems: ListCollection;
    selectedValue: string[];
    selectValue: (value: string[]) => void;
    label: 'key'|'mode'
}

const DropdownList = ({selectedValue, selectValue, listOfItems, label}: KeyDropdownListProps) => {


    return (
    <Select.Root
      collection={listOfItems}
      width="320px"
      value={selectedValue}
      onValueChange={(e) => selectValue(e.value)}
    >
      <Select.HiddenSelect />
      <Select.Label>Select {label}</Select.Label>
      <Select.Control>
        <Select.Trigger>
            <Select.ValueText />
        </Select.Trigger>
        <Select.IndicatorGroup>
            <Select.Indicator />
        </Select.IndicatorGroup>
      </Select.Control>
      <Portal>
        <Select.Positioner>
          <Select.Content>
            {listOfItems.items.map((item) => (
              <Select.Item item={item} key={item}>
                {item}
                <Select.ItemIndicator />
              </Select.Item>
            ))}
          </Select.Content>
        </Select.Positioner>
      </Portal>
    </Select.Root>
  )
}

export default DropdownList;