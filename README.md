# just-watch-movie-list
Movie List Technical Task for Just Watch
by Paul THIEBAULT
paul.thiebault@epitech.eu

I used React for this small project as it is a technology I am familiar with, it also allowed me to return elements using the JSX syntax that came in handy for all the components.

-> Start by running `create-react-app`

-> Fetch all the movies using the `fetch` command to the API using the `API_KEY`

-> Create a movie card template with HTML and CSS to display title and poster

-> Add a clickable bookmark icon and add every bookmarked movie to the bookmark list

-> Add a modal to display the fetched reviews on Title click (I could not make the `get reviews` query work)

-> Polish with CSS


use `npm start` to run at `localhost:3000`


RESSOURCES:

- You will get a list of the currently playing movies at: https://api.themoviedb.org/3/movie/now_playing?api_key=<API_KEY>&language=en-US
- Documentation for this endpoint is at: https://developers.themoviedb.org/3/movies/get-now-playing
- You will get the reviews of your selected movie at: https://api.themoviedb.org/3/movie//reviews?api_key=<API_KEY>&language=en-US
- Documentation for this endpoint is at: https://developers.themoviedb.org/3/movies/get-movie-reviews
