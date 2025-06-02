import React from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

import styles from "./styles.headers.module.css"

const BreadcrumbItem = ({ href, isLast, children }) => (
  <li>
    {!isLast ? (
      <Link href={href}>{children}</Link>
    ) : (
      <span>{children}</span>
    )}
  </li>
);

export default function BreadcrumbMenu() {
  const pathname = usePathname();
  const pathSegments = pathname.split('/').filter(segment => segment);

  return (
    <nav className={styles.breadcrumbNav}>
      <ol>
        <BreadcrumbItem href="/" isLast={pathSegments.length === 0}>
          Home
        </BreadcrumbItem>
        {pathSegments.map((segment, index) => (
          <React.Fragment key={segment}>
            <span>/</span>
            <BreadcrumbItem
              href={`/${pathSegments.slice(0, index + 1).join('/')}`}
              isLast={index === pathSegments.length - 1}
            >
              {segment}
            </BreadcrumbItem>
          </React.Fragment>
        ))}
      </ol>
    </nav>
  );
};