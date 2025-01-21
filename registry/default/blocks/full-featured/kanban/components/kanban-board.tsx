// "use client"

// import React, {
//     Dispatch,
//     SetStateAction,
//     useState,
//     DragEvent,
//     FormEvent,
// } from "react";
// import { motion } from "framer-motion";
// import { Eye, FireExtinguisher, MessageSquare, Plus, Trash } from "lucide-react";
  
// type ColumnType = "backlog" | "todo" | "doing" | "done";

// type CardType = {
//   title: string;
//   id: string;
//   column: ColumnType;
// };

//   export const KanbanBoard = () => {
//     return (
//       <div className="min-h-screen w-full bg-gray-100 text-gray-900">
//         <Board />
//       </div>
//     );
//   };
  
// const Board = () => {
//     const [cards, setCards] = useState(DEFAULT_CARDS);

//     return (
//         <div className="flex h-full w-full gap-6 overflow-scroll p-12">
//         <Column
//             title="In Progress"
//             column="doing"
//             headingColor="bg-indigo-500"
//             cards={cards}
//             setCards={setCards}
//         />
//         <Column
//             title="Reviewed"
//             column="todo"
//             headingColor="bg-amber-500"
//             cards={cards}
//             setCards={setCards}
//         />
//         <Column
//             title="Completed"
//             column="done"
//             headingColor="bg-green-500"
//             cards={cards}
//             setCards={setCards}
//         />
//         <BurnBarrel setCards={setCards} />
//         </div>
//     );
// };

// type ColumnProps = {
// title: string;
// headingColor: string;
// cards: CardType[];
// column: ColumnType;
// setCards: Dispatch<SetStateAction<CardType[]>>;
// };


// const Column = ({ title, headingColor, cards, column, setCards }:ColumnProps) => {
//     const [active, setActive] = useState(false);
//     const handleDragStart = (e: DragEvent, card: CardType) => {
//         e.dataTransfer.setData("cardId", card.id);
//     };

//     const handleDragEnd = (e: DragEvent) => {
//         const cardId = e.dataTransfer.getData("cardId");

//         setActive(false);
//         clearHighlights();

//         const indicators = getIndicators();
//         const { element } = getNearestIndicator(e, indicators);

//         const before = element.dataset.before || "-1";

//         if (before !== cardId) {
//         let copy = [...cards];

//         let cardToTransfer = copy.find((c) => c.id === cardId);
//         if (!cardToTransfer) return;
//         cardToTransfer = { ...cardToTransfer, column };

//         copy = copy.filter((c) => c.id !== cardId);

//         const moveToBack = before === "-1";

//         if (moveToBack) {
//             copy.push(cardToTransfer);
//         } else {
//             const insertAtIndex = copy.findIndex((el) => el.id === before);
//             if (insertAtIndex === undefined) return;

//             copy.splice(insertAtIndex, 0, cardToTransfer);
//         }

//         setCards(copy);
//         }
//     };

//     const handleDragOver = (e: DragEvent) => {
//         e.preventDefault();
//         highlightIndicator(e);

//         setActive(true);
//     };

//     const clearHighlights = (els?: HTMLElement[]) => {
//         const indicators = els || getIndicators();

//         indicators.forEach((i) => {
//         i.style.opacity = "0";
//         });
//     };

//     const highlightIndicator = (e: DragEvent) => {
//         const indicators = getIndicators();

//         clearHighlights(indicators);

//         const el = getNearestIndicator(e, indicators);

//         el.element.style.opacity = "1";
//     };

//     const getNearestIndicator = (e: DragEvent, indicators: HTMLElement[]) => {
//         const DISTANCE_OFFSET = 50;

//         const el = indicators.reduce(
//         (closest, child) => {
//             const box = child.getBoundingClientRect();

//             const offset = e.clientY - (box.top + DISTANCE_OFFSET);

//             if (offset < 0 && offset > closest.offset) {
//             return { offset: offset, element: child };
//             } else {
//             return closest;
//             }
//         },
//         {
//             offset: Number.NEGATIVE_INFINITY,
//             element: indicators[indicators.length - 1],
//         }
//         );

//         return el;
//     };

//     const getIndicators = () => {
//         return Array.from(
//         document.querySelectorAll(
//             `[data-column="${column}"]`
//         ) as unknown as HTMLElement[]
//         );
//     };

//     const handleDragLeave = () => {
//         clearHighlights();
//         setActive(false);
//     };

//     const filteredCards = cards.filter((c) => c.column === column);


// return (
//     <div className="w-80 shrink-0">
//     <div className="mb-3 flex items-center justify-between">
//         <div className={`flex items-center gap-2 rounded-full ${headingColor} px-5 py-2 text-white`}>
//         <h3 className="font-semibold">{title}</h3>
//         <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/30">
//             {filteredCards.length}
//         </span>
//         </div>
//         <button className="rounded-full bg-white p-2 text-gray-500 shadow-sm">
//         {/* <Plus /> */}
//         <AddCard column={column} setCards={setCards} />
//         </button>
//     </div>
//     <div
//         onDrop={handleDragEnd}
//         onDragOver={handleDragOver}
//         onDragLeave={handleDragLeave}
//         className="space-y-4"
//     >
//         {filteredCards.map((c) => (
//         <Card key={c.id} {...c} handleDragStart={handleDragStart} />
//         ))}
//         <DropIndicator beforeId={null} column={column} />
        
//     </div>
//     </div>
// );
// };

// type CardProps = CardType & {
//     handleDragStart: Function;
// };
  
// const Card = ({ title, id, column, handleDragStart }: CardProps) => {
//     return (
//         <>
//         <DropIndicator beforeId={id} column={column} />
//         <motion.div
//             layout
//             layoutId={id}
//             draggable="true"
//             onDragStart={(e) => handleDragStart(e, { title, id, column })}
//             className="cursor-grab rounded-xl border border-gray-200 bg-white p-4 shadow-sm active:cursor-grabbing"
//         >
//             <div className="mb-2">
//             {/* <span className={`inline-block rounded-full px-3 py-1 text-xs
//                 ${priority === "High Priority" ? "bg-red-100 text-red-600" :
//                 priority === "Important" ? "bg-blue-100 text-blue-600" :
//                 "bg-gray-100 text-gray-600"}`}>
//                 {priority}
//             </span> */}
//             </div>
//             <p className="font-medium text-gray-900">{title}</p>
//             <p className="mt-2 text-sm text-gray-500">
//             Lorem ipsum dolor sit amet, libre unst consectetur adipisicing elit.
//             </p>
//             <div className="mt-4 flex items-center justify-between">
//             <div className="flex -space-x-2">
//                 <div className="h-8 w-8 rounded-full bg-gray-400"></div>
//                 <div className="h-8 w-8 rounded-full bg-gray-300"></div>
//             </div>
//             <div className="flex items-center gap-4 text-gray-400">
//                 <div className="flex items-center gap-1">
//                 <MessageSquare />
//                 <span className="text-sm">11</span>
//                 </div>
//                 <div className="flex items-center gap-1">
//                 <Eye />
//                 <span className="text-sm">187</span>
//                 </div>
//             </div>
//             </div>
//         </motion.div>
//         </>
//     );
// };

// type DropIndicatorProps = {
//     beforeId: string | null;
//     column: string;
// };
//   const DropIndicator = ({ beforeId, column }: DropIndicatorProps) => {
//     return (
//       <div
//         data-before={beforeId || "-1"}
//         data-column={column}
//         className="my-0.5 h-0.5 w-full bg-violet-400 opacity-0"
//       />
//     );
// };

// const BurnBarrel = ({
//     setCards,
//   }: {
//     setCards: Dispatch<SetStateAction<CardType[]>>;
//   }) => {
//     const [active, setActive] = useState(false);
  
//     const handleDragOver = (e: DragEvent) => {
//       e.preventDefault();
//       setActive(true);
//     };
  
//     const handleDragLeave = () => {
//       setActive(false);
//     };
  
//     const handleDragEnd = (e: DragEvent) => {
//       const cardId = e.dataTransfer.getData("cardId");
  
//       setCards((pv) => pv.filter((c) => c.id !== cardId));
  
//       setActive(false);
//     };
  
//     return (
//       <div
//         onDrop={handleDragEnd}
//         onDragOver={handleDragOver}
//         onDragLeave={handleDragLeave}
//         className={`mt-10 grid h-56 w-56 shrink-0 place-content-center rounded border text-3xl ${
//           active
//             ? "border-red-800 bg-red-800/20 text-red-500"
//             : "border-neutral-500 bg-neutral-500/20 text-neutral-500"
//         }`}
//       >
//         {active ? <FireExtinguisher className="animate-bounce" /> : <Trash />}
//       </div>
//     );
// };


// type AddCardProps = {
//     column: ColumnType;
//     setCards: Dispatch<SetStateAction<CardType[]>>;
// };

// const AddCard = ({ column, setCards }: AddCardProps) => {
//     const [text, setText] = useState("");
//     const [adding, setAdding] = useState(false);
  
//     const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
//       e.preventDefault();
  
//       if (!text.trim().length) return;
  
//       const newCard = {
//         column,
//         title: text.trim(),
//         id: Math.random().toString(),
//       };
  
//       setCards((pv) => [...pv, newCard]);
  
//       setAdding(false);
//     };
  
//     return (
//       <>
//         {adding ? (
//           <motion.form layout onSubmit={handleSubmit}>
//             <textarea
//               onChange={(e) => setText(e.target.value)}
//               autoFocus
//               placeholder="Add new task..."
//               className="w-full rounded border border-violet-400 bg-violet-400/20 p-3 text-sm text-neutral-50 placeholder-violet-300 focus:outline-0"
//             />
//             <div className="mt-1.5 flex items-center justify-end gap-1.5">
//               <button
//                 onClick={() => setAdding(false)}
//                 className="px-3 py-1.5 text-xs text-neutral-400 transition-colors hover:text-neutral-50"
//               >
//                 Close
//               </button>
//               <button
//                 type="submit"
//                 className="flex items-center gap-1.5 rounded bg-neutral-50 px-3 py-1.5 text-xs text-neutral-950 transition-colors hover:bg-neutral-300"
//               >
//                 <span>Add</span>
//                 <Plus />
//               </button>
//             </div>
//           </motion.form>
//         ) : (
//           <motion.button
//             layout
//             onClick={() => setAdding(true)}
//             className="flex w-full items-center gap-1.5 px-3 py-1.5 text-xs text-neutral-400 transition-colors hover:text-neutral-50"
//           >
//             <span>Add card</span>
//             <Plus />
//           </motion.button>
//         )}
//       </>
//     );
// };

// const DEFAULT_CARDS: CardType[] = [
//     // BACKLOG
//     { title: "Look into render bug in dashboard", id: "1", column: "backlog" },
//     { title: "SOX compliance checklist", id: "2", column: "backlog" },
//     { title: "[SPIKE] Migrate to Azure", id: "3", column: "backlog" },
//     { title: "Document Notifications service", id: "4", column: "backlog" },
//     // TODO
//     {
//       title: "Research DB options for new microservice",
//       id: "5",
//       column: "todo",
//     },
//     { title: "Postmortem for outage", id: "6", column: "todo" },
//     { title: "Sync with product on Q3 roadmap", id: "7", column: "todo" },
  
//     // DOING
//     {
//       title: "Refactor context providers to use Zustand",
//       id: "8",
//       column: "doing",
//     },
//     { title: "Add logging to daily CRON", id: "9", column: "doing" },
//     // DONE
//     {
//       title: "Set up DD dashboards for Lambda listener",
//       id: "10",
//       column: "done",
//     },
// ];


// export default KanbanBoard;




"use client"

import React, { useState } from "react"
import { Board } from "./Board"


export type ColumnType = "backlog" | "todo" | "doing" | "done"

export type CardType = {
  id: string
  title: string
  description: string
  column: ColumnType
  priority: "low" | "medium" | "high"
}


const DEFAULT_CARDS: CardType[] = [
  // BACKLOG
  { id: "1", title: "Look into render bug in dashboard", description: "Investigate and fix the rendering issue in the main dashboard", column: "backlog", priority: "medium" },
  { id: "2", title: "SOX compliance checklist", description: "Create a comprehensive checklist for SOX compliance", column: "backlog", priority: "high" },
  { id: "3", title: "[SPIKE] Migrate to Azure", description: "Research and plan migration of our infrastructure to Azure", column: "backlog", priority: "low" },
  { id: "4", title: "Document Notifications service", description: "Write detailed documentation for the Notifications microservice", column: "backlog", priority: "low" },
  // TODO
  { id: "5", title: "Research DB options for new microservice", description: "Evaluate and compare database options for the upcoming microservice", column: "todo", priority: "medium" },
  { id: "6", title: "Postmortem for outage", description: "Conduct and document a postmortem for last week's service outage", column: "todo", priority: "high" },
  { id: "7", title: "Sync with product on Q3 roadmap", description: "Meet with the product team to align on Q3 goals and priorities", column: "todo", priority: "medium" },
  // DOING
  { id: "8", title: "Refactor context providers to use Zustand", description: "Update our state management approach by refactoring to Zustand", column: "doing", priority: "medium" },
  { id: "9", title: "Add logging to daily CRON", description: "Implement comprehensive logging for the daily CRON job", column: "doing", priority: "low" },
  // DONE
  { id: "10", title: "Set up DD dashboards for Lambda listener", description: "Create and configure DataDog dashboards for the new Lambda listener", column: "done", priority: "high" },
]

export const KanbanBoard: React.FC = () => {
  const [cards, setCards] = useState<CardType[]>(DEFAULT_CARDS)

  return (
    <div className="min-h-screen w-full bg-gray-100 text-gray-900 p-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Kanban Board</h1>
      <Board cards={cards} setCards={setCards} />
    </div>
  )
}

export default KanbanBoard


