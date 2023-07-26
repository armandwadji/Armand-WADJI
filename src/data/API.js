import { flattenStrapiObject, queryStringFormat } from "../utils";

class API {
  
  /**
   * Fetch global maethod
   * @param {string} endPoint 
   * @param {Array} params 
   * @returns 
   */
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
    
    /**
     * Get projetcs by six sizes and with pagination
     * @param int page 
     * @returns 
     */
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

  /**
   * Get data for Home page
   * @returns 
   */
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

  /**
   * Get data for contact page
   * @returns 
   */
    static async getContact () {
        const query = {
            fields: [ "email", "phone", "date", "github", "twitter", "linkedin" ],
        };
        
        const result = await this.fetchData( `contact?${queryStringFormat( query )}` );
        return flattenStrapiObject(result);
    }

  /**
   * Get all Skills 
   * @returns 
   */
    static async getSkills () {
        const query = {
            fields: ["id", "name", "sort"],
            populate: {
              icon: {
                fields: ["url"],
                },
            },
        };
        
        const result = await this.fetchData( `skills?${queryStringFormat( query )}` );
        return flattenStrapiObject(result);
    }

    /**
   * Get all Hobbies 
   * @returns 
   */
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

    /**
   * Get all Educations 
   * @returns 
   */
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

    /**
   * Get all Experiences 
   * @returns 
   */
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