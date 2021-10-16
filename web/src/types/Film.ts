export default interface Film {
  name: string,
  suggestedBy: string,
  plataform: 'Netflix' | 'PrimeVideo' | 'Disney+' | 'HBO',
  grade?: number,
}