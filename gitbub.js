class GitHub {
  constructor() {
    this.client_id = 'a8b3e219234ec7282658';
    this.client_secret = '34066f9c852e8b2176fce1574c4d40068e8bd980';
    this.repos_count = 5;
    this.repos_sort = 'created:asc';
  }

  async getUser(user) {
    // const profileResponse = await fetch(`https://api.github.com/users/${user}`);

    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}$client_secret=${this.client_secret}`);

    const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}?client_id=${this.client_id}$client_secret=${this.client_secret}`);


    const profile = await profileResponse.json();
    const repos = await repoResponse.json();

    return {
      profile,
      repos
    }
  }
}