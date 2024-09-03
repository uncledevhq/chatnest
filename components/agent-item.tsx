import Link from "next/link"
import { Agent } from "@prisma/client"

import { formatDate } from "@/lib/utils"
import { Skeleton } from "@/components/ui/skeleton"
import { AgentOperations } from "@/components/agent-operations"

interface AgentItemProps {
  agent: Pick<Agent, "id" | "name" | "ownerId" | "createdAt">
}

export function AgentItem({ agent }: AgentItemProps) {
  return (
    <div className="flex items-center justify-between p-4">
      <div className="grid gap-1">
        <Link
          href={`/editor/${agent.id}`}
          className="font-semibold hover:underline"
        >
          {agent.name}
        </Link>
        <div>
          <p className="text-sm text-muted-foreground">
            {formatDate(agent.createdAt?.toDateString())}
          </p>
        </div>
      </div>
      <AgentOperations agent={{ id: agent.id, title: agent.name }} />
    </div>
  )
}

AgentItem.Skeleton = function PostItemSkeleton() {
  return (
    <div className="p-4">
      <div className="space-y-3">
        <Skeleton className="h-5 w-2/5" />
        <Skeleton className="h-4 w-4/5" />
      </div>
    </div>
  )
}
