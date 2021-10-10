export function getListMovies(size, movies) {
    let restrictedMovies = [];

    for (let i = 0, l = size; i < l; i++) {
        restrictedMovies.push(movies[i]);
    }
    return restrictedMovies;
}