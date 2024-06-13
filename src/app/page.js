import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full flex-row items-center justify-center align-middle font-mono text-sm lg:flex">
        <div className="flex justify-center">
          <p className="m-3">
            Hi
          </p>
          <Image
            className=" self-center"
            src="/cat2.gif"
            alt="kitten!!11!"
            width={32}
            height={32}
          />
        </div>
      </div>
    </main>
  );
}
