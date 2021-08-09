import React from "react"
import TwitterIcon from "../icons/twitter-logo.svg"
import FacebookIcon from "../icons/facebook.svg"
import LinkedInIcon from "../icons/linkedin.svg"
import EmailIcon from "../icons/mail_outline-24px.svg"
import { shareIcons, shareIconsContainer } from "../styles.css"

type ShareProps = {
  children: React.ReactNode
  url: string
}

type TwitterShareProps = {
  url: string
  title: string
}

type ShareMenuProps = {
  url: string
  title: string
}

function Share({ url, children }: ShareProps) {
  return (
    <a className={shareIcons} href={url}>
      {children}
    </a>
  )
}

export function TwitterShare({ url, title }: TwitterShareProps) {
  const shareUrl = `https://twitter.com/intent/tweet?url=${url}&via=%40hsbehrends&text=${title}&hashtags=%23webdev%2C%20%23css%2C%20%23cssgrid%2C%20`
  return (
    <Share url={shareUrl}>
      <TwitterIcon />
    </Share>
  )
}

export function ShareMenu({ url, title }: ShareMenuProps) {
  const twitterUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(
    url
  )}&via=%40hsbehrends&text=${encodeURIComponent(title)}&hashtags=%23webdev`
  const facebookUrl = `http://www.facebook.com/sharer.php?u=${encodeURIComponent(
    url
  )}`
  const linkedInUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
    url
  )}`
  const emailUrl = `mailto:?subject=I wanted you to see this blog post&amp;body=Check it out on ${url}.`
  return (
    <nav className={shareIconsContainer}>
      <Share url={twitterUrl}>
        <TwitterIcon />
      </Share>
      <Share url={facebookUrl}>
        <FacebookIcon />
      </Share>
      <Share url={linkedInUrl}>
        <LinkedInIcon />
      </Share>
      <Share url={emailUrl}>
        <EmailIcon />
      </Share>
    </nav>
  )
}
