const Movie = require('./models/Movies'); // ✅ Require the Mongoose Model

const resolvers = {
    Query: {
        // ✅ Fetch all movies from MongoDB
        getAllMovies: async () => {
            try {
                return await Movie.find(); // ✅ Fetch from MongoDB
            } catch (error) {
                console.error("Error fetching movies:", error);
                throw new Error("Failed to fetch movies");
            }
        },

        // ✅ Fetch a single movie by ID
        getMovieById: async (_, { id }) => {
            try {
                return await Movie.findById(id); // ✅ Mongoose findById
            } catch (error) {
                console.error("Error fetching movie:", error);
                throw new Error("Movie not found");
            }
        }
    },

    Mutation: {
        // ✅ Add a new movie to MongoDB
        addMovie: async (_, { name, director_name, production_house, release_date, rating }) => {
            try {
                const movie = new Movie({ name, director_name, production_house, release_date, rating });
                await movie.save(); // ✅ Save to MongoDB
                return movie;
            } catch (error) {
                console.error("Error adding movie:", error);
                throw new Error("Failed to add movie");
            }
        },

        // ✅ Update an existing movie in MongoDB
        updateMovie: async (_, { id, name, director_name, production_house, release_date, rating }) => {
            try {
                const updatedMovie = await Movie.findByIdAndUpdate(
                    id,
                    { 
                        ...(name && { name }),
                        ...(director_name && { director_name }),
                        ...(production_house && { production_house }),
                        ...(release_date && { release_date }),
                        ...(rating !== undefined && { rating })
                    },
                    { new: true } // ✅ Returns updated movie
                );
        
                if (!updatedMovie) {
                    throw new Error("Movie not found");
                }
        
                return updatedMovie;
            } catch (error) {
                console.error("Error updating movie:", error);
                throw new Error("Failed to update movie");
            }
        },

        // ✅ Delete a movie from MongoDB
        deleteMovie: async (_, { id }) => {
            try {
                const deletedMovie = await Movie.findByIdAndDelete(id);
                if (!deletedMovie) return "Movie not found";
                return "Movie deleted successfully";
            } catch (error) {
                console.error("Error deleting movie:", error);
                throw new Error("Failed to delete movie");
            }
        }
    }
};

module.exports = resolvers; 
