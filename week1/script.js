//alert("test");

document.body.style.backgroundColor = "lavender";


    let firstName = "Lourdes ";
    let lastName = "Gatdula";
    let yearsOfStudy = "4 months";
    let goal = "become an expert in at least one programming language and become a Software Developer in a tech company";

    let myName = "Hello! My name is " + firstName + lastName + ".";

    let myStudies = "Over the past " + yearsOfStudy + ", I've been taking programming and business communication courses at Seattle Central College through a workforce training program called YearUp. " + "I've had experience with HTML/CSS prior to the program and am eager to work with Python and JavaScript over the next few weeks.";

    let myGoal = "My goal after the program is to " + goal + ". " + "Aside from professional goals, some of my short-term goals include traveling internationally, visiting my parents more often in the Philippines, and learning woodwork!";

    document.getElementById("my-name").innerHTML = myName;
    document.getElementById("my-studies").innerHTML = myStudies;
    document.getElementById("my-goal").innerHTML = myGoal;