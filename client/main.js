var jobsContainer = document.querySelector('#jobs-container')
var form = document.querySelector('form')

var baseURL = `http://localhost:4000/api/jobs`

var jobsCallback = ({ data: jobs }) => displayJobs(jobs)
var errCallback = err => console.log(err)

var getAllJobs = () => axios.get(baseURL).then(jobsCallback).catch(errCallback)
var createJobs = body => axios.post(baseURL, body).then(jobsCallback).catch(errCallback)
var deleteJobs = id => axios.delete(`${baseURL}/${id}`).then(jobsCallback).catch(errCallback)
var updateJobs = (id, type) => axios.put(`${baseURL}/${id}`, {type}).then(jobsCallback).catch(errCallback)

function submitHandler(e) {
    e.preventDefault()

    let job = document.querySelector('#job')
    let salary = document.querySelector('#salary')
    let imageURL=document.querySelector('#imageURL')

    let bodyObj = {
        job: job.value,
        salary: salary.value,
        imageURL: imageURL.value,
        
    }

    createJobs(bodyObj)

    job.value = ''
    salary.value = ''
    imageURL.value = ''
    
}

function createJobCard(jobs) {
    const jobCard = document.createElement('div')
    jobCard.classList.add('job-card')

    jobCard.innerHTML = `<img alt='job cover image' src=${jobs.imageURL} class="job-cover-image"/>
    <p class="job">${jobs.job}</p>
    <div class="btns-container">
        <button onclick="updateJobs(${jobs.id}, 'minus')">-</button>
        <p class="job-salary">$${jobs.salary}</p>
        <button onclick="updateJobs(${jobs.id}, 'plus')">+</button>
    </div>
    <button onclick="deleteJobs(${jobs.id})">delete</button>
    `


    jobsContainer.appendChild(jobCard)
}

function displayJobs(arr) {
    jobsContainer.innerHTML = ``
    for (let i = 0; i < arr.length; i++) {
        createJobCard(arr[i])
    }
}

form.addEventListener('submit', submitHandler)

getAllJobs()