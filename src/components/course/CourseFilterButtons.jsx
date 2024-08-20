const CourseFilterButtons = ({ selectedTag, onSelectTag }) => {
  const tags = ["All", "Embedded", "Software", "Industrial"];

  return (
    <div className="flex gap-5 px-20 pb-10">
      {tags.map((tag) => (
        <div
          key={tag}
          onClick={() => onSelectTag(tag)}
          className={`px-4 py-1 border text-xl font-normal border-primary rounded-full cursor-pointer ${
            selectedTag === tag
              ? " text-white bg-primary"
              : "text-primary bg-[#EFF5FF]"
          }`}
        >
          <h1>{tag}</h1>
        </div>
      ))}
    </div>
  );
};

export default CourseFilterButtons;
