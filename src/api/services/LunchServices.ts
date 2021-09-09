import Services from ".."

class LunchServices{
     mainService:Services;

     constructor() {
        this.mainService = new Services()
    }

    
     getAllUpcoming = () => {
        return new Promise ( (resolve, reject) =>{

            this.mainService.get("/launch/upcoming/")
            .then(
                data => resolve(data) 
            ).catch(
                err => reject(err)
            )
        })
    }
     getOneLunch = (id:string) => {
        return new Promise ( (resolve, reject) =>{

            this.mainService.get(`/launch/${id}/`)
            .then(
                data => resolve(data) 
            ).catch(
                err => reject(err)
            )
        })
    }
}

export default LunchServices