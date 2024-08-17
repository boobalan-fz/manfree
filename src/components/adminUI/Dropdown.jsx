import {
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from "@headlessui/react";
import { CheckIcon, ChevronDownIcon } from "@heroicons/react/20/solid";
import clsx from "clsx";
import { useEffect, useState } from "react";

const Dropdown = ({ data, label, name, setValue, defaultValue }) => {
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    if (data && data.length > 0) {
      const initialSelection = data.find((item) => item.id === defaultValue);
      setSelected(initialSelection || data[0]);
    }
  }, [data, defaultValue]);

  useEffect(() => {
    if (selected) {
      setValue(name, selected?.id);
    }
  }, [selected, name, setValue]);

  return (
    <div>
      <label className="text-base font-medium pb-1">{label}</label>
      <div className="mt-2">
        <Listbox value={selected} onChange={setSelected}>
          <ListboxButton
            className={clsx(
              "relative block w-full bg-white shadow-sm rounded-lg capitalize px-3 py-2  text-left text-sm/6 "
            )}
          >
            {selected?.name}
            <ChevronDownIcon
              className="group pointer-events-none absolute top-2.5 right-2.5 size-4 "
              aria-hidden="true"
            />
          </ListboxButton>
          <ListboxOptions
            anchor="bottom"
            transition
            className={clsx(
              " rounded-xl bg-white  p-1 transition duration-100 ease-in "
            )}
          >
            {data?.map((item) => (
              <ListboxOption
                key={item.name}
                value={item}
                className="group flex cursor-default items-center gap-2 rounded-lg py-1.5 px-3 select-none data-[focus]:bg-white/10"
              >
                <CheckIcon className="invisible size-4  group-data-[selected]:visible" />
                <div className="text-sm/6 capitalize">{item.name}</div>
              </ListboxOption>
            ))}
          </ListboxOptions>
        </Listbox>
      </div>
    </div>
  );
};

export default Dropdown;
