// Init Github
const github = new GitHub;

// Init UI
const ui = new UI;

// Search input
const searchUser = document.getElementById('searchUser');

// Search input event Listener
searchUser.addEventListener('keyup', (e) => {
  //Get input text
  const userText = e.target.value;

  if(userText !== ''){
    // Make http call
    github.getUser(userText)
    .then(data => {
      if(data.profile.message === 'Not Found') {
        // Show alert
        ui.showAlert('User not found', 'alert')
      } else {
        // Show profile
        ui.showProfile(data.profile); 
        ui.showRepos(data.repos); 
      }
    })
  } else {
    // Clear profile
    ui.clearProfile();

  }
})