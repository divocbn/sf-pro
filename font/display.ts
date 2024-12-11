import localFont from "next/font/local"

export const SfProDisplay = localFont({
  src: [
    {
      path: "./woff2/sf-pro-display_regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./woff2/sf-pro-display_medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "./woff2/sf-pro-display_semibold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "./woff2/sf-pro-display_bold.woff2",
      weight: "700",
      style: "normal",
    },
  ]
})