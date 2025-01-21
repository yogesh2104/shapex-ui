import React from "react"
import { CardType } from "./kanban-board"

type CardProps = CardType

export const Card: React.FC<CardProps> = ({
  id,
  title,
  description,
  priority,
}) => {
  const handleDragStart = (e: React.DragEvent<HTMLDivElement>) => {
    e.dataTransfer.setData("cardId", id)
  }

  const priorityColor =
    priority === "high"
      ? "bg-red-100 text-red-600"
      : priority === "medium"
      ? "bg-yellow-100 text-yellow-600"
      : "bg-green-100 text-green-600"

  return (
    <div
      draggable
      onDragStart={handleDragStart}
      className="cursor-grab rounded-xl border border-gray-200 bg-white p-4 shadow-sm active:cursor-grabbing"
    >
      <div className="mb-2">
        <span
          className={`inline-block rounded-full px-3 py-1 text-xs ${priorityColor}`}
        >
          {priority}
        </span>
      </div>
      <p className="font-medium text-gray-900">{title}</p>
      <p className="mt-2 text-sm text-gray-500">{description}</p>
      <div className="mt-4 flex items-center justify-between">
        <div className="flex -space-x-2">
          <div className="h-8 w-8 rounded-full bg-gray-400"></div>
          <div className="h-8 w-8 rounded-full bg-gray-300"></div>
        </div>
        <div className="flex items-center gap-4 text-gray-400">
          <div className="flex items-center gap-1">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
            </svg>
            <span className="text-sm">11</span>
          </div>
          <div className="flex items-center gap-1">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
              <circle cx="12" cy="12" r="3"></circle>
            </svg>
            <span className="text-sm">187</span>
          </div>
        </div>
      </div>
    </div>
  )
}

