import React from "react"
import { Card } from "./Card"
import { AddCard } from "./AddCard"
import { CardType,ColumnType } from "./kanban-board"

type ColumnProps = {
  title: string
  headingColor: string
  cards: CardType[]
  column: ColumnType
  moveCard: (draggedId: string, targetColumn: string) => void
  setCards:React.Dispatch<React.SetStateAction<CardType[]>>
}

export const Column: React.FC<ColumnProps> = ({
  title,
  headingColor,
  cards,
  column,
  moveCard,
  setCards
}) => {
  const filteredCards = cards.filter((c) => c.column === column)

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
  }

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    const draggedId = e.dataTransfer.getData("cardId")
    moveCard(draggedId, column)
  }

  return (
    <div
      onDragOver={handleDragOver}
      onDrop={handleDrop}
      className="w-80 shrink-0"
    >
      <div className="mb-3 flex items-center justify-between">
        <div
          className={`flex items-center gap-2 rounded-full ${headingColor} px-5 py-2 text-white`}
        >
          <h3 className="font-semibold">{title}</h3>
          <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/30">
            {filteredCards.length}
          </span>
        </div>
      </div>
      <div className="space-y-4">
        {filteredCards.map((card) => (
          <Card key={card.id} {...card} />
        ))}
        <AddCard column={column} cards={cards} setCards={setCards} />
      </div>
    </div>
  )
}

