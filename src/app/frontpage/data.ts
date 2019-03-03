export interface IBot {
  id: number;
  author: string;
  title: string;
  fbpage: any;
  group: IGroup[];
}
interface IOption {
  name: string;
  type: string; // block, url, phone
  data: string; // block name, url value, phone value
}
interface ICard {
  // id: number;
  // author: string;
  blockId: number;
  type: string;
  data: string;
  option: IOption[];
}
export interface IBlock {
  _id: number;
  // author: string;
  // bot: string;
  // groupName: string;
  name: string;
  cards: ICard[];
  bot: string;
}

export interface IGroup {
  _id: string;
  // author: string;
  bot: string;
  blocks: IBlock[];
  name: string;
  toggle: boolean;
}

// export interface IGroupList {
//   [index:number]: IGroup
// }


