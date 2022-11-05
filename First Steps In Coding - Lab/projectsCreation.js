function projectsCreation(input){
    let archName = input[0];
    let project = Number(input[1]);
    let hourProject = project * 3;
    let res = `The architect ${archName} will need ${hourProject} hours to complete ${project} project/s.`
    console.log(res);
}
projectsCreation(["Sanya","9"]);