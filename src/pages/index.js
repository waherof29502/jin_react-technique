import { useRef, useEffect, useState } from 'react';

import Head from 'next/head';
import { useInView } from 'react-intersection-observer';
import Layout from '@components/Layout';
import Section from '@components/Section';
import Container from '@components/Container';
import Button from '@components/Button';

import styles from '@styles/Home.module.scss';

export default function Home() {
  const { ref: myRef, inView: isElementVisible } = useInView();
  const { ref: rocketRef, inView: isRocketVisible } = useInView();

  // const myRef = useRef();
  // const [isElementVisible, setIsElementVisible] = useState();
  // console.log('isElementVisible', isElementVisible);
  // useEffect(() => {
  //   // console.log('myRef', myRef.current);
  //   const observer = new IntersectionObserver((entries) => {
  //     const entry = entries[0];
  //     setIsElementVisible(entry.isIntersecting);
  //   });
  //   observer.observe(myRef.current);
  // }, []);
  return (
    <Layout>
      <Head>
        <title>Intersection Observer</title>
        <meta
          name='description'
          content='Cosmic web dev tutorials that will shock you with joy!'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Section>
        <Container>
          <h1 className={styles.title}>Space Jelly</h1>

          <p className={styles.subtitle}>
            Cosmic web dev tutorials that will shock you with joy!
          </p>
        </Container>
      </Section>

      <Section>
        <Container>
          <h2 className={styles.heading}>Latest Posts</h2>

          <ul className={styles.posts}>
            <li>
              <a href='https://spacejelly.dev/posts/how-to-automatically-tag-categorize-images-using-ai-with-google-vision-cloudinary/'>
                How to Automatically Tag & Categorize Images Using AI with
                Google Vision & Cloudinary
              </a>
            </li>
            <li>
              <a href='https://spacejelly.dev/posts/how-to-authenticate-spotify-web-api-requests-in-next-js-with-netlify-api-auth/'>
                How to Authenticate Spotify Web API Requests in Next.js with
                Netlify API Auth
              </a>
            </li>
            <li>
              <a href='https://spacejelly.dev/posts/how-to-generate-personalized-social-media-cards-for-landing-pages-with-next-js-cloudinary/'>
                How to Generate Personalized Social Media Cards for Landing
                Pages with Next.js & Cloudinary
              </a>
            </li>
          </ul>
        </Container>
      </Section>

      <Section backgroundColor='primary'>
        <Container>
          <h2 className={styles.heading}>Courses</h2>

          <ul className={styles.posts}>
            <li>
              <a href='https://egghead.io/courses/create-an-ecommerce-store-with-next-js-and-stripe-checkout-562c?af=atzgap'>
                Create an eCommerce Store with Next.js and Stripe Checkout
              </a>
            </li>
            <li>
              <a href='https://spacejelly.dev/levelupecommerce'>
                Ecommerce on the Jamstack
              </a>
            </li>
            <li>
              <a href='https://fromdesignto.dev/'>From Design to Development</a>
            </li>
          </ul>
        </Container>
      </Section>

      <Section backgroundColor='secondary'>
        <Container>
          <h2 className={styles.heading}>Filler content</h2>

          <p>There can be something cool here too.</p>
        </Container>
      </Section>

      <Section>
        <Container>
          <h2 className={styles.heading}>Filler content</h2>

          <p>There can be something cool here too.</p>
        </Container>
      </Section>

      <Section backgroundColor='primary'>
        <Container>
          <h2 className={styles.heading}>Magic 🪄</h2>

          <p ref={rocketRef}>
            <span
              className={`${styles.rocket} ${
                isRocketVisible ? styles.animateRocket : ''
              }`}
            >
              🚀
            </span>
          </p>
        </Container>
      </Section>

      <Section backgroundColor='secondary'>
        <Container>
          <h2 ref={myRef} className={styles.heading}>
            Have you scrolled down here yet? 🧐
          </h2>

          <p>{isElementVisible ? 'yes' : 'no'}</p>
        </Container>
      </Section>

      <Section>
        <Container>
          <h2 className={styles.heading}>Call to Action</h2>

          <p>Sign up now!</p>
        </Container>
      </Section>
    </Layout>
  );
}
