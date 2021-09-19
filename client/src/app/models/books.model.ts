export interface ISearchRequestModel {
  term: string;
}

export interface ISearchResponseModel extends ISearchRequestModel {
  booksList: IBookItemModel[];
}

export interface IBookItemModel {
  title: string;
  subtitle: string;
  authors: string;
  description: string;
  image: string;
}

export interface IBooksModel extends ISearchResponseModel {
  isLoading: boolean,
  isError: boolean
}