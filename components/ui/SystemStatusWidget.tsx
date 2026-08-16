import { systemStatus } from "@/lib/data";
import { cn } from "@/lib/utils";

/** Small "status page" style widget — a lighthearted nod to backend/ops
 * work. Values are static placeholders, not a real monitoring feed. */
export function SystemStatusWidget() {
  return (
    <div className="border-border bg-card w-full max-w-md rounded-lg border px-4 py-3">
      <div className="mb-3 flex items-center justify-between">
        <span className="text-muted-foreground font-mono text-xs">
          system_status.json
        </span>
        <span className="text-accent flex items-center gap-1.5 font-mono text-xs">
          <span className="bg-accent h-1.5 w-1.5 animate-pulse rounded-full" />
          all systems normal
        </span>
      </div>
      <dl className="grid grid-cols-2 gap-3">
        {systemStatus.map((item) => (
          <div key={item.label} className="flex flex-col gap-0.5">
            <dt className="text-muted-foreground font-mono text-[11px] tracking-wide uppercase">
              {item.label}
            </dt>
            <dd
              className={cn(
                "flex items-center gap-1.5 font-mono text-sm",
                item.status === "ok" ? "text-foreground" : "text-yellow-500",
              )}
            >
              <span
                className={cn(
                  "h-1.5 w-1.5 rounded-full",
                  item.status === "ok" ? "bg-accent" : "bg-yellow-500",
                )}
              />
              {item.value}
            </dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
