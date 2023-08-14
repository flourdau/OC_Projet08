const urlGitResume = 'https://raw.githubusercontent.com/flourdau/flourdau/main/Resume.json'
// const urlGitResume = 'https://api.github.com/repos/flourdau/flourdau/contents/Resume.json'
const urlGitReadMe = 'https://raw.githubusercontent.com/flourdau/flourdau/main/README.md'
// const urlGitProfile = 'https://api.github.com/users/flourdau'

async function GitHubContents(url) {
	try { return await fetch(url) }
	catch (error) { console.error(error) }
}

/*
	Get Data */
let Resume = {'Resume': await GitHubContents(urlGitResume)}
Resume.Resume = await Resume.Resume.json()

// let githubProfile = {'GitHubProfile': await GitHubContents(urlGitProfile)}
// githubProfile.GitHubProfile = await githubProfile.GitHubProfile.json()

let githubReadMe = await GitHubContents(urlGitReadMe)
githubReadMe = await githubReadMe.text()

/*
	Parsing README.md */
githubReadMe = await githubReadMe.split('___')
let arrayReadME = { 'arrayReadME': githubReadMe.map(githubReadMeSection => githubReadMeSection.split(':  \n', 2)) }

/*
	Merging Data */
const mergedData = {
	...Resume,
	// ...githubProfile,
	...arrayReadME
}

export default async function GetData() { return mergedData }