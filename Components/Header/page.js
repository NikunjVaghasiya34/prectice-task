import Link from 'next/link';
import './Header.css';
export default function Header() {
  return (
    <header>
      <nav>
        <ul>
          <li><Link href="/">Home</Link></li>
          <li>/</li>
          <li><Link href="/articles">Articles</Link></li>
          <li>/</li>
        </ul>
      </nav>
      <h1>The Ultimate Guide to Full-Body Workouts</h1>
    </header>
  );
}
