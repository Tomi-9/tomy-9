import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center font-sans">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between sm:items-start">
        <div className="flex flex-col items-center gap-6 py-32 px-16 text-center mx-auto sm:items-start sm:text-left">
          <h1 className="text-2xl">tomy 9</h1>
          <p className="max-w-md leading-10 tracking-tight">
            Hi there, I'm tomy
            a software developer.
            <br />
            I build full stack Nextjs applications, and developer tools.
            <br />
            <br />
            I'm Open to remote roles & freelance projects.
            <br />
            You can reach me via <Link href="mailto:taimo5404@gmail.com" className="underline">Email</Link>
            
          </p>
        </div>
      </main>
    </div>
  );
}

