const API_KEY = "cb52726a072e3cd02e37c43927f16d6f";


const requests = {
    fetchTreanding : `/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchOriginal : `/movie/popular?api_key=${API_KEY}&language=en-US&page=3`,
    fetchMovie : `/discover/movie?api_key=${API_KEY}&include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc`,
    fetchNew : `/movie/popular?api_key=${API_KEY}&language=en-US&page=2`,
    fetchMostLiked : `/movie/popular?api_key=${API_KEY}&language=en-US&page=4`,
    fetchOther : `/movie/popular?api_key=${API_KEY}&language=en-US&page=5`
}
export default requests;