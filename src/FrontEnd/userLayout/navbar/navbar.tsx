// import { RiFontFamily } from "react-icons/ri";
import { Link } from "react-router-dom";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Cloud,
  CreditCard,
  Github,
  Keyboard,
  LifeBuoy,
  LogOut,
  Mail,
  MessageSquare,
  Plus,
  PlusCircle,
  Settings,
  User,
  UserPlus,
  Users,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import profile from "../../../assets/profile.jpg";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";

// function NavBar() {
//   const style = {
//     color: "black",
//     backgroundColor: "cyan",
//     padding: "10px",
//     borderStyle: "solid",
//     display: "flex",
//   };

//   return (
//     <div style={style}>
//       <Link
//         style={{
//           color: "black",
//           backgroundColor: "cyan",
//           padding: "10px",
//           marginLeft: "10px",
//           fontFamily: "sans-serif",
//           fontSize: "calc(2px + 2vmin)",
//           border: "none",
//         }}
//         to="/home"
//       >
//         Home
//       </Link>
//       <Link
//         style={{
//           color: "black",
//           backgroundColor: "cyan",
//           padding: "10px",
//           marginLeft: "10px",
//           fontFamily: "sans-serif",
//           fontSize: "calc(2px + 2vmin)",
//           border: "none",
//         }}
//         to="/school"
//       >
//         School
//       </Link>

//       <Link
//         style={{
//           color: "black",
//           backgroundColor: "cyan",
//           padding: "10px",
//           marginLeft: "10px",
//           fontFamily: "sans-serif",
//           fontSize: "calc(2px + 2vmin)",
//           border: "none",
//         }}
//         to="/scheduler"
//       >
//         Scheduler
//       </Link>
//       <Link
//         style={{
//           color: "black",
//           backgroundColor: "cyan",
//           padding: "10px",
//           marginLeft: "10px",
//           fontFamily: "sans-serif",
//           fontSize: "calc(2px + 2vmin)",
//           border: "none",
//         }}
//         to="/schedules"
//       >
//         Schedules
//       </Link>
//       <div className="w-full h-full flex items-center justify-end  flex-1">
//         <div className="">
//           <DropdownMenu>
//             <DropdownMenuTrigger>
//               <Avatar>
//                 <AvatarImage src="https://github.com/shadcn.png" />
//                 <AvatarFallback></AvatarFallback>
//               </Avatar>
//             </DropdownMenuTrigger>
//             <DropdownMenuContent>
//               <DropdownMenuLabel>
//                 <HoverCard>
//                   <HoverCardTrigger>
//                     <Button variant="ghost">
//                       <Link to="/user/profile">My Account</Link>
//                     </Button>
//                   </HoverCardTrigger>
//                 </HoverCard>
//               </DropdownMenuLabel>
//               <DropdownMenuSeparator />
//               <DropdownMenuItem>
//                 <HoverCard>
//                   <HoverCardTrigger>
//                     <Button variant="ghost" className="text-black">
//                       <Link to="/settings">Settings</Link>
//                     </Button>
//                   </HoverCardTrigger>
//                 </HoverCard>
//               </DropdownMenuItem>
//               <DropdownMenuItem>
//                 <HoverCard>
//                   <HoverCardTrigger>
//                     <Dialog>
//                       <Button variant="ghost" className="text-black">
//                         Support
//                       </Button>
//                       <DialogContent>
//                         <DialogHeader>
//                           <DialogTitle>Are you absolutely sure?</DialogTitle>
//                           <DialogDescription>
//                             This action cannot be undone. This will permanently
//                             delete your account and remove your data from our
//                             servers.
//                           </DialogDescription>
//                         </DialogHeader>
//                       </DialogContent>
//                     </Dialog>
//                   </HoverCardTrigger>
//                 </HoverCard>
//               </DropdownMenuItem>
//               <DropdownMenuItem>Team</DropdownMenuItem>
//               <DropdownMenuItem>
//                 <HoverCard>
//                   <HoverCardTrigger>
//                     <Button variant="ghost" className="text-black">
//                       <Link to="/">Logout</Link>
//                     </Button>
//                   </HoverCardTrigger>
//                 </HoverCard>
//               </DropdownMenuItem>
//             </DropdownMenuContent>
//           </DropdownMenu>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default NavBar;

export default function navbar() {
  const navigation = [
    { name: "Home", href: "/home", current: true },
    { name: "School", href: "/school", current: false },
    { name: "Scheduler", href: "/scheduler", current: false },
    { name: "Schedules", href: "schedules", current: false },
  ];

  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  return (
    <Disclosure as="nav" className="bg-gray-800">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-20 items-center justify-end">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* Mobile menu button*/}
            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open main menu</span>
              <Bars3Icon
                aria-hidden="true"
                className="block h-6 w-6 group-data-[open]:hidden"
              />
              <XMarkIcon
                aria-hidden="true"
                className="hidden h-6 w-6 group-data-[open]:block"
              />
            </DisclosureButton>
          </div>
          <div className="flex flex-1 items-start justify-start sm:items-stretch sm:justify-start">
            <div className="flex flex-shrink-0 items-center">
              <img
                alt="Your Company"
                src="/src/assets/polylogo.png"
                className="h-8 w-auto"
              />
            </div>
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    aria-current={item.current ? "page" : undefined}
                    className={classNames(
                      item.current
                        ? "bg-gray-900 text-white"
                        : "text-gray-300 hover:bg-gray-700 hover:text-white",
                      "rounded-md px-3 py-2 text-sm font-medium"
                    )}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <button
              type="button"
              className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
            >
              <span className="absolute -inset-1.5" />
              <span className="sr-only">View notifications</span>
              <BellIcon aria-hidden="true" className="h-6 w-6" />
            </button>

            {/* Profile dropdown */}
            <Menu as="div" className="relative ml-3">
              <div>
                <MenuButton className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                  <span className="absolute -inset-1.5" />
                  <span className="sr-only">Open user menu</span>
                  <img
                    alt=""
                    src="/src/assets/profile.jpg"
                    className="h-8 w-8 rounded-full"
                  />
                </MenuButton>
              </div>
              <MenuItems
                transition
                className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
              >
                <MenuItem>
                  <a
                    href="/user/profile"
                    className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100"
                  >
                    Your Profile
                  </a>
                </MenuItem>
                <MenuItem>
                  <a
                    href="/settings"
                    className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100"
                  >
                    Settings
                  </a>
                </MenuItem>
                <MenuItem>
                  <a
                    href="/settings"
                    className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100"
                  >
                    Support
                  </a>
                </MenuItem>
                <MenuItem>
                  <a
                    href="/"
                    className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100"
                  >
                    Sign out
                  </a>
                </MenuItem>
              </MenuItems>
            </Menu>
          </div>
        </div>
      </div>

      <DisclosurePanel className="sm:hidden">
        <div className="space-y-1 px-2 pb-3 pt-2">
          {navigation.map((item) => (
            <DisclosureButton
              key={item.name}
              as="a"
              href={item.href}
              aria-current={item.current ? "page" : undefined}
              className={classNames(
                item.current
                  ? "bg-gray-900 text-white"
                  : "text-gray-300 hover:bg-gray-700 hover:text-white",
                "block rounded-md px-3 py-2 text-base font-medium"
              )}
            >
              {item.name}
            </DisclosureButton>
          ))}
        </div>
      </DisclosurePanel>
    </Disclosure>
  );
}
