import Image from 'next/image';
import styles from './page.module.css';
import Link from 'next/link';

export default function Home() {
  return (
    <main className={styles.main}>
      Send project
      <Image
        src="/images/dog-test.png"
        alt="dog"
        width={500}
        height={500}
        layout="responsive"
      />
      <Link href="https://smartstore.naver.com/amuseman">Test Link</Link>
    </main>
  );
}
