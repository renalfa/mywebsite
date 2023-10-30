import { generateIcon } from "@/app/func";

const OtherToolContent = ({ label, data }) => {
  return (
    <div>
      <h5 className="text-xl font-bold mb-2">{label}</h5>
      <div className="grid gap-3 grid-cols-2 md:grid-cols-4">
        {data.map((item, i) => (
          <div
            className="px-4 py-1 gap-2 flex items-center justify-center bg-gray-300 text-black rounded-full"
            key={i}
          >
            {generateIcon(item.icon)}
            {item.title}
          </div>
        ))}
      </div>
    </div>
  );
};

export default OtherToolContent;
