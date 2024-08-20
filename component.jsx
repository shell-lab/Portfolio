/**
 * v0 by Vercel.
 * @see https://v0.dev/t/9mM2uGhXevF
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"

export default function Component() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link href="#" className="flex items-center justify-center" prefetch={false}>
          <CodeIcon className="h-6 w-6" />
          <span className="sr-only">Sameer Hussain</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            About
          </Link>
          <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            Skills
          </Link>
          <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            Projects
          </Link>
          <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            Contact
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full pt-12 md:pt-24 lg:pt-32 border-y">
          <div className="px-4 md:px-6 space-y-10 xl:space-y-16">
            <div className="grid max-w-[1300px] mx-auto gap-4 px-4 sm:px-6 md:px-10 md:grid-cols-2 md:gap-16">
              <div>
                <h1 className="lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem]">
                  Hi, I'm Sameer Hussain
                </h1>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  A passionate JavaScript developer with 6 months of hands-on experience, dedicated to creating
                  innovative and user-friendly web applications.
                </p>
              </div>
              <div className="flex flex-col items-start space-y-4">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">JavaScript Developer</div>
                <div className="space-x-4">
                  <Link
                    href="#"
                    className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    prefetch={false}
                  >
                    View Resume
                  </Link>
                  <Link
                    href="#"
                    className="inline-flex h-9 items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    prefetch={false}
                  >
                    Hire Me
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container space-y-12 px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">About Me</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  My Journey as a JavaScript Developer
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  I discovered my passion for web development during my university studies at Amity University, Gwalior
                  where I was introduced to the power and versatility of JavaScript. Since then, I have been on a
                  journey to hone my skills and create innovative web applications that solve real-world problems.
                </p>
              </div>
            </div>
            <div className="mx-auto grid items-start gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-3">
              <div className="grid gap-1">
                <h3 className="text-lg font-bold">Education</h3>
                <p className="text-sm text-muted-foreground">
                  Currently pursuing Btech(IT) from Amity University, Gwalior
                </p>
              </div>
              <div className="grid gap-1">
                <h3 className="text-lg font-bold">Experience</h3>
                <p className="text-sm text-muted-foreground">
                  6 months of hands-on experience as a JavaScript developer, working on various web projects.
                </p>
              </div>
              <div className="grid gap-1">
                <h3 className="text-lg font-bold">Passion</h3>
                <p className="text-sm text-muted-foreground">
                  Passionate about creating user-friendly and visually appealing web applications that solve real-world
                  problems.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container space-y-12 px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Skills</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">My JavaScript Expertise</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  As a JavaScript developer, I have a strong grasp of the language's core concepts and have experience
                  working with various frameworks and libraries to build dynamic and responsive web applications.
                </p>
              </div>
            </div>
             <p className="max-w-[600px] text-muted-foreground">
              Here are some of the JavaScript-related technologies and tools I'm proficient in.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-lg border bg-background p-6 shadow-sm">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <CodepenIcon className="h-8 w-8" />
                  <h3 className="text-lg font-semibold">React</h3>
                </div>
                <div className="rounded-full bg-primary px-3 py-1 text-xs font-medium text-primary-foreground">
                  Expert
                </div>
              </div>
              <p className="mt-4 text-muted-foreground">
                Proficient in building modern web applications with React, including state management, hooks, and
                server-side rendering.
              </p>
            </div>
            <div className="rounded-lg border bg-background p-6 shadow-sm">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <CodepenIcon className="h-8 w-8" />
                  <h3 className="text-lg font-semibold">Node.js</h3>
                </div>
                <div className="rounded-full bg-primary px-3 py-1 text-xs font-medium text-primary-foreground">
                  Advanced
                </div>
              </div>
              <p className="mt-4 text-muted-foreground">
                Experienced in building scalable and efficient server-side applications using Node.js and various
                frameworks like Express.
              </p>
            </div>
            <div className="rounded-lg border bg-background p-6 shadow-sm">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <TypeIcon className="h-8 w-8" />
                  <h3 className="text-lg font-semibold">TypeScript</h3>
                </div>
                <div className="rounded-full bg-primary px-3 py-1 text-xs font-medium text-primary-foreground">
                  Advanced
                </div>
              </div>
              <p className="mt-4 text-muted-foreground">
                Experienced in using TypeScript to build scalable and maintainable web applications, ensuring better
                code quality and developer productivity.
              </p>
            </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container space-y-12 px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Projects</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">My JavaScript Projects</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Here are a few of the projects I've worked on, showcasing my skills in JavaScript and various web
                  technologies.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-start gap-6 sm:grid-cols-2 md:gap-12 lg:grid-cols-3">
              <div className="grid gap-4">
                <img
                  src="/placeholder.svg"
                  width="550"
                  height="310"
                  alt="Project 1"
                  className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center"
                />
                <div className="grid gap-1">
                  <h3 className="text-lg font-bold">Project 1: Todo App</h3>
                  <p className="text-sm text-muted-foreground">
                    A simple and intuitive todo list application built with React, utilizing local storage for data
                    persistence.
                  </p>
                  <div className="flex gap-2">
                    <Badge variant="secondary">React</Badge>
                    <Badge variant="secondary">JavaScript</Badge>
                    <Badge variant="secondary">Local Storage</Badge>
                  </div>
                </div>
              </div>
              <div className="grid gap-4">
                <img
                  src="/placeholder.svg"
                  width="550"
                  height="310"
                  alt="Project 2"
                  className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center"
                />
                <div className="grid gap-1">
                  <h3 className="text-lg font-bold">Project 2: Weather App</h3>
                  <p className="text-sm text-muted-foreground">
                    A weather application that fetches real-time weather data from an API and displays it in a clean and
                    responsive interface.
                  </p>
                  <div className="flex gap-2">
                    <Badge variant="secondary">JavaScript</Badge>
                    <Badge variant="secondary">API</Badge>
                    <Badge variant="secondary">Responsive Design</Badge>
                  </div>
                </div>
              </div>
              <div className="grid gap-4">
                <img
                  src="/placeholder.svg"
                  width="550"
                  height="310"
                  alt="Project 3"
                  className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center"
                />
                <div className="grid gap-1">
                  <h3 className="text-lg font-bold">Project 3: E-commerce Website</h3>
                  <p className="text-sm text-muted-foreground">
                    A fully functional e-commerce website built with React, featuring a shopping cart, checkout process,
                    and integration with a payment gateway.
                  </p>
                  <div className="flex gap-2">
                    <Badge variant="secondary">React</Badge>
                    <Badge variant="secondary">JavaScript</Badge>
                    <Badge variant="secondary">E-commerce</Badge>
                    <Badge variant="secondary">Payment Gateway</Badge>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Get in Touch</h2>
              <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                I'm always excited to connect with new people and explore potential opportunities. Feel free to reach
                out to me using the form below.
              </p>
            </div>
            <div className="mx-auto w-full max-w-sm space-y-2">
              <form className="flex flex-col gap-2">
                <Input type="text" placeholder="Name" className="max-w-lg flex-1" />
                <Input type="email" placeholder="Email" className="max-w-lg flex-1" />
                <Textarea placeholder="Message" className="max-w-lg flex-1" />
                <Button type="submit">Submit</Button>
              </form>
              <div className="flex items-center justify-center gap-4">
                <Link href="#" className="text-sm hover:underline underline-offset-4" prefetch={false}>
                  LinkedIn
                </Link>
                <Link href="#" className="text-sm hover:underline underline-offset-4" prefetch={false}>
                  GitHub
                </Link>
                <Link href="#" className="text-sm hover:underline underline-offset-4" prefetch={false}>
                  Email
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-muted-foreground">&copy; 2024 Sameer Hussain. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link href="#" className="text-xs hover:underline underline-offset-4" prefetch={false}>
            Privacy Policy
          </Link>
          <Link href="#" className="text-xs hover:underline underline-offset-4" prefetch={false}>
            Terms of Use
          </Link>
        </nav>
      </footer>
    </div>
  )
}

function CodeIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  )
}
