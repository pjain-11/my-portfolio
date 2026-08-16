export function SkillBadge({ name }: { name: string }) {
  return (
    <span className="border-border bg-card text-foreground hover:border-accent hover:text-accent rounded-md border px-3 py-1.5 font-mono text-sm transition-colors">
      {name}
    </span>
  );
}
