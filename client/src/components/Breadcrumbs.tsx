import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

interface BreadcrumbsProps {
  storyboardTitle: string;
}

const Breadcrumbs = ({ storyboardTitle }: BreadcrumbsProps) => {
  return (
    <div className="flex-grow-1 mr-auto text-sm flex items-center gap-1">
      <Link href={'/'}>
        <ArrowLeft className="w-4" />
      </Link>{' '}
      /
      <strong className="max-w-[50%] line-clamp-1 overflow-ellipsis">
        {storyboardTitle}
      </strong>
    </div>
  );
};

export default Breadcrumbs;
