import { XMarkIcon } from "@heroicons/react/24/outline";
import { useState, useEffect } from "react";
import { useFormContext } from "react-hook-form";

const TagInput = ({ name }) => {
  const { register, setValue, getValues } = useFormContext();
  const [tagInput, setTagInput] = useState("");

  // Get initial tags from the form context
  const [tags, setTags] = useState(getValues(name) || []);

  useEffect(() => {
    // Update the form values whenever tags change
    setValue(name, tags);
  }, [tags, name, setValue]);

  const addTag = (tag) => {
    if (tag && !tags.includes(tag)) {
      setTags([...tags, tag]);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      addTag(tagInput.trim());
      setTagInput("");
    }
  };

  const handleRemoveTag = (indexToRemove) => {
    setTags(tags.filter((_, index) => index !== indexToRemove));
  };

  return (
    <div className="border border-gray-300 rounded-md px-2 py-1.5 flex flex-wrap items-center gap-2 bg-white">
      <ul className="flex flex-wrap gap-1">
        {tags.map((tag, index) => (
          <li
            key={index}
            className="bg-slate-100 text-black text-sm font-semibold rounded-md p-1 flex items-center"
          >
            {tag}
            <XMarkIcon
              onClick={() => handleRemoveTag(index)}
              className="ml-2 w-4 h-4 text-black font-semibold  hover:text-red-600"
            />
          </li>
        ))}
      </ul>
      <input
        type="text"
        value={tagInput}
        onChange={(e) => setTagInput(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Add a tag"
        className="flex-1 min-w-[120px] p-2 outline-none"
      />
      <input type="hidden" {...register(name)} />
    </div>
  );
};

export default TagInput;
