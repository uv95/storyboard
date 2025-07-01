import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

interface BreadcrumbsProps {
  storyboardTitle: string;
}

const Breadcrumbs = ({ storyboardTitle }: BreadcrumbsProps) => {
  return (
    <div className="mr-auto text-sm flex items-center gap-1 flex-grow-1 basis-0">
      <Link href={'/'}>
        <ArrowLeft className="w-4" />
      </Link>{' '}
      /
      <strong className="min-w-0 line-clamp-1 overflow-ellipsis">
        {storyboardTitle}
      </strong>
    </div>
  );
};

export default Breadcrumbs;
