import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"

export default function Home() {
  return (
    <div className="flex h-screen flex-col items-center justify-center gap-4">
      <p>Hello, world!</p>
      <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold">
        Hello, world!
      </code>
      <Button>Hello, world!</Button>
      <ThemeToggle />
    </div>
  )
}
