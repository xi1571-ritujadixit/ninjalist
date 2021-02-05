import Head from 'next/head'
import Link from 'next/link'
import Footer from '../comps/Footer'
import Navbar from '../comps/Navbar'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <Navbar />
      <h1>Homepage</h1>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam, explicabo rem? Possimus perferendis voluptatibus maiores accusamus, nostrum aut nisi necessitatibus magni saepe quisquam aspernatur labore sequi tempore culpa expedita provident.</p>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam, explicabo rem? Possimus perferendis voluptatibus maiores accusamus, nostrum aut nisi necessitatibus magni saepe quisquam aspernatur labore sequi tempore culpa expedita provident.</p>
      <Link href = "/ninjas">
        <a>See Ninja Listing</a>
      </Link>
      <Footer />
    </div>
  )
}
