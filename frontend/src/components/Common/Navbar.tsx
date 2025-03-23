import { Flex, Image, useBreakpointValue  } from "@chakra-ui/react"
import { Link } from "@tanstack/react-router"

//import Logo from "/assets/images/fastapi-logo.svg"
import Logo from "/assets/images/logo-abchir.svg"
import UserMenu from "./UserMenu"

function Navbar() {
  const display = useBreakpointValue({ base: "none", md: "flex" })
  return (
    
    <Flex
      display={display}
      justify="space-between"
      position="sticky"
      //color="white"
      color="white"
      align="center"
      bg={"var(--chakra-colors-gray-100)"}
      _dark={{ bg: "var(--chakra-colors-gray-900)" }}

      w="100%"
      top={0}
      p={4}
    >
      {/*<Link to="/">
        <Image src={Logo} alt="Logo" maxW="3xs" p={2} />
      </Link>*/}
      <Link to="/">
        <Image src={Logo} alt="Logo" maxW="3xs" p={2} />
      </Link>
      <Flex gap={2} alignItems="center">
        <UserMenu />
      </Flex>
    </Flex>
  )
}

export default Navbar
