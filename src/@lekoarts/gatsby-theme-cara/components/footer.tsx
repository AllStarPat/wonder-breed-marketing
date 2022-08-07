/** @jsx jsx */
import { Box, Flex, Link, useColorMode, jsx } from "theme-ui"

const Footer = () => {
  return (
    <Box as="footer" variant="footer">
      &copy; {new Date().getFullYear()} Metaverse All-Stars, Inc. All rights reserved.
    </Box>
  )
}

export default Footer
