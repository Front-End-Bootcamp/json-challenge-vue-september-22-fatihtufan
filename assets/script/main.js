
import data from '../../data/data.json';


function getByGroupName(groupName,data){
    let isThere = data.find(obj => obj.group === groupName); // Gelen verinin data içerisinde olup/olmamasına bakıldı
    if (isThere){
        let groupData=data.filter(function (data){
            return data.group===groupName;
        });
       
        let assistant=groupData.filter(function(groupData){
            return groupData.type=="assistant";
        });
        
        let students=groupData.filter(function(groupData){
            return groupData.type==null; 
        });

        let names=Array();
        students.forEach(element => {
            names.push(element.name);
        });
        return createObject(groupName,names,assistant[0].name);
    }
    return  "Not found in data";
}

function createObject(groupName,person,assistant){
    let group={
        group:groupName,
        student:person,
        assistant:assistant
    };
    return JSON.stringify(group); //Sonuçlar json formatına çevrildi
}

function getGroups(data){
    let groupNames=Array();
    data.forEach(element=>{
        let check=groupNames.find(i=>i==element.group);
        if(check==undefined){
            groupNames.push(element.group);
        }
    });

    groupNames.forEach(element => {
        console.log(getByGroupName(element,data));
    });
}
console.log(getByGroupName("SteelBlue",data));
console.log("👻👻👻👻👻👻👻👻👻👻👻👻👻👻👻👻👻👻👻👻👻👻👻👻👻👻👻");
getGroups(data);
