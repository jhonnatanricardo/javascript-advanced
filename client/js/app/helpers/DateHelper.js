class DateHelper {

    constructor(){
        throw new Error("DateHelper cannot be instanciated.");
    }

    static textToDate(date){

        if(!/\d{4}-\d{2}-\d{2}/.test(date)){
            throw new Error("Date must be in yyyy-mm-dd format.");
        }else{
            return new Date(...date
                .split("-")
                .map((item, indice) => item - (indice % 2)));
        }
    }

    static dateToText(date){
        return `${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()}`;
    }
}