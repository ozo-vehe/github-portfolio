import { Octokit } from 'octokit';
const TOKEN = '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';

// Create a new instance of Octokit
const octokit = new Octokit({
  auth: TOKEN,
});

// A function to get the repos from the GitHub API
export const getRepos = async() => {
  // Making a request to the GitHub API
  const req = await octokit.request('GET /users/{username}/repos', {
    username: 'ozo-vehe',
    headers: {
      'X-GitHub-Api-Version': '2022-11-28'
    }
  })
  // Return the data from the request
  const repos = req.data;
  // Sort according to date created, with the most recent first
  repos.sort((a, b) => {
    // Convert to date objects
    const first = new Date(a.created_at)
    const second = new Date(b.created_at)
    // Return comparison
    return first - second;
  })
  // Reverse the array to get the most recent first
  return repos.reverse();
}

// A function to get a single repo from the GitHub API
export const getRepo = async ({params}) => {
  // Get all the repos
  const repos = await getRepos();
  // Find the repo that matches the id passed in the URL
  const repo = repos.find(repo => repo.node_id === params.id);
  // Return the repo
  return repo;
}

// A function to get the user from the GitHub API
export const getUser = async() => {
  // Making a request to the GitHub API
  const req = await octokit.request('GET /user', {
  headers: {
    'X-GitHub-Api-Version': '2022-11-28'
  }
  })
  // Return the data from the request
  const user = req.data;
  // Return the user
  return user;  
}