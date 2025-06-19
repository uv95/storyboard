import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

interface BreadcrumbsProps {
  storyboardTitle: string;
}

const Breadcrumbs = ({ storyboardTitle }: BreadcrumbsProps) => {
  return (
    <div className="mr-auto text-lg flex align-center gap-1 py-1">
      <Link href={'/'}>
        <ArrowLeft className="h-full" />
      </Link>{' '}
      /<strong>{storyboardTitle}</strong>
    </div>
  );
};

export default Breadcrumbs;
