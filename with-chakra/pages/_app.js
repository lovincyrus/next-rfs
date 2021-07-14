import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import '@/assets/main.scss'

const theme = extendTheme({
  textStyles: {
    h1: {
      fontSize: 'var(--font-size-medium)',
    },
  },
})

export default function App({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}
