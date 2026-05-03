'use client';
import React, { useMemo, useCallback } from 'react';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import { usePathname } from 'next/navigation';

const labelMap: { [key: string]: string } = {
  product: 'Product',
  category: 'Category',
};

const getLabel = (segment: string) => labelMap[segment] || segment;

const AppBreadcrumbs = () => {
  const pathname = usePathname();

  const pathnames = useMemo(
    () => pathname?.split('/').filter(x => x) || [],
    [pathname],
  );

  const generateHref = useCallback(
    (index: number) => `/${pathnames.slice(0, index + 1).join('/')}`,
    [pathnames],
  );

  if (pathnames.length === 0) return null;

  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="/">Home</BreadcrumbLink>
        </BreadcrumbItem>
        {pathnames.length > 0 && <BreadcrumbSeparator />}
        {pathnames.map((segment, index) => {
          const isLast = index === pathnames.length - 1;
          const href = generateHref(index);

          return (
            <React.Fragment key={href}>
              <BreadcrumbItem>
                {isLast ? (
                  <BreadcrumbPage aria-current="page">
                    {getLabel(segment)}
                  </BreadcrumbPage>
                ) : (
                  <BreadcrumbLink href={href}>
                    {getLabel(segment)}
                  </BreadcrumbLink>
                )}
              </BreadcrumbItem>
              {!isLast && <BreadcrumbSeparator />}
            </React.Fragment>
          );
        })}
      </BreadcrumbList>
    </Breadcrumb>
  );
};

export default AppBreadcrumbs;
