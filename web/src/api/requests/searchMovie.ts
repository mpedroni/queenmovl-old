import axios, { AxiosError } from 'axios';
import api from '@/api';

import Movie from '@/types/Movie';

interface SearchMovieParams {
  name: string;
}

interface SearchMovieResponse {
  page: number;
  results: Movie[];
  totalPages: number;
  totalResults: []
}

interface SearchMovieError {
  statusCode: number;
  statusMessage: string;
}

const searchMovie = async (
  { name }: SearchMovieParams): Promise<SearchMovieResponse | SearchMovieError> => {
  try {
    const response = await api.get<SearchMovieResponse>('/search/movie', {
      params: {
        language: 'pt-BR',
        query: name,
      },
    });

    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const searchMovieError = error as AxiosError<SearchMovieError>;

      if (searchMovieError.response) return searchMovieError.response.data;
    }

    return { statusCode: 500, statusMessage: 'Ops Deu ruim' };
  }
};

export default searchMovie;
