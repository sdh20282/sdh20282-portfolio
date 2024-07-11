
import { Montserrat, Rubik } from "next/font/google";
import localFont from 'next/font/local';

export const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  style: ["normal"],
  variable: "--font-montserrat"
})

export const rubik = Rubik({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  style: ["normal"],
  variable: "--font-rubik"
});

export const nanumSquare = localFont({
  src: [
    {
      path: '../_assets/fonts/NanumSquareL.ttf',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../_assets/fonts/NanumSquareR.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../_assets/fonts/NanumSquareB.ttf',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../_assets/fonts/NanumSquareEB.ttf',
      weight: '800',
      style: 'normal',
    }
  ],
  variable: '--font-nanumsquare'
})

export const alliance = localFont({
  src: [
    {
      path: '../_assets/fonts/Alliance.otf',
      weight: '300',
      style: 'normal',
    },
  ],
  variable: '--font-alliance'
})