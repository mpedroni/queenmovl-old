import ListTemplate from './Template';

export default interface List {
  id: string;
  name: string;
  category: string;
  template: Omit<ListTemplate, 'headers'>;
}
