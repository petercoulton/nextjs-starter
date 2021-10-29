import { default as NextDocument } from 'next/document'
import {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
  DocumentInitialProps,
} from 'next/document'

import { ServerStyleSheet } from 'styled-components'

// noinspection HtmlRequiredTitleElement
class Document extends NextDocument {
  render(): JSX.Element {
    return (
      <Html lang={'en-GB'}>
        <Head />
        <body className={'loading'}>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }

  static async getInitialProps(
    context: DocumentContext
  ): Promise<DocumentInitialProps> {
    return await addAppStylesToInitialProps(context)
  }
}

const addAppStylesToInitialProps = async (
  context: DocumentContext
): Promise<DocumentInitialProps> => {
  const sheet = new ServerStyleSheet()
  const originalRenderPage = context.renderPage

  try {
    context.renderPage = () =>
      originalRenderPage({
        enhanceApp: (App) => (props) => sheet.collectStyles(<App {...props} />),
      })

    const initialProps = await NextDocument.getInitialProps(context)

    return {
      ...initialProps,
      styles: (
        <>
          {initialProps.styles}
          {sheet.getStyleElement()}
        </>
      ),
    }
  } finally {
    sheet.seal()
  }
}

export default Document
