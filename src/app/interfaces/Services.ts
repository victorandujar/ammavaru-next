export interface ServiceInterface {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  details: ServiceDetail[];
}

export interface ServiceDetail {
  id: number;
  highlight: string;
  text: string;
}
