import Link from 'next/link';
export default ({ children, to }) => <Link href={to}><a>{children}</a></Link>
