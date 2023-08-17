export const EMAIL_REGEX_VALID = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
export const FORM_INPUT = "FORM_INPUT";
export const FORM_VALIDATION = "FORM_VALIDATION";
export const FORM_VALID = "FORM_VALID";
export const FORM_INVALID = "FORM_INVALID";
export const FORM_ERROR = "FORM_ERROR";
export const FORM_REMOVE_CONTAIN = "FORM_REMOVE_CONTAIN";

const formReducer = ( state, action ) => {
    switch (action.type) {
        case FORM_INPUT:
            return { ...state, [ action.payload.name ]: ( { ...state[ action.payload.name ], value: action.payload.value } ) };
        
        case FORM_VALIDATION:
            if ( state.name.value.length < 3 ) state = { ...state, ...{ name: { ...state.name, isValid: false, error: "Un nom d'au moins 3 caractères est nécessaire" } } };
            else state = { ...state, ...{ name: { ...state.name, isValid: true, error: "" } } };
            
            if ( !state.email.value.match( EMAIL_REGEX_VALID ) ) state = { ...state, ...{ email: { ...state.email, isValid: false, error: "Email non valide" } } };
            else state = { ...state, ...{ email: { ...state.email, isValid: true, error: "" } } };
            
            if ( state.subject.value.length <= 1 ) state = { ...state, ...{ subject: { ...state.subject, isValid: false, error: "Le sujet de votre mail est nécessaire" } } };  
            else state = { ...state, ...{ subject: { ...state.subject, isValid: true, error: "" } } };
            
            if ( state.message.value.length <= 1 ) state = { ...state, ...{ message: { ...state.message, isValid: false, error: "Le message de votre mail est nécessaire" } } };
            else state = { ...state, ...{ message: { ...state.message, isValid: true, error: "" } } };
              
            if ( state.name.isValid && state.email.isValid && state.message.isValid ) {
                state = {...state, status: true}
            } 
            return state;
        
        case FORM_INVALID:
            return { ...state, contain: "Merci de remplir correctement les champs requis *" };
        
        case FORM_VALID:
            return { ...action.payload, contain: "Message envoyé.", status: true };
        
        case FORM_ERROR:
            return { ...state, contain: "Une erreur s'est produite, veuillez réessayer.", status: false };
        
        case FORM_REMOVE_CONTAIN:
            return { ...state, contain: "", status: false };
        
        default:
            return state;
    }
}

export default formReducer;