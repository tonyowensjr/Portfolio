// Your JavaScript code goes here
const projects = [
    // ... Your projects array
    {
        title: "Senior Thesis Project",
        completionDate: "May 2024",
        completed: false,
        description: `For my Senior Thesis, I am building a Markov Model to simulate the results of MLB games.
        The model uses data from <a>Retrosheet</a> which includes play-by-play data I can use to determine the start and end state for each at-bat. The 
        model is written in Python and I use R to acquire the Retrosheet data with the BaseballR package. In addition to the model, the project will have an
        interactive front-end which allows the user to visualize the results of each simulation.`
    },
    {
        title: "COS 426 Final Project",
        completionDate: "December 2023",
        description: "Description for Project...",
        completed: false,
        description: `This is the final project for the class COS 426: Computer Graphics. Here I am working with 
        another student to develop a video game in JavaScript. We intend to make a rendition of Angry Birds using the Three.js library.`
    },
    {
        title: "Princeton Baseball Team Shiny App",
        link: "r_shiny_demo.html",
        linkText: "App Demo",
        completed:true,
        hasLink: true,
        completionDate: "September 2023",
        description:`This is an interactive R Shiny app which visualizes game data. The data sources 
        are the Princeton Baseball team's Trackman data, and the game data available via the NCAA website. This app allows the coaches to visualize 
        how hitters perform against different pitchers, where pitchers locate their pitches most often and the strike zones of different umpires in the NCAA.`
    },
    {
        title: "Final Project SPA 304",
        completionDate: "May 2023",
        completed: true,
        hasLink: true,
        link: "spa_304.html",
        linkText: "Paper",
        description: `This is my final project for the class SPA 304: Spanish in the Community.
        For this project, I wrote a 6-page research paper in Spanish about the discrimination that Hispanic and Latino players face in the MLB. This spring, I intend to write a 6,000
        word expansion of this paper for completion of the independent work component of my certificate in Spanish Language and Culture at Princeton University.`
    },
    {
        title: "Junior Year Independent Work Project",
        completed: true,
        completionDate: "May 2023",
        hasLink: true,
        link: "jr_iw.html",
        linkText: "Paper",
        description: `Junior Spring, I had the opportunity to complete a semester-long independent work project on a topic of my choosing.
        For my project, I created several Machine Learning Models based on data which I scraped from Fangraphs.`
    },
    {
        title: "Movie Revenue Prediction Competition",
        completed: true,
        completionDate: "March 2023",
        description: `During Junior Spring, I participated in a competition hosted by the Princeton Data Science Club. The goal of the competition was to predict the revenue of movies based on a provided data set.
        In addition to using the provided data, I used the Python nltk library to perform sentiment analysis on the title and description and the Consumer Price Index and inflation rate for the year the movie was released. The final model was a Scikit-learn 
        random forest regressor model. I placed 2nd in the competition out of around 30 participants.`
    },
    {
        title: "SML 310 Final Project",
        completed: true,
        hasLink: true,
        link: "sml_310.html",
        linkText: "Paper",
        completionDate: "December 2022",
        description: `Junior Fall I took the class SML310, a project-based course about Machine Learning models. For the final project,
        I developed several Machine Learning models to predict the results of NBA games. To acquire the training data, I scraped <a href="https://basketball-reference.com" target="_blank">Basketball Reference</a> for 
        game results and <a href="https://realgm.com" target="_blank">RealGM</a> for player stats. In addition to the models, I wrote a <a href="sml_310.html" target="_blank">paper</a> detailing my process and results.`
    },
    {
        title: "Football Analytics Blitz Competition",
        completed: true,
        hasLink: true,
        link: "https://docs.google.com/presentation/d/1ver-MUXXezytkemYb3ZvXxLHu3obaGPzIjanyaW-np4/edit?usp=sharing",
        linkText: "Presentation",
        completionDate: "February 2022",
        description: `Sophomore year, I participated in the Football Analytics Blitz competition. I worked with a team of 4 other students to analyze a provided data set and
        present our findings to a panel of coaches. For this project, I used SQL to query our data and extract relevant information regarding the Chiefs and their opponents. I also used Python to assist with data 
        cleaning and the visualization of our results.`
    }
];

function generateProjects() {
    const projectList = document.getElementById('projectList');

    projects.forEach(project => {
        // Create list item
        const li = document.createElement('li');
        li.className = 'list-group-item';

        // Create heading
        const h2 = document.createElement('h2');
        h2.textContent = project.title;

        // Append emphasis element for date if it exists
        if (project.completionDate) {
            const em = document.createElement('em');
            em.textContent = project.completed ? '     (' + project.completionDate +')' : ' (Intended Completion Date: ' + project.completionDate + ')';
            h2.appendChild(em);
        }

        if (project.hasLink){
            const a = document.createElement('a');
            a.href = project.link;
            a.textContent = project.linkText;
            a.target="_blank";
            h2.appendChild(a);
        }

        // Create paragraph and set HTML content
        const p = document.createElement('p');
        p.innerHTML = project.description; // Use innerHTML for HTML content

        // Append elements to list item
        li.appendChild(h2);
        li.appendChild(p);

        // Append list item to the list
        projectList.appendChild(li);
    });
}

// Call the function to generate projects
generateProjects();