import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";

function Navbar() {
  const navigationMenuLinkClasses =
    "hover:text-gray-300 hover:cursor-pointer hover:underline underline-offset-8";

  return (
    <NavigationMenu className="fixed top-0 z-50 w-screen text-white ">
      <NavigationMenuList className="flex justify-center w-screen p-4 gap-8">
        <NavigationMenuItem>
          <NavigationMenuLink className={navigationMenuLinkClasses}>
            About
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink className={navigationMenuLinkClasses}>
            Projects
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink className={navigationMenuLinkClasses}>
            Contact Me
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

export { Navbar };
