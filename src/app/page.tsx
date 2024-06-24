import React from 'react';
import RootLayout from './layout';
import { cookies } from 'next/headers';
import Image from 'next/image';
import Link from 'next/link';
import styles from './page.module.css';

const Home: React.FC = () => {
  const isMobile = cookies().get('isMobile')?.value === 'true';
  const SMART_STORE_LINK = isMobile
    ? 'm.smartstore.naver.com/yelsendproject'
    : 'http://smartstore.naver.com/yelsendproject';

  return (
    <RootLayout>
      <div>
        <main className={styles.main}>
          <h1>Send project</h1>
          <Image
            src="/images/dog-test.png"
            alt="dog"
            width={500}
            height={500}
            layout="responsive"
            loading="eager"
          />
          <Link href={SMART_STORE_LINK}>
            {isMobile ? '모바일' : '데스크탑'}
          </Link>
        </main>
      </div>
    </RootLayout>
  );
};

export default Home;
