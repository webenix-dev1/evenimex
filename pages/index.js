import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import HomeBannerComponent from '../components/HomeBannerComponent'
import HeaderComponent from '../components/HeaderComponent'
import FooterComponent from '../components/FooterComponent'

export default function Home() {
  return (
    <>
      <HeaderComponent/>
      <HomeBannerComponent/>
      <FooterComponent/>
      
    </>

  )
}
