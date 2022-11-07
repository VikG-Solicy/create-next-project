import Link from "next/link";

export default function Home() {
    return (
        <div>
            <nav>
                <Link href={'/Users/UserCards'}>Users</Link>
            </nav>
        </div>
    );
}
