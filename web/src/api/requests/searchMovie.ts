import api from '@/api';

interface SearchParams {
  name: string
}

const searchMovie = async ({ name }: SearchParams): Promise<unknown> => {
  try {
    const response = await api.get('/search/movie', {
      params: {
        language: 'pt-BR',
        query: name,
      },
    });

    return response.data;
  } catch (error) {
    console.log(error);
    return error;
  }
};

export default searchMovie;
