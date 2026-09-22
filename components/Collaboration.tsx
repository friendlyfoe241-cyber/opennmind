import Image from "next/image";
import mentionImage from "../images/ImageAChatWithinNotionShowingAUserInteractingWithExternalAgentsToKickOffACodingTask.png";
import assignImage from "../images/ImageNotionDatabaseWithAListOfTasksAndOneTaskBeingAssignedToAnExternalCodingAgent.png";
import orchestrateImage from "../images/ImageAChatWithAnExternalAgentInNotionShowingItsThoughtProcessReadingDocumentsAndCallingTools.png";

const CARDS = [
  {
    title: "Mention",
    body: "Collaborate with agents like teammates. @mention them in any page, comment, or chat with them directly.",
    image: mentionImage,
  },
  {
    title: "Assign",
    body: "Hand off work to your agents from any task, or trigger them in parallel.",
    image: assignImage,
  },
  {
    title: "Orchestrate",
    body: "Watch agents think, call tools, and act across Notion and other apps with your review and approval when it matters.",
    image: orchestrateImage,
  },
];

export default function Collaboration() {
  return (
    <section id="resources" className="relative w-full overflow-hidden bg-white">
      {/* grey line divider separating this section from the launch content above */}
      <div className="absolute left-0 top-0 h-px w-full bg-[#D9D9D9]" />
      <div className="relative mx-auto h-[930px] max-w-[1440px]">
        <h2 className="absolute left-0 right-0 top-[170px] text-center">
          <span className="font-sFPro text-[50px] font-normal leading-[1.07] tracking-[-0.03em] text-[#1D1E20]">
            Built for teams. Ready for
          </span>
          <span className="pl-[3px] ml-2 font-shadowsIntoLightTwo text-[50px] leading-[1.1] text-[#1D1E20]">
            enterprise.
          </span>
        </h2>

        {CARDS.map((card, i) => (
          <div
            key={card.title}
            className="absolute top-[350px] flex h-[443px] w-[366px] flex-col overflow-hidden rounded-[10px] border border-[rgba(203,203,239,0.44)] bg-white"
            style={{ left: [143, 537, 931][i] }}
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