import Head from 'next/head'
import Image from 'next/image'
import Achievement from '../components/Achievement/Achievement'
import AdmissionPrep from '../components/AdmissionPrep/AdmissionPrep'
import Banner from '../components/Banner/Banner'
import ClassesOne from '../components/ClassesOne/ClassesOne'
import CrashCourse from '../components/CrashCourse/CrashCourse'
import Header from '../components/Header/Header'
import JobExam from '../components/JobExam/JobExam'
import LearnAnything from '../components/LearnAnything/LearnAnything'
import Review from '../components/Review/Review'
import SkillDevelopment from '../components/SkillDevelopment/SkillDevelopment'
import Footer from '../components/Footer/Footer'

import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Learning School</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Banner />
        <LearnAnything />
        <CrashCourse />
        <ClassesOne />
        <AdmissionPrep />
        <JobExam />
        <SkillDevelopment />
        <Review />
        <Achievement />
      </main>

    </div>
  )
}
