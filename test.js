javascript: (() => {

    var blocklist = [
        "Company 1",
        "Company 2",
        "Company 3"
    ];

    const topics = document.querySelectorAll('.jobs-search-results__list-item');
      
    for (let i = 0; i < topics.length; i++) {
        let joptopic = topics[i];
        let companyname = joptopic.querySelector('.job-card-container__primary-description .app-aware-link');
        if (blocklist.includes(companyname.text)) {
            console.log('Hide item from company: ' + companyname.text);
            joptopic.style.display = "none";
        }
        console.log('Company: ' + companyname.text);
    }
  })();
