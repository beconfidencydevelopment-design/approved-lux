import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import Image from "next/image";
import Link from "next/link";

dayjs.extend(utc);

export default function BlogItem({ item }) {
  return (
    <div className="pt-2 px-2 pb-4 bg-[#F7FAFF] rounded-3xl h-full">
      <div className="relative w-full aspect-3/2 mb-2">
        <Image
          src={item.image_url}
          alt="HAUTE LIVING"
          fill
          className="object-cover rounded-xl"
        />
      </div>
      <div className="p-2">
        <span className="block mb-2 text-sm leading-[22px] text-[#757575]">
          {dayjs.utc(item.created_at).format("MMMM D, YYYY")}
        </span>
        <h4 className="text-xl leading-7 font-semibold text-[#0E0E0F]">
          <Link className="block" href={`/blog/${item.slug}`}>
            {item.title}
          </Link>
        </h4>
      </div>
    </div>
  );
}
