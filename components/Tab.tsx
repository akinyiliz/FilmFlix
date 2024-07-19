import { FC } from "react";

type TabProps = {
  activeTab: string;
  setActiveTab: (tabName: string) => void;
  tabName: string;
};

const Tab: FC<TabProps> = ({ activeTab, setActiveTab, tabName }) => {
  return (
    <button
      role="tab"
      aria-selected={activeTab === tabName}
      type="button"
      className={`font-bold px-6 py-2 cursor-pointer capitalize ${
        activeTab === tabName && "bg-[#7c6ef6] text-[#c8d6d7] rounded-lg"
      }`}
      onClick={() => setActiveTab(tabName)}
    >
      {tabName}
    </button>
  );
};

export default Tab;
