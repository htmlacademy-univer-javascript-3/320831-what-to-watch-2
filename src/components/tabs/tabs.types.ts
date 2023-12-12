export type ItemType = {
  label: string;
  option: string;
}
export type TabProps = { children: React.ReactElement }

export type TabsProps = {
  items: ItemType[];
  defaultActiveKey?: string;
  children?: React.ReactElement[];
}
