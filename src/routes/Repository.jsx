import { Link, useLoaderData } from "react-router-dom";

function Repository() {
  // Get the data we need from the loader in react-router
  const repo = useLoaderData();

  // Array of images to be used as background
  const images = [
    {
      name: "gardient-one",
      url: "https://th.bing.com/th/id/R.f56b5af380e729a54946a88a66eced2b?rik=IL5qHTz6OjDGHg&pid=ImgRaw&r=0",
    },
    {
      name: "gardient-two",
      url: "https://th.bing.com/th/id/R.c193bbb6202aa2c7700e696e78c9970d?rik=Q3cVnU8Pl0irvQ&pid=ImgRaw&r=0",
    },
    {
      name: "gardient-three",
      url: "https://th.bing.com/th/id/R.5262df281214149a2b146eb1fe01c13d?rik=r%2bK%2bL%2bzDaZ%2bkzQ&riu=http%3a%2f%2fwallpapercave.com%2fwp%2fRCchnAA.jpg&ehk=ec3uaQw4mB1VrDpKR8yWzDHEph%2fdXpHj5GqYrYWYo64%3d&risl=&pid=ImgRaw&r=0",
    },
    {
      name: "gardient-four",
      url: "https://th.bing.com/th/id/R.2b171e97f78340be1b5280e6718ff356?rik=N%2bgcTIpl7yafUg&riu=http%3a%2f%2fwallpapercave.com%2fwp%2f4gTNThG.png&ehk=uEiVoUm7xZxneAgalddJI9UUKEVXUFitnwHfY0Arg4k%3d&risl=&pid=ImgRaw&r=0",
    },
    {
      name: "gardient-five",
      url: "https://i1.sndcdn.com/artworks-lXO1ErXL6ZPgOOCp-MyUEvw-t500x500.jpg",
    },
  ];

  return (
    <section className="repository">
      <div className="repositoryCard">
        <div className="image">
          <img
            src={images[Math.floor(Math.random() * images.length)].url}
            alt={images[Math.floor(Math.random() * images.length)].name}
          />
        </div>
        <div className="details">
          <h2 className="name">{repo.name}</h2>
          {/* Checks if there is a description */}
          {repo.description && <p className="description">{repo.description}</p>}
          {/* Checks if theres a language specified */}
          {repo.language && <p className="language">Language: {repo.language}</p>}
          <p className="createdAt">Created at: {repo.created_at}</p>
          <p className="updatedAt">Updated at: {repo.updated_at}</p>
          <div className="links">
            {/* Checks if the project is deployed and a live link is present */}
            {repo.homepage && <p className="homepage">
              <img
                width="50"
                height="50"
                src="https://img.icons8.com/ios-filled/dadada/50/link--v1.png"
                alt="link--v1"
              />
              <Link target="_blank" to={repo.homepage}>
                Live preview
              </Link>
            </p>}
            <p className="url">
              <img
                width="64"
                height="64"
                src="https://img.icons8.com/glyph-neue/dadada/64/github.png"
                alt="github"
              />
              <Link target="_blank" to={repo.html_url}>View code</Link>
            </p>
          </div>
        </div>
      </div>
      <Link to="/">Go back to homepage</Link>
    </section>
  );
}

export default Repository;
