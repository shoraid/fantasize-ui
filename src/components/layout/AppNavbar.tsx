import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import {
  MdKeyboardArrowLeft,
  MdKeyboardArrowDown,
  MdMenu,
} from "react-icons/md";

interface AppNavbarProps {
  isOpen?: boolean;
  toggleSidebar?: () => void;
}

const AppNavbar = ({ isOpen, toggleSidebar }: AppNavbarProps) => {
  return (
    <div className="flex items-center justify-between bg-white py-2 px-4">
      <div onClick={toggleSidebar}>
        {isOpen ? (
          <MdKeyboardArrowLeft className="size-10" />
        ) : (
          <MdMenu className="size-10" />
        )}
      </div>

      <div className="pr-8">
        <DropdownMenu.Root>
          <DropdownMenu.Trigger asChild>
            <div className="flex cursor-pointer items-center space-x-1">
              <span>John Doe</span>
              <MdKeyboardArrowDown className="size-5" />
            </div>
          </DropdownMenu.Trigger>

          <DropdownMenu.Portal>
            <DropdownMenu.Content
              className="border-x border-x-slate-100 bg-white shadow-lg"
              sideOffset={5}
            >
              <DropdownMenu.Item className="cursor-pointer py-2 px-4 outline-none hover:bg-indigo-100">
                Profile
              </DropdownMenu.Item>
              <DropdownMenu.Item className="cursor-pointer py-2 px-4 outline-none hover:bg-indigo-100">
                Change Password
              </DropdownMenu.Item>
              <DropdownMenu.Item className="cursor-pointer py-2 px-4 outline-none hover:bg-indigo-100">
                <span className="text-red-500">Logout</span>
              </DropdownMenu.Item>
            </DropdownMenu.Content>
          </DropdownMenu.Portal>
        </DropdownMenu.Root>
      </div>
    </div>
  );
};

export default AppNavbar;
