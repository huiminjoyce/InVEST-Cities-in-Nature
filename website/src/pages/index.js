import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import HomepageFeatures from '../components/HomePageFeatures';
import Contributors from '../components/Contributors';
import features from '../../websiteData/features';
import Sponsors from '../components/Sponsors';

const HomepageHeader = () => {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className={clsx('container', styles.heroContainer)}>
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className={clsx(
              'button button--outline button--secondary button--lg',
              styles.getStarted
            )}
            to="/studio/overview"
          >
            Know your Projects
          </Link>
          <Link
            className={clsx(
              'button button--outline button--secondary button--lg',
              styles.getStarted
            )}
            to="https://www.youtube.com/watch?v=kGau-gNEzFM&t=1s"
          >
            Watch the tutorials
          </Link>
          <Link
            className={clsx(
              'button button--outline button--primary button--lg',
              styles.getStarted
            )}
            to="tutorial/support"
          >
            FAQs
          </Link>
        </div>
      </div>
    </header>
  );
};

const Feature = ({ title, description }) => {
  return (
    <div className={clsx('col col--4', styles.feature)}>
      <h2>{title}</h2>
      <div className={styles.feature__description}>{description}</div>
    </div>
  );
};

const Home = () => {
  const { siteConfig } = useDocusaurusContext();
  return (
    <>
      <Layout
        title={`Welcome to ${siteConfig.title}`}
        description="Welcome!"
      >
        <HomepageHeader />
        <main>
          <div className="maindiv">
            <br></br>
            <br></br>
            <br></br>
            <h1 align="center">Ecosystem Services</h1>
            <br></br>
            <br></br>
            {features && features.length > 0 && (
              <section className={styles.features}>
                <div className="container">
                  <div className="row">
                    {features.map((props, idx) => (
                      <Feature key={idx} {...props} />
                    ))}
                  </div>
                </div>
                <br></br>
                <br></br>
              </section>
            )}
            <HomepageFeatures />
          </div>
        </main>

        <Contributors />
      </Layout>
    </>
  );
};

export default Home;
