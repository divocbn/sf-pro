![](assets/hero.png)

# SF Pro Text & SF Pro Display

SF Pro Text and SF Pro Display are system fonts designed by [Apple Inc.](https://apple.com) for their operating systems and applications.

SF Pro Text is optimized for smaller text sizes and UI elements, featuring careful attention to legibility and readability. It maintains consistent stroke contrast and open letterforms to ensure clarity at smaller sizes.

SF Pro Display is designed for larger text sizes and headlines, with more refined details and tighter spacing. It shares the same design principles as SF Pro Text but is optimized for impact and style at display sizes.

### Installation

```sh
pnpm install sf-pro
```

### Using with Next.js

#### App Router

In `app/layout.js`:

```jsx
import { SfProDisplay } from "sf-pro";

export default function RootLayout({
  children,
}) {
  return (
    <html lang="en" className={SfProDisplay.className}>
      <body>{children}</body>
    </html>
  )
}
```