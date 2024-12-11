import localFont from "next/font/local"

export const SfProText = localFont({
  src: [
    {
      path: "./woff2/sf-pro-text_light.woff",
      weight: "300",
      style: "normal",
    },
    {
      path: "./woff2/sf-pro-text_regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./woff2/sf-pro-text_semibold.woff2",
      weight: "600",
      style: "normal",
    }
  ]
})
