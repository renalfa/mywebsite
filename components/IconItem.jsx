import Link from "next/link";

const IconItem = ({ icon: Icon, link }) => {
  return (
    <Link
      href={link}
      target="_blank"
      className="transition cursor-pointer hover:text-neutral-400"
    >
      <Icon size={20} />
    </Link>
  );
};

export default IconItem;
