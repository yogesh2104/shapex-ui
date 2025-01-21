import React from "react"
import { Column } from "./Column"
import { CardType } from "./kanban-board"

type BoardProps = {
  cards: CardType[]
  setCards: React.Dispatch<React.SetStateAction<CardType[]>>
}

export const Board: React.FC<BoardProps> = ({ cards, setCards }) => {
  const moveCard = (draggedId: string, targetColumn: string) => {
    setCards((prevCards) =>
      prevCards.map((card) =>
        card.id === draggedId ? { ...card, column: targetColumn as CardType["column"] } : card
      )
    )
  }

  return (
    <div className="flex h-full w-full gap-6 overflow-scroll p-12">
      <Column
        title="Backlog"
        column="backlog"
        headingColor="bg-gray-500"
        cards={cards}
        setCards={setCards}
        moveCard={moveCard}
      />
      <Column
        title="To Do"
        column="todo"
        headingColor="bg-blue-500"
        cards={cards}
        setCards={setCards}
        moveCard={moveCard}
      />
      <Column
        title="In Progress"
        column="doing"
        headingColor="bg-yellow-500"
        cards={cards}
        setCards={setCards}
        moveCard={moveCard}
      />
      <Column
        title="Done"
        column="done"
        headingColor="bg-green-500"
        cards={cards}
        setCards={setCards}
        moveCard={moveCard}
      />
    </div>
  )
}

