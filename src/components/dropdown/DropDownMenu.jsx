import { Fragment, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";

export default function DropDownMenu({ propsItems, handleTabClick }) {
  const [selected, setSelected] = useState(propsItems[0]);

  return (
    <div className="w-72">
      <Listbox
        value={selected}
        onChange={(value) => {
          setSelected(value);
          const selectedIndex = propsItems.findIndex(
            (item) => item.name === value.name
          );
          handleTabClick(selectedIndex);
        }}
      >
        <div className="relative mt-1">
          <Listbox.Button className="relative w-full cursor-default rounded-lg bg-dark-200 py-2 pl-3 pr-10 text-left shadow-md focus:outline-none">
            <span className="block truncate">{selected.name}</span>
            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2"></span>
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="absolute mt-1 z-40 max-h-60 w-full overflow-auto rounded-md bg-dark-200 py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none">
              {propsItems.map((item, index) => (
                <Listbox.Option
                  onClick={() => handleTabClick(index)}
                  key={index}
                  className={({ active }) =>
                    `relative cursor-pointer select-none py-2 pl-10 pr-4 ${
                      active
                        ? "bg-gray-500 text-dark-200-200"
                        : "text-primary-200"
                    }`
                  }
                  value={item.name}
                >
                  {({ selected }) => (
                    <>
                      <span
                        className={`${
                          selected ? "font-medium" : "font-normal"
                        }`}
                      >
                        {item.name}
                      </span>
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  );
}
