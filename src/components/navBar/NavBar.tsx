import { Link } from 'react-router-dom';

type Props = {
    pages: Array<{ link: string; text: string }>;
};

function NavBar({ pages }: Props) {
    return (
        <div>
            <nav>
                <Link to={`/${pages[0].link}`}>{pages[0].text}</Link>
                <Link to={`/${pages[1].link}`}>{pages[1].text}</Link>
            </nav>
        </div>
    );
}

export default NavBar;
