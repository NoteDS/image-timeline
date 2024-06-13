import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full flex-row items-center justify-center font-mono text-sm lg:flex">
        <p className="m-5">
          Hi
        </p>
        <Image 
          src="/cat2.gif"
          alt="kitten!!11!"
          width={32}
          height={32}
        />
      </div>
    </main>
  );
}
