import localFont from "next/font/local"

export const SfProDisplay = localFont({
  src: [
    {
      path: "./display/sf-pro-display_regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./display/sf-pro-display_medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "./display/sf-pro-display_semibold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "./display/sf-pro-display_bold.woff2",
      weight: "700",
      style: "normal",
    },
  ]
})

export const SfProText = localFont({
  src: [
    {
      path: "./text/sf-pro-text_light.woff",
      weight: "300",
      style: "normal",
    },
    {
      path: "./text/sf-pro-text_regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./text/sf-pro-text_semibold.woff2",
      weight: "600",
      style: "normal",
    }
  ]
})
