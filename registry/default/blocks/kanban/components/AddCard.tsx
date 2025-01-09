import React, { useState } from "react"
import { CardType,ColumnType } from "./kanban-board"

type AddCardProps = {
  column: ColumnType
  cards: CardType[]
  setCards: React.Dispatch<React.SetStateAction<CardType[]>>
}

export const AddCard: React.FC<AddCardProps> = ({ column, cards, setCards }) => {
  const [adding, setAdding] = useState(false)
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [priority, setPriority] = useState<"low" | "medium" | "high">("low")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!title.trim()) return

    const newCard: CardType = {
      id: Math.random().toString(),
      title: title.trim(),
      description: description.trim(),
      column,
      priority,
    }

    setCards([...cards, newCard])
    setAdding(false)
    setTitle("")
    setDescription("")
    setPriority("low")
  }

  return (
    <>
      {adding ? (
        <form onSubmit={handleSubmit} className="space-y-2">
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter title..."
            className="w-full rounded border p-2 text-sm"
          />
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Enter description..."
            className="w-full rounded border p-2 text-sm"
          />
          <select
            value={priority}
            onChange={(e) => setPriority(e.target.value as "low" | "medium" | "high")}
            className="w-full rounded border p-2 text-sm"
          >
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
          <div className="flex justify-end space-x-2">
            <button
              type="button"
              onClick={() => setAdding(false)}
              className="rounded bg-gray-300 px-3 py-1 text-sm"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="rounded bg-blue-500 px-3 py-1 text-sm text-white"
            >
              Add
            </button>
          </div>
        </form>
      ) : (
        <button
          onClick={() => setAdding(true)}
          className="flex w-full items-center justify-center gap-1.5 rounded-md bg-gray-200 px-3 py-1.5 text-sm text-gray-700 transition-colors hover:bg-gray-300"
        >
          <span>Add card</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="12" y1="5" x2="12" y2="19"></line>
            <line x1="5" y1="12" x2="19" y2="12"></line>
          </svg>
        </button>
      )}
    </>
  )
}

