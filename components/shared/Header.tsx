import * as React from "react";
import { Flex, chakra, Box, Link, Button } from "@chakra-ui/react";
import LogoLink from "./LogoLink";
import NextLink from "next/link";

interface MenuItem {
  title: string;
  id: number;
  href: string;
}

const MenuItemLink = (menuItem: MenuItem) => {
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
        p={"6"}
        h={"full"}
        whiteSpace={"nowrap"}
        textDecoration={"none"}
        transition={"color 150ms ease-in-out 0s"}
        sx={{
          mixBlendMode: "normal",
        }}
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
      <Flex as={"nav"} flex={"0 0 auto"} align={"center"}>
        <Flex as={"ul"}>
          {menuItems.map((x) => (
            <Box as={"li"} key={x.id} flex={"0 0 auto"}>
              <MenuItemLink {...x} />
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
