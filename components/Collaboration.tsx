import Image from "next/image";

const CARDS = [
  {
    title: "Mention",
    body: "Collaborate with agents like teammates. @mention them in any page, comment, or chat with them directly.",
    image: "/ImageAChatWithinNotionShowingAUserInteractingWithExternalAgentsToKickOffACodingTask.png",
  },
  {
    title: "Assign",
    body: "Hand off work to your agents from any task, or trigger them in parallel.",
    image: "/ImageNotionDatabaseWithAListOfTasksAndOneTaskBeingAssignedToAnExternalCodingAgent.png",
  },
  {
    title: "Orchestrate",
    body: "Watch agents think, call tools, and act across Notion and other apps with your review and approval when it matters.",
    image: "/ImageAChatWithAnExternalAgentInNotionShowingItsThoughtProcessReadingDocumentsAndCallingTools.png",
  },
];

export default function Collaboration() {
  return (
    <section id="resources" className="relative w-full overflow-hidden bg-white">
      <div className="relative mx-auto h-[575px] max-w-[1440px]">
        {CARDS.map((card, i) => (
          <div
            key={card.title}
            className="absolute top-0 flex h-[443px] w-[366px] flex-col overflow-hidden rounded-[10px] border border-[rgba(203,203,239,0.44)] bg-white"
            style={{ left: [129, 523, 917][i] }}
          >
            <div className="flex flex-col gap-1 px-8 pt-7">
              <h3 className="font-sFPro text-lg leading-7 tracking-[-0.0069em] text-black">
                {card.title}
              </h3>
              <p className="max-w-[334px] font-sFPro text-base leading-6 text-[rgba(0,0,0,0.66)]">
                {card.body}
              </p>
            </div>
            <div className="mt-4 pl-8 pb-8">
              <Image
                src={card.image}
                alt={card.title}
                width={382}
                height={250}
                className="h-[243px] w-[365px] rounded-[20px] object-cover"
              />
            </div>
          </div>
        ))}
        <div className="absolute bottom-0 left-0 h-px w-full bg-[#D9D9D9]" />
      </div>
    </section>
  );
}