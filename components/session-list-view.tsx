"use client"

import { MessageSquare, Trash2 } from "lucide-react"
import { cn } from "@/lib/utils"
import { useAppState, useAppDispatch } from "@/hooks/use-app-state"
import type { ChatSession } from "@/types"

function formatTime(ts: number): string {
  const d = new Date(ts)
  const now = new Date()
  const diffMs = now.getTime() - d.getTime()
  const diffMin = Math.floor(diffMs / 60000)
  const diffHour = Math.floor(diffMs / 3600000)
  const diffDay = Math.floor(diffMs / 86400000)

  if (diffMin < 1) return "刚刚"
  if (diffMin < 60) return `${diffMin} 分钟前`
  if (diffHour < 24) return `${diffHour} 小时前`
  if (diffDay < 7) return `${diffDay} 天前`
  return `${d.getMonth() + 1}月${d.getDate()}日`
}

function SessionCard({
  session,
  onOpen,
  onDelete,
}: {
  session: ChatSession
  onOpen: () => void
  onDelete: () => void
}) {
  return (
    <div
      className={cn(
        "group flex items-center gap-3 px-4 py-3 rounded-xl cursor-pointer",
        "bg-white hover:bg-[#faf8f7]",
        "transition-[background,shadow,transform] duration-150 active:translate-y-[0.5px]",
        "border border-[#f0e8e3]"
      )}
      onClick={onOpen}
    >
      {/* Icon */}
      <div
        className={cn(
          "w-9 h-9 grid place-items-center rounded-lg flex-none",
          "bg-[#fce8ef] text-[#c2384a]"
        )}
      >
        <MessageSquare className="w-4 h-4" />
      </div>

      {/* Title + Expert */}
      <div className="flex-1 min-w-0">
        <h3 className="text-sm font-semibold text-[#2c1810] truncate">
          {session.title}
        </h3>
        <span className="text-xs text-[#8b7b6e]">
          {session.expert}
        </span>
      </div>

      {/* Time */}
      <span className="text-xs text-[#a89b90] flex-none whitespace-nowrap">
        {formatTime(session.updatedAt)}
      </span>

      {/* Delete */}
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation()
          onDelete()
        }}
        className={cn(
          "p-1.5 rounded-lg border-0 bg-transparent cursor-pointer",
          "text-[#c4b5aa] hover:text-[#c2384a] hover:bg-[#c2384a]/8",
          "opacity-0 group-hover:opacity-100 transition-[opacity,color,background] duration-150 flex-none"
        )}
        title="删除会话"
      >
        <Trash2 className="w-3.5 h-3.5" />
      </button>
    </div>
  )
}

export function SessionListView() {
  const state = useAppState()
  const dispatch = useAppDispatch()
  const { sessions } = state

  const handleOpen = (session: ChatSession) => {
    // Restore the session's messages into chat
    dispatch({ type: "CLEAR_CHAT" })
    for (const msg of session.messages) {
      dispatch({ type: "ADD_MESSAGE", message: msg })
    }
    dispatch({ type: "SET_ACTIVE_SESSION", id: session.id })
    dispatch({ type: "SET_EXPERT", expert: session.expert })
    dispatch({ type: "SET_CHAT_MODE", mode: session.mode })
    dispatch({ type: "SET_VIEW", view: "chat" })
  }

  const handleDelete = (id: string) => {
    dispatch({ type: "DELETE_SESSION", id })
  }

  return (
    <section className="w-[min(820px,100%)] mx-auto">
      <div className="mb-6">
        <h1 className="m-0 text-[27px] tracking-[-0.03em]">会话列表</h1>
        <p className="m-0 mt-2 text-muted-text leading-relaxed text-[13px]">
          查看和继续所有对话记录，点击即可恢复上次会话。
        </p>
      </div>

      {sessions.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-20 text-center">
          <div className="w-16 h-16 grid place-items-center rounded-2xl bg-[#f5ede8] mb-4">
            <MessageSquare className="w-7 h-7 text-[#c4b5aa]" />
          </div>
          <p className="text-sm text-[#8b7b6e]">暂无会话记录</p>
          <p className="text-xs text-[#a89b90] mt-1">
            在首页输入需求开始新对话
          </p>
        </div>
      ) : (
        <div className="grid gap-3">
          {sessions.map((session) => (
            <SessionCard
              key={session.id}
              session={session}
              onOpen={() => handleOpen(session)}
              onDelete={() => handleDelete(session.id)}
            />
          ))}
        </div>
      )}
    </section>
  )
}
