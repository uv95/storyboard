import Link from 'next/link';

interface ErrorMessageProps {
  message: string;
}

const ErrorMessage = ({ message }: ErrorMessageProps) => {
  return (
    <main className="w-full h-full min-h-[480px] p-8 pt-0 bg-inherit flex items-center justify-center">
      <div className="m-auto text-xl text-center">
        <div className="">{message}!</div>
        <Link href="/">Go to main page</Link>
      </div>
    </main>
  );
};

export default ErrorMessage;
