import { useState } from "react";
import { Popover, PopoverContent, PopoverTrigger } from "@shadcn/popover";
import { Button } from "@shadcn/button";
import { CaretSortIcon, CheckIcon } from "@radix-ui/react-icons";
import { cn } from "../../../lib/utils";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@shadcn/typeahead";

const Typeahead = ({
  displayValue,
  setDisplayValue,
  data,
  location,
  setEmptyState,
}) => {
  const [open, setOpen] = useState(false);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[200px] justify-between"
        >
          {/*displayValue
            ? data.find((element) => element.value === displayValue)?.label
  : "select Value"*/}
          {displayValue || "select Value"}
          <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] max-h-[400px] overflow-y-auto p-0">
        <Command>
          <CommandInput placeholder="Search Account..." className="h-9" />
          <CommandEmpty>
            <Button
              variant="link"
              role="combobox"
              aria-expanded={open}
              className="w-[200px] justify-between"
              onClick={(event) => {
                setEmptyState();
              }}
            >
              {"Create New"}
            </Button>
          </CommandEmpty>
          <CommandGroup>
            {data.map((element) => (
              <CommandItem
                key={element.value}
                displayValue={element.value}
                onSelect={(currentValue) => {
                  setDisplayValue(
                    currentValue === displayValue ? "" : currentValue
                  );
                  setOpen(false);
                }}
              >
                {element.label}
                <CheckIcon
                  className={cn(
                    "ml-auto h-4 w-4",
                    displayValue === element.label ? "opacity-100" : "opacity-0"
                  )}
                />
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  );
};

export default Typeahead;
