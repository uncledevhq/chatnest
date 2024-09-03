import { redirect } from "next/navigation"

import { authOptions } from "@/lib/auth"
import { db } from "@/lib/db"
import { getCurrentUser } from "@/lib/session"
import { AgentCreateButton } from "@/components/agent-create-button"
import { AgentItem } from "@/components/agent-item"
import { EmptyPlaceholder } from "@/components/empty-placeholder"
import { DashboardHeader } from "@/components/header"
import { DashboardShell } from "@/components/shell"

export const metadata = {
  title: "Dashboard",
}

export default async function DashboardPage() {
  const user = await getCurrentUser()

  if (!user) {
    redirect(authOptions?.pages?.signIn || "/login")
  }

  const agents = await db.agent.findMany({
    where: {
      ownerId: user.id,
    },
    select: {
      id: true,
      name: true,
      status: true,
      ownerId: true,
      createdAt: true,
    },
    orderBy: {
      updatedAt: "desc",
    },
  })

  console.log(agents, "check for agent")

  return (
    <DashboardShell>
      <DashboardHeader heading="Agents" text="Create and manage your agents.">
        <AgentCreateButton />
      </DashboardHeader>
      <div>
        {agents?.length ? (
          <div className="divide-y divide-border rounded-md border">
            {agents.map((agent) => (
              <AgentItem key={agent.id} agent={agent} />
            ))}
          </div>
        ) : (
          <EmptyPlaceholder>
            <EmptyPlaceholder.Icon name="bot" />
            <EmptyPlaceholder.Title>No agents created</EmptyPlaceholder.Title>
            <EmptyPlaceholder.Description>
              You don&apos;t have any agents yet. Start by creating a new agent.
            </EmptyPlaceholder.Description>
            <AgentCreateButton variant="outline" />
          </EmptyPlaceholder>
        )}
      </div>
    </DashboardShell>
  )
}
