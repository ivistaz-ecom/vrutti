"use client"
import Navbar from './components/navbar';
import Homebanner from './components/bomebanner';
import Ourpartners from './components/ourpartners';
import Ourresponse from './components/ourresponse';
import Responseaction from './components/responseaction';
import Supportus from './components/supportus';
import Footer from './components/footer';

export default function Home() {

  return (
    <>
      <Navbar />
      <Homebanner />
      <Ourpartners />
      <Ourresponse />
      <Responseaction />
      <Supportus />
      <Footer />
    </>
  )
}
