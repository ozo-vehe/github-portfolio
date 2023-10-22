import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function RepositoryList() {
  const [repo, setRepo] = useState([]);
  const [paginationData, setPaginationData] = useState([]);
  const [page, setPage] = useState(0);

  const images = [
    {name: "gardient-one", url: "https://th.bing.com/th/id/R.f56b5af380e729a54946a88a66eced2b?rik=IL5qHTz6OjDGHg&pid=ImgRaw&r=0"},
    {name: "gardient-two", url: "https://th.bing.com/th/id/R.c193bbb6202aa2c7700e696e78c9970d?rik=Q3cVnU8Pl0irvQ&pid=ImgRaw&r=0"},
    {name: "gardient-three", url: "https://th.bing.com/th/id/R.5262df281214149a2b146eb1fe01c13d?rik=r%2bK%2bL%2bzDaZ%2bkzQ&riu=http%3a%2f%2fwallpapercave.com%2fwp%2fRCchnAA.jpg&ehk=ec3uaQw4mB1VrDpKR8yWzDHEph%2fdXpHj5GqYrYWYo64%3d&risl=&pid=ImgRaw&r=0"},
    {name: "gardient-four", url: "https://th.bing.com/th/id/R.2b171e97f78340be1b5280e6718ff356?rik=N%2bgcTIpl7yafUg&riu=http%3a%2f%2fwallpapercave.com%2fwp%2f4gTNThG.png&ehk=uEiVoUm7xZxneAgalddJI9UUKEVXUFitnwHfY0Arg4k%3d&risl=&pid=ImgRaw&r=0"},
    {name: "gardient-five", url: "https://i1.sndcdn.com/artworks-lXO1ErXL6ZPgOOCp-MyUEvw-t500x500.jpg"},
  ];

  const pagination = (data = null, pageNumber) => {
    const perPage = 6;
    let pages;
    
    if(data) pages = Math.ceil(data.length / perPage);
    else pages = Math.ceil(repo.length / perPage);
    
    const paginatedData = Array.from({ length: pages }, (_, index) => {
      const start = index * perPage;

      if(data) return data.slice(start, start + perPage);
      else return repo.slice(start, start + perPage);
    });

    setPaginationData(paginatedData[pageNumber]);
  }

  const nextPage = () => {
    setPage((val) => val += 1);
    pagination(null, page + 1);
  }

  const previousPage = () => {
    setPage((val) => val -= 1);
    pagination(null, page - 1);
  }

  useEffect(() => {
    const getAllRepos = async () => {
      const req = localStorage.getItem("repositories");
      const repos = JSON.parse(req);
      setRepo(repos);
      pagination(repos, 0);
    };

    getAllRepos();
  }, []);
  return (
    <section className="repositories">
      <h2>Repositories</h2>
      <div className="repositoriesContainer">
        {paginationData.map((repo) => (
          <Link to={`/repository/${repo.node_id}`} key={repo.node_id} className="repo">
            <div className="repoImage">
                <img
                  src={images[Math.floor(Math.random() * images.length)].url}
                  alt={images[Math.floor(Math.random() * images.length)].name}
                />
            </div>
            <h3 className="repoTitle">{repo.name}</h3>
            <p className="repoDescription">{repo.description}</p>
          </Link>
        ))}
      </div>
      <div className="paginationBtn">
        <button className="btn" onClick={previousPage} disabled={page === 0}>Prev</button>
        <button className="btn" onClick={nextPage} disabled={page === 4}>Next</button>
      </div>
    </section>
  );
}

export default RepositoryList;
