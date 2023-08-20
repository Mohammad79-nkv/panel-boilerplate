export interface ICategory {
    name: string;
    description: string;
    validFor: {
      startDateTime: string;
      endDateTime: string;
    };
    lifecycleStatus: string;
    lastUpdate: string;
    isRoot: boolean;
    parentId: string;
    id?: string;
  }
  