import { generateIcon } from "@/app/func";

const SkillContent = ({ label, data }) => {
  return (
    <div className="min-w-[350px]">
      <h5 className=" text-xl font-bold">{label}</h5>
      {data.map((item, i) => (
        <div className="my-2 bg-gray-300 rounded-full" key={i}>
          <div
            style={{ width: item.level }}
            className="gap-2 px-4 py-1 flex items-center rounded-full bg-gradient-to-r from-green-500 to-blue-500"
          >
            {generateIcon(item.icon)}
            {item.title}
          </div>
        </div>
      ))}
    </div>
  );
};

export default SkillContent;
