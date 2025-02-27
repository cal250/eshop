import { Search, User } from "lucide-react";
import { NotificationSheet } from "./modals";

function PageHeaderWithIcons({ title }: { title: string }) {
  return (
    <div className="flex justify-between  w-full py-3 items-center">
      <div>
        <h1 className="text-3xl font-bold">{title}</h1>
      </div>
      <div className="flex gap-2 items-center">
        <Search size={20} className="hover:cursor-pointer" />
        <NotificationSheet />
        <button className="p-2 rounded-full bg-blue-200 hover:cursor-pointer">
          <User size={20} />
        </button>
      </div>
    </div>
  );
}

export default PageHeaderWithIcons;
