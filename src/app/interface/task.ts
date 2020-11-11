export enum StatusTaskType {
  HAS_NOT_YET_START = 'Not Started',
  IN_PROCESS = 'In Process',
  FINISH = 'Done',
  PAUSED = 'Paused'
}

export enum ColorStatusTaskType {
  HAS_NOT_YET_START = '#fa6322',
  IN_PROCESS = '#fabd22',
  FINISH = '#5ac08f',
  PAUSED = '#30323d'
}

export interface StatusTask {
  title: StatusTaskType;
  className: string;
}
  
export interface ItfTask {
  _id: string; 
  title: string; 
  status: StatusTaskType; 
  attachs: string[]; 
  desc: string; 
  management: []; 
  notes: string[];
  idSubTasks: string;
  user_create: {}; 
  create_at: Date; 
  end_at: Date; 
  update_at: Date;
  delete_at: Date;
}
  
export interface ItfSubTask {
  _id: string;
  task_id: string;
  title: string; 
  desc: string;
  users: [];
  status: StatusTaskType;
  attach: any[];
  comments: string[];
  percent: number;
  create_at: Date;
  end_at: Date;
  update_at: Date;
  delete_at: Date;
}
