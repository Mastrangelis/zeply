type TabOption = {
  label: string;
  key: string;
};

type TabsControllerProps = {
  tabs: TabOption[];
  activeTab: string;
  onClick: CallableFunction;
};

export type { TabOption, TabsControllerProps };
