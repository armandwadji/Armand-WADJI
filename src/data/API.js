import { flattenStrapiObject, queryStringFormat } from "../utils";

class API {
    static async fetchData( endPoint, params = []) {
      try {
            const BASE_URL = (process.env.REACT_APP_NODE_ENV === 'development') ? process.env.REACT_APP_API_URL_DEV :process.env.REACT_APP_API_URL_PROD
            const response = await fetch( `${BASE_URL}/api/${endPoint}`, params );
            const data = await response.json();
            return data;
        } catch (error) {
            console.error( { message : "your request is fail, check the url." });
            return error;
        }
    }
    
    static async getProjects (page=1) {
        const query = {
            fields: ["id", "title", "description", "date", "website", "github" ],
            populate: {
              image: {
                fields: ['name', 'formats',"url"],
                },
                languages: {
                  fields: ['name']
              },
            },
            sort: {
              date:'desc',
              
            },
            pagination: {
              page: page,
              pageSize: 6,
            },
        };
        
        const result = await this.fetchData( `projects?${queryStringFormat( query )}` );
        return {data: flattenStrapiObject(result), meta: result.meta};
    }

    static async getProfil () {
        const query = {
            fields: ["id", "name", "job", "date", "website", "github", "description" ],
            populate: {
              image: {
                fields: ["url"],
                },
              cv: {
                  fields: ['url']
              },
            },
        };
        
        const result = await this.fetchData( `profil?${queryStringFormat( query )}` );
        return flattenStrapiObject(result);
    }

    static async getContact () {
        const query = {
            fields: [ "email", "phone", "date", "github", "twitter", "linkedin" ],
        };
        
        const result = await this.fetchData( `contact?${queryStringFormat( query )}` );
        return flattenStrapiObject(result);
    }

    static async getSkills () {
        const query = {
            fields: ["id", "name"],
            populate: {
              icon: {
                fields: ["url"],
                },
            },
        };
        
        const result = await this.fetchData( `skills?${queryStringFormat( query )}` );
        return flattenStrapiObject(result);
    }

    static async getHobbies () {
        const query = {
            fields: ["id", "name", "who", "createdAt"],
            populate: {
              icon: {
                fields: ["url"],
                },
              items: {
                fields: ["name"],
                },
            },
        };
        
        const result = await this.fetchData( `hobbies?${queryStringFormat( query )}` );
        return flattenStrapiObject(result);
    }

    static async getEducations () {
        const query = {
            fields: ["createdAt"],
            populate: {
              experience: {
                fields: ["name", "start", "end", "establishment"],
                },
              studys: {
                fields: ["name"],
                },
            },
        };
        
        const result = await this.fetchData( `educations?${queryStringFormat( query )}` );
        return flattenStrapiObject(result);
    }

    static async getExperiences () {
        const query = {
            fields: ["createdAt"],
            populate: {
              experience: {
                fields: ["name", "start", "end", "establishment"],
                },
              works: {
                fields: ["name"],
                },
            },
        };
        
        const result = await this.fetchData( `professionals?${queryStringFormat( query )}` );
        return flattenStrapiObject(result);
    }
    

}
export default API;