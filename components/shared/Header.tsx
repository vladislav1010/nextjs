import * as React from "react";
import {
  Flex,
  chakra,
  Box,
  Link,
  Button,
  HTMLChakraProps,
  useColorModeValue,
} from "@chakra-ui/react";
import LogoLink from "./LogoLink";
import NextLink from "next/link";

interface MenuItem {
  title: string;
  id: number;
  href: string;
}

interface DropdownProps extends HTMLChakraProps<"div"> {
  open: boolean;
}
const Dropdown = ({ open, children, ...rest }: DropdownProps) => {
  return (
    <Box
      visibility={open ? "visible" : "hidden"}
      position={{ base: "relative", xl: "absolute" }}
      transition={"max-height 300ms ease 0s"}
      pointerEvents={open ? "auto" : "none"}
      maxH={{ base: open ? "30rem" : 0, xl: "initial" }}
      h={{ base: "full", xl: "initial" }}
      overflow={"hidden"}
      w={{ xl: "full" }}
      bg={{ xl: useColorModeValue("white", "black") }}
      padding={{ xl: 0 }}
      left={{ xl: 0 }}
      top={{ xl: "100%" }}
      maxW={{ xl: "120rem" }}
      {...rest}
    >
      <Box
        as={"section"}
        w={"full"}
        opacity={open ? 1 : 0}
        visibility={open ? "visible" : "hidden"}
        h={open ? "38rem" : 0}
        overflow={"hidden"}
        transition={"opacity 250ms linear 0s, height 250ms ease-out 0s"}
      >
        {children}
      </Box>
    </Box>
  );
};

const callAll = (...fns: (((...args: any[]) => void) | undefined)[]) => (
  ...args: any[]
) => fns.forEach((fn) => fn?.(...args));

const useDropdownTrigger = () => {
  const [open, setOpen] = React.useState(false);

  const handleMouseEnter = React.useCallback(() => {
    setOpen(() => true);
  }, []);
  const handleMouseLeave = React.useCallback(() => {
    setOpen(() => false);
  }, []);

  return {
    getProps: function <T>({
      onMouseEnter,
      onMouseLeave,
      ...rest
    }: {
      onMouseEnter?: React.MouseEventHandler;
      onMouseLeave?: React.MouseEventHandler;
    } & T) {
      return {
        onMouseEnter: callAll(onMouseEnter, handleMouseEnter),
        onMouseLeave: callAll(onMouseLeave, handleMouseLeave),
        ...rest,
      };
    },
    open,
    setOpen,
  };
};

interface MenuItemProps extends MenuItemLinkProps {
  dropdownElement: React.ReactElement;
}
const MenuItem = ({ dropdownElement, ...props }: MenuItemProps) => {
  const { getProps, open } = useDropdownTrigger();

  return (
    <>
      <MenuItemLink {...getProps(props)} />
      {React.cloneElement(dropdownElement, {
        open,
      })}
    </>
  );
};

interface MenuItemLinkProps extends HTMLChakraProps<"a"> {
  menuItem: MenuItem;
}
const MenuItemLink = ({ menuItem, ...rest }: MenuItemLinkProps) => {
  const { href, title } = menuItem;

  return (
    <NextLink href={href}>
      <Link
        colorScheme={"gray"}
        px={"4"}
        display={"block"}
        fontSize={"lg"}
        lineHeight={"10"}
        textAlign={"center"}
        p={{ xl: "6" }}
        h={"full"}
        whiteSpace={"nowrap"}
        textDecoration={"none"}
        transition={"color 150ms ease-in-out 0s"}
        sx={{
          mixBlendMode: "normal",
        }}
        {...rest}
      >
        {title}
        <chakra.svg
          w="10px"
          h="6px"
          position={"relative"}
          display={"inline-block"}
          left={"0.4rem"}
          top={"-0.2rem"}
          stroke={"currentcolor"}
          transition={"stroke 150ms ease-in-out 0s"}
          viewBox="0 0 10 6"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M9 1L5 5 1 1" />
        </chakra.svg>
      </Link>
    </NextLink>
  );
};

const Header = () => {
  const menuItems: MenuItem[] = [
    {
      title: "Platform",
      id: 1,
      href: "/",
    },
  ];

  return (
    <Flex
      as={"header"}
      w={"full"}
      position={"sticky"}
      zIndex={"sticky"}
      inset={0}
      h={{ xl: "auto" }}
      bg={"transparent"}
      maxW={"120rem"}
      px={"14"}
    >
      <Flex flex={"0 0 auto"} align={"center"}>
        <LogoLink />
      </Flex>
      <Flex as={"nav"} flex={"0 0 auto"} align={"center"} position={"relative"}>
        <Flex as={"ul"}>
          {menuItems.map((x) => (
            <Box as={"li"} h={{ xl: "24" }} key={x.id} flex={"0 0 auto"}>
              <MenuItem
                dropdownElement={
                  // @ts-expect-error
                  //suppress RequiredAttributes
                  <Dropdown></Dropdown>
                }
                menuItem={x}
              />
            </Box>
          ))}
        </Flex>
        <Button colorScheme={"orange"} size={"md"} ml={"6"}>
          Contact Sales
        </Button>
      </Flex>
      <Flex flex={"0 0 auto"} wrap={"nowrap"} align={"center"} ml={"auto"}>
        <Button
          colorScheme={"gray"}
          variant={"bgBorderless"}
          textTransform={"uppercase"}
          flex={"0 0 auto"}
        >
          Log in
        </Button>
        <Button
          colorScheme={"gray"}
          variant={"bgless"}
          textTransform={"uppercase"}
          ml={"4"}
          flex={"0 0 auto"}
        >
          Sign up
        </Button>
      </Flex>
    </Flex>
  );
};

export default Header;
