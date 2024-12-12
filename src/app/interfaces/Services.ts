export interface ServiceInterface {
  id: number;
  title: string;
  description: string;
  details: ServiceDetail[];
}

export interface ServiceDetail {
  id: number;
  name: string;
}
