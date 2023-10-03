import Link from "next/link";
import styled from "styled-components";

const Header = styled.header`
  background-color: var(--color-gray-800);
  display: flex;
  justify-content: space-between;
  padding: var(--size-2xl) var(--size-6xl);
  color: var(--color-orange-100);
  align-items: center;

  a:hover {
    color: var(--color-orange-500);
  }

  @media (max-width: 1024px) {
    padding: var(--size-2xl) var(--size-3xl);
    gap: var(--size-2xl);
  }

  @media (max-width: 640px) {
    padding: var(--size-2xl) var(--size-2xl);
    flex-direction: column;
    gap: var(--size-2xl);
  }
`;

const Ul = styled.ul`
  display: flex;
  gap: var(--size-3xl);
  @media (max-width: 640px) {
    font-size: var(--size-xl);
    gap: var(--size-xl);
  }
`;

const Logo = styled.span`
  font-size: var(--size-3xl);
  font-weight: 600;

  @media (max-width: 768px) {
    font-size: var(--size-2xl);
    font-weight: 500;
  }
`;

function MainHeader() {
  return (
    <Header>
      <Logo>
        <Link href="/">ALİ&apos;NİN REACT BLOGU</Link>
      </Logo>

      <nav>
        <Ul>
          <li>
            <Link href="/posts">Gönderiler</Link>
          </li>
          <li>
            <Link href="/contact">İletişim</Link>
          </li>
        </Ul>
      </nav>
    </Header>
  );
}

export default MainHeader;
