import { TextLink } from "@/components";

export default function AboutPage() {
  return (
    <>
      <div>
        <h1 className="font-serif text-xl font-medium tracking-tight text-forground sm:text-2xl">
          Hello I'm Ós!
        </h1>

        <p className="leading-7 [&:not(:first-child)]:mt-6 text-justify font-serif">
          I'm a Software Engineer by day and a Product Manager by night.
        </p>
        <p className="leading-7 [&:not(:first-child)]:mt-6 text-justify font-serif">
          My approach focuses on continuous discovery and delivery through user
          feedback and research. I believe that by constantly exploring new
          ideas, experimenting with new features, and testing hypotheses, we can
          create a successful product that meets the needs of our users.
        </p>
        <p className="leading-7 [&:not(:first-child)]:mt-6 text-justify font-serif">
          I'm committed to defending and celebrating the legacies of Mexican
          farmers and our rich food traditions, with an aspiration to bring
          their flavors and culture to tables across my country. I'm actively
          seeking ways to leverage my skills in this endeavor, ensuring their
          stories and contributions continue to resonate.
        </p>
        <p className="leading-7 [&:not(:first-child)]:mt-6 text-justify font-serif">
          Outside of work, here's what I like to do:
        </p>
        <ul className="my-6 ml-6 list-disc [&>li]:mt-2 font-serif md:columns-2">
          <li>Cook</li>
          <li>Code</li>
          <li>Explore diverse cuisines</li>
          <li>Tinkering with tech</li>
          <li>Watch movies and lots of YouTube</li>
          <li>Reading about cognitive psychology</li>
        </ul>
        <p className="leading-7 [&:not(:first-child)]:mt-6 text-justify font-serif">
          I retired from traditional social media. However, if you wish to get
          in touch, you can do it via{" "}
          <TextLink
            href="https://t.me/ocordova"
            target="_blank"
            rel="noopener noreferrer"
          >
            Telegram
          </TextLink>{" "}
          or{" "}
          <TextLink
            href="mailto:oscordovat@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            email me
          </TextLink>
          , like in the old days.
        </p>
      </div>
      <div>
        <h2 className="mt-8 font-serif text-lg font-medium tracking-tight text-forground sm:text-xl">
          About this site
        </h2>
        <p className="leading-7 [&:not(:first-child)]:mt-6 text-justify font-serif">
          In case you were wondering, this site is:
        </p>
        <ul className="my-6 ml-6 list-disc [&>li]:mt-2 font-serif">
          <li>
            Carefully hand-coded with{" "}
            <TextLink
              href="https://code.visualstudio.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Visual Studio Code
            </TextLink>
          </li>
          <li>
            Built with{" "}
            <TextLink
              href="https://nextjs.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Next.js
            </TextLink>
          </li>
          <li>
            Styled with{" "}
            <TextLink
              href="https://tailwindcss.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Tailwind CSS
            </TextLink>{" "}
            &{" "}
            <TextLink
              href="https://ui.shadcn.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              shadcn/ui
            </TextLink>
          </li>
          <li>
            Iconified with{" "}
            <TextLink
              href="https://www.radix-ui.com/icons"
              target="_blank"
              rel="noopener noreferrer"
            >
              Radix Icons
            </TextLink>
          </li>
          <li>
            Hosted on{" "}
            <TextLink
              href="https://vercel.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Vercel
            </TextLink>
          </li>
          <li>
            Tracking data with{" "}
            <TextLink
              href="https://plausible.io/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Plausible
            </TextLink>
          </li>
        </ul>
      </div>
    </>
  );
}
